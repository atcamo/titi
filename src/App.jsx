import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import image from "./img/image.jpg";




function App() {
  
  return (
    <>
      <NavBar style={{maxWidth: "100vw", height: "auto", margin: "0 auto", display: "block"}}/>
      <img src={image} style={{maxWidth: "100vw", height: "auto", margin: "0 auto", display: "block"}} alt="Encabezado Gluten Free" />
      <ItemListContainer/>
    </>
  );
}

export default App
