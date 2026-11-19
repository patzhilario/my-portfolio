import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h2 className="logo">Portfolio</h2>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
        <img src="/profile.jpg" alt="Patz Erwin L. Hilario" className="profile-pic" />
          <h1>Hi, I'm Patz Erwin L. Hilario 👋</h1>
          <h3>BS Information Technology Student</h3>
          <p>
            I'm an IT student of City College of Calamba, Laguna - passionate about building web applications
            and solving real-world problems through technology. Currently working on my capstone project,
            <strong> Agapé Café POS & Ordering System</strong>, using React, Supabase, and GitHub.
            I enjoy turning ideas into functional, user-friendly websites.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>🛠️ My Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>🌐 Web Development</h3>
              <p>HTML5, CSS3, JavaScript, React.js, PHP</p>
            </div>
            <div className="skill-card">
              <h3>🗄️ Database & Tools</h3>
              <p>Supabase, MySQL, XAMPP, Git & GitHub, Node.js</p>
            </div>
            <div className="skill-card">
              <h3>🎨 Design & Others</h3>
              <p>UI/UX Basics, Figma, Draw.io, Python</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>💼 My Projects</h2>
          
          <div className="project-card">
            <h3>Agapé Café POS & Ordering System</h3>
            <p><strong>Description:</strong> A web-based Point of Sale and online ordering system for a local café. Customers can view the menu, place orders, and staff can manage sales and inventory in real time.</p>
            <p><strong>Tools Used:</strong> React.js, Supabase, Node.js, Vercel</p>
            <p><strong>Link:</strong> 
              <a href="https://agape-cafe.vercel.app/" target="_blank" rel="noopener noreferrer">
                Agape-cafe.vercel.app →
              </a>
            </p>
          </div>

          <div className="project-card">
  <h3>Personal Portfolio Website</h3>
  <p><strong>Description:</strong> My personal portfolio website showcasing my skills, projects, and contact information. Built to introduce myself and display my web development journey and works.</p>
  <p><strong>Tools Used:</strong> React.js, CSS, Vercel</p>
  <p><strong>Link:</strong> 
    <a href="https://github.com/patzhilario/my-portfolio" target="_blank" rel="noopener noreferrer">
      View on GitHub →
    </a>
  </p>
</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>📬 Get In Touch</h2>
          <p><strong>Email:</strong> patzhilario@gmail.com</p>
          <p><strong>GitHub:</strong> 
            <a href="https://github.com/patzhilario" target="_blank" rel="noopener noreferrer">
              github.com/patzhilario
            </a>
          </p>
          <p><strong>Location:</strong> Calamba, Laguna, Philippines</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Patz Erwin L. Hilario. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
