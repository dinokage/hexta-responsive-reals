'use client'

import { useState, useEffect } from 'react'
import BlurImage from '@/components/blur-image'
import { itDivisionTeam, engineeringDivisionTeam } from '@/lib/team'
import { Skeleton } from "@heroui/react"
import { getCareerImageUrl } from '@/lib/minio'
import { TeamMember } from '@/types/team'

export const metadata = {
  title: 'Our Team | HextaSphere',
  description: 'Meet the talented professionals behind HextaSphere\'s innovative IT and Engineering solutions.'
}

export default function TeamPage() {
  const [isLoading, setIsLoading] = useState(true)
  
  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  const renderTeamMember = (member: TeamMember, index: number, isLarge: boolean = false) => (
    <div key={index} className="bg-white dark:bg-[#333333] rounded-lg overflow-hidden shadow-sm flex flex-col items-center p-6">
      {isLoading ? (
        <Skeleton className={`rounded-full ${isLarge ? 'w-48 h-48' : 'w-32 h-32'} mb-4`} />
      ) : (
        <div className={`relative ${isLarge ? 'w-48 h-48' : 'w-32 h-32'} mb-4 rounded-full overflow-hidden`}>
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
            <Skeleton className={`h-${isLarge ? '6' : '5'} w-3/4 mx-auto mb-2`} />
            <Skeleton className="h-4 w-1/2 mx-auto mb-3" />
            <Skeleton className="h-4 w-full mx-auto mb-1" />
            <Skeleton className="h-4 w-full mx-auto mb-1" />
            <Skeleton className="h-4 w-4/5 mx-auto" />
          </>
        ) : (
          <>
            <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-semibold text-dark`}>{member.name}</h3>
            <p className="text-primary font-medium mb-3">{member.role}</p>
            <p className={`text-dark ${isLarge ? 'text-base' : 'text-sm'}`}>{member.bio}</p>
          </>
        )}
      </div>
    </div>
  )

  return (
    <>
      {/* Team Hero */}
      <section className="relative pt-32 pb-16 bg-[#F4F4F4] dark:bg-[#252525]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">Our Team</h1>
          <p className="text-lg text-black dark:text-white max-w-2xl">
            Meet the talented professionals who make HextaSphere&apos;s innovation possible across our IT and Engineering divisions.
          </p>
        </div>
      </section>
      
      {/* IT Division Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">IT Division</h2>
            <p className="text-dark max-w-3xl mx-auto">
              Our IT specialists lead digital transformation, cybersecurity, cloud solutions, and cutting-edge technology implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itDivisionTeam.map((member, index) => renderTeamMember(member, index, false))}
          </div>
        </div>
      </section>
      
      {/* Engineering Division Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Engineering Division</h2>
            <p className="text-dark max-w-3xl mx-auto">
              Our engineering experts handle structural design, process engineering, QA/QC, piping systems, and project management across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineeringDivisionTeam.map((member, index) => renderTeamMember(member, index, false))}
          </div>
        </div>
      </section>
      
      {/* Company Culture Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#252525]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Our Culture</h2>
              <p className="text-dark mb-4">
                At HextaSphere, we believe that great technology and engineering solutions come from great teams. We&apos;ve built a culture that fosters innovation, collaboration, and continuous learning across both our IT and Engineering divisions.
              </p>
              <p className="text-dark mb-4">
                Our team members are encouraged to experiment, share ideas, and pursue professional growth. We promote work-life balance, diversity of thought, and inclusive practices that make HextaSphere a rewarding place to work.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-black dark:text-white font-bold">1</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Cross-Division Collaboration</h3>
                    <p className="text-gray-600">Our IT and Engineering teams work together seamlessly, sharing knowledge and perspectives to deliver integrated solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-black dark:text-white font-bold">2</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team&apos;s growth through education, conferences, and dedicated learning time across both technical and soft skills.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-black dark:text-white font-bold">3</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Innovation Focus</h3>
                    <p className="text-gray-600">We encourage creative thinking and exploration of new technologies and approaches in both digital and physical engineering domains.</p>
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
                      src={getCareerImageUrl("ugadi-outside.jpeg")}
                      alt="Team collaboration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src={ getCareerImageUrl("holi-sheet.jpeg")}
                      alt="Office environment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src={ getCareerImageUrl("new-year.jpeg")}
                      alt="Team event"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <BlurImage
                      src={ getCareerImageUrl("holi-office.jpeg")}
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
            We&apos;re always looking for talented individuals who are passionate about technology and engineering innovation. 
            Check out our open positions in both IT and Engineering divisions and become part of our journey.
          </p>
          <a 
            href="/careers" 
            className="inline-block px-8 py-3 bg-white text-primary rounded font-semibold hover:bg-gray-100 hover:text-black transition"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </>
  )
}