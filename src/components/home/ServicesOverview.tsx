
import React from "react";
import { Stethoscope, Syringe, Scissors, HeartPulse, ShoppingBag, Clock } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      title: "Veterinary Checkup",
      description: "Comprehensive health assessments for your pets by our expert veterinarians.",
      icon: <Stethoscope className="h-6 w-6 text-nimal-600" />,
      link: "/services/checkup",
      imageUrl: "https://images.unsplash.com/photo-1628009368231-4e342ed5656b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vaccination & Deworming",
      description: "Essential preventive care to keep your pets healthy and protected against diseases.",
      icon: <Syringe className="h-6 w-6 text-nimal-600" />,
      link: "/services/vaccination",
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pets clean, comfortable, and looking their best.",
      icon: <Scissors className="h-6 w-6 text-nimal-600" />,
      link: "/services/grooming",
      imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Surgery & Treatment",
      description: "Advanced surgical procedures and specialized treatments performed by skilled veterinary surgeons.",
      icon: <HeartPulse className="h-6 w-6 text-nimal-600" />,
      link: "/services/surgery",
      imageUrl: "https://images.unsplash.com/photo-1584715642381-6f1c4b452b1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pet Shop",
      description: "Premium food, toys, accessories, and essentials for all types of pets.",
      icon: <ShoppingBag className="h-6 w-6 text-nimal-600" />,
      link: "/shop",
      imageUrl: "https://images.unsplash.com/photo-1583337740274-9787355f6568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency veterinary services for urgent situations when your pet needs immediate care.",
      icon: <Clock className="h-6 w-6 text-nimal-600" />,
      link: "/services/emergency",
      imageUrl: "https://images.unsplash.com/photo-1612534550004-cd27ed9e9a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-nimal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Comprehensive Pet Care Services
          </h2>
          <p className="text-lg text-gray-600">
            From routine checkups to emergency care, grooming, and premium products, we offer everything your pet needs in one convenient location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="default"
            className="bg-nimal-600 hover:bg-nimal-700"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
