# == Schema Information
#
# Table name: homes
#
#  id               :integer          not null, primary key
#  lng              :float            not null
#  lat              :float            not null
#  owner_id         :integer          not null
#  accepting_guests :boolean          not null
#  description      :string
#

class Home < ActiveRecord::Base
  validates :lng, :lat, :owner, :accepting_guests, presence: true
  validates :accepting_guests, inclusion: { in: [true, false] }
  validates :owner, uniqueness: true

  has_many :reviews
  has_many :bookings

  belongs_to :owner,
    class_name: :User,
    primary_key: :id,
    foreign_key: :owner_id
end
