"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Volume1 } from "lucide-react";

export function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  // Toggle Play / Pause / Replay
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        // If the video already finished, reset it to the beginning before playing
        if (videoRef.current.ended) {
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle the slider dragging
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
    setVolume(newVolume);
  };

  // Click the icon to instantly mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      if (volume > 0) {
        setPreviousVolume(volume); // Remember where the slider was
        videoRef.current.volume = 0;
        videoRef.current.muted = true;
        setVolume(0);
      } else {
        const restoredVolume = previousVolume || 1;
        videoRef.current.volume = restoredVolume;
        videoRef.current.muted = false;
        setVolume(restoredVolume);
      }
    }
  };

  // Automatically reset the UI when the video finishes playing naturally
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  // Dynamically change icon based on volume level
  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div
      className="relative w-full max-w-5xl mx-auto group animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Ambient Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/40 via-brand-accent/10 to-brand-accent/40 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />

      {/* Video Container */}
      <div className="relative p-1 rounded-[2rem] bg-gradient-to-b from-brand-accent/30 to-brand-accent/5 shadow-2xl transition-all duration-500 hover:shadow-brand-accent/20">
        {/* Inner mask to keep corners perfectly rounded */}
        <div className="relative rounded-[calc(2rem-4px)] overflow-hidden bg-zinc-950 aspect-video md:aspect-[21/9] flex items-center justify-center">
          <video
            ref={videoRef}
            src="/intro.mp4"
            playsInline
            onEnded={handleVideoEnd}
            onClick={togglePlay}
            className={`w-full h-full object-cover transition-opacity duration-700 cursor-pointer ${
              isPlaying ? "opacity-100" : "opacity-60"
            }`}
          />

          {/* Big Center Play Button (Visible only when paused) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute m-auto w-20 h-20 flex items-center justify-center rounded-full bg-brand-accent/90 text-white shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform hover:scale-110 z-10"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </button>
          )}

          {/* Bottom Control Bar (Fades in on hover or when paused) */}
          <div
            className={`absolute inset-x-0 bottom-0 p-6 pt-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center gap-4 transition-opacity duration-300 ${
              isHovering || !isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Small Play/Pause/Replay Toggle */}
            <button
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" fill="currentColor" />
              ) : (
                <Play className="w-5 h-5" fill="currentColor" />
              )}
            </button>

            {/* Expanding Volume Controls */}
            <div className="flex items-center gap-2 group/volume">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
                aria-label="Toggle mute"
              >
                <VolumeIcon className="w-5 h-5" />
              </button>

              {/* Slider expands smoothly when hovering over the volume area */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-0 opacity-0 group-hover/volume:w-24 group-hover/volume:opacity-100 transition-all duration-300 ease-in-out cursor-pointer accent-brand-accent h-1.5 bg-white/30 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
