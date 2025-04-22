"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

export default function RideMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Aquí se implementaría la integración con un servicio de mapas como Google Maps o Mapbox
    // Por ahora, mostramos un mapa estático para la demostración
    const mapElement = mapRef.current

    if (mapElement) {
      const canvas = document.createElement("canvas")
      canvas.width = mapElement.clientWidth
      canvas.height = mapElement.clientHeight
      mapElement.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Dibujar un mapa simple para la demostración
        ctx.fillStyle = "#e5e7eb"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Dibujar algunas "calles"
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 4

        // Calles horizontales
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, canvas.height * (i / 5))
          ctx.lineTo(canvas.width, canvas.height * (i / 5))
          ctx.stroke()
        }

        // Calles verticales
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(canvas.width * (i / 5), 0)
          ctx.lineTo(canvas.width * (i / 5), canvas.height)
          ctx.stroke()
        }

        // Dibujar un punto de origen (universidad)
        ctx.fillStyle = "#10b981" // emerald-500
        ctx.beginPath()
        ctx.arc(canvas.width * 0.3, canvas.height * 0.4, 8, 0, Math.PI * 2)
        ctx.fill()

        // Dibujar algunos puntos de destino
        ctx.fillStyle = "#ef4444" // red-500
        ctx.beginPath()
        ctx.arc(canvas.width * 0.7, canvas.height * 0.2, 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(canvas.width * 0.8, canvas.height * 0.6, 6, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.arc(canvas.width * 0.5, canvas.height * 0.8, 6, 0, Math.PI * 2)
        ctx.fill()

        // Dibujar una ruta
        ctx.strokeStyle = "#10b981"
        ctx.lineWidth = 3
        ctx.setLineDash([5, 3])
        ctx.beginPath()
        ctx.moveTo(canvas.width * 0.3, canvas.height * 0.4)
        ctx.bezierCurveTo(
          canvas.width * 0.4,
          canvas.height * 0.3,
          canvas.width * 0.6,
          canvas.height * 0.1,
          canvas.width * 0.7,
          canvas.height * 0.2,
        )
        ctx.stroke()
      }
    }

    return () => {
      if (mapElement && mapElement.firstChild) {
        mapElement.removeChild(mapElement.firstChild)
      }
    }
  }, [])

  return (
    <div ref={mapRef} className="relative w-full h-full bg-gray-100">
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md flex items-center gap-2">
        <MapPin className="w-4 h-4 text-emerald-500" />
        <span className="text-sm font-medium">Universidad</span>
      </div>
    </div>
  )
}
