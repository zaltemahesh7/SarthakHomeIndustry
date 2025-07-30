"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      // ...existing code...
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation - fade in from top
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Service cards animation - staggered fade in from bottom
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact section animation - fade up with delay
      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Gallery items animation - fade in with stagger
      gsap.fromTo(
        ".gallery-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gallery-item",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-700 text-center">
          Under Maintenance
        </h2>
      </div>
    </>
    // <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
    //   {/* Header */}
    //   <header className="bg-white shadow-sm border-b-2 border-orange-200">
    //     <div className="container mx-auto px-4 py-4">
    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center space-x-3">
    //           <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
    //             <span className="text-white font-bold text-xl">S</span>
    //           </div>
    //           <div>
    //             <h1 className="text-2xl font-bold text-orange-800">
    //               Sarthak Home Industry
    //             </h1>
    //             <p className="text-sm text-orange-600">& Flour Mill</p>
    //           </div>
    //         </div>
    //         <div className="hidden md:flex items-center space-x-4">
    //           <div className="flex items-center space-x-2 text-orange-700">
    //             <Phone className="w-4 h-4" />
    //             <span className="font-medium">9423180757</span>
    //           </div>
    //           <a
    //             href="https://wa.me/917020175481?text=Hello%20There!"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <Button className="bg-green-600 hover:bg-green-700 text-white">
    //               <MessageCircle className="w-4 h-4 mr-2" />
    //               WhatsApp
    //             </Button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Hero Section */}
    //   <section ref={heroRef} className="py-16 px-4">
    //     <div className="container mx-auto text-center">
    //       <h2 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6">
    //         Traditional Food Processing
    //         <span className="block text-orange-600">with Modern Care</span>
    //       </h2>
    //       <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
    //         We are a traditional and trustworthy food processing and grinding
    //         service provider offering various household and specialty food items
    //         with focus on hygiene, purity, and timely delivery.
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //         <Button
    //           size="lg"
    //           className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
    //         >
    //           <Phone className="w-5 h-5 mr-2" />
    //           Call Now: 9423180757
    //         </Button>
    //         <a
    //           href="https://wa.me/917020175481?text=Hello%20There!"
    //           target="_blank"
    //         >
    //           <Button className="bg-green-600 hover:bg-green-700">
    //             <MessageCircle className="w-4 h-4 mr-2" />
    //             WhatsApp Order
    //           </Button>
    //         </a>
    //       </div>
    //     </div>
    //   </section>

    //   {/* About Us */}
    //   <section className="py-16 bg-white">
    //     <div className="container mx-auto px-4">
    //       <div className="text-center mb-12">
    //         <h3 className="text-3xl font-bold text-orange-800 mb-4">
    //           About Us
    //         </h3>
    //         <p className="text-lg text-gray-700 max-w-4xl mx-auto">
    //           Supporting homemakers and families with daily food preparation
    //           through our commitment to hygiene, purity, timely delivery, and
    //           customized customer-friendly services.
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-4 gap-8">
    //         <div className="text-center">
    //           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //             <Shield className="w-8 h-8 text-orange-600" />
    //           </div>
    //           <h4 className="font-semibold text-orange-800 mb-2">
    //             Hygiene & Purity
    //           </h4>
    //           <p className="text-gray-600 text-sm">
    //             Maintaining highest standards of cleanliness
    //           </p>
    //         </div>
    //         <div className="text-center">
    //           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //             <Clock className="w-8 h-8 text-orange-600" />
    //           </div>
    //           <h4 className="font-semibold text-orange-800 mb-2">
    //             Timely Delivery
    //           </h4>
    //           <p className="text-gray-600 text-sm">
    //             On-time service you can rely on
    //           </p>
    //         </div>
    //         <div className="text-center">
    //           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //             <Users className="w-8 h-8 text-orange-600" />
    //           </div>
    //           <h4 className="font-semibold text-orange-800 mb-2">
    //             Customer Friendly
    //           </h4>
    //           <p className="text-gray-600 text-sm">
    //             Customized services for your needs
    //           </p>
    //         </div>
    //         <div className="text-center">
    //           <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //             <CheckCircle className="w-8 h-8 text-orange-600" />
    //           </div>
    //           <h4 className="font-semibold text-orange-800 mb-2">
    //             Traditional Quality
    //           </h4>
    //           <p className="text-gray-600 text-sm">
    //             Preserving authentic taste and methods
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Services */}
    //   <section ref={servicesRef} className="py-16 px-4">
    //     <div className="container mx-auto">
    //       <div className="text-center mb-12">
    //         <h3 className="text-3xl font-bold text-orange-800 mb-4">
    //           Our Services
    //         </h3>
    //         <p className="text-lg text-gray-700">
    //           Complete food processing solutions for your household needs
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    //         {/* Spice Grinding */}
    //         <Card className="service-card overflow-hidden hover:shadow-lg transition-shadow">
    //           <div className="aspect-square relative">
    //             <Image
    //               src="/spices.jpg?height=300&width=300"
    //               alt="Spice Grinding & Processing"
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //           <CardContent className="p-6">
    //             <h4 className="text-xl font-semibold text-orange-800 mb-3">
    //               Spice Grinding & Processing
    //             </h4>
    //             <ul className="text-sm text-gray-600 space-y-1">
    //               <li>• Chili (spicy, medium, mild)</li>
    //               <li>• Garam Masala, Goda Masala</li>
    //               <li>• Sambar Masala, Tea Masala</li>
    //               <li>• Coriander-Cumin powder</li>
    //               <li>• Turmeric, Pepper powder</li>
    //             </ul>
    //             <p className="text-xs text-orange-600 mt-3 font-medium">
    //               Cleaned, dried, ground, and packed with care
    //             </p>
    //           </CardContent>
    //         </Card>

    //         {/* Homemade Food Ingredients */}
    //         <Card className="service-card overflow-hidden hover:shadow-lg transition-shadow">
    //           <div className="aspect-square relative">
    //             <Image
    //               src="/Rice.jpg?height=300&width=300"
    //               alt="Homemade Food Ingredients"
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //           <CardContent className="p-6">
    //             <h4 className="text-xl font-semibold text-orange-800 mb-3">
    //               Homemade Food Ingredients
    //             </h4>
    //             <ul className="text-sm text-gray-600 space-y-1">
    //               <li>• Papad (Urad, Potato, Rice)</li>
    //               <li>• Hand-made Sevai</li>
    //               <li>• Soaked Wheat and Dal</li>
    //               <li>• Fresh Puran</li>
    //               <li>• Ginger-Garlic Paste</li>
    //             </ul>
    //             <p className="text-xs text-orange-600 mt-3 font-medium">
    //               For puran poli, dahi wada & more
    //             </p>
    //           </CardContent>
    //         </Card>

    //         {/* Fasting Essentials */}
    //         <Card className="service-card overflow-hidden hover:shadow-lg transition-shadow">
    //           <div className="aspect-square relative">
    //             <Image
    //               src="/ingredients.jpg?height=300&width=300"
    //               alt="Fasting Essentials"
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //           <CardContent className="p-6">
    //             <h4 className="text-xl font-semibold text-orange-800 mb-3">
    //               Fasting Essentials
    //             </h4>
    //             <ul className="text-sm text-gray-600 space-y-1">
    //               <li>• Bhagar (barnyard millet)</li>
    //               <li>• Dry Date Powder</li>
    //               <li>• Ground Coconut</li>
    //               <li>• Roasted Peanut Powder</li>
    //             </ul>
    //             <p className="text-xs text-orange-600 mt-3 font-medium">
    //               Prepared with religious care for fasting occasions
    //             </p>
    //           </CardContent>
    //         </Card>

    //         {/* Grain & Snacks Processing */}
    //         <Card className="service-card overflow-hidden hover:shadow-lg transition-shadow">
    //           <div className="aspect-square relative">
    //             <Image
    //               src="/granular-powder.jpg?height=300&width=300"
    //               alt="Grain & Snacks Processing"
    //               fill
    //               className="object-cover"
    //             />
    //           </div>
    //           <CardContent className="p-6">
    //             <h4 className="text-xl font-semibold text-orange-800 mb-3">
    //               Grain & Snacks Processing
    //             </h4>
    //             <ul className="text-sm text-gray-600 space-y-1">
    //               <li>• Wheat, Rice, Jowar Flour</li>
    //               <li>• Bajra, Ragi Flour</li>
    //               <li>• Fresh Potato Wafers</li>
    //               <li>• Fried or Dried options</li>
    //             </ul>
    //             <p className="text-xs text-orange-600 mt-3 font-medium">
    //               Fresh and customized processing
    //             </p>
    //           </CardContent>
    //         </Card>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Gallery Section */}
    //   <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
    //     <div className="container mx-auto px-4">
    //       <div className="text-center mb-12">
    //         <h3 className="text-3xl font-bold text-orange-800 mb-4">
    //           Our Gallery
    //         </h3>
    //         <p className="text-lg text-gray-700">
    //           See the quality and care that goes into every product
    //         </p>
    //       </div>

    //       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    //         {/* Row 1 */}
    //         <div className="gallery-item col-span-2 aspect-video relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/spice.jpg?height=400&width=600"
    //             alt="Traditional flour mill in operation"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-4 left-4 text-white">
    //               <h4 className="font-semibold">Flour Mill in Action</h4>
    //               <p className="text-sm">Fresh grinding daily</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/harissa.jpg?height=300&width=300"
    //             alt="Fresh ground spices and masala"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-2 left-2 text-white">
    //               <h4 className="font-semibold text-sm">Fresh Spices</h4>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/spices.jpg?height=300&width=300"
    //             alt="Homemade papad and sevai"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-2 left-2 text-white">
    //               <h4 className="font-semibold text-sm">Homemade Items</h4>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Row 2 */}
    //         <div className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/ingredients1.jpg?height=300&width=300"
    //             alt="Modern grinding equipment"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-2 left-2 text-white">
    //               <h4 className="font-semibold text-sm">Modern Equipment</h4>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/bread.jpg?height=300&width=300"
    //             alt="Fasting essentials and upwas items"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-2 left-2 text-white">
    //               <h4 className="font-semibold text-sm">Fasting Items</h4>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="gallery-item col-span-2 aspect-video relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/assortment.jpg?height=400&width=600"
    //             alt="Different types of fresh flours"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-4 left-4 text-white">
    //               <h4 className="font-semibold">Variety of Flours</h4>
    //               <p className="text-sm">Wheat, Rice, Jowar, Bajra & more</p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Row 3 */}
    //         <div className="gallery-item col-span-2 aspect-video relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/spices1.jpg?height=400&width=600"
    //             alt="Clean and hygienic processing facility"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-4 left-4 text-white">
    //               <h4 className="font-semibold">Hygienic Facility</h4>
    //               <p className="text-sm">
    //                 Maintaining highest cleanliness standards
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/chips.jpg?height=300&width=300"
    //             alt="Fresh potato wafers"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-2 left-2 text-white">
    //               <h4 className="font-semibold text-sm">Potato Wafers</h4>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <Image
    //             src="/papad.jpeg?height=300&width=300"
    //             alt="Fresh ginger garlic paste and puran"
    //             fill
    //             className="object-cover hover:scale-105 transition-transform duration-300"
    //           />
    //           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
    //             <div className="absolute bottom-2 left-2 text-white">
    //               <h4 className="font-semibold text-sm">Fresh Pastes</h4>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="text-center mt-8">
    //         <Button className="bg-orange-600 hover:bg-orange-700">
    //           View More Photos
    //         </Button>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Why Choose Us */}
    //   <section className="py-16 bg-white">
    //     <div className="container mx-auto px-4">
    //       <div className="text-center mb-12">
    //         <h3 className="text-3xl font-bold text-orange-800 mb-4">
    //           Why Choose Us?
    //         </h3>
    //       </div>
    //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    //         <div className="flex items-start space-x-3">
    //           <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
    //           <div>
    //             <h4 className="font-semibold text-gray-800 mb-1">
    //               Homely Cleanliness
    //             </h4>
    //             <p className="text-sm text-gray-600">
    //               Maintaining quality like your own kitchen
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex items-start space-x-3">
    //           <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
    //           <div>
    //             <h4 className="font-semibold text-gray-800 mb-1">
    //               Modern Machinery
    //             </h4>
    //             <p className="text-sm text-gray-600">
    //               Blend of traditional and modern equipment
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex items-start space-x-3">
    //           <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
    //           <div>
    //             <h4 className="font-semibold text-gray-800 mb-1">
    //               Home Delivery
    //             </h4>
    //             <p className="text-sm text-gray-600">
    //               Timely service with optional home delivery
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex items-start space-x-3">
    //           <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
    //           <div>
    //             <h4 className="font-semibold text-gray-800 mb-1">
    //               Authentic Taste
    //             </h4>
    //             <p className="text-sm text-gray-600">
    //               Preserving traditional flavors and methods
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Contact Section */}
    //   <section
    //     ref={contactRef}
    //     className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white"
    //   >
    //     <div className="container mx-auto px-4 text-center">
    //       <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
    //       <div className="grid md:grid-cols-3 gap-8 mb-8">
    //         <div className="flex flex-col items-center">
    //           <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
    //             <Phone className="w-8 h-8" />
    //           </div>
    //           <h4 className="font-semibold mb-2">Phone</h4>
    //           <p className="text-orange-100">9423180757</p>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
    //             <MessageCircle className="w-8 h-8" />
    //           </div>
    //           <h4 className="font-semibold mb-2">WhatsApp</h4>
    //           <p className="text-orange-100">7020175481</p>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
    //             <MapPin className="w-8 h-8" />
    //           </div>
    //           <h4 className="font-semibold mb-2">Location</h4>
    //           <p className="text-orange-100">श्री गजानन महाराज हौसिंग सोसायटी, श्री गजानन महाराज मंदिरा जवळ, चांदवड</p>
    //         </div>
    //       </div>
    //       <Button
    //         size="lg"
    //         className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-3"
    //       >
    //         Book Your Order
    //       </Button>
    //     </div>
    //   </section>

    //   {/* Footer */}
    //   <footer className="bg-orange-800 text-white py-8">
    //     <div className="container mx-auto px-4 text-center">
    //       <div className="flex items-center justify-center space-x-3 mb-4">
    //         <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
    //           <span className="text-white font-bold">S</span>
    //         </div>
    //         <div>
    //           <h5 className="font-bold">Sarthak Home Industry & Flour Mill</h5>
    //         </div>
    //       </div>
    //       <p className="text-orange-200 text-sm">
    //         Traditional food processing with modern care • Quality you can trust
    //       </p>
    //       <div className="mt-4 flex justify-center space-x-6">
    //         <span className="text-orange-200 text-sm">📞 9423180757</span>
    //         <span className="text-orange-200 text-sm">
    //           💬 WhatsApp: 7020175481
    //         </span>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}
