export const fetchBookings = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookings'
  });
};

export const fetchSingleBooking = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`,
  });
};

export const createBooking = (booking) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookings/${id}`,
    data: { booking }
  });
};

export const deleteBooking = (bookingId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${bookingId}`
  });
}
