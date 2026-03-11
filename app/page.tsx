'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // 初始化时间
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
    };

    // 立即更新一次
    updateTime();

    // 每秒更新
    const timer = setInterval(updateTime, 1000);

    // 清理定时器
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <img 
            src="/crayfish.png" 
            alt="小龙虾" 
            className="w-32 h-32 animate-bounce"
          />
        </div>
        <h1 className="text-6xl font-bold text-white tracking-tight">
          OpenClaw{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            AI
          </span>
        </h1>
        {/* 添加实时时间显示 */}
        <div className="mt-4 text-2xl font-mono text-orange-400/90">
          {currentTime}
        </div>
        <p className="mt-4 text-slate-400 text-lg">
          由 Anthropic 提供支持的下一代 AI 助手
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm border border-white/10">
            智能对话
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm border border-white/10">
            代码生成
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-sm border border-white/10">
            内容创作
          </span>
        </div>
      </div>
    </main>
  );
}
