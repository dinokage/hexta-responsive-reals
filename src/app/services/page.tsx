import ServicesPage from "./ServicesPage"
import { siteConfig } from "@/config/site"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: `Services | ${siteConfig.name}`,
};

function page() {
  return (
    <ServicesPage />
  )
}

export default page