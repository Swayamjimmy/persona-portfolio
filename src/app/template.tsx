// src/app/template.tsx

export default function Template({ children }: { children: React.ReactNode }) {
  // Bypassing the PageTransition component entirely
  return <>{children}</>
}