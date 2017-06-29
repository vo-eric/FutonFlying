# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Host.destroy_all

user1 = User.create!(
  username: "cthanhvo",
  password: "password",
  fname: "Can",
  lname: "Vo"
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
