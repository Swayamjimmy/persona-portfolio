import PageTransition from "@/components/PageTransition"

// Template remounts on every navigation, triggering the entrance animation
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>
}