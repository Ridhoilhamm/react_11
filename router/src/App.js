import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Linkn from "./component/Link";

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <hr />
          <Link to="/">Beranda</Link>|
          <Link to="/tentangSaya">tentang saya</Link>|
          <Link to="/karya">karya</Link> |<Link to="/kontak">kontak</Link> |
          <Link to="/gallery">Gallery</Link>
        </div>
        <Linkn />
      </>
    );
  }
}

export default App;
