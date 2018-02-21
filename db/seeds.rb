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
  lname: "Vo"
);

host1 = Host.create!(
  lat: 40.418639,
  lng: -3.704602,
  fname: "Paulina",
  lname: "Rutkowska",
  city: "Madrid",
  country: "Spain",
  accepting_guests: true,
  description: "En este 2017 con mi compañera y amor decidimos salir de las sierras de Córdoba Argentina, para recorrer el continente Europeo y Norte Africano. Ambos somos trabajadores del arte y la cultura, este viaje es una especie de peregrinación en que cada pasa es un enriquecimiento sobre cultura, paisaje e historia. Estamos produciendo obra y compartiendo. Personalmente me dedico mas al audiovisual y Lucía a la caracterización de personajes para obras de opera y para dibujo."
);

host2 = Host.create!(
  lat: 52.092167,
  lng: 1.317893,
  fname: "Robbie",
  lname: "Miles",
  city: "Woodbridge",
  country: "United Kingdom",
  accepting_guests: true,
  description: "Ñaaaaaaaaaaaa!!!! Heeeello everyone!!! My name is Robbie and im 25. I'm from Spain but I currently live in streatham hill, London. I'm working as a registered nurse in a hospital making smile, helping and providing loveeee to people haha!!! I'm actually studing a degree in law at the same time for change the change in the world and try to help people in a bigger way! I'm a very happy, funny, positive, optimistic and social guy that always keeps his smile very high!!! :) I definitelly can not spend any second of my life doing nothing or not sharing a good moment with someone. I'm a very friendlyyy dude, lets just met and hang out so you can see whaaaat I am taaaalking abooouuuut! Love is always the answer!"
);

host3 = Host.create!(
  lat: 48.178217,
  lng: 16.326814,
  fname: 'Hannah',
  lname: 'Beck',
  city: 'Vienna',
  country: 'Austria',
  accepting_guests: true,
  description: "I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important.I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important."
)

host4 = Host.create!(
  lat: 55.679553,
  lng: 12.585516,
  fname: 'Wen Bo',
  lname: 'Xie',
  city: 'Copenhagen',
  country: 'Denmark',
  accepting_guests: false,
  description: "I'm Wen Bo"
)

host5 = Host.create!(
  lat: 43.124499,
  lng: -78.799183,
  fname: 'Kevin',
  lname: 'Garvey',
  city: 'Mapleton',
  country: 'New York',
  accepting_guests: true,
  description: "I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important.I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important."
)

host6 = Host.create!(
  lat: 34.113417,
  lng: -117.600756,
  fname: 'Mila',
  lname: 'Navas',
  city: 'Rancho Cucamonga',
  country: 'United States',
  accepting_guests: true,
  description: "I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important.I'm and Austro-American who grew up in Austria. I spent my High School years in Tirana Albania where I also graduated, and met the love of my life. We both live in Rome, Italy together and I'm now starting to study Performing Arts in October. I love traveling, so when I heard about CouchSurfing I wanted to do my part to make traveling on low budget easier for everyone. We hope to meet lots of friendly new faces and be able to call as many as possible our friends. We'd be glad to hang out around town, go to museums, listen to live music, or just crack open a beer. Flexibility is important."
)

host7 = Host.create!(
  lat: 43.703215,
  lng: -79.403278,
  fname: 'James',
  lname: 'Somers',
  city: 'Toronto',
  country: 'Canada',
  accepting_guests: true,
  description: "We live on a farm in the Napa Valley. We have sheep, chickens, rabbits, turkeys, Australian Cattle Dogs, cats and one goofy Labradoodle. We have a large vegetable garden, fruit and nut trees and a Cabernet Sauvignon vineyard. We sell produce from the farm directly and give away any oversupply to the local food bank. We welcome day visitors to the farm and love sharing this beautiful area with cityfolk. Kirsten (thats's me)is a massage thearpist which allows her time to do lots of other things in life like farming and volunteering on the board of the Napa Valley Marathon. Ron has recently relocated to Napa from Reno. He has a business background and is now trying to figure out what he wants to be in his new life.
Our dogs are our children although we enjoy visits from our nieces and any other children who would like to experience the farm."
)
