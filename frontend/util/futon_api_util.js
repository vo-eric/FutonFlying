export const fetchFutons = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/futons'
  });
};

export const fetchSingleFuton = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/futons/${id}`,
  });
};

export const createFuton = (futon) => {
  return $.ajax({
    method: 'POST',
    url: `api/futons/${id}`,
    data: { futon }
  });
};

export const updateFuton = (futon) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/futons/${futon.id}`,
    data: { futon }
  });
};

export const deleteFuton = (futonId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/futons/${futonId}`
  });
}
