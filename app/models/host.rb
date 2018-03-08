# == Schema Information
#
# Table name: hosts
#
#  id                  :integer          not null, primary key
#  lng                 :float            not null
#  lat                 :float            not null
#  description         :string
#  fname               :string           not null
#  lname               :string           not null
#  city                :string
#  country             :string
#  accepting_guests    :boolean          default(TRUE)
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class Host < ActiveRecord::Base
  validates :lng, :lat, :fname, :lname, presence: true

  has_attached_file :avatar, default_url: "generic-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :reviews
  has_many :bookings

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

end
