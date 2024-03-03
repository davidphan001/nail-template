'use client'

import { useEffect, useState } from "react";

export interface IService {
    id: number;
    name: string;
    description: string;
  }
  
const services: IService[] = [
  {
    id: 1,
    name: 'Manicure',
    description: 'Experience our luxurious manicure service for beautiful and healthy nails.',
  },
  {
    id: 2,
    name: 'Pedicure',
    description: 'Relax and enjoy our pedicure treatments for soft, smooth, and vibrant feet.',
  },
  {
    id: 3,
    name: 'Manicure & Pedicure Combo',
    description: 'The perfect combination of manicure and pedicure for the ultimate pampering experience.',
  },
  {
    id: 4,
    name: 'Waxing Services',
    description: 'Choose from our full range of waxing services for silky smooth skin.',
  },
  {
    id: 5,
    name: 'Custom Nail Art',
    description: 'Let our artists create a unique nail design that expresses your personal style.',
  },
  {
    id: 6,
    name: 'Gel Nails',
    description: 'Durable, long-lasting gel nails that maintain a perfect look.',
  },
];

const Services = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <section
        className="relative py-12 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/02/83/44/54/360_F_283445468_T7oP2yH0yA4ImhUFyuAFAF3mYLzpXcUr.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-medium text-gray-700">{service.name}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;