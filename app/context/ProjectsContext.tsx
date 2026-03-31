"use client";

import { createContext, useContext, ReactNode } from "react";
import { projectsData, ProjectItem } from "./projects";

type ProjectsContextType = {
  projects: ProjectItem[];
};

const ProjectsContext = createContext<ProjectsContextType>({
  projects: [],
});

export function ProjectsProvider({ children }: { children: ReactNode }) {
  return (
    <ProjectsContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}