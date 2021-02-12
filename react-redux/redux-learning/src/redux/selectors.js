export const getTodoList = (store) => {
  store && store.todos ? store.todos.allIds : [];
};

export const getTodoById = (store, id) => {
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byId[id], id }
    : {};
};

export const getTodos = (store) => {
  getTodoList(store).map((id) => getTodoById(store, id));
};
