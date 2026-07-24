"use client";

import { useState } from "react";
import { Music, Play, Pause } from "lucide-react";

export function AudioWidget() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-8 duration-1000 fade-in">
      <div className="bg-[#09090b]/80 backdrop-blur-md border border-zinc-800/50 p-3 rounded-2xl flex items-center gap-4 shadow-2xl hover:border-zinc-700 transition-colors group">
        {/* Album Art / Icon */}
        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 ${isPlaying ? "animate-pulse" : ""}`}
          />
          <Music
            className={`w-4 h-4 text-zinc-400 z-10 transition-transform duration-500 ${isPlaying ? "scale-110" : "scale-100"}`}
          />
        </div>

        {/* Track Info */}
        <div className="flex flex-col pr-4">
          <span className="text-[10px] uppercase tracking-wider font-mono text-zinc-500 mb-0.5">
            Currently Vibing
          </span>
          <span className="text-sm font-medium text-zinc-100 flex items-center gap-2">
            All The Stars - Kendrick Lamar, SZA
          </span>
        </div>

        {/* Equalizer Animation */}
        <div
          className={`flex items-end gap-1 h-4 ml-2 mr-4 ${!isPlaying ? "eq-paused" : ""}`}
        >
          <div className="eq-bar" />
          <div className="eq-bar" />
          <div className="eq-bar" />
        </div>

        {/* Play/Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-auto p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors border border-zinc-800/50"
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
