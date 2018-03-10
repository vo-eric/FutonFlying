# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

men = File.read('db/men.json')
ladies = File.read('db/ladies.json')
unified = File.read('db/unified.json')
men_hash = JSON.parse(men)["results"]
ladies_hash = JSON.parse(ladies)["results"]
unified_hash = JSON.parse(unified)["results"]

user1 = User.create!(
  username: "cthanhvo",
  password: "password",
  fname: "Can",
  lname: "Vo",
  lat: 10.11427,
  lng: 106.22552,
  bio: "This is for my homeboy Wadah"
)

def get_location(entry)
  street = entry['location']['street'].split(" ").join("+")
  city = entry['location']['city'].split(" ").join("+")
  state = entry['location']['state'].split(" ").join("+")
  address = [ActiveSupport::Inflector.transliterate(city), ActiveSupport::Inflector.transliterate(state)].join(",")
  url = "https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=#{ENV["google_key"]}"
  data = JSON.parse(open(url).read)
  return [] if data['status'] == 'ZERO_RESULTS'
  location = {
    lat: data['results'][0]['geometry']['location']['lat'],
    lng: data['results'][0]['geometry']['location']['lng'],
    country:  data['results'][0]['address_components'][-2]['long_name'],
    city:  data['results'][0]['address_components'][2]['long_name']
}

end

unified_hash[0..80].each do |user|
  location = get_location(user)
  next if location.empty?
  puts location['lat']
  puts location['lng']
User.create!(
  lat: location[:lat],
  lng: location[:lng],
  fname: user['name']['first'].capitalize,
  lname: user['name']['last'].capitalize,
  city: location[:city],
  country: location[:country],
  accepting_guests: Faker::Boolean.boolean,
  avatar: user['picture']["large"],
  bio:  Faker::Lorem.paragraph,
  username: Faker::Internet.user_name,
  password_digest: Faker::Internet.password(8)
)

end

user8 = User.create!(
  lat: 40.418639,
  lng: -3.704602,
  password: Faker::Internet.password(8),
  username: Faker::Internet.user_name,
  fname: "Paulina",
  lname: "Rutkowska",
  city: "Madrid",
  country: "Spain",
  accepting_guests: true,
  avatar: ladies_hash[0]['picture']["large"],
  bio: "En este 2017 con mi compañera y amor decidimos salir de las sierras de Córdoba Argentina, para recorrer el continente Europeo y Norte Africano. Ambos somos trabajadores del arte y la cultura, este viaje es una especie de peregrinación en que cada pasa es un enriquecimiento sobre cultura, paisaje e historia. Estamos produciendo obra y compartiendo. Personalmente me dedico mas al audiovisual y Lucía a la caracterización de personajes para obras de opera y para dibujo."
)

user2 = User.create!(
  lat: 5.092167,
  lng: 1.317893,
  password: Faker::Internet.password(8),
  username: Faker::Internet.user_name,
  fname: "Robbie",
  lname: "Miles",
  city: "Woodbridge",
  country: "United Kingdom",
  accepting_guests: true,
  avatar: 'https://s3.us-east-2.amazonaws.com/futon-flying-pro/robbie.jpg',
  bio: "Ñaaaaaaaaaaaa!!!! Heeeello everyone!!! My name is Robbie and im 25. I'm from Spain but I currently live in streatham hill, London. I'm working as a registered nurse in a hospital making smile, helping and providing loveeee to people haha!!! I'm actually studing a degree in law at the same time for change the change in the world and try to help people in a bigger way! I'm a very happy, funny, positive, optimistic and social guy that always keeps his smile very high!!! :) I definitelly can not spend any second of my life doing nothing or not sharing a good moment with someone. I'm a very friendlyyy dude, lets just met and hang out so you can see whaaaat I am taaaalking abooouuuut! Love is always the answer!"
)

user3 = User.create!(
  lat: 48.178217,
  lng: 16.326814,
  password: Faker::Internet.password(8),
  username: Faker::Internet.user_name,
  fname: 'Hannah',
  lname: 'Beck',
  city: 'Vienna',
  country: 'Austria',
  accepting_guests: true,
    avatar: ladies_hash[1]['picture']["large"],
  bio: "I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important.I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important."
)

user4 = User.create!(
  lat: 55.679553,
  lng: 12.585516,
  password: Faker::Internet.password(8),
  username: Faker::Internet.user_name,
  fname: 'Wen Bo',
  lname: 'Xie',
  city: 'Copenhagen',
  country: 'Denmark',
  accepting_guests: false,
  avatar: 'https://s3.us-east-2.amazonaws.com/futon-flying-pro/wenbo.jpg',
  bio: "I'm Wen Bo"
)

user5 = User.create!(
  lat: 43.124499,
  lng: -78.799183,
  password: Faker::Internet.password(8),
  username: Faker::Internet.user_name,
  fname: 'Kevin',
  lname: 'Garvey',
  city: 'Mapleton',
  country: 'New York',
  accepting_guests: true,
  avatar: men_hash[0]['picture']["large"],

  bio: "I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important.I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important."
)

user6 = User.create!(
  lat: 43.703215,
  lng: -79.403278,
  password: Faker::Internet.password(8),
  username: Faker::Internet.user_name,
  fname: 'James',
  lname: 'Somers',
  city: 'Toronto',
  country: 'Canada',
  accepting_guests: true,
  avatar: men_hash[1]['picture']["large"],

  bio: "We live on a farm in the Napa Valley. We have sheep, chickens, rabbits, turkeys, Australian Cattle Dogs, cats and one goofy Labradoodle. We have a large vegetable garden, fruit and nut trees and a Cabernet Sauvignon vineyard. We sell produce from the farm directly and give away any oversupply to the local food bank. We welcome day visitors to the farm and love sharing this beautiful area with cityfolk. Kirsten (thats's me)is a massage thearpist which allows her time to do lots of other things in life like farming and volunteering on the board of the Napa Valley Marathon. Ron has recently relocated to Napa from Reno. He has a business background and is now trying to figure out what he wants to be in his new life.
Our dogs are our children although we enjoy visits from our nieces and any other children who would like to experience the farm."
)
