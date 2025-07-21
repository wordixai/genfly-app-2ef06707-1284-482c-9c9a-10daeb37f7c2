import { useState } from "react";
import { PostComposer } from "./PostComposer";
import { PostCard } from "./PostCard";

const mockPosts = [
  {
    id: "1",
    user: {
      name: "科技爱好者",
      username: "@tech_lover",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    content: "刚刚体验了最新的AI技术，真的太震撼了！人工智能的发展速度超出了我们的想象。#人工智能 #科技",
    timestamp: "2小时前",
    likes: 24,
    reposts: 8,
    comments: 12,
    images: ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"]
  },
  {
    id: "2",
    user: {
      name: "旅行摄影师",
      username: "@photographer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9f1a1ec?w=40&h=40&fit=crop&crop=face"
    },
    content: "今天在西湖边拍到了最美的日落，分享给大家。大自然总是能给我们最好的礼物。#摄影 #杭州 #西湖",
    timestamp: "4小时前",
    likes: 156,
    reposts: 32,
    comments: 45,
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop"]
  },
  {
    id: "3",
    user: {
      name: "美食博主",
      username: "@foodie",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    },
    content: "今天尝试做了传统川菜麻婆豆腐，味道居然比餐厅的还要好！分享一下制作心得～ #美食 #川菜 #家常菜",
    timestamp: "6小时前",
    likes: 89,
    reposts: 15,
    comments: 28
  },
  {
    id: "4",
    user: {
      name: "读书笔记",
      username: "@bookworm",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    content: "刚读完《三体》三部曲，刘慈欣的想象力真的让人叹为观止。科幻文学的魅力就在于它能带我们看到未来的无限可能。推荐给所有喜欢思考的朋友！#读书 #科幻 #三体",
    timestamp: "8小时前",
    likes: 67,
    reposts: 22,
    comments: 18
  },
  {
    id: "5",
    user: {
      name: "健身教练",
      username: "@fitness_coach",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    content: "坚持健身100天的感受：不仅身体变得更强壮，精神状态也有了明显改善。记住，最难的不是开始，而是坚持！#健身 #坚持 #健康生活",
    timestamp: "10小时前",
    likes: 123,
    reposts: 41,
    comments: 35
  }
];

export function PostFeed() {
  const [posts, setPosts] = useState(mockPosts);

  const handleNewPost = (content: string, images: string[]) => {
    const newPost = {
      id: Date.now().toString(),
      user: {
        name: "当前用户",
        username: "@current_user",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      },
      content,
      timestamp: "刚刚",
      likes: 0,
      reposts: 0,
      comments: 0,
      images
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="space-y-6">
      <PostComposer onPost={handleNewPost} />
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}