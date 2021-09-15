import React, { useState } from "react";

import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Searchbar submitFunction={setSearch} />
      <ImageGallery search={search} />
    </>
  );
};

export default App;
