"use client";

import { useState } from "react";
import { Music, Play, Pause } from "lucide-react";

export function AudioWidget() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-8 duration-1000 fade-in">
      <div className="bg-white/60 backdrop-blur-md border border-[#BB528A]/20 p-3 rounded-2xl flex items-center gap-4 shadow-xl hover:border-[#BB528A]/40 transition-colors group">
        <div className="w-10 h-10 rounded-lg bg-[#F6E3E5] border border-[#BB528A]/20 flex items-center justify-center relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-[#BB528A]/5 to-[#BB528A]/20 ${isPlaying ? "animate-pulse" : ""}`}
          />
          <Music
            className={`w-4 h-4 text-[#BB528A] z-10 transition-transform duration-500 ${isPlaying ? "scale-110" : "scale-100"}`}
          />
        </div>

        <div className="flex flex-col pr-4">
          <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 mb-0.5">
            Currently Vibing
          </span>
          <span className="text-sm font-medium text-zinc-900 flex items-center gap-2">
            Nanchaku - Seedhe Maut
          </span>
        </div>

        <div
          className={`flex items-end gap-1 h-4 ml-2 mr-4 ${!isPlaying ? "eq-paused" : ""}`}
        >
          <div className="w-1 bg-[#BB528A]/60 rounded-sm animate-[eq_1.2s_ease-in-out_infinite]" />
          <div className="w-1 bg-[#BB528A]/60 rounded-sm animate-[eq_1.2s_ease-in-out_infinite_0.3s]" />
          <div className="w-1 bg-[#BB528A]/60 rounded-sm animate-[eq_1.2s_ease-in-out_infinite_0.6s]" />
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-auto p-2 rounded-full bg-white hover:bg-[#F6E3E5] text-zinc-600 hover:text-[#BB528A] transition-colors border border-[#BB528A]/20 shadow-sm"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Play className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
