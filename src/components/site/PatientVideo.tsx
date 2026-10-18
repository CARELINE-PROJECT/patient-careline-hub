import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { eyeLaserVideos } from "@/content/eyeLaser";

export function PatientVideo({ video, play, external, privacy, real }: {
  video: (typeof eyeLaserVideos)[number]; play: string; external: string; privacy: string; real: string;
}) {
  const [playing, setPlaying] = useState(false);
  return <article className="overflow-hidden rounded-lg border border-border bg-card">
    <div className="aspect-video bg-secondary">
      {playing ? <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> :
        <div className="flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
          <Play className="size-8 text-brand" aria-hidden="true" />
          <p className="text-xs text-muted-foreground">{video.language}{video.realProcedure ? ` · ${real}` : ""}</p>
          <Button onClick={() => setPlaying(true)} aria-label={`${play} : ${video.title}`}><Play aria-hidden="true" />{play}</Button>
        </div>}
    </div>
    <div className="p-4">
      <h3 className="font-display text-lg leading-snug text-branddeep">{video.title}</h3>
      <p className="mt-2 text-xs text-muted-foreground">{video.publisher}</p>
      <Button variant="link" asChild className="mt-2 px-0"><a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">{external}<ExternalLink aria-hidden="true" /></a></Button>
      {!playing && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{privacy}</p>}
    </div>
  </article>;
}