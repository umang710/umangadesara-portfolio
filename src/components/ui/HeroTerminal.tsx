"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";

// Move lines outside the component so it can be referenced globally
const SYSTEM_LINES = [
  "> initializing system architecture...",
  "> loading core stack: [Next.js, Node.js, AWS]",
  "> mounting secure database schemas...",
  "> optimizing REST API latency (-40%)...",
  "> all systems operational. builder ready.",
];

export function HeroTerminal() {
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runDiagnostics = () => {
    if (isRunning) return;
    setIsRunning(true);
    setOutput([]);

    let currentLine = 0;

    const interval = setInterval(() => {
      if (currentLine < SYSTEM_LINES.length) {
        setOutput((prev) => [...prev, SYSTEM_LINES[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 600); // Speed of the typing effect
  };

  return (
    <div
      onClick={runDiagnostics}
      className="w-full rounded-xl border border-zinc-800/60 bg-[#0c0c0e] overflow-hidden cursor-pointer group shadow-2xl hover:border-zinc-700 transition-colors"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-zinc-900/50 border-b border-zinc-800/60">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-zinc-500">
          <Terminal className="w-3 h-3" />
          <span>system_diagnostics.sh</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs md:text-sm h-40 overflow-y-auto">
        {!isRunning && output.length === 0 ? (
          <div className="text-zinc-500 flex items-center h-full justify-center group-hover:text-emerald-400/70 transition-colors">
            [ Click to execute boot sequence ]
          </div>
        ) : (
          <div className="space-y-2">
            {output.map((line, i) => (
              <div
                key={i}
                className={`${i === SYSTEM_LINES.length - 1 ? "text-emerald-400" : "text-zinc-300"}`}
              >
                {line}
              </div>
            ))}
            {isRunning && (
              <div className="w-2 h-4 bg-zinc-400 animate-pulse mt-1" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
