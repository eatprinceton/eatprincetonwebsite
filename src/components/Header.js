import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../style.css";
import { Link } from "react-router-dom";

import logo from "../images/princeton.jpg";
import Colors from '../colors';

class Header extends Component {
  state = {
    toggle: false,
    top: true,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state.toggle);
  };
  headerColor = () => {
    return { backgroundColor: 'white'};
  };
  //   logoColor = () => {
  //     if (!this.state.top || this.state.toggle) {
  //       return white;
  //     } else {
  //       return orange;
  //     }
  //   };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const top = window.scrollY < 100 ? true : false;
      this.setState({ top: top });
    });
  }
  render() {
    return (
      <div className="header" style={this.headerColor()}>
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
          <Link
            to="/"
            className="my-container logo"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              alt="Jayson"
              src={logo}
			  className="d-inline-block align-top logo"
			  style = {styles.logo}
            />
          </Link>
          <Navbar.Toggle
            onClick={this.Toggle}
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Link
                to="/"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              <Link
                to="/"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Restaurants
              </Link>
              <Link
                to="/"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Retail
              </Link>
              <Link
                to="/"
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const styles = {
	nameLink: {
		fontSize: '23px',
		fontWeight: '500',
		lineHeight: '22px',
		color: Colors.lightest,
		textDecoration: 'none',
		textShadow: '1px 1px 20px #272635'
	},
	logo: {
		height: '50px'
	}
};

export default Header;