import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"
type ThemeContextValue = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void }

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ 
  children,
  defaultTheme = "dark"
}: { 
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored) return stored
    return defaultTheme
  })

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
