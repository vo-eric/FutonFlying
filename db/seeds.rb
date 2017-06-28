# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Host.destroy_all

user1 = User.create!({username: "thebigbo92", password: "boAndArro", fname: "Wen Bo", lname: "Xie"})

host1 = Host.create!({
  fname: "Jakob",
  lname: "Beck",
  city: "Manhattan",
  location: "New York",
  lat: 40.743109,
  lng: -73.999093,
  accepting_guests: true
});
