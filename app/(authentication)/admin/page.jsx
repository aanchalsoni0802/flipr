// pages/index.js
"use client"
import AdminPage from '@/components/admin/AdminPage';
import UploadFile from '@/components/upload-file/page';
import { useState } from 'react';
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function Home() {
  const [url, setUrl] = useState(null);
  
  return (
    <div>
      <AdminNav />
      <AdminPage />
    </div>
  );
}

export function AdminNav() {
  return (
    <div className="w-full flex items-center justify-evenly">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
          <Link href="/admin/clients" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Clients
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
          <Link href="/admin/contacts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacts
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
          <Link href="/admin/subscriptions" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Subscriptions
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
          <Link href="/admin/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projects
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
