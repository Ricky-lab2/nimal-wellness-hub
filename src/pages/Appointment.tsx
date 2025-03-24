
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight, Check, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    petName: "",
    petType: "",
    petBreed: "",
    petAge: "",
    ownerName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
    urgent: false,
  });

  const services = [
    { id: "checkup", name: "Veterinary Checkup", icon: "🩺" },
    { id: "vaccination", name: "Vaccination & Deworming", icon: "💉" },
    { id: "grooming", name: "Pet Grooming", icon: "✂️" },
    { id: "surgery", name: "Surgery & Treatment", icon: "🏥" },
    { id: "emergency", name: "Emergency Care", icon: "🚑" },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.petName || !formData.ownerName || !formData.email || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Submit form logic would go here
    console.log("Form Data:", formData);
    
    // Show success message
    toast({
      title: "Appointment Scheduled",
      description: "We've received your appointment request. You'll receive a confirmation shortly.",
    });
    
    // Reset form and go back to step 1
    setFormData({
      service: "",
      petName: "",
      petType: "",
      petBreed: "",
      petAge: "",
      ownerName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      notes: "",
      urgent: false,
    });
    setStep(1);
  };

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
        <section className="py-16 bg-nimal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
                Book Your Pet's Appointment
              </h1>
              <p className="text-xl text-gray-600">
                Schedule a visit with our experienced veterinarians or groomers.
              </p>
            </div>
          </div>
        </section>

        {/* Appointment Process */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center">
                  <div className="flex-1 text-center">
                    <div
                      className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
                        step >= 1 ? "bg-nimal-600 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      1
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">Select Service</p>
                  </div>
                  <div className="w-full max-w-[80px] h-1 bg-gray-200">
                    <div
                      className={`h-full bg-nimal-600 transition-all duration-300 ${
                        step >= 2 ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div
                      className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
                        step >= 2 ? "bg-nimal-600 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      2
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">Pet Details</p>
                  </div>
                  <div className="w-full max-w-[80px] h-1 bg-gray-200">
                    <div
                      className={`h-full bg-nimal-600 transition-all duration-300 ${
                        step >= 3 ? "w-full" : "w-0"
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div
                      className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
                        step >= 3 ? "bg-nimal-600 text-white" : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      3
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">Date & Time</p>
                  </div>
                </div>
              </div>

              {/* Step 1: Service Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
                >
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Select a Service
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-nimal-300 transition-all duration-300"
                        onClick={() => handleServiceSelect(service.id)}
                      >
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <ChevronRight className="ml-auto h-5 w-5 text-nimal-500" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Pet and Owner Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
                >
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Pet & Owner Information
                  </h2>
                  <form>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="petName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Pet Name *
                          </label>
                          <input
                            type="text"
                            id="petName"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="petType"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Pet Type *
                          </label>
                          <select
                            id="petType"
                            name="petType"
                            value={formData.petType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                            required
                          >
                            <option value="">Select pet type</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                            <option value="rabbit">Rabbit</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="petBreed"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Breed
                          </label>
                          <input
                            type="text"
                            id="petBreed"
                            name="petBreed"
                            value={formData.petBreed}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="petAge"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Pet Age
                          </label>
                          <input
                            type="text"
                            id="petAge"
                            name="petAge"
                            value={formData.petAge}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                          />
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6 mt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Owner Information
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="ownerName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                          required
                        />
                      </div>

                      {formData.service === "checkup" && (
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="urgent"
                            name="urgent"
                            checked={formData.urgent}
                            onChange={handleChange}
                            className="h-4 w-4 text-nimal-600 focus:ring-nimal-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="urgent"
                            className="ml-2 block text-sm text-gray-700"
                          >
                            This is an urgent matter that requires immediate attention
                          </label>
                        </div>
                      )}

                      <div className="flex justify-between pt-4">
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="border-nimal-600 text-nimal-700"
                        >
                          Back
                        </Button>
                        <Button 
                          onClick={() => {
                            if (!formData.petName || !formData.petType || !formData.ownerName || !formData.email || !formData.phone) {
                              toast({
                                title: "Missing Information",
                                description: "Please fill in all required fields",
                                variant: "destructive",
                              });
                              return;
                            }
                            setStep(3);
                          }}
                          className="bg-nimal-600 hover:bg-nimal-700"
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 3: Date and Time Selection */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
                >
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    Select Date & Time
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Time *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {timeSlots.map((time) => (
                            <div
                              key={time}
                              onClick={() => setFormData({ ...formData, time })}
                              className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer transition-colors duration-200 ${
                                formData.time === time
                                  ? "bg-nimal-600 text-white border-nimal-600"
                                  : "border-gray-300 hover:border-nimal-300"
                              }`}
                            >
                              <Clock className="h-4 w-4 mr-2" />
                              {time}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="notes"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Additional Notes
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          value={formData.notes}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nimal-500"
                          placeholder="Please share any specific concerns or requests..."
                        ></textarea>
                      </div>

                      <div className="bg-nimal-50 rounded-lg p-4 mt-4">
                        <h3 className="font-medium text-gray-900 mb-2">Appointment Summary</h3>
                        <div className="text-sm text-gray-700">
                          <p>
                            <span className="font-medium">Service:</span>{" "}
                            {services.find((s) => s.id === formData.service)?.name}
                          </p>
                          <p>
                            <span className="font-medium">Pet:</span> {formData.petName}{" "}
                            {formData.petType && `(${formData.petType})`}
                          </p>
                          {formData.date && formData.time && (
                            <p>
                              <span className="font-medium">When:</span>{" "}
                              {formData.date}, {formData.time}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button
                          variant="outline"
                          onClick={() => setStep(2)}
                          className="border-nimal-600 text-nimal-700"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          className="bg-nimal-600 hover:bg-nimal-700"
                        >
                          Complete Booking
                        </Button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-nimal-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to know about booking appointments
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How far in advance should I book an appointment?",
                    answer:
                      "For routine checkups and grooming, we recommend booking 1-2 weeks in advance. For vaccinations, please book at least a week ahead. Emergency services are available without prior booking.",
                  },
                  {
                    question: "What happens if I need to cancel or reschedule?",
                    answer:
                      "You can cancel or reschedule your appointment up to 24 hours before your scheduled time without any penalty. For changes within 24 hours, please call us directly.",
                  },
                  {
                    question: "How long will my appointment take?",
                    answer:
                      "Routine checkups typically take 30 minutes. Vaccinations take about 15-20 minutes. Grooming sessions can range from 1-3 hours depending on your pet's size, coat condition, and services requested.",
                  },
                  {
                    question: "Do I need to prepare my pet before bringing them in?",
                    answer:
                      "For checkups and vaccinations, no special preparation is needed. For grooming appointments, we recommend giving your pet some exercise before their visit and not feeding them 1-2 hours before the appointment.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Appointment;
