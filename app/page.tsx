import { ThemeProvider } from "../contexts/ThemeContext"
import ModernPortfolio from "../modern-portfolio"

export default function Page() {
  return (
    <ThemeProvider>
      <ModernPortfolio />
    </ThemeProvider>
  )
}
