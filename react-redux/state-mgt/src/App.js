import React from "react";
import Navigation from "./components/Navigation";
import SaladMaker from "./components/SaladMaker";
import UserContext from "./components/User/User";

const user = {
  name: "GreatShopper",
  favorites: ["avocado", "carrot"],
};

const App = () => {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
};

export default App;
