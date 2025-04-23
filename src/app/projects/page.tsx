// import Image from 'next/image'
import ProjectCard from '@/components/projects/ProjectCard'

// All projects data from the Figma design
const allProjects = [
  {
    id: 'dms-oil-gas',
    title: 'DMS tailored for Oil & Gas industry',
    description: 'Developed a custom e-commerce platform with advanced features like real-time inventory management and secure payment processing.',
    image: '/images/projects/dms.png',
    slug: 'dms-oil-gas'
  },
  {
    id: 'blockchain',
    title: 'Blockchain - Smart Contracts',
    description: 'Implemented a blockchain-based voting system for secure and transparent elections, ensuring vote integrity and voter privacy.',
    image: '/images/projects/blockchain.png',
    slug: 'blockchain-smart-contracts'
  },
  {
    id: 'health-app',
    title: 'Health & Fitness App',
    description: 'Created a cross-platform mobile app for tracking workouts, nutrition, and health metrics, integrating with wearable devices.',
    image: '/images/projects/health-app.png',
    slug: 'health-fitness-app'
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'Built a responsive web application for visualizing complex financial data in real-time with customizable reports and analytics.',
    image: '/images/projects/financial.png',
    slug: 'financial-dashboard'
  },
  {
    id: 'social-media-analytics',
    title: 'Social Media Analytics Tool',
    description: 'Developed a tool for social media managers to track engagement, analyze trends and optimize content strategies with intuitive visualizations.',
    image: '/images/projects/social-media-analysis.png',
    slug: 'social-media-analytics'
  },
  {
    id: 'iot-home',
    title: 'IoT Home Automation System',
    description: 'Created a system for controlling and monitoring smart home devices, with a user-friendly interface and secure protocols for device communication.',
    image: '/images/projects/iot-automation.png',
    slug: 'iot-home-automation'
  },
  {
    id: 'online-learning',
    title: 'Online Learning Platform',
    description: 'Built an e-learning platform with features like interactive video courses, adaptive learning paths, and progress tracking for educators and students.',
    image: '/images/projects/online-learning-platform.png',
    slug: 'online-learning-platform'
  },
  {
    id: 'restaurant-system',
    title: 'Restaurant Management System',
    description: 'Developed a comprehensive system for restaurant management, including ordering, inventory, staff scheduling, and analytics dashboards.',
    image: '/images/projects/restaurant-management-system.png',
    slug: 'restaurant-management'
  },
  {
    id: 'ar-shopping',
    title: 'Augmented Reality Shopping App',
    description: 'Created an AR app allowing users to virtually try on clothes and place furniture in their homes before purchasing, enhancing the shopping experience.',
    image: '/images/projects/ar-shopping.png',
    slug: 'ar-shopping-app'
  },
  {
    id: 'ai-chatbot',
    title: 'AI-powered Chatbot',
    description: 'Developed an AI chatbot using natural language processing to handle customer inquiries, provide support, and streamline customer service operations.',
    image: '/images/projects/ai-chatbot.png',
    slug: 'ai-chatbot'
  },
  {
    id: 'remote-collab',
    title: 'Remote Team Collaboration Tool',
    description: 'Built a comprehensive platform for remote teams, featuring real-time document editing, task management, video conferencing, and team analytics.',
    image: '/images/projects/team-collab.png',
    slug: 'remote-collaboration'
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance System',
    description: 'Created an IoT-based system for predicting equipment failures in industrial settings, using machine learning to analyze sensor data and prevent downtime.',
    image: '/images/projects/maintenance.png',
    slug: 'predictive-maintenance'
  }
]

export const metadata = {
  title: 'Our Projects | HextaSphere',
  description: 'Explore our portfolio of successful technology projects including custom software development, mobile apps, IoT solutions, and blockchain applications.'
}

export default function ProjectsPage() {
  return (
    <>
      {/* Projects Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Projects</h1>
          <p className="text-lg text-white max-w-2xl">
            Explore our portfolio of cutting-edge solutions across various industries and technologies.
          </p>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}