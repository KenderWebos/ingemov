"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Clock, MapPin, Users } from "lucide-react"

export default function OfferRideForm() {
  const [seats, setSeats] = useState("3")
  const [price, setPrice] = useState("1000")

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Ofrecer un Viaje</h2>

      <div className="space-y-2">
        <Label htmlFor="origin">Punto de Partida</Label>
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <MapPin className="w-5 h-5 text-emerald-500" />
          <Input
            id="origin"
            placeholder="¿Desde dónde sales?"
            className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            defaultValue="Universidad Central"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination">Destino</Label>
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <MapPin className="w-5 h-5 text-red-500" />
          <Input
            id="destination"
            placeholder="¿A dónde vas?"
            className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Fecha</Label>
          <div className="flex items-center gap-2 p-3 border rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-500"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <Input
              id="date"
              type="date"
              className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Hora</Label>
          <div className="flex items-center gap-2 p-3 border rounded-lg">
            <Clock className="w-5 h-5 text-gray-500" />
            <Input
              id="time"
              type="time"
              className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="seats">Asientos Disponibles</Label>
          <div className="flex items-center gap-2 p-3 border rounded-lg">
            <Users className="w-5 h-5 text-gray-500" />
            <Select value={seats} onValueChange={setSeats}>
              <SelectTrigger className="border-0 p-0 h-auto focus:ring-0">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 asiento</SelectItem>
                <SelectItem value="2">2 asientos</SelectItem>
                <SelectItem value="3">3 asientos</SelectItem>
                <SelectItem value="4">4 asientos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Precio por Persona</Label>
          <div className="flex items-center gap-2 p-3 border rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-gray-500"
            >
              <line x1="12" x2="12" y1="2" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <Input
              id="price"
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="car">Información del Vehículo</Label>
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <Car className="w-5 h-5 text-gray-500" />
          <Input
            id="car"
            placeholder="Marca, modelo y color"
            className="flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notas Adicionales (opcional)</Label>
        <textarea
          id="notes"
          placeholder="Información adicional para los pasajeros"
          className="w-full p-3 border rounded-lg min-h-[80px] focus:outline-none focus:ring-2 focus:ring-emerald-500"
        ></textarea>
      </div>

      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Publicar Viaje</Button>
    </div>
  )
}
