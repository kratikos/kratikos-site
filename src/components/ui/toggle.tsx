"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-white data-[state=on]:text-black data-[state=off]:text-gray-400 data-[state=off]:bg-white/5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-white/10 bg-transparent hover:bg-white/10 hover:text-white data-[state=on]:bg-white data-[state=on]:text-black",
      },
      size: {
        default: "h-10 px-4 py-2 min-h-[40px]",
        sm: "h-8 px-3 text-xs min-h-[32px]",
        lg: "h-11 px-5 text-base min-h-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
