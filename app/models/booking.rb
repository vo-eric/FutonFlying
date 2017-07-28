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
#  startDate  :date
#  endDate    :date
#

class Booking < ActiveRecord::Base
  validates :startDate, :endDate, :guest_id, :host_id, :num_guests, presence: true

  validate :is_after?, :valid_range?

  belongs_to :guest,
    class_name: :User,
    primary_key: :id,
    foreign_key: :guest_id,
    optional: true

  belongs_to :host,
    class_name: :User,
    primary_key: :id,
    foreign_key: :host_id,
    optional: true

  def is_after?
    if (startDate && endDate) && startDate < Date.today
      errors.add(:startDate, "cannot be before today.")
    end
  end

  def valid_range?
    if (startDate > endDate)
      errors.add(:startDate, "cannot be after check in date")
    end
  end

  # need to add method that checks if the dates are free.

end
