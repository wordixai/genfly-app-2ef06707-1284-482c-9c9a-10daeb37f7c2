import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar } from "lucide-react";

const trendingTopics = [
  { name: "#人工智能", posts: "12.3K", trend: "up" },
  { name: "#春节回家", posts: "8.7K", trend: "up" },
  { name: "#健身打卡", posts: "5.2K", trend: "stable" },
  { name: "#美食分享", posts: "4.8K", trend: "up" },
  { name: "#读书笔记", posts: "3.6K", trend: "down" }
];

const recommendedUsers = [
  {
    name: "科技评论员",
    username: "@tech_reviewer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    followers: "12.5K"
  },
  {
    name: "摄影师小王",
    username: "@photographer_wang",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9f1a1ec?w=40&h=40&fit=crop&crop=face",
    followers: "8.3K"
  },
  {
    name: "美食达人",
    username: "@foodie_expert",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    followers: "15.7K"
  }
];

export function TrendingSidebar() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            热门话题
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.name} className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 font-medium hover:underline cursor-pointer">
                  {topic.name}
                </p>
                <p className="text-gray-400 text-sm">{topic.posts} 讨论</p>
              </div>
              <Badge 
                variant={topic.trend === "up" ? "default" : "secondary"}
                className={
                  topic.trend === "up" 
                    ? "bg-green-600 text-white" 
                    : topic.trend === "stable"
                    ? "bg-yellow-600 text-white"
                    : "bg-red-600 text-white"
                }
              >
                {index + 1}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Users className="w-5 h-5 mr-2" />
            推荐关注
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendedUsers.map((user) => (
            <div key={user.username} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-white font-medium">{user.name}</p>
                  <p className="text-gray-400 text-sm">{user.followers} 关注者</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                关注
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            即将开始
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-gray-700 rounded-lg">
              <p className="text-white font-medium">AI技术交流会</p>
              <p className="text-gray-400 text-sm">今天 19:00</p>
            </div>
            <div className="p-3 bg-gray-700 rounded-lg">
              <p className="text-white font-medium">摄影作品分享</p>
              <p className="text-gray-400 text-sm">明天 14:30</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}