import { Facebook, Instagram, Youtube, Twitter } from "react-bootstrap-icons";
import "../App.css";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white overflow-hidden">
      <div className="footer">
        <div className="row">
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Youtube />
          </a>
          <a href="#">
            <Twitter />
          </a>
        </div>

        <div className="row decoration-none">
          <ul className="linksList">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="row">
          Voice AI Copyright © 2023 Voice AI - All rights reserved || Ryan Huot
          || Kyle Van Wyk || Noah Arion
        </div>
      </div>
    </footer>
  );
}
export default Footer;
