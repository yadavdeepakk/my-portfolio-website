const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript"],
    },
    {
      category: "Web & Markup",
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "EJS"],
    },
    {
      category: "Frontend",
      skills: ["React", "Redux", "Vite", "Figma"],
    },
    {
      category: "Backend & Frameworks",
      skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "NPM", "Nodemon", "Postman", "Vercel", "n8n"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-primary">Skills & Tech Stack</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here's my technical toolkit. I'm always learning and expanding my expertise.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="space-y-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-semibold border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-12 p-6 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">Learning Goals</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Advanced backend concepts and microservices architecture</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Data Structures and Algorithms for competitive programming</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>System design and scalable application architecture</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Cloud technologies and DevOps practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
