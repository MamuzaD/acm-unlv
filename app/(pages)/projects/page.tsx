import { Metadata } from "next"
import { Projects } from "@/data/projects"
import { ProjectCard } from "@/components/projects/project-card"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-6">
        <h1 className="text-2xl lg:text-6xl">Projects</h1>
        <div className="my-4 px-4 grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-4">
          {Projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
