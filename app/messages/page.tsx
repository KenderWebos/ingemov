import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Send, ChevronLeft } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function MessagesPage() {
  return (
    <MainLayout>
      <div className="container h-[calc(100vh-8rem)] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">Mensajes</h1>
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="flex h-full">
          {/* Lista de conversaciones */}
          <div className="w-1/3 border-r overflow-y-auto">
            <div className="p-4">
              <Input placeholder="Buscar mensajes..." className="mb-3" />
              
              <div className="space-y-2">
                <div className="rounded-lg p-3 bg-gray-100 cursor-pointer flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar-2.jpg" alt="Ana Martín" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">Ana Martín</h3>
                      <span className="text-xs text-gray-500">10:42</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">¡Perfecto! Te espero en el punto acordado. No olvides traer...</p>
                  </div>
                </div>
                
                <div className="rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar-3.jpg" alt="Javier López" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">Javier López</h3>
                      <span className="text-xs text-gray-500">Ayer</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">Sí, pasaré a recogerte a las 8:15 AM. ¿Te parece bien?</p>
                  </div>
                </div>
                
                <div className="rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar-4.jpg" alt="Miguel Rodríguez" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">Miguel Rodríguez</h3>
                      <span className="text-xs text-gray-500">Lun</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">¿Tienes planes de volver a la residencia el viernes?</p>
                  </div>
                </div>
                
                <div className="rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar-5.jpg" alt="Laura García" />
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">Laura García</h3>
                      <span className="text-xs text-gray-500">19 Oct</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">Muchas gracias por el viaje. Ha sido muy puntual y...</p>
                  </div>
                </div>
                
                <div className="rounded-lg p-3 hover:bg-gray-50 cursor-pointer flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar-6.jpg" alt="Carlos Sánchez" />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium truncate">Carlos Sánchez</h3>
                      <span className="text-xs text-gray-500">15 Oct</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">Lo siento, al final no podré unirme al viaje del lunes...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conversación activa */}
          <div className="flex-1 flex flex-col">
            <div className="p-3 flex items-center gap-3 border-b">
              <Button variant="ghost" size="icon" className="md:hidden">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-avatar-2.jpg" alt="Ana Martín" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Ana Martín</h3>
                <p className="text-sm text-green-600">En línea</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hola Carlos, soy tu conductora para el viaje de mañana al Campus Norte.</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:30</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-emerald-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">¡Hola Ana! Gracias por aceptar mi solicitud. ¿A qué hora pasarás a recogerme?</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:35</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Estaré en el punto de encuentro a las 8:30 AM. ¿Te parece bien? Llevaré un Renault Clio azul.</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:38</span>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-emerald-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Perfecto, estaré listo puntual en la entrada de la residencia. ¿Cuántos pasajeros más van?</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:40</span>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">¡Perfecto! Te espero en el punto acordado. No olvides traer tu carné de estudiante para el estacionamiento del campus.</p>
                  <span className="text-xs text-gray-500 mt-1 block">10:42</span>
                </div>
              </div>
            </div>
            
            <div className="p-3 border-t flex gap-2">
              <Input placeholder="Escribe un mensaje..." className="flex-1" />
              <Button size="icon" className="bg-emerald-600 hover:bg-emerald-700">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 