"use client"

import { useState, useEffect } from "react"
import Player from "@/components/Player"
import { musics } from "@/data/musics"
import { Music } from "@/types/music"

export default function Home() {

  const [loading, setLoading] = useState(true)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  const currentMusic: Music = musics[currentIndex]

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)

  }, [])

  const nextMusic = () => {
    if (currentIndex < musics.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevMusic = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(musics.length - 1)
    }
  }

  // LOADER DA PÁGINA
  if (loading) {
    return (

      <main className="h-dvh bg-zinc-950 flex items-center justify-center">

        <div className="flex flex-col items-center gap-6 text-white">

          <div className="flex gap-2 items-end">

            <div className="w-2 h-10 bg-white animate-bounce"></div>
            <div className="w-2 h-6 bg-white animate-bounce delay-100"></div>
            <div className="w-2 h-12 bg-white animate-bounce delay-200"></div>
            <div className="w-2 h-8 bg-white animate-bounce delay-300"></div>

          </div>

          <p className="text-gray-400 text-sm">
            Carregando player...
          </p>

        </div>

      </main>

    )
  }

  return (

    <main className="h-dvh bg-zinc-950 text-white flex flex-col items-center justify-between max-w-xl mx-auto px-6 py-8">

      {/* CAPA + INFO */}
      <div className="flex flex-col items-center gap-6 flex-1 justify-center">

        <img
          src={currentMusic.cover}
          alt={currentMusic.title}
          className={`w-[260px] md:w-[320px] rounded-2xl shadow-2xl transition-all duration-500 
          ${playing ? "animate-spin-slow" : ""}`}
        />

        <div className="text-center space-y-1">

          <h1 className="text-2xl font-bold">
            {currentMusic.title}
          </h1>

          <p className="text-gray-400">
            {currentMusic.artist}
          </p>

        </div>

      </div>

      {/* PLAYER */}
      <Player
        music={currentMusic}
        nextMusic={nextMusic}
        prevMusic={prevMusic}
        playing={playing}
        setPlaying={setPlaying}
      />

    </main>

  )
}