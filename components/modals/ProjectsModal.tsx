"use client"
import { X, Award, ExternalLink, Github } from "lucide-react"

interface ProjectsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-4 md:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-slide-up">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-white/70 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Project 1 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">E-Commerce Platform</h3>
              <div className="flex gap-2">
                <ExternalLink className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              A full-featured e-commerce platform with user authentication, payment processing, inventory management,
              and admin dashboard. Built with modern technologies and best practices.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Features:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• User registration and authentication</li>
                <li>• Shopping cart and checkout process</li>
                <li>• Payment integration with Stripe</li>
                <li>• Admin panel for inventory management</li>
                <li>• Responsive design for all devices</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Task Management App</h3>
              <div className="flex gap-2">
                <ExternalLink className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              A collaborative task management application with real-time updates, team collaboration features, and
              project tracking capabilities.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Features:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• Real-time collaboration with Socket.io</li>
                <li>• Drag and drop task management</li>
                <li>• Team member invitations</li>
                <li>• Project progress tracking</li>
                <li>• File attachments and comments</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Vue.js", "Socket.io", "Python", "FastAPI", "PostgreSQL", "Redis"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Weather Dashboard</h3>
              <div className="flex gap-2">
                <ExternalLink className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather
              analytics with data visualization.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Features:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• Location-based weather data</li>
                <li>• 7-day weather forecast</li>
                <li>• Interactive weather maps</li>
                <li>• Weather alerts and notifications</li>
                <li>• Historical weather data charts</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Chart.js", "Mapbox", "OpenWeather API", "Tailwind"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg md:text-xl font-bold text-white">Social Media Analytics</h3>
              <div className="flex gap-2">
                <ExternalLink className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
                <Github className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              A comprehensive social media analytics platform that tracks engagement, analyzes trends, and provides
              actionable insights for content creators.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Features:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• Multi-platform social media integration</li>
                <li>• Real-time engagement tracking</li>
                <li>• Content performance analytics</li>
                <li>• Automated reporting system</li>
                <li>• Competitor analysis tools</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Python", "Django", "Celery", "D3.js", "AWS"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
