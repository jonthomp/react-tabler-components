import React from "react";
import { Container, Header, Nav } from "../";
const SiteNav = props => (
  <div className="header-nav d-none d-lg-flex">
    <Container>
      <div className="row align-items-center">
        <div className="col">
          <Nav>
            <Nav.Item
              link={true}
              icon="home"
              to="./index.html"
              value="Home"
              active={true}
            />

            <Nav.Item>
              <Nav.Link
                href="javascript:void(0)"
                className="nav-link"
                icon="box"
                value="Interface"
              />

              <Nav.Submenu>
                <Nav.Item as="a" href="./cards.html">
                  Cards design
                </Nav.Item>
                <Nav.Item as="a" href="./charts.html">
                  Charts
                </Nav.Item>
                <Nav.Item as="a" href="./pricing-cards.html">
                  Pricing cards
                </Nav.Item>
              </Nav.Submenu>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="javascript:void(0)"
                className="nav-link"
                icon="calendar"
                value="Components"
              />
              <Nav.Submenu>
                <Nav.Item as="a" href="./maps.html">
                  Maps
                </Nav.Item>
                <Nav.Item as="a" href="./icons.html">
                  Icons
                </Nav.Item>
                <Nav.Item as="a" href="./store.html">
                  Store
                </Nav.Item>
                <Nav.Item as="a" href="./blog.html">
                  Blog
                </Nav.Item>
              </Nav.Submenu>
            </Nav.Item>
            <Nav.Item>
              <a href="javascript:void(0)" className="nav-link">
                <i className="fe fe-file" /> Pages
              </a>
              <Nav.Submenu>
                <Nav.Item as="a" href="./profile.html">
                  Profile
                </Nav.Item>
                <Nav.Item as="a" href="./login.html">
                  Login
                </Nav.Item>
                <Nav.Item as="a" href="./register.html">
                  Register
                </Nav.Item>
                <Nav.Item as="a" href="./forgot-password.html">
                  Forgot password
                </Nav.Item>
                <Nav.Item as="a" href="./400.html">
                  400 error
                </Nav.Item>
                <Nav.Item as="a" href="./401.html">
                  401 error
                </Nav.Item>
                <Nav.Item as="a" href="./403.html">
                  403 error
                </Nav.Item>
                <Nav.Item as="a" href="./404.html">
                  404 error
                </Nav.Item>
                <Nav.Item as="a" href="./500.html">
                  500 error
                </Nav.Item>
                <Nav.Item as="a" href="./503.html">
                  503 error
                </Nav.Item>
                <Nav.Item as="a" href="./email.html">
                  Email
                </Nav.Item>
                <Nav.Item as="a" href="./empty.html">
                  Empty page
                </Nav.Item>
              </Nav.Submenu>
            </Nav.Item>
            <Nav.Item
              link={true}
              to="./form-elements.html"
              icon="check-square"
              value="Forms"
            />
            <Nav.Item
              link={true}
              to="./gallery.html"
              icon="image"
              value="Gallery"
            />
            <Nav.Item
              link={true}
              to="./docs/index.html"
              icon="file-text"
              value="Documentation"
            />
          </Nav>
        </div>
        <div className="col-3 ml-auto">
          <form className="input-icon">
            <input
              type="search"
              className="form-control header-search"
              placeholder="Search&hellip;"
              tabindex="1"
            />
            <div className="input-icon-addon">
              <i className="fe fe-search" />
            </div>
          </form>
        </div>
      </div>
    </Container>
  </div>
);
export default SiteNav;
