import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, MapPin, Search, User } from "lucide-react"
import RideMap from "@/components/ride-map"
import AvailableRides from "@/components/available-rides"
import OfferRideForm from "@/components/offer-ride-form"
import MainLayout from "@/components/main-layout"

export default function Home() {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}
