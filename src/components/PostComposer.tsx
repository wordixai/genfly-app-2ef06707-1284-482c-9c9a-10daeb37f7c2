import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, MapPin, Calendar, Smile } from "lucide-react";

interface PostComposerProps {
  onPost: (content: string, images: string[]) => void;
}

export function PostComposer({ onPost }: PostComposerProps) {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content, []);
      setContent("");
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback>用户</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="分享你的想法..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-transparent border-none resize-none text-xl placeholder-gray-400 text-white min-h-[120px]"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                  <Image className="w-4 h-4 mr-1" />
                  图片
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                  <Smile className="w-4 h-4 mr-1" />
                  表情
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                  <MapPin className="w-4 h-4 mr-1" />
                  位置
                </Button>
              </div>
              <Button 
                onClick={handleSubmit}
                disabled={!content.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                发表
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}