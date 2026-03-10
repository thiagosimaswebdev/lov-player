"use client"

import { useRef, useState, useEffect } from "react"
import { Music } from "@/types/music"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"

type Props = {
  music: Music
  nextMusic: () => void
  prevMusic: () => void
  playing: boolean
  setPlaying: (value: boolean) => void
}

export default function Player({
  music,
  nextMusic,
  prevMusic,
  playing,
  setPlaying
}: Props) {

  const audioRef = useRef<HTMLAudioElement>(null)

  const [volume, setVolume] = useState(0.7)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const handlePlay = () => {
    audioRef.current?.play()
    setPlaying(true)
  }

  const handlePause = () => {
    audioRef.current?.pause()
    setPlaying(false)
  }

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoaded = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {

    const time = Number(e.target.value)

    if (audioRef.current) {
      audioRef.current.currentTime = time
    }

    setCurrentTime(time)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {

    const vol = Number(e.target.value)

    if (audioRef.current) {
      audioRef.current.volume = vol
    }

    setVolume(vol)
  }

  const formatTime = (time: number) => {

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [])

  return (

    <div className="w-full max-w-md text-white p-4 flex flex-col items-center gap-6">

      {/* BARRA DE PROGRESSO */}
      <div className="w-full">

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-white"
        />

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

      </div>

      {/* CONTROLES */}
      <div className="flex items-center gap-10">

        <button
          onClick={prevMusic}
          className="hover:scale-110 transition"
        >
          <SkipBack size={32} />
        </button>

        {!playing ? (

          <button
            onClick={handlePlay}
            className="w-16 h-16 flex items-center justify-center bg-white rounded-full hover:scale-110 transition"
          >
            <Play size={30} className="text-black ml-1" />
          </button>

        ) : (

          <button
            onClick={handlePause}
            className="w-16 h-16 flex items-center justify-center bg-white rounded-full hover:scale-110 transition"
          >
            <Pause size={30} className="text-black" />
          </button>

        )}

        <button
          onClick={nextMusic}
          className="hover:scale-110 transition"
        >
          <SkipForward size={32} />
        </button>

      </div>

      {/* VOLUME (apenas desktop) */}
      <div className="hidden md:flex items-center gap-4 w-full max-w-xs">

        <Volume2 size={20} />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="w-full"
        />

      </div>

      <audio
        ref={audioRef}
        src={music.file}
        onTimeUpdate={updateTime}
        onLoadedMetadata={handleLoaded}
        onEnded={nextMusic}
      />

    </div>
  )
}