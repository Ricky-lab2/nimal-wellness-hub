
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  imageUrl?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  className,
  imageUrl,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300",
        imageUrl ? "h-full" : "",
        className
      )}
    >
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
      )}

      <div
        className={cn(
          "relative z-10 p-6 flex flex-col h-full",
          imageUrl ? "text-white mt-auto" : ""
        )}
      >
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-full mb-4",
            imageUrl ? "bg-white/20 backdrop-blur-sm" : "bg-nimal-100"
          )}
        >
          {icon}
        </div>

        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p
          className={cn(
            "text-sm mb-4 flex-grow",
            imageUrl ? "text-gray-200" : "text-gray-600"
          )}
        >
          {description}
        </p>

        <Link
          to={link}
          className={cn(
            "inline-flex items-center text-sm font-medium mt-auto",
            imageUrl ? "text-white" : "text-nimal-600"
          )}
        >
          <span className="mr-2">Learn more</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
