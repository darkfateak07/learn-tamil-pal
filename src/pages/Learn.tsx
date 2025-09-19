import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  MessageSquare, 
  Headphones, 
  Target, 
  Users, 
  Trophy,
  Star,
  Flame
} from "lucide-react";

const Learn = () => {
  const learningModules = [
    {
      id: 1,
      title: "Basic Greetings",
      description: "Learn essential Tamil greetings and introductions",
      icon: <MessageSquare className="w-5 h-5" />,
      progress: 100,
      xpReward: 50,
      difficulty: "Easy" as const,
      isCompleted: true,
      badge: "Completed"
    },
    {
      id: 2,
      title: "Numbers & Counting",
      description: "Master Tamil numbers from 1 to 100",
      icon: <Target className="w-5 h-5" />,
      progress: 75,
      xpReward: 75,
      difficulty: "Easy" as const,
      isCompleted: false,
    },
    {
      id: 3,
      title: "Family Relations",
      description: "Learn words for family members and relationships",
      icon: <Users className="w-5 h-5" />,
      progress: 45,
      xpReward: 100,
      difficulty: "Medium" as const,
      isCompleted: false,
    },
    {
      id: 4,
      title: "Food & Dining",
      description: "Vocabulary for food, cooking, and restaurant conversations",
      icon: <BookOpen className="w-5 h-5" />,
      progress: 0,
      xpReward: 120,
      difficulty: "Medium" as const,
      isCompleted: false,
    },
    {
      id: 5,
      title: "Advanced Grammar",
      description: "Complex sentence structures and verb conjugations",
      icon: <BookOpen className="w-5 h-5" />,
      progress: 0,
      xpReward: 200,
      difficulty: "Hard" as const,
      isCompleted: false,
      isLocked: true,
    },
    {
      id: 6,
      title: "Pronunciation Practice",
      description: "Perfect your Tamil pronunciation with audio exercises",
      icon: <Headphones className="w-5 h-5" />,
      progress: 30,
      xpReward: 80,
      difficulty: "Medium" as const,
      isCompleted: false,
    },
  ];

  const dailyChallenges = [
    {
      title: "Daily Vocabulary",
      description: "Learn 5 new Tamil words",
      reward: "25 XP",
      timeLeft: "4h 23m"
    },
    {
      title: "Pronunciation Challenge",
      description: "Practice tongue twisters",
      reward: "50 XP",
      timeLeft: "4h 23m"
    },
    {
      title: "Translation Sprint",
      description: "Translate 10 sentences",
      reward: "40 XP",
      timeLeft: "4h 23m"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Continue Learning</h1>
            <p className="text-muted-foreground mt-1">
              Keep up your streak and master Tamil step by step!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="flex items-center space-x-1 text-streak-fire">
                <Flame className="w-5 h-5" />
                <span className="text-2xl font-bold">12</span>
              </div>
              <p className="text-xs text-muted-foreground">Day Streak</p>
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1 text-xp-primary">
                <Star className="w-5 h-5" />
                <span className="text-2xl font-bold">1247</span>
              </div>
              <p className="text-xs text-muted-foreground">Total XP</p>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Overall Progress</span>
            <Badge variant="secondary">Level 5</Badge>
          </div>
          <Progress value={65} className="h-3 progress-glow" />
          <p className="text-sm text-muted-foreground mt-2">
            253 XP to reach Level 6
          </p>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Daily Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dailyChallenges.map((challenge, index) => (
            <div key={index} className="bg-card p-4 rounded-lg border card-hover">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-level-gold" />
                  <h3 className="font-semibold">{challenge.title}</h3>
                </div>
                <Badge variant="outline" className="text-xs">
                  {challenge.timeLeft}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {challenge.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-success">
                  {challenge.reward}
                </span>
                <Button size="sm" variant="outline">
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Modules */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningModules.map((module) => (
            <GameCard
              key={module.id}
              title={module.title}
              description={module.description}
              icon={module.icon}
              progress={module.progress}
              xpReward={module.xpReward}
              difficulty={module.difficulty}
              isCompleted={module.isCompleted}
              isLocked={module.isLocked}
              badge={module.badge}
              onClick={() => {
                console.log(`Starting module: ${module.title}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learn;