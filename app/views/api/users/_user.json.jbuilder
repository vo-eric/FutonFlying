json.extract! user, :id, :bio, :latitude, :longitude, :accepting_guests, :fname, :lname, :city, :country

json.avatar_url asset_path(user.avatar.url)
