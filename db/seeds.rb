# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Host.destroy_all
Booking.destroy_all

user1 = User.create!(
  username: "cthanhvo",
  password: "password",
  fname: "Can",
  lname: "Vo",
  avatar_file_name: "ctvo.jpg"
);

host1 = Host.create!(
  lat: 40.418639,
  lng: -3.704602,
  fname: "Paulina",
  lname: "Rutkowska",
  city: "Madrid",
  country: "Spain",
  accepting_guests: true
);

host2 = Host.create!(
  lat: 52.092167,
  lng: 1.317893,
  fname: "Robbie",
  lname: "Miles",
  city: "Woodbridge",
  country: "United Kingdom",
  accepting_guests: true
);

host3 = Host.create!(
  lat: 48.178217,
  lng: 16.326814,
  fname: 'Hannah',
  lname: 'Beck',
  city: 'Vienna',
  country: 'Austria',
  accepting_guests: true
)

host4 = Host.create!(
  lat: 55.679553,
  lng: 12.585516,
  fname: 'Wen Bo',
  lname: 'Xie',
  city: 'Copenhagen',
  country: 'Denmark',
  accepting_guests: true
)

booking1 = Booking.create!(
  check_in_date: Date.new(2017, 7, 4),
  check_out_date: Date.new(2017, 7, 7),
  host_id: 19,
  guest_id: 25,
  num_guests: 2
)
