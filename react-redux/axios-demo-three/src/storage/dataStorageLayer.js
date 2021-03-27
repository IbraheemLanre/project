const getList = () => {
  return fetch("http://localhost:3001/list")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const postItem = (item) => {
  return fetch("http://localhost:3001/list", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item }),
  })
    .then((res) => res.json)
    .catch((err) => console.log(err));
};
export { getList, postItem };
