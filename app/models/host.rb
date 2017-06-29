# == Schema Information
#
# Table name: hosts
#
#  id               :integer          not null, primary key
#  lng              :float            not null
#  lat              :float            not null
#  owner_id         :integer          not null
#  accepting_guests :boolean          not null
#  description      :string
#

class Host < ActiveRecord::Base
  validates :lng, :lat, :fname, :lname, :accepting_guests, presence: true
  validates :accepting_guests, inclusion: { in: [true, false] }

  has_many :reviews
  has_many :bookings

end
