import Link from "next/link"
import { Car, User, MessageSquare, Home } from "lucide-react"

interface NavigationMenuProps {
  pathname: string;
}

export default function NavigationMenu({ pathname }: NavigationMenuProps) {
  return (
    <nav className="sticky bottom-0 z-10 bg-white border-t">
      <div className="container grid grid-cols-4 mx-auto">
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center py-2 ${pathname === '/' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Inicio</span>
        </Link>
        <Link 
          href="/my-rides" 
          className={`flex flex-col items-center justify-center py-2 ${pathname === '/my-rides' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
        >
          <Car className="w-5 h-5" />
          <span className="text-xs">Mis Viajes</span>
        </Link>
        <Link 
          href="/messages" 
          className={`flex flex-col items-center justify-center py-2 ${pathname === '/messages' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs">Mensajes</span>
        </Link>
        <Link 
          href="/profile" 
          className={`flex flex-col items-center justify-center py-2 ${pathname === '/profile' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Perfil</span>
        </Link>
      </div>
    </nav>
  )
} 