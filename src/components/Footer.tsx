import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Rohit Vishwakarma. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive animate-pulse" />
            <span>by Rohit vishwakarma</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;