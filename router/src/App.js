import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Linkn from "./component/Link";
import { Nav, Navbar,Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Navbar>
            <Container>

          <hr />
          <Nav>

         <Nav>
         <Link to="/">Beranda</Link>|
          
          </Nav> 
          <Nav><Link to="/tentangSaya">tentang saya</Link>|</Nav>
          <Link to="/karya">karya</Link> |<Link to="/kontak">kontak</Link> |
          <Link to="/gallery">Gallery</Link>|
          <Link to="/cart">cart</Link>
          </Nav>
            </Container>
          </Navbar>
        </div>
        <Linkn />
      </>
    );
  }
}

export default App;
