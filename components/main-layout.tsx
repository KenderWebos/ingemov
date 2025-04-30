"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Bell } from "lucide-react"
import ClientNavigationMenu from "@/components/client-navigation-menu"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-emerald-600">
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
              className="w-6 h-6"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <path d="M9 17h6"></path>
              <circle cx="17" cy="17" r="2"></circle>
            </svg>
            <span>IngeMov</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                <Bell className="w-5 h-5" />
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
        {children}
      </main>
      
      <ClientNavigationMenu />
    </div>
  )
} 