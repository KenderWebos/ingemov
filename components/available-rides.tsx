import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star, Users } from "lucide-react"

export default function AvailableRides() {
  const rides = [
    {
      id: 1,
      driver: {
        name: "Carlos M.",
        avatar: "/placeholder-user.jpg",
        rating: 4.8,
        trips: 42,
      },
      origin: "Universidad Central",
      destination: "Estación Metro Los Héroes",
      departureTime: "15:30",
      availableSeats: 3,
      price: "1.000",
    },
    {
      id: 2,
      driver: {
        name: "Ana P.",
        avatar: "/placeholder-user.jpg",
        rating: 4.9,
        trips: 67,
      },
      origin: "Universidad Central",
      destination: "Mall Plaza Vespucio",
      departureTime: "16:15",
      availableSeats: 2,
      price: "1.500",
    },
    {
      id: 3,
      driver: {
        name: "Miguel R.",
        avatar: "/placeholder-user.jpg",
        rating: 4.7,
        trips: 28,
      },
      origin: "Universidad Central",
      destination: "Plaza de Armas",
      departureTime: "17:00",
      availableSeats: 4,
      price: "800",
    },
  ]

  return (
    <div className="space-y-4">
      {rides.map((ride) => (
        <Card key={ride.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={ride.driver.avatar || "/placeholder.svg"} alt={ride.driver.name} />
                    <AvatarFallback>
                      {ride.driver.name.split(" ")[0][0]}
                      {ride.driver.name.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{ride.driver.name}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {ride.driver.rating} • {ride.driver.trips} viajes
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold text-emerald-600">${ride.price}</div>
              </div>

              <div className="grid gap-2 mb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Origen</div>
                    <div className="font-medium">{ride.origin}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Destino</div>
                    <div className="font-medium">{ride.destination}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Salida: {ride.departureTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{ride.availableSeats} asientos disponibles</span>
                </div>
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Unirse al Viaje</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
