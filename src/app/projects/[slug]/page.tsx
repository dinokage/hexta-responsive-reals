import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Project data (in a real app, this would come from an API or CMS)
const projectsData = [
  {
    id: 'dms-oil-gas',
    title: 'DMS tailored for Oil & Gas industry',
    description: 'Developed a custom e-commerce platform with advanced features like real-time inventory management and secure payment processing.',
    fullDescription: `
      <p>Our Document Management System (DMS) for the Oil & Gas industry represents a significant advancement in how these organizations manage their critical documentation and workflows.</p>
      
      <p>This specialized system was built from the ground up to address the unique challenges faced by oil and gas companies, including:</p>
      
      <ul>
        <li>Compliance with strict regulatory requirements</li>
        <li>Management of complex engineering documents</li>
        <li>Secure handling of sensitive operational data</li>
        <li>Integration with field operations and equipment</li>
        <li>Support for remote access in challenging environments</li>
      </ul>
      
      <p>The system features an intuitive interface designed for both technical and non-technical users, robust search capabilities, version control, and secure access controls. Additionally, we implemented specialized modules for managing drilling documentation, equipment maintenance records, safety protocols, and regulatory compliance documents.</p>
      
      <p>The DMS has been deployed by multiple companies in the sector, resulting in significant efficiency improvements, reduced compliance risks, and enhanced collaboration across distributed teams.</p>
    `,
    technologies: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker'],
    image: '/images/projects/dms.jpg',
    galleryImages: [
      '/images/projects/dms-detail-1.jpg',
      '/images/projects/dms-detail-2.jpg',
      '/images/projects/dms-detail-3.jpg',
    ],
    slug: 'dms-oil-gas',
    client: 'Major Oil & Gas Corporation',
    completionDate: 'March 2023'
  },
  {
    id: 'blockchain',
    title: 'Blockchain - Smart Contracts',
    description: 'Implemented a blockchain-based voting system for secure and transparent elections, ensuring vote integrity and voter privacy.',
    fullDescription: `
      <p>Our blockchain-based voting system represents a pioneering approach to electoral processes, leveraging the security and transparency inherent in blockchain technology.</p>
      
      <p>This solution was designed to address common challenges in traditional voting systems:</p>
      
      <ul>
        <li>Ensuring vote integrity and preventing tampering</li>
        <li>Maintaining voter privacy while enabling verification</li>
        <li>Creating an immutable record of electoral results</li>
        <li>Enabling greater accessibility while maintaining security</li>
        <li>Providing real-time tallying with cryptographic verification</li>
      </ul>
      
      <p>The system utilizes smart contracts built on Ethereum to manage the entire voting process, from voter registration to final tallying. Each vote is cryptographically secured and added to the blockchain, creating a permanent, verifiable record that cannot be altered retroactively.</p>
      
      <p>We implemented advanced cryptographic techniques to ensure that voters can verify their own votes were counted correctly while maintaining the secrecy of their ballot. The system also includes a transparent audit trail that allows independent verification of results without compromising individual voter privacy.</p>
      
      <p>This solution has been successfully deployed in corporate governance scenarios and is being evaluated for use in municipal elections.</p>
    `,
    technologies: ['Ethereum', 'Solidity', 'React', 'Web3.js', 'Node.js'],
    image: '/images/projects/blockchain.jpg',
    galleryImages: [
      '/images/projects/blockchain-detail-1.jpg',
      '/images/projects/blockchain-detail-2.jpg',
      '/images/projects/blockchain-detail-3.jpg',
    ],
    slug: 'blockchain-smart-contracts',
    client: 'Electoral Technology Consortium',
    completionDate: 'November 2023'
  },
  // Additional projects would be added here...
]

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found | HextaSphere',
      description: 'The requested project could not be found.'
    }
  }
  
  return {
    title: `${project.title} | HextaSphere Projects`,
    description: project.description
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <>
      {/* Project Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-lg text-white">{project.description}</p>
            </div>
            <div className="md:w-1/2 relative h-64 w-full rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-dark mb-6">Project Overview</h2>
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: project.fullDescription }}
              />
              
              {/* Project Gallery */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-semibold text-dark mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.galleryImages.map((img, index) => (
                      <div key={index} className="relative h-64 rounded-md overflow-hidden">
                        <Image
                          src={img}
                          alt={`${project.title} - Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-light rounded-md p-6">
                <h3 className="text-xl font-semibold text-dark mb-4">Project Details</h3>
                
                {project.client && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark">Client</h4>
                    <p>{project.client}</p>
                  </div>
                )}
                
                {project.completionDate && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark">Completion Date</h4>
                    <p>{project.completionDate}</p>
                  </div>
                )}
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-dark">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Other Projects */}
              <div className="mt-8 bg-light rounded-md p-6">
                <h3 className="text-xl font-semibold text-dark mb-4">Other Projects</h3>
                <ul className="space-y-4">
                  {projectsData
                    .filter(p => p.id !== project.id)
                    .slice(0, 3)
                    .map(p => (
                      <li key={p.id}>
                        <Link 
                          href={`/projects/${p.slug}`}
                          className="text-primary hover:underline"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <div className="mt-4">
                  <Link 
                    href="/projects"
                    className="text-primary font-semibold hover:underline"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}