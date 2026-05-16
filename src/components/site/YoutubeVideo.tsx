import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";

type Props = {
  videoId: string;
  title: string;
};

declare global {
  interface Window {
    YT?: {
      Player: new (el: HTMLElement, opts: unknown) => YTPlayerInstance;
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YTPlayerInstance = {
  destroy?: () => void;
  seekTo?: (s: number, allowSeekAhead?: boolean) => void;
  playVideo?: () => void;
};

let apiPromise: Promise<NonNullable<Window["YT"]>> | null = null;

function loadYouTubeApi(): Promise<NonNullable<Window["YT"]>> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      if (window.YT) resolve(window.YT);
    };
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.head.appendChild(tag);
    }
  });
  return apiPromise;
}

export function YoutubeVideo({ videoId, title }: Props) {
  const t = useT();
  const [loaded, setLoaded] = useState(false);
  const [autoStarted, setAutoStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerHostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  useEffect(() => {
    if (loaded || !containerRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          setAutoStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [loaded]);

  useEffect(() => {
    if (!loaded || !playerHostRef.current) return;
    let destroyed = false;
    loadYouTubeApi().then((YT) => {
      if (destroyed || !playerHostRef.current) return;
      playerRef.current = new YT.Player(playerHostRef.current, {
        host: "https://www.youtube-nocookie.com",
        videoId,
        playerVars: {
          autoplay: 1,
          mute: autoStarted ? 1 : 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onStateChange: (e: { data: number }) => {
            if (e.data === YT.PlayerState.ENDED) setEnded(true);
          },
        },
      });
    });
    return () => {
      destroyed = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        // ignore
      }
      playerRef.current = null;
    };
  }, [loaded, videoId, autoStarted]);

  function handleReplay() {
    setEnded(false);
    try {
      playerRef.current?.seekTo?.(0, true);
      playerRef.current?.playVideo?.();
    } catch {
      // ignore
    }
  }

  function handleManualPlay() {
    setAutoStarted(false);
    setLoaded(true);
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl shadow-elegant"
    >
      {loaded ? (
        <>
          <div ref={playerHostRef} className="h-full w-full" />
          {ended && (
            <button
              type="button"
              onClick={handleReplay}
              className="group absolute inset-0 flex items-center justify-center"
              aria-label={t.common.replay}
            >
              <img
                src={thumbnailUrl}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-elegant transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                  <RotateCcw className="h-6 w-6 text-foreground sm:h-8 sm:w-8" />
                </div>
                <span className="text-sm font-medium text-white">{t.common.replay}</span>
              </div>
            </button>
          )}
        </>
      ) : (
        <button
          type="button"
          onClick={handleManualPlay}
          aria-label={title}
          className="group relative block h-full w-full"
        >
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-elegant transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
              <Play className="ml-1 h-6 w-6 fill-foreground text-foreground sm:h-8 sm:w-8" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
