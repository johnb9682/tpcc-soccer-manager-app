export const fetchRaw = ({ url, method = 'GET', payload, headers }) => {
  return fetch(url, {
    method,
    headers: new Headers({
      // TODO
      ...(headers || {}),
    }),
    // TODO
    body: JSON.stringify(payload),
  });
};
