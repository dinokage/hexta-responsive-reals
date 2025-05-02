import BlurImage from '@/components/blur-image'
import { getTeamImageUrl } from '@/lib/minio'

export const metadata = {
  title: 'About Us | HextaSphere',
  description: 'Learn more about HextaSphere, our mission, values, and the team behind our innovative IT and Engineering solutions.'
}

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About HextaSphere</h1>
          <p className="text-lg text-white max-w-2xl">
            We&apos;re on a mission to transform businesses through innovative technology solutions.
          </p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-6">Our Story</h2>
              <p className="text-dark mb-4">
                Founded in 2018, HextaSphere began with a simple goal: to help businesses leverage technology to achieve their full potential. What started as a small team of passionate engineers has grown into a comprehensive technology solutions provider serving clients worldwide.
              </p>
              <p className="text-dark mb-4">
                Our name, HextaSphere, represents the six core principles that guide our work: innovation, expertise, reliability, collaboration, integrity, and client success. These principles are embedded in everything we do, from our development processes to our client relationships.
              </p>
              <p className="text-dark">
                Today, we&apos;re proud to be a trusted technology partner for businesses ranging from startups to multinational corporations, delivering solutions that drive real business value.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <BlurImage
                src="/images/about-us/hexta-about-1.webp"
                alt="HextaSphere team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Our Mission and Values</h2>
            <p className="text-dark max-w-3xl mx-auto">
              At HextaSphere, we&apos;re driven by a clear purpose and guided by strong values that shape our approach to every project and client relationship.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-dark">
                To empower organizations through innovative technology solutions that solve complex challenges, drive growth, and create sustainable competitive advantages.
              </p>
            </div>
            
            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-dark text-sm">
                  We continuously explore new technologies and approaches to deliver creative solutions that address evolving business needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">Expertise</h3>
                <p className="text-dark text-sm">
                  We maintain deep technical knowledge and industry insights to provide informed guidance and superior solutions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">Reliability</h3>
                <p className="text-dark text-sm">
                  We deliver on our promises, creating dependable solutions and maintaining consistent communication throughout every project.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">Collaboration</h3>
                <p className="text-dark text-sm">
                  We work closely with our clients, fostering partnerships built on open communication and shared goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">Integrity</h3>
                <p className="text-dark text-sm">
                  We operate with transparency, honesty, and ethical practices in all our business relationships.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary mb-3">Client Success</h3>
                <p className="text-dark text-sm">
                  We measure our success by the value we create for our clients and their achievement of business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Our Leadership Team</h2>
            <p className="text-dark max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company&apos;s vision and strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <BlurImage
                  src={getTeamImageUrl("srinivasa-rao-vavilapalli.jpeg")}
                  alt="CEO Portrait"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-dark">Srinivasa Rao Vavilapalli</h3>
              <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm mb-4">
                With over 20 years of experience in tech leadership, Jennifer drives our strategic vision and growth.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <BlurImage
                  src={getTeamImageUrl("santosh-kumar-bogela.jpeg")}
                  alt="CTO Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-dark">Santosh Kumar Bogela</h3>
              <p className="text-primary font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm mb-4">
                Michael leads our technical strategy and innovation initiatives, bringing 15+ years of engineering expertise.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <BlurImage
                  src={getTeamImageUrl("sudheer.jpeg")}
                  alt="COO Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-dark">D Sudheer Babu</h3>
              <p className="text-primary font-medium mb-2">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm mb-4">
                Sarah ensures operational excellence across all our projects and internal processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}