import React, { useState, useEffect } from "react";
import allProjects from "@/data/allProjects.json";

interface Project {
  name: string;
  desc: string;
  url: string;
  targets: string[];
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(allProjects);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredProjects = allProjects.filter(
      (project: Project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.targets.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setProjects(filteredProjects);
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-y-3 w-full">
      <input
        type="text"
        name="searchProjects"
        id="searchProjects"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-xl w-full rounded-md px-4 py-3 border border-white/10 focus:bg-white/5 outline-none placeholder:text-white/50"
        placeholder="Buscar proyectos..."
      />
      <span className="text-white/50 mb-5">
        ✨ Aquí podrás encontrar mis proyectos y repositorios de GitHub.
      </span>
      <div className="grid grid-cols-1 gap-4 overflow-x-hidden">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className="border border-white/10 p-4 rounded-lg hover:bg-white/5 transition cursor-pointer"
            >
              <a
                href={project.url}
                target="_blank"
                className="text-lg font-semibold mb-2 hover:underline"
              >
                {project.name}
              </a>
              <p className="text-sm text-gray-300 my-3">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.targets.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs text-white/50 border border-white/5 bg-white/5 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;
