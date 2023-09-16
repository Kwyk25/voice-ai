import { Facebook, Instagram, Youtube, Twitter } from "react-bootstrap-icons";
import "../App.css";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="footer">
        <div className="py-5 mx-auto">
          <h3><ul className="flex list-none">
            <li className="px-5">
              <a href="#">
                <Instagram />
              </a>
            </li>
            <li className="px-5">
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li className="px-5">
              <a href="#">
                <Youtube />
              </a>
            </li>
            <li className="px-5">
              <a href="#">
                <Twitter />
              </a>
            </li>
          </ul>
          </h3>
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

        <div className="mx-auto">
          <p>
            Voice AI Copyright © 2023 Voice AI - All rights reserved || Ryan
            Huot || Kyle Van Wyk || Noah Arion
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
