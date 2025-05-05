// import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ClientsSection from '@/components/home/ClientsSection'
import { HeroSectionOne } from '@/components/home/HeroTest'

export default function Home() {
  return (
    <>
    <HeroSectionOne />
      {/* <HeroSection /> */}
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
    </>
  )
}