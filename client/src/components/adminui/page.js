'use client'; // Ensure this is the first line

import React from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname
import Link from 'next/link';
import { CircleUser, Home, LineChart, CalendarCheck2, Users, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const ADMINUI = ({ children }) => {
  const pathname = usePathname(); // Use usePathname to get the current path

  const isActive = (path) => {
    if (!pathname) return false; // Handle case when pathname is undefined
    const trimmedPath = pathname.replace(/\/$/, ''); // Remove trailing slash
    const trimmedLinkPath = path.replace(/\/$/, ''); // Remove trailing slash
    return trimmedPath === trimmedLinkPath || trimmedPath.startsWith(trimmedLinkPath + '/');
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <CalendarCheck2 className="h-6 w-6" />
              <span>SMS V-0.1</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/admin/dashboard"
                className={`flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                  isActive('/admin/dashboard') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/grades"
                className={`flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                  isActive('/admin/grades') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <FileCheck className="h-4 w-4" />
                Grades
              </Link>
              <Link
                href="/admin/attendance"
                className={`flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                  isActive('/admin/attendance') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <CalendarCheck2 className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                href="/admin/students"
                className={`flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                  isActive('/admin/students') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Users className="h-4 w-4" />
                Students
              </Link>
              <Link
                href="/admin/analytics"
                className={`flex items-center gap-4 rounded-xl px-3 py-2 transition-all ${
                  isActive('/admin/analytics') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1"></div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children} {/* Render page content here */}
        </main>
      </div>
    </div>
  );
};

export default ADMINUI;
