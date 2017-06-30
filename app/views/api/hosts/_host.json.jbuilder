json.extract! host, :id, :description, :lat, :lng, :accepting_guests, :fname, :lname, :city, :country

json.avatar_url asset_path(host.avatar.url)
