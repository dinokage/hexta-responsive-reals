import BlurImage from '../blur-image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  image: string
  slug: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-light rounded-md overflow-hidden shadow-sm">
      <div className="relative h-60">
        <BlurImage
          src={project.image}
          alt={project.title}
          fill
          className="object-contain"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-base font-semibold text-dark mb-2">{project.title}</h3>
        <p className="text-sm text-dark mb-4">
          {project.description.length > 120
            ? `${project.description.substring(0, 120)}...`
            : project.description
          }
        </p>
        <Link 
          href={`/projects/${project.slug}`}
          className="text-sm text-primary hover:underline"
        >
          Read More..
        </Link>
      </div>
    </div>
  )
}