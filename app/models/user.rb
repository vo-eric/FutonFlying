# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  fname               :string
#  lname               :string
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  bio                 :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  latitude            :float            not null
#  longitude           :float            not null
#  city                :string
#  country             :string
#  accepting_guests    :boolean          default(TRUE)
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :longitude, :latitude, :fname, :lname, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, default_url: "https://s3.us-east-2.amazonaws.com/futon-flying-pro/generic-avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  before_validation :ensure_session_token_uniqueness
  after_initialize :ensure_session_token


  reverse_geocoded_by :latitude, :longitude do |obj,results|
    if geo = results.first
      obj.city    = geo.city
      obj.country = geo.country
    end
  end
  after_validation :reverse_geocode


  has_many :reviews
  has_many :bookings

  attr_reader :password

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    @user && @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:latitude])
        .where("lat > ?", bounds[:southWest][:latitude])
        .where("lng > ?", bounds[:southWest][:longitude])
        .where("lng < ?", bounds[:northEast][:longitude])
  end
  
  def user_bookings
    Booking.where("guest_id = ? AND end_date >= ?", self.id, Date.today)
  end

  def user_hostings
    Booking.where("host_id = ? AND end_date >= ?", self.id, Date.today)
  end

  def find_bookings
    hostings = user_bookings()
    guestings = user_hostings()

    return {
      hostings: hostings,
      guestings: guestings
    }
  end


  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64(16)
    end
  end


  # def address=
  #   self.latitude.to_s + " " + self.longitude.to_s
  # end
end
