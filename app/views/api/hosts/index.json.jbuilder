@hosts.each do |host|
  json.set! host.id do
    json.partial! 'api/hosts/host', host: host
  end
end
