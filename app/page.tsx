import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, MapPin, Search, User } from "lucide-react"
import RideMap from "@/components/ride-map"
import AvailableRides from "@/components/available-rides"
import OfferRideForm from "@/components/offer-ride-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600">
            <Car className="w-6 h-6" />
            <span>UniRide</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
                  className="w-5 h-5"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                <span className="sr-only">Notificaciones</span>
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6 mx-auto">
          <Tabs defaultValue="find" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="find">Buscar Viaje</TabsTrigger>
              <TabsTrigger value="offer">Ofrecer Viaje</TabsTrigger>
            </TabsList>
            <TabsContent value="find" className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <MapPin className="w-5 h-5 text-emerald-500" />
                      <input
                        type="text"
                        placeholder="¿Desde dónde sales?"
                        className="flex-1 bg-transparent outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <input type="text" placeholder="¿A dónde vas?" className="flex-1 bg-transparent outline-none" />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Search className="w-4 h-4 mr-2" />
                      Buscar Viajes Disponibles
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="h-[300px] rounded-lg overflow-hidden mb-4">
                <RideMap />
              </div>

              <h2 className="text-xl font-bold">Viajes Disponibles</h2>
              <AvailableRides />
            </TabsContent>

            <TabsContent value="offer">
              <Card>
                <CardContent className="p-4">
                  <OfferRideForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <nav className="sticky bottom-0 z-10 bg-white border-t">
        <div className="container grid grid-cols-4 mx-auto">
          <Link href="/" className="flex flex-col items-center justify-center py-2 text-emerald-600">
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
              className="w-5 h-5"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-xs">Inicio</span>
          </Link>
          <Link href="/my-rides" className="flex flex-col items-center justify-center py-2 text-gray-500">
            <Car className="w-5 h-5" />
            <span className="text-xs">Mis Viajes</span>
          </Link>
          <Link href="/messages" className="flex flex-col items-center justify-center py-2 text-gray-500">
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
              className="w-5 h-5"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="text-xs">Mensajes</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center justify-center py-2 text-gray-500">
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
