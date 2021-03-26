const getList = () => {
  return fetch("http://localhost:3001/list").then((res) => res.json());
};

export { getList };
