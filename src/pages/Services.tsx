
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/services/ServiceCard";
import { motion } from "framer-motion";
import { Stethoscope, Syringe, Scissors, HeartPulse, ShoppingBag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Veterinary Checkup",
      description: "Comprehensive health assessments for your pets by our expert veterinarians. We provide thorough examinations to ensure your pet is in optimal health.",
      icon: <Stethoscope className="h-6 w-6 text-nimal-600" />,
      link: "/services/checkup",
      detailedDescription: "Our veterinary checkups include a complete physical examination, assessment of vital signs, and evaluation of overall health status. Our experienced veterinarians will check your pet's eyes, ears, teeth, skin, coat, heart, lungs, and more.",
      pricing: "$50 - $100",
      features: [
        "Complete physical examination",
        "Vital signs assessment",
        "Weight monitoring",
        "Nutrition consultation",
        "Behavioral assessment",
        "Preventive care recommendations"
      ]
    },
    {
      title: "Vaccination & Deworming",
      description: "Essential preventive care to keep your pets healthy and protected against diseases. We follow the latest vaccination protocols.",
      icon: <Syringe className="h-6 w-6 text-nimal-600" />,
      link: "/services/vaccination",
      detailedDescription: "Our vaccination services protect your pet against common and serious infectious diseases. We create customized vaccination schedules based on your pet's age, lifestyle, and risk factors.",
      pricing: "$30 - $150 (depending on vaccine packages)",
      features: [
        "Core vaccines for dogs and cats",
        "Non-core vaccines based on risk assessment",
        "Comprehensive deworming protocols",
        "Parasite prevention consultation",
        "Vaccination certificates",
        "Digital vaccination records"
      ]
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming services to keep your pets clean, comfortable, and looking their best. Our skilled groomers handle all breeds with care.",
      icon: <Scissors className="h-6 w-6 text-nimal-600" />,
      link: "/services/grooming",
      detailedDescription: "Our professional grooming services include bathing, haircuts, nail trimming, ear cleaning, and more. Our experienced groomers are trained to handle all breeds and temperaments.",
      pricing: "$40 - $120 (depending on size and breed)",
      features: [
        "Bath and blow dry",
        "Breed-specific haircuts",
        "Nail trimming and filing",
        "Ear cleaning",
        "Teeth brushing",
        "Specialized skin treatments",
        "De-shedding treatments"
      ]
    },
    {
      title: "Surgery & Treatment",
      description: "Advanced surgical procedures and specialized treatments performed by skilled veterinary surgeons. From routine to complex surgeries.",
      icon: <HeartPulse className="h-6 w-6 text-nimal-600" />,
      link: "/services/surgery",
      detailedDescription: "Our surgical facilities are equipped with modern technology to perform a range of procedures from routine spay/neuter to more complex orthopedic and soft tissue surgeries.",
      pricing: "$200 - $2000+ (depending on procedure complexity)",
      features: [
        "Pre-surgical assessments",
        "Modern anesthesia monitoring",
        "Pain management protocols",
        "Spay and neuter",
        "Dental surgeries",
        "Orthopedic procedures",
        "Soft tissue surgeries",
        "Post-operative care"
      ]
    },
    {
      title: "Pet Shop",
      description: "Premium food, toys, accessories, and essentials for all types of pets. We carefully select high-quality products for your pet's needs.",
      icon: <ShoppingBag className="h-6 w-6 text-nimal-600" />,
      link: "/shop",
      detailedDescription: "Our pet shop offers premium pet food, toys, accessories, and care products. We carefully select items that meet our quality standards and consult with veterinarians on nutritional products.",
      pricing: "Varies by product",
      features: [
        "Premium pet food brands",
        "Nutritional supplements",
        "Toys and enrichment items",
        "Beds and comfort items",
        "Leashes, collars, and harnesses",
        "Grooming supplies",
        "Travel accessories"
      ]
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency veterinary services for urgent situations when your pet needs immediate care. Our team is always ready to help.",
      icon: <Clock className="h-6 w-6 text-nimal-600" />,
      link: "/services/emergency",
      detailedDescription: "Our emergency care services are available 24/7 to address urgent health situations. Our emergency team is equipped to handle critical cases and provide immediate medical intervention.",
      pricing: "$150 - $500+ (emergency consultation and basic treatment)",
      features: [
        "24/7 availability",
        "Critical care expertise",
        "Advanced diagnostics",
        "Emergency surgery capabilities",
        "Hospitalization services",
        "Oxygen therapy",
        "IV fluid administration",
        "Pain management"
      ]
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-nimal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Pet Care Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive veterinary care, grooming, and retail services designed to keep your pet healthy and happy.
              </p>
              <Button
                size="lg"
                className="bg-nimal-600 hover:bg-nimal-700"
                asChild
              >
                <Link to="/appointment">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 rounded-full bg-nimal-100 flex items-center justify-center">
                          {service.icon}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-gray-600 text-lg">{service.description}</p>
                      <p className="text-gray-600">{service.detailedDescription}</p>

                      <div className="border-t border-b border-gray-200 py-4 my-6">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Price Range:</span>
                          <span className="text-nimal-700 font-medium">{service.pricing}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-semibold text-lg text-gray-900">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-nimal-600 mt-0.5 flex-shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <Button className="bg-nimal-600 hover:bg-nimal-700" asChild>
                          <Link to={service.link}>Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                      <img
                        src={`https://source.unsplash.com/random/800x600/?pet,${service.title.toLowerCase()}`}
                        alt={service.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-nimal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Find answers to common questions about our services.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How often should I bring my pet for a checkup?",
                    answer:
                      "We recommend annual wellness exams for healthy adult pets, semi-annual exams for senior pets (7+ years for most dogs, 10+ years for cats), and more frequent visits for puppies and kittens as part of their initial vaccination series.",
                  },
                  {
                    question: "What vaccinations does my pet need?",
                    answer:
                      "Core vaccines for dogs typically include rabies, distemper, parvovirus, and adenovirus. For cats, core vaccines include rabies, panleukopenia, calicivirus, and herpesvirus. Additional vaccines may be recommended based on your pet's lifestyle and risk factors.",
                  },
                  {
                    question: "How should I prepare my pet for grooming?",
                    answer:
                      "Before a grooming appointment, ensure your pet is well-exercised and has had a bathroom break. Brush your pet to remove loose hair and tangles. Inform the groomer about any health issues, sensitive areas, or specific preferences for your pet's grooming.",
                  },
                  {
                    question: "What should I do in case of a pet emergency?",
                    answer:
                      "Call our emergency line immediately for guidance. If possible, call ahead so we can prepare for your arrival. Remain calm and, if safe to do so, apply basic first aid such as pressure to bleeding wounds or wrapping your pet in a blanket for shock while transporting them to our clinic.",
                  },
                  {
                    question: "How do I know if my pet needs dental care?",
                    answer:
                      "Signs that your pet may need dental attention include bad breath, yellow or brown tartar on teeth, red or swollen gums, trouble eating, drooling, or pawing at the mouth. We recommend annual dental check-ups as part of your pet's regular wellness exam.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer:
                      "We accept cash, all major credit cards, debit cards, and pet insurance (direct billing for select providers). We also offer CareCredit as a financing option for larger procedures. Payment is required at the time of service.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-nimal-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Ready to Schedule a Service?
              </h2>
              <p className="text-xl text-nimal-100 mb-8">
                Book your appointment online or contact us for more information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="default"
                  className="bg-white hover:bg-nimal-50 text-nimal-700"
                  asChild
                >
                  <Link to="/appointment">Book Now</Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;
