
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Scissors } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 sm:pb-24 md:pt-32 md:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-nimal-200" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-nimal-300" />
        <div className="absolute -bottom-24 right-1/3 w-80 h-80 rounded-full bg-nimal-100" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-nimal-100 text-nimal-800 text-sm font-medium">
                Your Trusted Pet Care Partner
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Complete Pet Care</span>
                <span className="block text-nimal-600">All in One Place</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Veterinary clinic, pet shop, and grooming services dedicated to providing exceptional care for your beloved companions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-nimal-600 hover:bg-nimal-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-nimal-600 text-nimal-700 hover:bg-nimal-50 hover:text-nimal-800 shadow-sm"
                asChild
              >
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-nimal-600" />
                <span className="text-sm text-gray-600">
                  Easy Scheduling
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-nimal-600" />
                <span className="text-sm text-gray-600">
                  Expert Veterinarians
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Scissors className="h-5 w-5 text-nimal-600" />
                <span className="text-sm text-gray-600">
                  Professional Grooming
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
                alt="Veterinarian with dog"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nimal-900/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold">Compassionate Care</h3>
                <p className="text-nimal-100">We treat every pet like family</p>
              </div>
            </div>

            {/* Floating card 1 */}
            <div className="absolute top-6 -left-10 z-20 hidden md:block">
              <div className="glass-card rounded-xl p-4 shadow-lg backdrop-blur-md animate-float">
                <div className="flex space-x-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-nimal-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-nimal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">Next Appointment</h4>
                    <p className="text-xs text-gray-600">Vaccination Due</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -bottom-4 -right-4 z-20 hidden md:block">
              <div className="glass-card rounded-xl p-4 shadow-lg backdrop-blur-md animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex space-x-3 items-center">
                  <div className="h-10 w-10 rounded-full bg-nimal-100 flex items-center justify-center">
                    <Scissors className="h-5 w-5 text-nimal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-gray-900">Pet Grooming</h4>
                    <p className="text-xs text-gray-600">Professional Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
