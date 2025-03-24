
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock, Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nimal-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-nimal-400" />
              <h3 className="text-xl font-display font-bold">Animal Clinic</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Providing comprehensive veterinary care, premium pet products, and professional grooming services to keep your beloved companions healthy and happy.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-nimal-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-nimal-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-nimal-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Pet Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/appointment"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/checkup"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Veterinary Checkup
                </Link>
              </li>
              <li>
                <Link
                  to="/services/vaccination"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Vaccination & Deworming
                </Link>
              </li>
              <li>
                <Link
                  to="/services/grooming"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Pet Grooming
                </Link>
              </li>
              <li>
                <Link
                  to="/services/surgery"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Surgery
                </Link>
              </li>
              <li>
                <Link
                  to="/services/emergency"
                  className="text-gray-300 hover:text-nimal-400 transition-colors text-sm"
                >
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-display font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-nimal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Pet Care Street, Baguio City, Philippines
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-nimal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+63 912 345 6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-nimal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@animalclinic.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-nimal-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Mon-Fri: 8AM - 6PM</p>
                  <p className="text-gray-300">Sat: 9AM - 4PM</p>
                  <p className="text-gray-300">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Animal Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-nimal-400 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-nimal-400 transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
