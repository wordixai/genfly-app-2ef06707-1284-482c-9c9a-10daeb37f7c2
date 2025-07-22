import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Image, MapPin, Calendar, Smile } from "lucide-react";

interface PostComposerProps {
  onPost: (content: string, images: string[]) => void;
}

const emojiCategories = {
  "表情": ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩"],
  "手势": ["👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👋", "🤚", "🖐️", "✋", "🖖", "👏", "🙌", "🤝", "🙏", "✍️", "💪", "🦵", "🦶"],
  "爱心": ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "♥️", "💯", "💢", "💥", "💫", "💦", "💨"],
  "物品": ["🎉", "🎊", "🎈", "🎁", "🏆", "🥇", "🥈", "🥉", "⭐", "🌟", "💫", "✨", "🎯", "🎮", "🎲", "🎪", "🎭", "🎨", "🎬", "🎤", "🎧", "🎵", "🎶", "📱", "💻", "📷", "📹", "📺", "📻", "⏰"],
  "食物": ["🍎", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️", "🫑", "🌽", "🥕", "🫒", "🧄", "🧅", "🍄", "🥜"],
};

export function PostComposer({ onPost }: PostComposerProps) {
  const [content, setContent] = useState("");
  const [activeEmojiCategory, setActiveEmojiCategory] = useState("表情");

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content, []);
      setContent("");
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setContent(prev => prev + emoji);
  };

  return (
    <Card className="bg-white border-gray-200 shadow-sm">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
            <AvatarFallback className="bg-gray-200 text-gray-600">用户</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="分享你的想法..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-transparent border-none resize-none text-xl placeholder-gray-500 text-gray-900 min-h-[120px] focus-visible:ring-0"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <Image className="w-4 h-4 mr-1" />
                  图片
                </Button>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      <Smile className="w-4 h-4 mr-1" />
                      表情
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-0 bg-white border-gray-200 shadow-lg" align="start">
                    <div className="flex flex-col">
                      {/* 表情分类标签 */}
                      <div className="flex border-b border-gray-200 bg-white">
                        {Object.keys(emojiCategories).map((category) => (
                          <Button
                            key={category}
                            variant="ghost"
                            size="sm"
                            onClick={() => setActiveEmojiCategory(category)}
                            className={`flex-1 rounded-none border-b-2 transition-colors ${
                              activeEmojiCategory === category
                                ? "border-blue-500 text-blue-600 bg-blue-50"
                                : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                      
                      {/* 表情网格 */}
                      <div className="p-4 max-h-64 overflow-y-auto">
                        <div className="grid grid-cols-8 gap-2">
                          {emojiCategories[activeEmojiCategory as keyof typeof emojiCategories].map((emoji, index) => (
                            <button
                              key={index}
                              onClick={() => handleEmojiClick(emoji)}
                              className="w-8 h-8 text-xl hover:bg-gray-100 rounded transition-colors flex items-center justify-center"
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  <MapPin className="w-4 h-4 mr-1" />
                  位置
                </Button>
              </div>
              <Button 
                onClick={handleSubmit}
                disabled={!content.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-300 disabled:text-gray-500"
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