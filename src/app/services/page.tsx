'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

// Import Lottie dynamically to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Service data - in a real app, this would likely come from a CMS or API
const services = [
  {
    id: 'it-services',
    title: 'IT Services',
    description: 'Comprehensive IT solutions tailored to your business needs.',
    lottieAnimation: '/lottie/web-designer.json', // Replace with your actual Lottie JSON file path
    icon: '/images/icons/it-icon.svg',
    slug: 'it',
    offerings: [
      {
        title: 'Custom Software Development',
        description: 'Bespoke software solutions tailored to your specific business requirements, from concept to deployment and maintenance.',
        icon: '/images/icons/code-icon.svg'
      },
      {
        title: 'Web & Mobile App Development',
        description: 'Responsive web applications and native mobile apps for iOS and Android, built with modern frameworks and best practices.',
        icon: '/images/icons/mobile-icon.svg'
      },
      {
        title: 'Cloud Services',
        description: 'Strategic cloud migration, architecture design, and managed services across AWS, Azure, and Google Cloud platforms.',
        icon: '/images/icons/cloud-icon.svg'
      },
      {
        title: 'Cybersecurity',
        description: 'Comprehensive security assessment, implementation, and monitoring to protect your critical business assets and data.',
        icon: '/images/icons/security-icon.svg'
      },
      {
        title: 'Data Analytics & AI',
        description: 'Advanced data analysis, business intelligence solutions, and AI implementations to derive actionable insights from your data.',
        icon: '/images/icons/analytics-icon.svg'
      },
      {
        title: 'IT Consulting',
        description: 'Strategic technology guidance to help you make informed decisions about your IT infrastructure and digital transformation.',
        icon: '/images/icons/consulting-icon.svg'
      }
    ]
  },
  {
    id: 'engineering-services',
    title: 'Engineering Services',
    description: 'Innovative engineering solutions for complex challenges.',
    lottieAnimation: '/lottie/engineering.json', // Replace with your actual Lottie JSON file path
    icon: '/images/icons/engineering-icon.svg',
    slug: 'engineering',
    offerings: [
      {
        title: 'Industrial IoT',
        description: 'Connected systems for manufacturing, energy, and industrial environments that enable real-time monitoring and control.',
        icon: '/images/icons/iot-icon.svg'
      },
      {
        title: 'Automation Solutions',
        description: 'Process automation systems that improve efficiency, reduce errors, and free up human resources for higher-value tasks.',
        icon: '/images/icons/automation-icon.svg'
      },
      {
        title: 'Embedded Systems',
        description: 'Custom embedded software and firmware development for specialized hardware and IoT devices.',
        icon: '/images/icons/embedded-icon.svg'
      },
      {
        title: 'System Integration',
        description: 'Seamless integration of diverse systems and technologies to create unified, efficient operational environments.',
        icon: '/images/icons/integration-icon.svg'
      },
      {
        title: 'Predictive Maintenance',
        description: 'AI-powered systems that predict equipment failures before they occur, minimizing downtime and maintenance costs.',
        icon: '/images/icons/maintenance-icon.svg'
      },
      {
        title: 'Engineering Consultation',
        description: 'Expert guidance on complex engineering challenges, technology selection, and implementation strategies.',
        icon: '/images/icons/engineering-consultation-icon.svg'
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white max-w-2xl">
            HextaSphere delivers comprehensive technology solutions to address complex business challenges.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div key={service.id} className="rounded-lg overflow-hidden shadow-md bg-white" id={service.slug}>
                <div className="relative h-64">
                  <LottieContainer 
                    animationPath={service.lottieAnimation} 
                    title={service.title} 
                  />
                </div>
                <div className="p-6">
                  <p className="text-dark mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold text-dark mb-4">What We Offer</h3>
                  <div className="space-y-6">
                    {service.offerings.map((offering, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-10 h-10 flex-shrink-0 bg-light rounded-full flex items-center justify-center">
                          {/* Placeholder for icon - in a real app you'd use the actual icon */}
                          <span className="text-primary text-xl font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark">{offering.title}</h4>
                          <p className="text-sm text-gray-600">{offering.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="bg-light rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-dark mb-4">Ready to Transform Your Business?</h3>
            <p className="text-dark mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and learn how our services can help you achieve your business goals.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded font-semibold hover:bg-opacity-90 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Define types for the LottieContainer props
interface LottieContainerProps {
  animationPath: string;
  title: string;
}

// Lottie container component with dark overlay
const LottieContainer = ({ animationPath, title }: LottieContainerProps) => {
  const lottieRef = useRef(null);

  // Load animation data
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // In a real implementation, you'd import directly or fetch the JSON
        // Here we're assuming the JSON file is available at the public path
        const response = await fetch(animationPath);
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAnimation();
  }, [animationPath]);

  return (
    <div className="relative h-full w-full">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : animationData ? (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
          lottieRef={lottieRef}
        />
      ) : (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Animation not available</p>
        </div>
      )}
      
      {/* Overlay with title */}
      <div className="absolute inset-0 bg-dark bg-opacity-40 flex items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};