# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  guest_id   :integer          not null
#  num_guests :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  start_date :date
#  end_date   :date
#

class Booking < ActiveRecord::Base
  validates :start_date, :end_date, :guest_id, :host_id, :num_guests, presence: true

  validate :is_after?, :valid_range?, :is_taken?

  belongs_to :guest,
    class_name: :User

  belongs_to :host,
    class_name: :User


private
  def is_after?
    if start_date < Date.today
      self.errors.add(:start_date, "cannot be before today.")
    end
  end

  def valid_range?
    if start_date > end_date
      self.errors.add(:start_date, "cannot be after check in date")
    end
  end

  def is_taken?
    if Booking.where('? < end_date and ? > start_date', self.start_date, self.end_date).any?
      errors.add(:end_date, 'Your callypigeoned stature must have prevented you from seeing these dates.')
    end
  end

end
