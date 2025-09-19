import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GameCard from "@/components/GameCard";
import { 
  Play, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Trophy, 
  Target,
  Zap,
  Star,
  Mic,
  Volume2,
  ArrowRight,
  CheckCircle2,
  Timer
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import tamilCulture from "@/assets/tamil-culture.jpg";

const Index = () => {
  const quickLessons = [
    {
      id: 1,
      title: "Quick Start",
      description: "Basic Tamil phrases to get you started",
      icon: <Play className="w-5 h-5" />,
      xpReward: 25,
      difficulty: "Easy" as const,
    },
    {
      id: 2,
      title: "Daily Practice",
      description: "Today's vocabulary lesson",
      icon: <Target className="w-5 h-5" />,
      xpReward: 50,
      difficulty: "Easy" as const,
    },
    {
      id: 3,
      title: "Voice Challenge",
      description: "Practice pronunciation",
      icon: <Mic className="w-5 h-5" />,
      xpReward: 75,
      difficulty: "Medium" as const,
    },
  ];

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Smart Translation",
      description: "Your language → English → Tamil with pronunciation guide"
    },
    {
      icon: <Trophy className="w-8 h-8 text-level-gold" />,
      title: "Gamified Learning",
      description: "Earn XP, badges, and maintain streaks while learning"
    },
    {
      icon: <Volume2 className="w-8 h-8 text-accent" />,
      title: "Voice Features",
      description: "Voice input and output for natural conversation practice"
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Community",
      description: "Compete with friends and join weekly contests"
    },
  ];

  const achievements = [
    { name: "First Steps", icon: <CheckCircle2 className="w-4 h-4" />, earned: true },
    { name: "Week Warrior", icon: <Timer className="w-4 h-4" />, earned: true },
    { name: "Vocab Master", icon: <BookOpen className="w-4 h-4" />, earned: false },
    { name: "Conversation Pro", icon: <MessageSquare className="w-4 h-4" />, earned: false },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 animate-bounce-in" variant="secondary">
              <Zap className="w-3 h-3 mr-1" />
              AI-Powered Tamil Learning
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              Master <span className="gradient-text">Tamil</span> with
              <br />
              <span className="gradient-text">Vanakkam Tamil</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Learn Tamil from basics with gamified lessons, AI-powered translations, 
              and voice practice. From complete beginner to confident speaker.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/learn">
                <Button size="lg" className="hero-glow text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <MessageSquare className="w-5 h-5 mr-2" />
                Try AI Chat
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-center space-x-8 text-center">
              <div className="animate-slide-up">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-2xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jump into quick lessons designed to get you speaking Tamil from day one
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickLessons.map((lesson) => (
              <GameCard
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                icon={lesson.icon}
                xpReward={lesson.xpReward}
                difficulty={lesson.difficulty}
                onClick={() => console.log(`Starting ${lesson.title}`)}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/learn">
              <Button variant="outline" size="lg">
                View All Lessons
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Vanakkam Tamil?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the most effective way to learn Tamil with our innovative features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-muted w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Immerse in Tamil Culture
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Learn not just the language, but the rich culture behind it. 
                Discover traditions, food, festivals, and the beautiful heritage of Tamil Nadu.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Cultural context for every lesson</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Traditional stories and literature</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span>Regional dialects and variations</span>
                </div>
              </div>
              <Button className="mt-6" size="lg">
                Explore Culture
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={tamilCulture} 
                alt="Tamil Culture" 
                className="rounded-lg shadow-lg w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Earn badges, maintain streaks, and unlock achievements as you master Tamil
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  achievement.earned 
                    ? "bg-success/10 border-success text-success" 
                    : "bg-muted border-border text-muted-foreground"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {achievement.icon}
                  <span className="text-sm font-medium">{achievement.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-card p-6 rounded-lg border max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Current Streak</span>
              <Badge variant="secondary" className="bg-streak-fire/10 text-streak-fire">
                🔥 12 Days
              </Badge>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1,247 XP</div>
              <p className="text-sm text-muted-foreground">253 XP to Level 6</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Speak Tamil?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering Tamil. 
            Start your journey today - it's free!
          </p>
          <Link to="/learn">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Star className="w-5 h-5 mr-2" />
              Start Learning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;