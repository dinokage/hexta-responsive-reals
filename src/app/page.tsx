// import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import Workflow from '@/components/home/Workflow'
import WorkProcess from '@/components/home/WorkProcess'
import ProjectsSection from '@/components/home/ProjectsSection'
import ClientsSection from '@/components/home/ClientsSection'
import { HeroSectionOne } from '@/components/home/HeroTest'

export default function Home() {
  return (
    <>
    <HeroSectionOne />
      {/* <HeroSection /> */}
      <Workflow />
      <WorkProcess />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
    </>
  )
}