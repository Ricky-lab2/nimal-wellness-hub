import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import AnimatedLink from "../ui/AnimatedLink";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pet Shop", href: "/shop" },
    { name: "Appointments", href: "/appointment" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-nimal-700 transition-all duration-300 hover:text-nimal-500"
          >
            <Heart className="h-8 w-8" strokeWidth={1.5} />
            <span className="text-xl font-display font-bold tracking-tight hidden sm:inline-block">
              Animal Clinic
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <AnimatedLink
                key={item.name}
                to={item.href}
                isActive={location.pathname === item.href}
              >
                {item.name}
              </AnimatedLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="default"
              size="sm"
              className="bg-nimal-600 hover:bg-nimal-700 hidden sm:flex"
              asChild
            >
              <Link to="/appointment">Book Now</Link>
            </Button>

            <button
              className="md:hidden rounded-full p-2 text-nimal-700 hover:bg-nimal-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md font-medium ${
                  location.pathname === item.href
                    ? "text-nimal-700 bg-nimal-50"
                    : "text-gray-700 hover:bg-nimal-50 hover:text-nimal-700"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-nimal-600 hover:bg-nimal-700 mt-2">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
