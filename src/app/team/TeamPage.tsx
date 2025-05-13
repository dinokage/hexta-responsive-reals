'use client'

import { useState, useEffect } from 'react'
import BlurImage from '@/components/blur-image'
import { teamMembers } from '@/lib/team'
import { Skeleton } from "@heroui/react"

export const metadata = {
  title: 'Our Team | HextaSphere',
  description: 'Meet the talented professionals behind HextaSphere\'s innovative IT and Engineering solutions.'
}

// Team member data groups
const leadershipTeam = teamMembers.slice(0, 3)
const departmentHeads = teamMembers.slice(3)

export default function TeamPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Team Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Our Team</h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            Meet the talented professionals who make HextaSphere&apos;s innovation possible.
          </p>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Leadership Team</h2>
            <p className="text-dark max-w-3xl mx-auto">
              Our company is led by experienced professionals with deep expertise in technology and business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-light rounded-lg overflow-hidden shadow-sm flex flex-col items-center p-6">
                {isLoading ? (
                  <Skeleton className="rounded-full w-48 h-48 mb-4" />
                ) : (
                  <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
                    <BlurImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                
                <div className="text-center w-full">
                  {isLoading ? (
                    <>
                      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                      <Skeleton className="h-4 w-1/2 mx-auto mb-3" />
                      <Skeleton className="h-4 w-full mx-auto mb-1" />
                      <Skeleton className="h-4 w-full mx-auto mb-1" />
                      <Skeleton className="h-4 w-4/5 mx-auto" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-dark">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-dark">{member.bio}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Department Heads Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Department Heads</h2>
            <p className="text-dark max-w-3xl mx-auto">
              Our specialist teams are led by experts in their respective fields.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col items-center p-6">
                {isLoading ? (
                  <Skeleton className="rounded-full w-32 h-32 mb-4" />
                ) : (
                  <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                    <BlurImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                )}
                
                <div className="text-center w-full">
                  {isLoading ? (
                    <>
                      <Skeleton className="h-5 w-2/3 mx-auto mb-2" />
                      <Skeleton className="h-4 w-1/2 mx-auto mb-3" />
                      <Skeleton className="h-3 w-full mx-auto mb-1" />
                      <Skeleton className="h-3 w-full mx-auto mb-1" />
                      <Skeleton className="h-3 w-3/4 mx-auto" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-dark">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-dark text-sm">{member.bio}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Our Culture</h2>
              <p className="text-dark mb-4">
                At HextaSphere, we believe that great technology solutions come from great teams. We&apos;ve built a culture that fosters innovation, collaboration, and continuous learning.
              </p>
              <p className="text-dark mb-4">
                Our team members are encouraged to experiment, share ideas, and pursue professional growth. We promote work-life balance, diversity of thought, and inclusive practices that make HextaSphere a rewarding place to work.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-black dark:text-white font-bold">1</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Collaborative Environment</h3>
                    <p className="text-gray-600">We work together across disciplines, sharing knowledge and perspectives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-black dark:text-white font-bold">2</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team&apos;s growth through education, conferences, and dedicated learning time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-black dark:text-white font-bold">3</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Innovation Focus</h3>
                    <p className="text-gray-600">We encourage creative thinking and exploration of new technologies and approaches.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              {isLoading ? (
                <>
                  <Skeleton className="h-64 rounded-lg" />
                  <Skeleton className="h-64 rounded-lg" />
                  <Skeleton className="h-64 rounded-lg" />
                  <Skeleton className="h-64 rounded-lg" />
                </>
              ) : (
                <>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src="https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download?preview=true&prefix=clients%2Fclient-temp.png&version_id=null"
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src="https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download?preview=true&prefix=clients%2Fclient-temp.png&version_id=null"
                      alt="Office environment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src="https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download?preview=true&prefix=clients%2Fclient-temp.png&version_id=null"
                      alt="Team event"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src="https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download?preview=true&prefix=clients%2Fclient-temp.png&version_id=null"
                      alt="Working together"
                      fill
                      className="object-cover"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-6">Join Our Team</h2>
          <p className="text-black dark:text-white text-lg max-w-2xl mx-auto mb-8">
            We&apos;re always looking for talented individuals who are passionate about technology and innovation. 
            Check out our open positions and become part of our journey.
          </p>
          <a 
            href="/careers" 
            className="inline-block px-8 py-3 bg-white text-primary rounded font-semibold hover:bg-gray-100 transition"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </>
  )
}