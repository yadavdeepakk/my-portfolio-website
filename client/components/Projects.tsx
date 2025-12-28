import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  category: "web" | "mern" | "utilities" | "games" | "dsa";
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "1",
      name: "DSA-Java",
      description: "DSA concepts and practice implementations in Java",
      tags: ["Java", "DSA", "Algorithms"],
      github: "https://github.com/yadavdeepakk/DSA-Java",
      demo: "https://dsa-java-demo.vercel.app",
      category: "dsa",
    },
    {
      id: "2",
      name: "todo-list-mern",
      description: "To-do list application built using the MERN stack",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yadavdeepakk/todo-list-mern",
      demo: "https://todo-list-mern-demo.vercel.app",
      category: "mern",
    },
    {
      id: "3",
      name: "Attendance-analyzer-n8n",
      description:
        "Automated attendance tracking system using n8n and Google Sheets",
      tags: ["JavaScript", "n8n", "Google Sheets", "Automation"],
      github: "https://github.com/yadavdeepakk/Attendance-analyzer-n8n",
      demo: "https://attendance-analyzer-n8n-demo.vercel.app",
      category: "utilities",
    },
    {
      id: "4",
      name: "AI-Hackathon-MS",
      description: "Hackathon project using AI-related logic and APIs",
      tags: ["JavaScript", "AI", "API"],
      github: "https://github.com/yadavdeepakk/AI-Hackathon-MS",
      demo: "https://ai-hackathon-ms.vercel.app",
      category: "web",
    },
    {
      id: "5",
      name: "Medic-sync-plus",
      description:
        "Full-stack web app built in JavaScript (medical/health workflow)",
      tags: ["JavaScript", "Full-stack", "Healthcare"],
      github: "https://github.com/yadavdeepakk/Medic-sync-plus",
      demo: "https://medic-sync-plus.vercel.app",
      category: "mern",
    },
    {
      id: "6",
      name: "Weather-Forecast",
      description: "Weather forecast web app consuming weather API",
      tags: ["JavaScript", "API", "React"],
      github: "https://github.com/yadavdeepakk/Weather-Forecast",
      demo: "https://weather-forecast-demo.vercel.app",
      category: "web",
    },
    {
      id: "7",
      name: "Lottery-Game",
      description: "Simple lottery-style game built with JavaScript",
      tags: ["JavaScript", "Game"],
      github: "https://github.com/yadavdeepakk/Lottery-Game",
      demo: "https://lottery-game-demo.vercel.app",
      category: "games",
    },
    {
      id: "8",
      name: "Random-Password-generator",
      description: "Random password generator web app",
      tags: ["JavaScript", "Utility"],
      github: "https://github.com/yadavdeepakk/Random-Password-generator",
      demo: "https://random-password-generator.vercel.app",
      category: "utilities",
    },
    {
      id: "9",
      name: "Calculator",
      description: "Basic calculator UI built as a mini-project",
      tags: ["JavaScript", "UI"],
      github: "https://github.com/yadavdeepakk/Calculator",
      demo: "https://calculator-demo.vercel.app",
      category: "utilities",
    },
    {
      id: "10",
      name: "NsitHackthon",
      description: "Frontend hackathon project (forked and customized)",
      tags: ["JavaScript", "Frontend"],
      github: "https://github.com/yadavdeepakk/NsitHackthon",
      demo: "https://nsit-hackathon-demo.vercel.app",
      category: "web",
    },
    {
      id: "11",
      name: "Ignitia",
      description: "Hackathon / event-related frontend project",
      tags: ["JavaScript", "Frontend"],
      github: "https://github.com/yadavdeepakk/Ignitia",
      demo: "https://ignitia-demo.vercel.app",
      category: "web",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mern", label: "MERN" },
    { id: "utilities", label: "Utilities" },
    { id: "games", label: "Games" },
    { id: "dsa", label: "DSA" },
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="h-full flex flex-col group rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 p-6 hover:shadow-lg hover:shadow-primary/10">
      <div className="flex-1 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-6 pt-6 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-primary">Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects I've built, showcasing my skills across
              web development, MERN stack, and more.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  activeFilter === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* All/Filtered Projects Grid */}
          <div className="space-y-6">
            {activeFilter !== "all" && (
              <h3 className="text-2xl font-bold text-foreground">
                {categories.find((c) => c.id === activeFilter)?.label}
              </h3>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
