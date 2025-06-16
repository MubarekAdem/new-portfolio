"use client"
import { X, Briefcase, Building, Clock, MapPin } from "lucide-react"

interface ExperienceModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl p-4 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-slide-up">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
            <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-white/70 hover:text-white" />
          </button>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Experience Item 1 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Senior Full Stack Developer</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/70">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">TechCorp Inc.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">2021 - Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS.
              Responsible for architecture decisions and mentoring junior developers.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Key Achievements:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• Increased application performance by 40% through optimization</li>
                <li>• Led migration to microservices architecture</li>
                <li>• Implemented CI/CD pipeline reducing deployment time by 60%</li>
                <li>• Mentored 3 junior developers to mid-level positions</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Full Stack Developer</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/70">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">StartupXYZ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">2019 - 2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Remote</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              Developed and maintained multiple client projects from conception to deployment. Worked closely with
              design and product teams to deliver high-quality solutions.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Key Achievements:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• Built 5+ production applications serving 10k+ users</li>
                <li>• Reduced bug reports by 50% through comprehensive testing</li>
                <li>• Implemented responsive designs across all projects</li>
                <li>• Collaborated with international remote team</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Vue.js", "Python", "Django", "MongoDB", "Redis", "Heroku"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">Junior Developer</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/70">
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">WebSolutions Ltd.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">2018 - 2019</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">New York, NY</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              Started my professional journey building websites and learning modern development practices. Focused on
              front-end development and user experience.
            </p>
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold text-white">Key Achievements:</h4>
              <ul className="text-white/80 space-y-1 ml-4 text-sm">
                <li>• Completed 20+ client websites</li>
                <li>• Learned modern JavaScript frameworks</li>
                <li>• Improved page load speeds by 30% on average</li>
                <li>• Received "Rising Star" award</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">
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
