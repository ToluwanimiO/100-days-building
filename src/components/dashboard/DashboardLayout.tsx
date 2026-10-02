'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { Home, PlusCircle, Settings, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-semibold hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span className="hidden md:inline-block">100 Days</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/dashboard" className="hover:text-primary transition-colors">
                Builds
              </Link>
              <Link href="/dashboard/analytics" className="hover:text-primary transition-colors">
                Analytics
              </Link>
              <Link href="/dashboard/settings" className="hover:text-primary transition-colors">
                Settings
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline-block">Add Build</span>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
      
      {/* Bottom bar */}
      <footer className="border-t border-border py-6 mt-20">
        <div className="container mx-auto px-6 flex items-center justify-between text-sm text-muted-foreground">
          <p>Dashboard · 100 Days of Building</p>
          <div className="flex items-center gap-4">
            <Link href="/dashboard/settings" className="hover:text-primary transition-colors">
              <Settings className="w-4 h-4" />
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}