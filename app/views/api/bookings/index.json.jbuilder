json.set! :hostings do
  if @bookings[:hostings]
    @bookings[:hostings].each do |booking|
      json.set! booking.id do
        json.partial! 'api/bookings/booking', :locals => {booking: booking, foo: @current_user.id == booking.guest_id}
     end
    end
  else
    nil
  end
end

json.set! :guestings do
  if @bookings[:guestings]
    @bookings[:guestings].each do |booking|
      json.set! booking.id do
        json.partial! 'api/bookings/booking', :locals => {booking: booking, foo: @current_user.id == booking.guest_id}
      end
    end
  else
    nil
  end 
end