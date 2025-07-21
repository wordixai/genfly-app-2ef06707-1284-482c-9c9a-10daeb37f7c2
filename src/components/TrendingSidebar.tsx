import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, Dot } from "lucide-react";

const trendingTopics = [
  { name: "#人工智能", posts: "12.3K", trend: "up", isNew: true },
  { name: "#春节回家", posts: "8.7K", trend: "up", isNew: false },
  { name: "#健身打卡", posts: "5.2K", trend: "stable", isNew: true },
  { name: "#美食分享", posts: "4.8K", trend: "up", isNew: false },
  { name: "#读书笔记", posts: "3.6K", trend: "down", isNew: false }
];

const recommendedUsers = [
  {
    name: "科技评论员",
    username: "@tech_reviewer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    followers: "12.5K",
    hasNewContent: true
  },
  {
    name: "摄影师小王",
    username: "@photographer_wang",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9f1a1ec?w=40&h=40&fit=crop&crop=face",
    followers: "8.3K",
    hasNewContent: false
  },
  {
    name: "美食达人",
    username: "@foodie_expert",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    followers: "15.7K",
    hasNewContent: true
  }
];

const upcomingEvents = [
  { name: "AI技术交流会", time: "今天 19:00", hasReminder: true },
  { name: "摄影作品分享", time: "明天 14:30", hasReminder: false }
];

export function TrendingSidebar() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 border-gray-700 relative">
        <div className="absolute top-2 right-2">
          <div className="bg-red-500 rounded-full w-2 h-2"></div>
        </div>
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            热门话题
            <Badge variant="destructive" className="ml-2 text-xs">
              2 新
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={topic.name} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {topic.isNew && (
                  <div className="bg-red-500 rounded-full w-2 h-2"></div>
                )}
                <div>
                  <p className="text-blue-400 font-medium hover:underline cursor-pointer">
                    {topic.name}
                  </p>
                  <p className="text-gray-400 text-sm">{topic.posts} 讨论</p>
                </div>
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
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {user.hasNewContent && (
                    <div className="absolute -top-0.5 -right-0.5 bg-red-500 rounded-full w-3 h-3 border border-gray-800"></div>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <p className="text-white font-medium">{user.name}</p>
                    {user.hasNewContent && (
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    )}
                  </div>
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
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-3 bg-gray-700 rounded-lg relative">
                {event.hasReminder && (
                  <div className="absolute top-2 right-2 bg-red-500 rounded-full w-2 h-2"></div>
                )}
                <div className="flex items-center space-x-2">
                  {event.hasReminder && (
                    <div className="bg-red-500 rounded-full w-2 h-2"></div>
                  )}
                  <div>
                    <p className="text-white font-medium">{event.name}</p>
                    <p className="text-gray-400 text-sm">{event.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}