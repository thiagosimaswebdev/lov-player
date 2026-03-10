"use client"

import StyledQRCode from "@/components/StyledQRCode"

export default function QRPage() {

  const url = "https://seu-player.vercel.app"

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950">
      <StyledQRCode url={url} />
    </main>
  )
}