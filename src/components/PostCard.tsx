import { useState } from "react";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Dot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: string;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  reposts: number;
  comments: number;
  images?: string[];
  isNew?: boolean;
  hasUnreadComments?: boolean;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [repostCount, setRepostCount] = useState(post.reposts);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleRepost = () => {
    if (reposted) {
      setRepostCount(repostCount - 1);
    } else {
      setRepostCount(repostCount + 1);
    }
    setReposted(!reposted);
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors relative">
      {post.isNew && (
        <div className="absolute top-3 right-3">
          <Badge variant="destructive" className="text-xs">
            新
          </Badge>
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <div className="relative">
            <Avatar>
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            {post.isNew && (
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3 border-2 border-gray-800"></div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-white flex items-center space-x-2">
                <span>{post.user.name}</span>
                {post.isNew && (
                  <div className="bg-red-500 rounded-full w-2 h-2"></div>
                )}
              </h3>
              <span className="text-gray-400 text-sm">{post.user.username}</span>
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-gray-400 text-sm">{post.timestamp}</span>
              <Button variant="ghost" size="sm" className="ml-auto p-1 h-auto">
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </Button>
            </div>
            <p className="text-white mb-3 leading-relaxed">{post.content}</p>
            {post.images && post.images.length > 0 && (
              <div className="mb-3">
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="w-full rounded-lg border border-gray-600"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center justify-between max-w-md">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 relative"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                {post.comments}
                {post.hasUnreadComments && (
                  <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></div>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRepost}
                className={`hover:bg-green-400/10 ${
                  reposted ? "text-green-400" : "text-gray-400 hover:text-green-400"
                }`}
              >
                <Repeat2 className="w-4 h-4 mr-1" />
                {repostCount}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`hover:bg-red-400/10 ${
                  liked ? "text-red-400" : "text-gray-400 hover:text-red-400"
                }`}
              >
                <Heart className={`w-4 h-4 mr-1 ${liked ? "fill-current" : ""}`} />
                {likeCount}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-blue-400 hover:bg-blue-400/10"
              >
                <Share className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}