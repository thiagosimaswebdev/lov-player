"use client"

import { useRef, useState, useEffect } from "react"
import { Music } from "@/types/music"

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

  // atualizar tempo da música
  useEffect(() => {

    const audio = audioRef.current

    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      setDuration(audio.duration || 0)
    }

    audio.addEventListener("timeupdate", updateTime)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
    }

  }, [])

  // ▶ tocar
  const handlePlay = () => {
    audioRef.current?.play()
    setPlaying(true)
  }

  // ⏸ pausar
  const handlePause = () => {
    audioRef.current?.pause()
    setPlaying(false)
  }

  // 🎚 volume
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {

    const vol = Number(e.target.value)

    if (audioRef.current) {
      audioRef.current.volume = vol
    }

    setVolume(vol)
  }

  // ⏱ avançar música
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {

    const time = Number(e.target.value)

    if (audioRef.current) {
      audioRef.current.currentTime = time
    }

    setCurrentTime(time)
  }

  // formatar tempo
  const formatTime = (time: number) => {

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-6 flex flex-col items-center gap-5 text-white">

      {/* BARRA DE PROGRESSO */}
      <div className="flex items-center gap-3 w-full">

        <span className="text-sm text-gray-400">
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="
          w-full
          h-2
          appearance-none
          bg-zinc-700
          rounded-full
          cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-white
          "
        />

        <span className="text-sm text-gray-400">
          {formatTime(duration)}
        </span>

      </div>

      {/* CONTROLES */}
      <div className="flex items-center gap-8">

        <button
          onClick={prevMusic}
          className="text-3xl hover:scale-110 transition"
        >
          ⏮
        </button>

        {!playing ? (

          <button
            onClick={handlePlay}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black text-2xl shadow-lg hover:scale-110 transition"
          >
            ▶
          </button>

        ) : (

          <button
            onClick={handlePause}
            className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black text-2xl shadow-lg hover:scale-110 transition"
          >
            ❚❚
          </button>

        )}

        <button
          onClick={nextMusic}
          className="text-3xl hover:scale-110 transition"
        >
          ⏭
        </button>

      </div>

      {/* VOLUME - apenas desktop */}
      <div className="hidden md:flex items-center gap-3">

        🔊

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="w-[120px]"
        />

      </div>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        src={music.file}
        onEnded={nextMusic}
      />

    </div>
  )
}