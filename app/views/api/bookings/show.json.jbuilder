json.partial! 'api/bookings/booking', :locals => {booking: @booking, foo: @current_user.id == @booking.guest_id}
