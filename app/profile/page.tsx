import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Car, Star, Calendar } from "lucide-react"
import MainLayout from "@/components/main-layout"

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="container px-4 py-6 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Mi Perfil</h1>
        
        <div className="flex flex-col gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Foto de perfil" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-semibold">Carlos Núñez</h2>
                  <p className="text-muted-foreground">Estudiante de Ingeniería</p>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <Star className="w-4 h-4 text-gray-300" />
                    <span className="ml-2 text-sm font-medium">4.2 (45 reseñas)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="info">Información</TabsTrigger>
              <TabsTrigger value="settings">Configuración</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" value="Carlos Núñez" readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" value="carlos.nunez@universidad.edu" readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" value="+34 612 345 678" readOnly />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="faculty">Facultad</Label>
                    <Input id="faculty" value="Facultad de Ingeniería" readOnly />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Editar información</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-3 border rounded-lg">
                      <Car className="w-8 h-8 text-emerald-500 mb-2" />
                      <span className="text-xl font-bold">24</span>
                      <span className="text-xs text-muted-foreground">Viajes ofrecidos</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border rounded-lg">
                      <Calendar className="w-8 h-8 text-blue-500 mb-2" />
                      <span className="text-xl font-bold">18</span>
                      <span className="text-xs text-muted-foreground">Viajes tomados</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border rounded-lg">
                      <Star className="w-8 h-8 text-yellow-500 mb-2" />
                      <span className="text-xl font-bold">4.2</span>
                      <span className="text-xs text-muted-foreground">Valoración</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Notificaciones</Label>
                      <p className="text-sm text-muted-foreground">Recibir notificaciones de nuevos viajes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Configurar</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Privacidad</Label>
                      <p className="text-sm text-muted-foreground">Gestionar quién puede ver tu perfil</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Configurar</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="font-medium">Métodos de pago</Label>
                      <p className="text-sm text-muted-foreground">Gestionar tus métodos de pago</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Gestionar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cuenta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">Cambiar contraseña</Button>
                  <Button variant="destructive" className="w-full">Cerrar sesión</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  )
} 