"use client"

import { useState } from "react"
import Player from "@/components/Player"
import StyledQRCode from "@/components/StyledQRCode" // 👈 ADICIONAR AQUI
import { musics } from "@/data/musics"
import { Music } from "@/types/music"

export default function Home() {

  // índice da música atual
  const [currentIndex, setCurrentIndex] = useState(0)

  // estado para saber se está tocando
  const [playing, setPlaying] = useState(false)

  // música atual
  const currentMusic: Music = musics[currentIndex]

  // próxima música
  const nextMusic = () => {
    if (currentIndex < musics.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  // música anterior
  const prevMusic = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(musics.length - 1)
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-6">

      {/* CAPA DA MÚSICA */}
      <div className="flex flex-col items-center gap-6">

        <img
          src={currentMusic.cover}
          alt={currentMusic.title}

          /* animação girando quando tocar */
          className={`w-[280px] md:w-[320px] rounded-xl shadow-2xl 
          ${playing ? "animate-spin-slow" : ""}`}
        />

        <div className="text-center">

          <h1 className="text-2xl font-semibold">
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