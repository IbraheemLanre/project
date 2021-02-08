import React from "react";

const Reducer = (state = initialState, action) => {
  return <div></div>;
};

// const URI = "http://localhost:8080/todos";

const initialState = {
    // To be moved to Db.json file and replaced with URI
    "todos":[
        {
            "text": "Local Champion",
            "completed": false,
            "id": 6
        },
        {
            "text": "International Champion",
            "completed": true,
            "id": 5
        }

    ]
};

export default Reducer;
