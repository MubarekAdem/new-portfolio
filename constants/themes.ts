import type { ThemeConfig } from "../types"

export const themes: Record<string, ThemeConfig> = {
  dark: {
    name: "Dark",
    bg: "bg-gray-900",
    cardBg: {
      primary: "bg-gray-800",
      secondary: "bg-white",
      accent: "bg-gray-700",
    },
    text: {
      primary: "text-white",
      secondary: "text-gray-900",
      muted: "text-gray-300",
      mutedSecondary: "text-gray-600",
    },
    border: {
      primary: "border-gray-600 hover:border-gray-500",
      secondary: "border-gray-300 hover:border-gray-400",
    },
    accent: "bg-gray-700/50",
    icon: "🌙",
  },
  light: {
    name: "Light",
    bg: "bg-gray-50",
    cardBg: {
      primary: "bg-white",
      secondary: "bg-gray-900",
      accent: "bg-gray-100",
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-white",
      muted: "text-gray-600",
      mutedSecondary: "text-gray-300",
    },
    border: {
      primary: "border-gray-200 hover:border-gray-300",
      secondary: "border-gray-600 hover:border-gray-500",
    },
    accent: "bg-gray-100/80",
    icon: "☀️",
  },
  ocean: {
    name: "Ocean",
    bg: "bg-slate-900",
    cardBg: {
      primary: "bg-slate-800",
      secondary: "bg-slate-100",
      accent: "bg-slate-700",
    },
    text: {
      primary: "text-slate-100",
      secondary: "text-slate-900",
      muted: "text-slate-300",
      mutedSecondary: "text-slate-600",
    },
    border: {
      primary: "border-slate-600 hover:border-slate-500",
      secondary: "border-slate-300 hover:border-slate-400",
    },
    accent: "bg-slate-700/50",
    icon: "🌊",
  },
  sunset: {
    name: "Sunset",
    bg: "bg-orange-900",
    cardBg: {
      primary: "bg-orange-800",
      secondary: "bg-orange-50",
      accent: "bg-orange-700",
    },
    text: {
      primary: "text-orange-100",
      secondary: "text-orange-900",
      muted: "text-orange-200",
      mutedSecondary: "text-orange-700",
    },
    border: {
      primary: "border-orange-600 hover:border-orange-500",
      secondary: "border-orange-300 hover:border-orange-400",
    },
    accent: "bg-orange-700/50",
    icon: "🌅",
  },
}
