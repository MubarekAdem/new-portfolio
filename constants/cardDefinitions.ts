import type { CardDefinition } from "../types"

export const cardDefinitions: Record<string, CardDefinition> = {
  photo: {
    gridClass: "col-span-12 sm:col-span-6 md:col-span-4 row-span-2 md:row-span-3",
    animationDelay: "0.1s",
  },
  about: {
    gridClass: "col-span-12 sm:col-span-6 md:col-span-5 row-span-2",
    animationDelay: "0.2s",
  },
  contact: {
    gridClass: "col-span-12 sm:col-span-6 md:col-span-3 row-span-2 md:row-span-3",
    animationDelay: "0.3s",
  },
  skills: {
    gridClass: "col-span-12 sm:col-span-6 md:col-span-5 row-span-2",
    animationDelay: "0.4s",
  },
  experience: {
    gridClass: "col-span-12 sm:col-span-6 md:col-span-4 row-span-2",
    animationDelay: "0.5s",
  },
  projects: {
    gridClass: "col-span-12 md:col-span-8 row-span-2 md:row-span-3",
    animationDelay: "0.6s",
  },
  theme: {
    gridClass: "col-span-6 md:col-span-4 row-span-1",
    animationDelay: "0.7s",
  },
  status: {
    gridClass: "col-span-6 md:col-span-4 row-span-1",
    animationDelay: "0.8s",
  },
}
