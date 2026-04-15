'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface MagneticLinkProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export function MagneticLink({ children, className, onClick, isActive }: MagneticLinkProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    // Subtle pull — max ~4px displacement
    setPosition({
      x: (e.clientX - centerX) * 0.15,
      y: (e.clientY - centerY) * 0.15,
    })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative font-sans text-sm font-medium tracking-wide transition-colors',
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      {children}
      {/* Shimmer underline — slides in from left on hover, solid when active */}
      <span
        className={cn(
          'absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ease-out',
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </button>
  )
}
