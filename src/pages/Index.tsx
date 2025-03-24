
import React, { useEffect } from "react";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedSection from "@/components/home/FeaturedSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <FeaturedSection />
        
        {/* Testimonials Section */}
        <section className="py-20 bg-nimal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
                What Pet Parents Say
              </h2>
              <p className="text-lg text-gray-600">
                Hear from our satisfied clients about their experiences with our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-nimal-100 flex-shrink-0 mr-4 overflow-hidden">
                      <img
                        src={`https://randomuser.me/api/portraits/${item === 1 ? 'women' : 'men'}/${item + 10}.jpg`}
                        alt="Client"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {item === 1 ? "Maria Santos" : item === 2 ? "John Rivera" : "Alex Mendoza"}
                      </h4>
                      <p className="text-sm text-gray-500">Pet Parent</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    {item === 1
                      ? "The staff is incredibly knowledgeable and caring. My dog looks forward to his grooming appointments!"
                      : item === 2
                      ? "I appreciate how thorough the veterinarians are during checkups. They take their time and answer all my questions."
                      : "The online appointment system is so convenient, and I love getting reminders before my pet's vaccination is due."}
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-nimal-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Ready to Care for Your Pet?
              </h2>
              <p className="text-xl text-nimal-100 mb-8">
                Schedule an appointment today and give your pet the care they deserve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/appointment"
                    className="inline-block px-8 py-4 rounded-lg bg-white text-nimal-700 font-medium hover:bg-nimal-50 transition-colors duration-300"
                  >
                    Book Appointment
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 rounded-lg border border-white bg-transparent text-white font-medium hover:bg-white/10 transition-colors duration-300"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
