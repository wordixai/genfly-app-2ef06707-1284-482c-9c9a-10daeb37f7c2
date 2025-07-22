import { useState } from "react";
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
    <Card className="bg-white border-gray-200 hover:bg-gray-50 transition-colors shadow-sm">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar>
            <AvatarImage src={post.user.avatar} />
            <AvatarFallback className="bg-gray-200 text-gray-600">{post.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
              <span className="text-gray-500 text-sm">{post.user.username}</span>
              <span className="text-gray-400 text-sm">·</span>
              <span className="text-gray-500 text-sm">{post.timestamp}</span>
              <Button variant="ghost" size="sm" className="ml-auto p-1 h-auto text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>
            {post.images && post.images.length > 0 && (
              <div className="mb-3">
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="w-full rounded-lg border border-gray-200"
                  />
                ))}
              </div>
            )}
            <div className="flex items-center justify-between max-w-md">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-blue-600 hover:bg-blue-50"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                {post.comments}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRepost}
                className={`hover:bg-green-50 ${
                  reposted ? "text-green-600" : "text-gray-500 hover:text-green-600"
                }`}
              >
                <Repeat2 className="w-4 h-4 mr-1" />
                {repostCount}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`hover:bg-red-50 ${
                  liked ? "text-red-600" : "text-gray-500 hover:text-red-600"
                }`}
              >
                <Heart className={`w-4 h-4 mr-1 ${liked ? "fill-current" : ""}`} />
                {likeCount}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-blue-600 hover:bg-blue-50"
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