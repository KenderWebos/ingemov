import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Users, Car } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function MyRidesPage() {
  return (
    <MainLayout>
      <div className="container px-4 py-6 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Mis Viajes</h1>
        
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="upcoming">Próximos</TabsTrigger>
            <TabsTrigger value="offered">Ofrecidos</TabsTrigger>
            <TabsTrigger value="past">Historial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Próximo</Badge>
                    <span className="text-sm font-medium text-gray-500">En 2 días</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Car className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Campus Norte → Ciudad Universitaria</h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>24 Oct</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>8:30 AM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>3 pasajeros</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-avatar-2.jpg" alt="Conductor" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Ana Martín</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <p>Renault Clio • GC-3452-H</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Ver detalles</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Próximo</Badge>
                    <span className="text-sm font-medium text-gray-500">En 5 días</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Car className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Facultad de Medicina → Residencia Universitaria</h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>27 Oct</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>4:30 PM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>2 pasajeros</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-avatar-3.jpg" alt="Conductor" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Javier López</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <p>Seat Ibiza • M-5678-KL</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Ver detalles</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="offered" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Ofrecido</Badge>
                    <span className="text-sm font-medium text-gray-500">Mañana</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Car className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Residencia → Campus Central</h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>22 Oct</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>7:45 AM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>1/3 asientos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendiente</Badge>
                    <span className="text-sm">1 solicitud de unirse</span>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">Cancelar viaje</Button>
                    <Button size="sm">Gestionar solicitudes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Ofrecido</Badge>
                    <span className="text-sm font-medium text-gray-500">En 3 días</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Car className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Campus Central → Ciudad</h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>25 Oct</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>3/3 asientos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completo</Badge>
                    <span className="text-sm">Todos los asientos reservados</span>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">Cancelar viaje</Button>
                    <Button size="sm">Ver pasajeros</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completado</Badge>
                    <span className="text-sm font-medium text-gray-500">Hace 3 días</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Car className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Facultad de Ciencias → Centro Comercial</h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>19 Oct</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>5:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-avatar-4.jpg" alt="Conductor" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Miguel Rodríguez</h4>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      ★★★★☆ 4.3
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Valorar viaje</Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-0">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completado</Badge>
                    <span className="text-sm font-medium text-gray-500">Hace 1 semana</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Car className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Residencia → Biblioteca Central</h3>
                      <div className="flex gap-4 mt-1 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>15 Oct</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>9:15 AM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder-avatar-5.jpg" alt="Conductor" />
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Laura García</h4>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      ★★★★★ 5.0
                    </div>
                  </div>
                  <Button variant="outline" size="sm" disabled>Valorado</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
} 