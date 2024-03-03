import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpen,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-100 p-2 bg-gradient-to-r from-gray-600 to-gray-700 bg-opacity-75 backdrop-filter backdrop-blur-md shadow-md transition-transform duration-300 w-full z-50">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Contact Section */}
        <div className="mx-auto">
          <h5 className="text-xl font-semibold mb-2">Contact</h5>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ivy+Nail+Racine,+Wisconsin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                123 Nail St, City
              </a>
            </li>

            <li className="flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="h-4 w-4" />
              <a
                href="mailto:info@nailsalon.com"
                className="ml-2 hover:text-gray-400"
              >
                info@nailsalon.com
              </a>
            </li>

            <li>
              <FontAwesomeIcon
                icon={faPhone}
                className="h-4 w-4 inline-block"
              />
              <a href="tel:+11234567890" className="ml-2 hover:text-gray-400">
                (123)-456-7890
              </a>
            </li>
          </ul>
        </div>

        {/* Hours Section */}
        <div className="mx-auto">
          <h5 className="text-xl font-semibold mb-2">Hours</h5>
          <ul className="text-sm">
            <li>Mon-Fri: 9:00am - 7:30pm</li>
            <li>Sat: 10:00am - 5:30pm</li>
            <li>Sun: 11:00am - 5:00pm</li>
          </ul>
        </div>
        {/* Social Media Section */}
        <div className="mx-auto">
          <h5 className="text-xl font-semibold mb-2">Follow Us</h5>
          <div className="flex justify-center space-x-4">
            <a href="https://instagram.com" aria-label="Instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="h-6 w-6 hover:text-gray-400"
              />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="h-6 w-6 hover:text-gray-400"
              />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FontAwesomeIcon
                icon={faTwitter}
                className="h-6 w-6 hover:text-gray-400"
              />
            </a>
            <a href="https://tiktok.com" aria-label="TikTok">
              <FontAwesomeIcon
                icon={faTiktok}
                className="h-6 w-6 hover:text-gray-400"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-400 mt-4 text-xs">
        © {new Date().getFullYear()} Nail Salon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
