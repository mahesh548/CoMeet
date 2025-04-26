async function fetchApi(url, data) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const req = await fetch(url, options);
  const response = await req.json();
  return response;
}

window.fetchApi = fetchApi;
