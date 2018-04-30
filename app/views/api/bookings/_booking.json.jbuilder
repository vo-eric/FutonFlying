json.extract! booking, :start_date, :end_date, :num_guests

if foo
  json.hosting foo
  json.fname booking.host.fname
  json.lname booking.host.lname
  json.avatar booking.host.avatar.url
  json.id booking.id
else
  json.hosting foo
  json.fname booking.guest.fname
  json.lname booking.guest.lname
  json.avatar booking.guest.avatar.url
  json.id booking.id
end