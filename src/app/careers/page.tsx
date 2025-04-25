'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ChevronUp, MapPin, Clock, Tag } from 'lucide-react'

// Job opening data - in a real app, this would come from a CMS or API
const jobOpenings = [
  {
    id: 'sr-software-engineer',
    title: 'Senior Software Engineer',
    department: 'dleupmint',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'We are looking for a Senior Software Engineer to join our engineering team. In this role, you will design, develop, and maintain software solutions for our clients.',
    responsibilities: [
      'Design and develop high-quality software solutions',
      'Collaborate with cross-functional teams to define, design, and ship new features',
      'Write clean, maintainable code with appropriate tests',
      'Participate in code reviews and mentor junior developers',
      'Troubleshoot and debug complex issues'
    ],
    requirements: [
      '5+ years of professional software development experience',
      'Strong proficiency in one or more programming languages (e.g., JavaScript, Python, Java)',
      'Experience with modern web technologies and frameworks (e.g., React, Node.js)',
      'Familiarity with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of software design patterns and best practices',
      "Bachelor's degree in Computer Science or related field (or equivalent practical experience)"
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are seeking a Data Scientist to help extract meaningful insights from complex datasets and develop machine learning models to solve business challenges.',
    responsibilities: [
      'Develop and implement advanced analytical models and algorithms',
      'Process, clean, and validate data for analysis',
      'Build and optimize machine learning models',
      'Collaborate with engineering teams to deploy models into production',
      'Communicate findings and recommendations to stakeholders'
    ],
    requirements: [
      '3+ years of experience in data science or related field',
      'Proficiency in Python and data science libraries (NumPy, Pandas, Scikit-learn)',
      'Experience with machine learning techniques and algorithms',
      'Strong statistical analysis skills',
      'Knowledge of big data technologies (e.g., Spark, Hadoop)',
      "Master's degree or PhD in Computer Science, Statistics, or related field"
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Chicago, IL (Hybrid)',
    type: 'Full-time',
    description: 'We are looking for a talented UX/UI Designer to create engaging and intuitive user experiences for our digital products and solutions.',
    responsibilities: [
      'Create user flows, wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with product managers and developers to implement designs',
      'Create and maintain design systems',
      'Stay updated on design trends and best practices'
    ],
    requirements: [
      '3+ years of experience in UX/UI design',
      'Proficiency in design tools (Figma, Adobe XD, Sketch)',
      'Strong portfolio demonstrating design thinking and problem-solving',
      'Experience with responsive design and mobile-first approaches',
      'Understanding of accessibility standards',
      "Bachelor's degree in Design, HCI, or related field (or equivalent practical experience)"
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    department: 'Project Management',
    location: 'Boston, MA (On-site)',
    type: 'Full-time',
    description: 'We are seeking an experienced Project Manager to oversee the planning, execution, and delivery of technology projects for our clients.',
    responsibilities: [
      'Develop project plans, timelines, and budgets',
      'Coordinate cross-functional teams and resources',
      'Track project progress and address issues or roadblocks',
      'Communicate project status to stakeholders',
      'Ensure deliverables meet quality standards and client expectations'
    ],
    requirements: [
      '5+ years of project management experience in the technology sector',
      'PMP certification or equivalent',
      'Experience with Agile and traditional project management methodologies',
      'Strong leadership and communication skills',
      'Proficiency with project management tools',
      "Bachelor's degree in Business, Computer Science, or related field"
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for a DevOps Engineer to help build and maintain our infrastructure and deployment pipelines, ensuring efficient and reliable software delivery.',
    responsibilities: [
      'Implement and maintain CI/CD pipelines',
      'Automate infrastructure provisioning and configuration management',
      'Monitor and troubleshoot systems and applications',
      'Implement security best practices',
      'Collaborate with development teams to improve deployment processes'
    ],
    requirements: [
      '3+ years of experience in DevOps or similar role',
      'Proficiency with cloud platforms (AWS, Azure, or GCP)',
      'Experience with containerization technologies (Docker, Kubernetes)',
      'Knowledge of infrastructure as code tools (Terraform, CloudFormation)',
      'Familiarity with monitoring and logging solutions',
      "Bachelor's degree in Computer Science or related field (or equivalent practical experience)"
    ]
  }
]

// Benefits data
const benefits = [
  {
    title: 'Health & Wellness',
    items: [
      'Comprehensive health, dental, and vision insurance',
      'Mental health coverage',
      'Wellness program with fitness reimbursements',
      'Ergonomic home office stipend'
    ]
  },
  {
    title: 'Work-Life Balance',
    items: [
      'Flexible work schedules',
      'Remote and hybrid work options',
      'Generous paid time off',
      'Paid parental leave',
      'Company holidays and floating personal days'
    ]
  },
  {
    title: 'Financial Benefits',
    items: [
      'Competitive salary',
      'Performance bonuses',
      'Stock options',
      '401(k) with company match',
      'Professional development budget'
    ]
  },
  {
    title: 'Growth & Development',
    items: [
      'Continued education opportunities',
      'Conference attendance',
      'Certification reimbursement',
      'Mentorship programs',
      'Career advancement paths'
    ]
  }
]

export default function CareersPage() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null)
  
  const toggleJobExpand = (jobId: string) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null)
    } else {
      setExpandedJobId(jobId)
    }
  }
  
  return (
    <>
      {/* Careers Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Team</h1>
          <p className="text-lg text-white max-w-2xl">
            Discover exciting career opportunities at HextaSphere and be part of a team that&apos;s building innovative technology solutions.
          </p>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Why Join HextaSphere?</h2>
              <p className="text-dark mb-4">
                At HextaSphere, we&apos;re more than just a technology company—we&apos;re a community of innovators, problem-solvers, and lifelong learners working together to create meaningful impact through technology.
              </p>
              <p className="text-dark mb-8">
                We believe that great ideas can come from anywhere, and we foster an environment where creativity and collaboration thrive. Our team members enjoy challenging work, growth opportunities, and a supportive culture that values work-life balance.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                  <p className="text-sm text-dark">Work on cutting-edge technologies and challenging projects</p>
                </div>
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Growth</h3>
                  <p className="text-sm text-dark">Continuous learning and career development opportunities</p>
                </div>
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Impact</h3>
                  <p className="text-sm text-dark">Create solutions that solve real-world problems</p>
                </div>
                <div className="bg-light rounded-md p-4">
                  <h3 className="font-semibold text-primary mb-2">Balance</h3>
                  <p className="text-sm text-dark">Flexible work arrangements that respect your life outside work</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/careers/team-1.jpg"
                  alt="HextaSphere team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/careers/team-2.jpg"
                  alt="HextaSphere workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/careers/team-3.jpg"
                  alt="HextaSphere team event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-md overflow-hidden">
                <Image
                  src="/images/careers/team-4.jpg"
                  alt="HextaSphere office environment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Employee Benefits</h2>
            <p className="text-dark max-w-3xl mx-auto">
              We offer a comprehensive benefits package designed to support your health, wellbeing, and professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-dark text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-16" id="openings">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Open Positions</h2>
            <p className="text-dark max-w-3xl mx-auto">
              Explore our current job openings and find your next career opportunity with HextaSphere.
            </p>
          </div>
          
          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleJobExpand(job.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-dark">{job.title}</h3>
                    <button 
                      className="text-primary"
                      aria-label={expandedJobId === job.id ? "Collapse job details" : "Expand job details"}
                    >
                      {expandedJobId === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-gray-600">
                      <Tag size={16} className="mr-1" />
                      <span className="text-sm">{job.department}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-dark">{job.description}</p>
                </div>
                
                {expandedJobId === job.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <div className="mb-4">
                      <h4 className="font-semibold text-dark mb-2">Responsibilities:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="text-dark">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-dark mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="text-dark">{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link 
                      href={`/careers/apply/${job.id}`}
                      className="inline-block px-6 py-2 bg-primary text-white rounded font-semibold hover:bg-opacity-90 transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Process Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Our Application Process</h2>
            <p className="text-dark max-w-3xl mx-auto">
              We&apos;ve designed a straightforward application process to help us get to know you better and ensure mutual fit.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline Line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-primary hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">1</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Application Review</h3>
                    <p className="text-dark">
                      Our recruiting team carefully reviews your application, resume, and any additional materials you submit to assess your qualifications for the role.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">2</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Initial Interview</h3>
                    <p className="text-dark">
                      If your background aligns with our needs, we&apos;ll schedule an initial interview to discuss your experience, skills, and interest in the role and HextaSphere.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">3</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Technical Assessment</h3>
                    <p className="text-dark">
                      Depending on the role, you may be asked to complete a technical assessment, coding challenge, case study, or design exercise to demonstrate your skills.
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">4</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Team Interviews</h3>
                    <p className="text-dark">
                      Meet with potential team members and stakeholders to dive deeper into your expertise and assess team fit. This may include a panel interview or multiple one-on-one sessions.
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm z-10">5</div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm md:ml-4 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold text-primary mb-2">Final Decision & Offer</h3>
                    <p className="text-dark">
                      After completing all interviews, we&apos;ll make a decision and extend an offer to the selected candidate, including details about compensation, benefits, and start date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
            Browse our open positions and apply today to join our team of innovators building the future of technology.
          </p>
          <a 
            href="#openings" 
            className="inline-block px-8 py-3 bg-white text-primary rounded font-semibold hover:bg-gray-100 transition"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </>
  )
}