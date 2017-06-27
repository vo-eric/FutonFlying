@homes.each do |home|
  json.set! home.id do
    json.partial! 'api/homes/home', home: home
  end
end
