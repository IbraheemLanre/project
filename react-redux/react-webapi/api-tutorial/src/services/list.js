export const getList = () => {
  return fetch("http://localhost:3001/list").then((result) => result.json());
};

export const postItem = (item) => {
  return fetch("http://localhost:3001/list", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      item,
    }),
  }).then((result) => result.json());
};
