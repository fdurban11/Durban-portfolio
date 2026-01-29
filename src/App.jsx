import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus('')

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'francis.durban@email.com'
        }
      )
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 3000)
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 3000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Francis Durban</div>
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Francis Durban</h1>
          <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
          <p className="hero-description">
            Building elegant solutions to complex problems with modern technologies
          </p>
          <button 
            className="cta-button" 
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate full stack developer with expertise in modern web technologies. 
              With a keen eye for detail and a commitment to clean code, I create applications 
              that are not only functional but also beautiful and user-friendly.
            </p>
            <p>
              I specialize in front-end development with React, JavaScript, and CSS, while also 
              having solid backend capabilities. I love learning new technologies and applying 
              best practices to deliver outstanding results.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
              </div>
              <p className="project-description">
                A full-featured e-commerce application built with React and Node.js, 
                featuring product catalogs, shopping cart, and payment integration.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Task Management App</h3>
              </div>
              <p className="project-description">
                A collaborative task management tool with real-time updates, 
                drag-and-drop functionality, and team collaboration features.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Firebase</span>
                <span className="tag">Tailwind CSS</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Data Analytics Dashboard</h3>
              </div>
              <p className="project-description">
                An interactive dashboard for visualizing complex data sets with 
                charts, graphs, and real-time analytics capabilities.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">D3.js</span>
                <span className="tag">Python</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Weather Application</h3>
              </div>
              <p className="project-description">
                A real-time weather application with location-based forecasts, 
                detailed weather information, and an intuitive user interface.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">API Integration</span>
                <span className="tag">CSS Animations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Vue.js</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Database & Tools</h3>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>Git & GitHub</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="contact-intro">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="contact-methods">
            <a href="mailto:francis.durban@email.com" className="contact-link">
              📧 Email: francis.durban@email.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              💻 GitHub
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="success-message">✓ Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">✗ Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Francis Durban. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
