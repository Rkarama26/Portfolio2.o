import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rohit.karma026@gmail.com',
      href: 'mailto:rohit.karma026@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9407274612',
      href: 'tel:+919407274612',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Rkarama26',
      color: 'hover:bg-foreground',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rohit026/',
      color: 'hover:bg-primary',
    },

    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:rohit.karma026@gmail.com',
      color: 'hover:bg-accent',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me through any of the following
              channels. I'm always open to discussing new projects, creative
              ideas, or opportunities.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:scale-105 transition-transform group"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <p className="text-muted-foreground mb-8">
              Let's connect on social media and stay in touch. Follow me to see
              my latest projects and professional updates.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`glass-effect border-border ${social.color} transition-all group h-auto py-6`}
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <social.icon className="h-8 w-8" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 glass-effect rounded-xl border-2 border-primary/30">
              <h4 className="text-xl font-semibold mb-2">
                Looking for a developer?
              </h4>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance work and full-time
                opportunities.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="mailto:rohit.karma026@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
