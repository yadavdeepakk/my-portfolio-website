import { ArrowRight, Github, Code2, Database, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-card flex items-center relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Deepak</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold mt-2">
                BCA Student | MERN Stack Developer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a final year BCA student passionate about coding, tech, and
              problem-solving. I love building projects from scratch and
              exploring new technologies. My goal is to become a Software
              Engineer and contribute to open-source projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                View Projects{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://drive.google.com/file/d/1jAzF6wzrO-2Dt8DMmdms7UCkL9BWIwm_/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
              >
                Show Resume
              </a>
            </div>
          </div>

          {/* Right side - Developer card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl opacity-75"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 hover:bg-muted transition-colors group cursor-default">
                  <Code2 className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-foreground">
                    Frontend
                  </p>
                  <p className="text-xs text-muted-foreground">React, Vite</p>
                </div>
                <div className="bg-background rounded-lg p-4 hover:bg-muted transition-colors group cursor-default">
                  <Database className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-foreground">
                    Backend
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Node.js, Express
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 hover:bg-muted transition-colors group cursor-default">
                  <Zap className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-foreground">
                    Database
                  </p>
                  <p className="text-xs text-muted-foreground">
                    MongoDB, MySQL
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 hover:bg-muted transition-colors group cursor-default">
                  <Github className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-semibold text-foreground">Tools</p>
                  <p className="text-xs text-muted-foreground">Git, Postman</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
