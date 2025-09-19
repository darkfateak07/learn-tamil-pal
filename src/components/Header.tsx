import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Flame, 
  Star, 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  MessageCircle, 
  Users, 
  Settings 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Learn", path: "/learn", icon: BookOpen },
    { name: "Chat", path: "/chat", icon: MessageCircle },
    { name: "Community", path: "/community", icon: Users },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  const userStats = {
    xp: 1247,
    level: 5,
    streak: 12,
    nextLevelXp: 1500,
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg hero-glow flex items-center justify-center">
              <span className="text-2xl font-bold text-white">வ</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              Vanakkam Tamil
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Stats & Profile */}
          <div className="flex items-center space-x-4">
            {/* XP Progress */}
            <div className="hidden lg:flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-xp-primary" />
                <span className="text-sm font-semibold">{userStats.xp} XP</span>
              </div>
              <div className="w-20">
                <Progress 
                  value={(userStats.xp / userStats.nextLevelXp) * 100} 
                  className="h-2 progress-glow"
                />
              </div>
              <Badge variant="secondary" className="text-xs">
                Level {userStats.level}
              </Badge>
            </div>

            {/* Streak */}
            <div className="hidden sm:flex items-center space-x-1">
              <Flame className="w-4 h-4 text-streak-fire" />
              <span className="text-sm font-semibold text-streak-fire">{userStats.streak}</span>
            </div>

            {/* Trophy */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Trophy className="w-4 h-4 text-level-gold" />
            </Button>

            {/* Profile Avatar */}
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                U
              </AvatarFallback>
            </Avatar>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile User Stats */}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-xp-primary" />
                  <span className="text-sm font-semibold">{userStats.xp} XP</span>
                  <Badge variant="secondary" className="text-xs">Level {userStats.level}</Badge>
                </div>
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-streak-fire" />
                  <span className="text-sm font-semibold text-streak-fire">{userStats.streak}</span>
                </div>
              </div>
              <div className="mt-2">
                <Progress 
                  value={(userStats.xp / userStats.nextLevelXp) * 100} 
                  className="h-2 progress-glow"
                />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;