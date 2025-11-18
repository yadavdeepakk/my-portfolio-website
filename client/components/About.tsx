import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    { emoji: "🎯", text: "Focused on building real-world projects" },
    { emoji: "📚", text: "Currently learning DSA in Java and system design" },
    { emoji: "💼", text: "Open to internships and entry-level roles in software development" },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-primary">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main text */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm a final year BCA student with a passion for building innovative solutions through code. I enjoy building projects from scratch and exploring cutting-edge technologies that push the boundaries of what's possible.
                </p>
                <p className="text-lg">
                  I'm deeply interested in the MERN stack (MongoDB, Express.js, React, Node.js) and love experimenting with AI tools and emerging web technologies. My journey in tech has been about constant learning, hands-on project building, and pushing my limits.
                </p>
                <p className="text-lg">
                  My future goal is to become a Software Engineer at a leading tech company and contribute meaningfully to open-source projects. I'm driven by the challenge of solving complex problems and creating impactful products.
                </p>
              </div>
            </div>

            {/* Stats / Highlights */}
            <div className="space-y-4">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="space-y-1 mb-4">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="space-y-1 mb-4">
                  <p className="text-3xl font-bold text-primary">Final</p>
                  <p className="text-sm text-muted-foreground">Year BCA Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4 items-start p-4 rounded-lg bg-background hover:bg-muted transition-colors group">
                <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                <p className="text-foreground font-semibold group-hover:text-primary transition-colors">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
