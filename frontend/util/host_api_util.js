export const fetchHosts = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data
  });
};

export const fetchSingleHost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });
};
