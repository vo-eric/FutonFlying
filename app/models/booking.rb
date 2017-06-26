# == Schema Information
#
# Table name: bookings
#
#  id             :integer          not null, primary key
#  check_in_date  :integer          not null
#  check_out_date :integer          not null
#  host_id        :integer          not null
#  guest_id       :integer          not null
#  num_guests     :integer          default(1), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :check_in_date, :check_out_date, :guest_id, :host_id, presence: true

  belongs_to :guest,
    class_name: :user,
    primary_key: :id,
    foreign_key: :guest_id

  belongs_to :host,
    class_name: :user,
    primary_key: :id,
    foreign_key: :host_id

  def is_after?
    if (check_in_date && check_out_date) && check_in_date < Date.today
      errors.add(:check_in_date, "cannot be before today.")
    end
  end

  def valid_range?
    if (check_in_date > check_out_date)
      errors.add(:check_in_date, "cannot be after check in date")
    end
  end

  # need to add method that checks if the dates are free.

end
