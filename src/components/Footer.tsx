import { Link } from "react-router-dom";
import { Heart, Globe, Mail, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg hero-glow flex items-center justify-center">
                <span className="text-lg font-bold text-white">வ</span>
              </div>
              <span className="text-xl font-bold gradient-text">Vanakkam Tamil</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Master Tamil language through AI-powered lessons, gamified learning, 
              and community interaction. From complete beginner to confident speaker.
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for Tamil learners worldwide</span>
              <Globe className="w-4 h-4 text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Learning</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/learn" className="hover:text-primary transition-colors">Lessons</Link></li>
              <li><Link to="/chat" className="hover:text-primary transition-colors">AI Chat</Link></li>
              <li><Link to="/community" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="/challenges" className="hover:text-primary transition-colors">Challenges</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Vanakkam Tamil. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:hello@vanakkamtamil.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Email us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/vanakkam-tamil" 
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/vanakkamtamil" 
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;