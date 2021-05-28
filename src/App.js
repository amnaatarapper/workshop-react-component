import "./App.css";
import ProfilPhoto from "./component/profiles/ProfilPhoto";
import FullName from "./component/profiles/FullName";
import Address from "./component/profiles/Address";
import React from "react";

function App() {
  return (
    <>
      <ProfilPhoto />
      <FullName />
      <Address />
    </>
  );
}

export default App;
