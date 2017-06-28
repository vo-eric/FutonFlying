export const fetchHosts = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/hosts',
    data
  });
};

export const fetchSingleHost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/hosts/${id}`,
  });
};
