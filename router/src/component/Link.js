import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./Beranda";
import TentangSaya from "./tentangSaya";
import kontak from "./kontak";
import karya from "./karya";
import Gallery from "../pages/gallery";

import Cart from "../pages/Cart";
import Pegawai from "../pages/Pegawai";

class Linkn extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" Component={Beranda} />
        <Route exact path="/tentangSaya" Component={TentangSaya} />
        <Route exact path="/kontak" Component={kontak} />
        <Route exact path="/karya" Component={karya} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/cart" Component={Cart} />
        <Route path="/pegawai" Component={Pegawai} />
      </Routes>
    );
  }
}
export default Linkn;
