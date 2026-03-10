"use client"

import { QRCodeSVG } from "qrcode.react"

type Props = {
  url: string
}

export default function StyledQRCode({ url }: Props) {

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-zinc-900 rounded-2xl shadow-xl">
      
      {/* cabeçalho estilo player */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <p className="text-white text-sm font-semibold">Lov Player</p>

      {/* QR CODE */}
      <QRCodeSVG
        value={url}
        size={150}
        bgColor="#1f2937"   /* fundo escuro estilo player */
        fgColor="#22c55e"   /* verde Spotify */
        level="H"
      />

      {/* rodapé estilo barra de player */}
      <div className="flex items-center justify-between w-full mt-4">
        <span className="text-xs text-gray-400">▶ {url}</span>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

    </div>
  )
}