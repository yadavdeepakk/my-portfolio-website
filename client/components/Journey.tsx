import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
}

const Journey = () => {
  const timeline: TimelineItem[] = [
    {
      id: 1,
      year: "2022",
      title: "Class 12 with Maths & Commerce",
      description:
        "Completed senior secondary education with Commerce stream and Mathematics, laying the foundation for a tech career.",
    },
    {
      id: 2,
      year: "2023",
      title: "Started BCA & Programming Basics",
      description:
        "Began my Bachelor of Computer Applications degree. Learned programming fundamentals with Java and JavaScript, building a strong foundation in coding concepts and algorithms.",
    },
    {
      id: 3,
      year: "2024",
      title: "Web Development Journey",
      description:
        "Mastered HTML5, CSS3, and JavaScript. Built my first web projects including Calculator, Lottery Game, Password Generator, and Weather Forecast app. Started learning React and the MERN stack.",
    },
    {
      id: 4,
      year: "2024",
      title: "Full-Stack Development",
      description:
        "Dived deep into the MERN stack (MongoDB, Express, React, Node.js). Built full-stack applications and explored automation with n8n for data management and workflow automation.",
    },
    {
      id: 5,
      year: "2024",
      title: "Hackathons & System Design",
      description:
        "Participated in multiple hackathons (AI-Hackathon-MS, NsitHackthon, Ignitia). Started practicing Data Structures and Algorithms in Java and learning system design principles.",
    },
    {
      id: 6,
      year: "2025",
      title: "AI Tools & Modern Development",
      description:
        "Exploring AI-powered development tools like Cursor, Claude, and n8n. Building intelligent projects that leverage automation and AI, enhancing productivity and creating innovative applications.",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-primary">My Journey</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of my learning path and milestones in tech
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.id} className="flex gap-6">
                {/* Timeline marker */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-background">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-1 h-20 bg-gradient-to-b from-primary to-primary/20 mt-2"></div>
                  )}
                </div>

                {/* Timeline content */}
                <div className="pb-8 flex-1">
                  <div className="bg-background rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold flex-shrink-0">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Future goal */}
          <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Current Goal
            </h3>
            <p className="text-foreground text-lg">
              Become a Software Engineer and make meaningful contributions to
              open-source projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
