import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects, allBlogs } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = [
  'C#', 'C', 'Python', 'Unity', 'Unreal Engine',
  'Visual Studio', 'Git', 'Gameplay Programming',
  'Enemy AI', 'Photoshop', 'Illustrator', 'Maya',
]

function Home() {
  const featuredProjects = allProjects.slice(0, 3)
  const recentPosts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Game Developer and Computer Scientist 
              </p>
              <h1 className="text-5xl font-bold leading-tight">
                Hi, I'm Jesse Ray
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am a Computer Science and Computer Game Design student at Dakota State University graduating in May 2026.
              I have experience with Unity, C#, C, Python, gameplay systems, and enemy AI.
              I contributed to the released Steam title Critter Gang and am interested in entry-level roles
              in game development, software development, QA, or IT.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://github.com/jesseray1450"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-ray-5b945b3b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jesseray1450@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="shrink-0">
            <img
              src="/headshot-on-white.jpg"
              alt="Jesse Ray "
              className="w-52 h-60 rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-border bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-5">
            Technologies & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <Card key={project._meta.path} className="flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-4 py-14">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Recent Writing</h2>
              <Link
                to="/blog"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All posts
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {recentPosts.map((post) => (
                <Link
                  key={post._meta.path}
                  to="/blog/$slug"
                  params={{ slug: post._meta.path }}
                  className="block"
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-base">{post.title}</CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{post.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <footer className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jesse Ray. Open to opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            Let's work together
            <ArrowRight size={14} />
          </Link>
        </div>
      </footer>
    </div>
  )
}
