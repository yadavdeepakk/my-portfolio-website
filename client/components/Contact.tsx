import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {

  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:yadavdeepakk9212@gmail.com",
      label: "yadavdeepakk9212@gmail.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yadavdeepakk",
      label: "github.com/yadavdeepakk",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/deepak-yadav-922503245/",
      label: "LinkedIn Profile",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-primary">Contact</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's build something cool together! Reach out and let's start a
              conversation.
            </p>
          </div>

          {/* Contact Links */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all group"
                  >
                    <div className="mt-1">
                      <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
