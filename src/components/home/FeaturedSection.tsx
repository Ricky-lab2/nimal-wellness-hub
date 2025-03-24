
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Calendar } from "lucide-react";

const FeaturedSection = () => {
  const features = [
    "Online appointment booking",
    "Automated appointment reminders",
    "Detailed service information",
    "Transparent pricing",
    "Flexible scheduling options",
    "Easy rescheduling process"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-nimal-600 transform -skew-y-6 origin-top-right translate-y-36 opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-nimal-200 opacity-30 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute top-1/3 left-0 w-48 h-48 rounded-full bg-nimal-100 opacity-40 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1589411454940-67a017535ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Pet health services"
                className="w-full h-auto object-cover"
              />

              {/* Calendar overlay */}
              <div className="absolute top-6 right-6 glass-card rounded-xl p-4 backdrop-blur-lg bg-white/80 text-sm shadow-lg">
                <div className="flex items-center gap-2 text-nimal-700 font-medium mb-2">
                  <Calendar className="h-4 w-4 text-nimal-600" />
                  <span>Next Available</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-md flex items-center justify-center text-xs ${
                        i === 2
                          ? "bg-nimal-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-nimal-100 cursor-pointer"
                      }`}
                    >
                      {i + 10}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-nimal-100 text-nimal-800 text-sm font-medium">
              Convenient Scheduling
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
              Never Miss a Pet Appointment Again
            </h2>
            <p className="text-lg text-gray-600">
              Our automated reminder system ensures you're always informed about upcoming appointments. We know life gets busy, so we'll help you keep track of your pet's healthcare schedule.
            </p>

            <ul className="space-y-3 py-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-nimal-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-nimal-700" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-nimal-600 hover:bg-nimal-700"
                asChild
              >
                <Link to="/appointment">Book Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-nimal-600 text-nimal-700 hover:bg-nimal-50"
                asChild
              >
                <Link to="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
