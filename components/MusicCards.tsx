import { Music } from "@/types/music"

type Props = {
  music: Music
  onPlay: (music: Music) => void
}

export default function MusicCard({ music, onPlay }: Props) {

  return (
    <div
      onClick={() => onPlay(music)}
      className="bg-zinc-900 p-4 rounded-xl cursor-pointer hover:bg-zinc-800 transition"
    >

      <img
        src={music.cover}
        alt={music.title}
        className="rounded-lg mb-3"
      />

      <h2 className="font-semibold">{music.title}</h2>

      <p className="text-gray-400 text-sm">
        {music.artist}
      </p>

    </div>
  )
}