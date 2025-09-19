import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Trophy, Zap } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  progress?: number;
  xpReward?: number;
  difficulty?: "Easy" | "Medium" | "Hard";
  isCompleted?: boolean;
  isLocked?: boolean;
  onClick?: () => void;
  badge?: string;
  children?: ReactNode;
}

const GameCard = ({
  title,
  description,
  icon,
  progress = 0,
  xpReward,
  difficulty = "Easy",
  isCompleted = false,
  isLocked = false,
  onClick,
  badge,
  children,
}: GameCardProps) => {
  const difficultyColors = {
    Easy: "bg-success text-success-foreground",
    Medium: "bg-warning text-warning-foreground", 
    Hard: "bg-destructive text-destructive-foreground",
  };

  return (
    <Card 
      className={`card-hover cursor-pointer transition-all duration-300 ${
        isLocked ? "opacity-60 cursor-not-allowed" : ""
      } ${isCompleted ? "border-success bg-success/5" : ""}`}
      onClick={!isLocked ? onClick : undefined}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className={`p-2 rounded-lg ${
                isCompleted ? "bg-success text-success-foreground" : "bg-primary text-primary-foreground"
              }`}>
                {icon}
              </div>
            )}
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm mt-1">{description}</CardDescription>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            {badge && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
            {isCompleted && (
              <Trophy className="w-5 h-5 text-level-gold animate-bounce-subtle" />
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {children}
        
        <div className="mt-4 space-y-3">
          {/* Progress Bar */}
          {progress > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {/* Bottom Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Badge className={difficultyColors[difficulty]} variant="secondary">
                {difficulty}
              </Badge>
              {xpReward && (
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Star className="w-3 h-3 text-xp-primary" />
                  <span>{xpReward} XP</span>
                </div>
              )}
            </div>
            
            {!isLocked && !isCompleted && (
              <div className="flex items-center space-x-1 text-primary">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-medium">Start</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;