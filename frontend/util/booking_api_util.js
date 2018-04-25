export const fetchBookings = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users/' + id + '/bookings'
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
    url: `api/bookings`,
    data: { booking }
  });
};

export const deleteBooking = (bookingId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookings/${bookingId}`
  });
};
