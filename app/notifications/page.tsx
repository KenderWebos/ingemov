import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Calendar, Check, Car, User, MessageSquare } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function NotificationsPage() {
  return (
    <MainLayout>
      <div className="container px-4 py-6 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notificaciones</h1>
          <Button variant="outline" size="sm">Marcar todas como leídas</Button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <span>Hoy</span>
            <div className="flex-1 h-px bg-gray-200 mx-3"></div>
          </div>
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <CardContent className="p-4 pl-5">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Car className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Solicitud de viaje aceptada</h3>
                    <span className="text-sm text-gray-500">10:42</span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">Ana Martín</span> ha aceptado tu solicitud para el viaje a <span className="font-medium">Campus Norte</span> el 24 de octubre.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button variant="outline" size="sm">Ver detalles</Button>
                    <Button variant="ghost" size="sm">Contactar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
            <CardContent className="p-4 pl-5">
              <div className="flex gap-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <User className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Nueva solicitud de viaje</h3>
                    <span className="text-sm text-gray-500">12:30</span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">Marta Pérez</span> ha solicitado unirse a tu viaje a <span className="font-medium">Campus Central</span> el 22 de octubre.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm">Aceptar</Button>
                    <Button variant="outline" size="sm">Rechazar</Button>
                    <Button variant="ghost" size="sm">Ver perfil</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex items-center text-sm text-gray-500 my-4">
            <span>Ayer</span>
            <div className="flex-1 h-px bg-gray-200 mx-3"></div>
          </div>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Nuevo mensaje</h3>
                    <span className="text-sm text-gray-500">Ayer, 18:45</span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">Javier López</span> te ha enviado un mensaje sobre el viaje del 27 de octubre.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button variant="outline" size="sm">Responder</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Recordatorio de viaje</h3>
                    <span className="text-sm text-gray-500">Ayer, 09:15</span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    Tu viaje a <span className="font-medium">Campus Central</span> está programado para mañana a las 7:45 AM.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button variant="outline" size="sm">Ver detalles</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex items-center text-sm text-gray-500 my-4">
            <span>Esta semana</span>
            <div className="flex-1 h-px bg-gray-200 mx-3"></div>
          </div>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Viaje completado</h3>
                    <span className="text-sm text-gray-500">Lun, 15:30</span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    Tu viaje con <span className="font-medium">Miguel Rodríguez</span> ha sido completado. ¿Qué tal ha ido? Deja una valoración.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button variant="outline" size="sm">Valorar viaje</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Bell className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Nueva ruta disponible</h3>
                    <span className="text-sm text-gray-500">Dom, 11:20</span>
                  </div>
                  <p className="text-gray-600 mt-1">
                    Hay nuevos viajes disponibles que coinciden con tus rutas frecuentes. Comprueba las opciones.
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <Button variant="outline" size="sm">Ver viajes</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
} 