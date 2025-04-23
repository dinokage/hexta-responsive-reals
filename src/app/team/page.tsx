import Image from 'next/image'

export const metadata = {
  title: 'Our Team | HextaSphere',
  description: 'Meet the talented professionals behind HextaSphere\'s innovative IT and Engineering solutions.'
}

// Team member data - in a real app, this would likely come from a CMS or API
const leadershipTeam = [
  {
    name: 'Jennifer Chen',
    role: 'Chief Executive Officer',
    bio: 'With over 20 years of experience in tech leadership, Jennifer drives our strategic vision and growth. She previously led technology transformation at Fortune 500 companies and holds an MBA from Stanford.',
    image: '/images/team/ceo.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Technology Officer',
    bio: 'Michael leads our technical strategy and innovation initiatives, bringing 15+ years of engineering expertise. He specializes in distributed systems and AI, and has previously built technology at Google and Spotify.',
    image: '/images/team/cto.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Operations Officer',
    bio: 'Sarah ensures operational excellence across all our projects and internal processes. With a background in management consulting and an extensive track record in scaling technology companies, she keeps HextaSphere running efficiently.',
    image: '/images/team/coo.jpg',
  },
]

const departmentHeads = [
  {
    name: 'David Thompson',
    role: 'Director of Engineering',
    bio: 'David oversees our engineering teams and technical delivery. His expertise in software architecture and engineering management ensures we deliver high-quality solutions.',
    image: '/images/team/director-engineering.jpg',
  },
  {
    name: 'Emily Patel',
    role: 'Head of IT Services',
    bio: 'Emily leads our IT services division, bringing deep expertise in cloud infrastructure, cybersecurity, and enterprise IT solutions to our client projects.',
    image: '/images/team/head-it.jpg',
  },
  {
    name: 'Robert Kim',
    role: 'Head of Product Management',
    bio: 'Robert guides our product strategy and roadmap development, ensuring our solutions align with market needs and deliver exceptional user experiences.',
    image: '/images/team/head-product.jpg',
  },
  {
    name: 'Alexandra Martinez',
    role: 'Head of Client Success',
    bio: 'Alexandra ensures our clients achieve their business objectives through our technology solutions, leading our client success and account management teams.',
    image: '/images/team/head-client-success.jpg',
  },
  {
    name: 'James Wilson',
    role: 'Director of Innovation',
    bio: 'James leads our innovation lab, exploring emerging technologies and developing experimental solutions that drive the future of our product and service offerings.',
    image: '/images/team/director-innovation.jpg',
  },
  {
    name: 'Olivia Thompson',
    role: 'Head of UX/UI Design',
    bio: 'Olivia leads our design team, ensuring our solutions are not only functional but also intuitive, accessible, and delightful for users across all digital touchpoints.',
    image: '/images/team/head-design.jpg',
  },
]

export default function TeamPage() {
  return (
    <>
      {/* Team Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-lg text-white max-w-2xl">
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
              <div key={index} className="bg-light rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-dark">{member.bio}</p>
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
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-lg font-semibold text-dark">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-dark text-sm">{member.bio}</p>
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
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Collaborative Environment</h3>
                    <p className="text-gray-600">We work together across disciplines, sharing knowledge and perspectives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team&apos;s growth through education, conferences, and dedicated learning time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-dark">Innovation Focus</h3>
                    <p className="text-gray-600">We encourage creative thinking and exploration of new technologies and approaches.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/team/culture-1.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/team/culture-2.jpg"
                  alt="Office environment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/team/culture-3.jpg"
                  alt="Team event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/team/culture-4.jpg"
                  alt="Working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8">
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