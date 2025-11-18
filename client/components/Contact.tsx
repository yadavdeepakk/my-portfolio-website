import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully! I'll get back to you soon.");
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:yadavdeepakk9212@gmail..com",
      label: "yadavdeepakk9212@gmail..com",
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

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Links */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Get in Touch
              </h3>

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

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>

                {submitted && (
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-primary font-semibold text-center animate-fade-in">
                    Thank you! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
