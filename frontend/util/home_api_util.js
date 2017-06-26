export const fetchHomes = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/homes',
    data
  });
};

export const fetchSingleHome = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/homes/${id}`,
  });
};

export const createHome = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'api/homes',
    data
  });
};

export const deleteHome = (bookingId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/homes/${bookingId}`
  });
}
