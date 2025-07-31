"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
})  

const TabsList = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <TabsPrimitive.List
    ref={ref}
      data-slot="tabs-list"
      className={cn(
        // Updated for better contrast
        "inline-flex h-auto rounded-md p-1 text-primary",
        className
      )}
      {...props} />
  );
})

const TabsTrigger = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        
        "inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap text-white rounded-lg p-3 text-base font-medium ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-sm",
        className
      )}
      {...props} />
  );
})

const TabsContent = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return (
    <TabsPrimitive.Content
    ref={ref}
      data-slot="tabs-content"
      className={cn("min-h[480px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", className)}
      {...props} />
  );
})

export { Tabs, TabsList, TabsTrigger, TabsContent }
