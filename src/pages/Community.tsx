import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Trophy, 
  Users, 
  Calendar, 
  Target, 
  Crown, 
  Medal,
  Star,
  Flame,
  TrendingUp,
  Award
} from "lucide-react";

const Community = () => {
  const leaderboard = [
    { rank: 1, name: "Arjun Kumar", xp: 12847, streak: 45, avatar: "/avatar1.jpg", badge: "Tamil Master" },
    { rank: 2, name: "Priya Selvam", xp: 11203, streak: 32, avatar: "/avatar2.jpg", badge: "Vocabulary Queen" },
    { rank: 3, name: "Raj Patel", xp: 9876, streak: 28, avatar: "/avatar3.jpg", badge: "Grammar Guru" },
    { rank: 4, name: "Meera Nair", xp: 8954, streak: 23, avatar: "/avatar4.jpg", badge: "Culture Expert" },
    { rank: 5, name: "You", xp: 1247, streak: 12, avatar: "/your-avatar.jpg", badge: "Rising Star" },
  ];

  const weeklyContests = [
    {
      title: "Tamil Poetry Challenge",
      description: "Write a 4-line poem in Tamil",
      participants: 234,
      timeLeft: "2 days",
      reward: "500 XP + Poetry Badge",
      difficulty: "Hard"
    },
    {
      title: "Vocabulary Sprint",
      description: "Learn 50 new words this week",
      participants: 567,
      timeLeft: "5 days",
      reward: "200 XP",
      difficulty: "Medium"
    },
    {
      title: "Cultural Quiz",
      description: "Test your Tamil culture knowledge",
      participants: 423,
      timeLeft: "3 days",
      reward: "150 XP + Culture Badge",
      difficulty: "Easy"
    }
  ];

  const achievements = [
    { name: "First Step", description: "Complete your first lesson", earned: true, rarity: "Common" },
    { name: "Week Warrior", description: "Maintain 7-day streak", earned: true, rarity: "Common" },
    { name: "Social Butterfly", description: "Join 5 community contests", earned: false, rarity: "Rare" },
    { name: "Tamil Scholar", description: "Complete all beginner lessons", earned: false, rarity: "Epic" },
    { name: "Culture Master", description: "Score 100% on culture quiz", earned: false, rarity: "Legendary" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-level-gold" />;
      case 2: return <Medal className="w-5 h-5 text-level-silver" />;
      case 3: return <Award className="w-5 h-5 text-level-bronze" />;
      default: return <div className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</div>;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-muted text-muted-foreground";
      case "Rare": return "bg-primary text-primary-foreground";
      case "Epic": return "bg-purple-500 text-white";
      case "Legendary": return "bg-gradient-to-r from-yellow-400 to-orange-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-4">Tamil Learning Community</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow Tamil learners, compete in challenges, and celebrate your achievements together!
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">10,247</div>
            <p className="text-sm text-muted-foreground">Active Learners</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Trophy className="w-8 h-8 text-level-gold mx-auto mb-2" />
            <div className="text-2xl font-bold">1,523</div>
            <p className="text-sm text-muted-foreground">Contests Completed</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Target className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold">95%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold">2.5M</div>
            <p className="text-sm text-muted-foreground">Words Learned</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Leaderboard */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-level-gold" />
                <span>Weekly Leaderboard</span>
              </CardTitle>
              <CardDescription>Top Tamil learners this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                      user.name === "You" 
                        ? "bg-primary/10 border border-primary/20" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {getRankIcon(user.rank)}
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">{user.name}</span>
                        {user.name === "You" && (
                          <Badge variant="secondary" className="text-xs">You</Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {user.badge}
                      </Badge>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-sm">
                        <Star className="w-4 h-4 text-xp-primary" />
                        <span className="font-semibold">{user.xp.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Flame className="w-3 h-3 text-streak-fire" />
                        <span>{user.streak} days</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Contests */}
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Weekly Contests</span>
              </CardTitle>
              <CardDescription>Join and compete with others</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyContests.map((contest, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm">{contest.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {contest.timeLeft}
                      </Badge>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">
                      {contest.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {contest.participants} participants
                      </span>
                      <Badge 
                        className={`text-xs ${
                          contest.difficulty === 'Easy' 
                            ? 'bg-success' 
                            : contest.difficulty === 'Medium' 
                            ? 'bg-warning' 
                            : 'bg-destructive'
                        }`}
                      >
                        {contest.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="border-t pt-2">
                      <p className="text-xs text-success font-medium mb-2">
                        🏆 {contest.reward}
                      </p>
                      <Button size="sm" className="w-full">
                        Join Contest
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Achievements</span>
              </CardTitle>
              <CardDescription>Your learning milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-2 rounded transition-colors ${
                      achievement.earned 
                        ? "bg-success/10 text-success" 
                        : "text-muted-foreground"
                    }`}
                  >
                    <div className={`p-1 rounded ${achievement.earned ? "bg-success" : "bg-muted"}`}>
                      <Trophy className={`w-3 h-3 ${achievement.earned ? "text-white" : "text-muted-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{achievement.name}</div>
                      <div className="text-xs opacity-80">{achievement.description}</div>
                    </div>
                    <Badge className={`text-xs ${getRarityColor(achievement.rarity)}`}>
                      {achievement.rarity}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;