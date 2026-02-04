import { useEffect, useMemo, useState } from "react";

export default function App() {
  const projects = useMemo(
    () => [
      {
        title: "VR Science Lab",
        category: "VR",
        tag: "Virtual Reality • Unity XR",
        img: process.env.PUBLIC_URL + "/images/vr-science-lab.jpg",
        desc: "A virtual science lab built in Unity using XR Toolkit. Users explore equipment and interact in an immersive lab setup.",
        tech: ["Unity", "XR Toolkit", "C#"],
      },
      {
        title: "VR Slime Experience",
        category: "VR",
        tag: "Virtual Reality • Interaction",
        img: process.env.PUBLIC_URL + "/images/slime.jpg",
        desc: "An interactive VR experience focused on satisfying, tactile-style interactions and playful exploration.",
        tech: ["Unity", "XR Interaction", "C#"],
      },
      {
        title: "Course Enrolment Portal",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/diplomas.png",
        desc: "Course enrolment portal built with React and routing.",
        tech: ["React", "Data Handling", "Forms & Validation", "API"],
        demo: "https://course-alpha-swart.vercel.app/",
      },
      {
        title: "Pizza App",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/pizza.png",
        desc: "Building a pizza store frontend using React.",
        tech: [
          "Rendering components",
          "Using .map()",
          "Passing data with props",
          "Creating React components",
        ],
        demo: "https://pizza-app-mh2r.vercel.app/",
      },
      {
        title: "Travel List",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/travel.png",
        desc: "Building a travel list to keep track on the list of things to pack",
        tech: [
          "Array & Objects",
          "Array methods",
          "Event Handling",
          "State Management",
          "Conditional Rendering",
        ],
        demo: "https://travel-list-app-rouge.vercel.app/",
      },
      {
        title: "Tracking tree counts in different regions",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/mobileappca2.png",
        desc: "Users can add tree data, and the app automatically calculates environmental severity based on the total number of trees",
        tech: [
          "React Native Basics",
          "List Rendering",
          "API & Web Service Integration",
          "CRUD Operations",
          "Forms & Input Handling",
          "State Management",
        ],
        video:
          process.env.PUBLIC_URL +
          "/videos/C346_CA2TreeMobileAppTeam4_VideoDemo.mp4",
      },
      {
        title: "Your Finance Manager",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/mobileappca1.png",
        desc: "Track income/expenses with a dashboard summary and saved data.",
        tech: [
          "React Hooks",
          "Persistent storage using AsyncStorage",
          "CRUD Operations",
          "Handling forms & input validation",
          "List Rendering",
        ],
        video: process.env.PUBLIC_URL + "/videos/mobile dev CA1.mp4",
      },
      {
        title: "Education App",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/education.png",
        desc: "A centralized assignment manager for tracking deadlines, progress, and overdue tasks",
        tech: ["React", "React Router", "REST API", "MySQL", "CRUD Operations"],
        demo: "https://c219ca2educationapp.vercel.app/login",
      },
      {
        title: "Card Management Web",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/cardmanagementapp.png",
        desc: "Manage cards with create, edit, and delete workflows via backend APIs.",
        tech: [
          "Event Handling",
          "HTTP Request Methods",
          "Component Props",
          "State Management",
          "CRUD Operations",
          "Node.js & Express",
        ],
        demo: "https://c219-l19.vercel.app/",
      },
      {
        title: "SG Green Plan",
        category: "Design",
        tag: "Adobe Illustrator",
        img: process.env.PUBLIC_URL + "/images/design.png",
        desc: "A visual concept representing renewable energy and sustainability, combining nature and innovation to support the Singapore Green Plan",
        tech: ["Pen Tool", "Shape Tool"],
      },
      {
        title: "Personal Brand Logo Design",
        category: "Design",
        tag: "Adobe Illustrator",
        img: process.env.PUBLIC_URL + "/images/design2.png",
        desc: "Designed a custom logo combining typography and piano elements to reflect my identity and passion for music.",
        tech: [
          "Pen Tool",
          "Shape Tool",
          "Pathfinder Tool",
          "Text Tool",
          "Stroke & Fill Editing",
          "Layer Management",
        ],
      },
      {
        title: "GreenNudge Event Awareness Proposal",
        category: "Design",
        tag: "Adobe Illustrator",
        img: process.env.PUBLIC_URL + "/images/design3.png",
        desc: "A visual campaign promoting a GreenNudge sustainability event using engaging design and clear information",
        tech: [
          "Vector Illustration",
          "Layout Design",
          "Typography",
          "Colour theory and contrast control",
          "QR code integration",
        ],
      },
      {
        title: "Travelly Banner",
        category: "Design",
        tag: "Desugn • Adobe Photoshop",
        img: process.env.PUBLIC_URL + "/images/L20- Quinn IG_Banner.jpg",
        desc: "A digital travel advertisement promoting holiday packages with a modern, vibrant layout and strong call-to-action.",
        tech: [
          "Colour grading and visual balance",
          "Use of shapes and gradients",
          "Visual hierarchy and call-to-action design",
          "Typography & text styling",
        ],
      },
      {
        title: "Instagram Grid",
        category: "Design",
        tag: "Desugn • Adobe Photoshop",
        img: process.env.PUBLIC_URL + "/images/L20- Quinn IG_Grid.png",
        desc: "Designed a consistent 3×3 travel-themed social media grid to strengthen brand identity and engagement.",
        tech: [
          "Social media design",
          "Photo Editing",
          "Typography",
          "Branding",
          "Layout composition",
        ],
      },
      {
        title: "Fundamentals of Design",
        category: "Design",
        tag: "Design • Adobe Illustrator & Photoshop",
        img: process.env.PUBLIC_URL + "/images/adobe_FA.png",
        desc: "Transforming our sketches of our ideal portfolio into adobe illustrator and photoshop designs.",
        tech: [
          "Pen Tool",
          "Shape Tool",
          "Pathfinder Tool",
          "Layer Management",
          "Stroke & Fill Editing",
          "Vector Illustration",
        ],
        pdf: process.env.PUBLIC_URL + "/files/AY2025 C257 GA Webpages Template.pdf",
      },
      {
        title: "Fundamentals of Design's Finals Presentation",
        category: "Design",
        tag: "Design • Adobe Illustrator & Photoshop",
        img: process.env.PUBLIC_URL + "/images/finals' presentation.png",
        desc: "Reeflective portfolio presentation that documents your design process, branding strategy, original assets, AI-assisted work, and final social media and web artworks, showing how you balance creativity and technical skills.",
        tech: [
          "Adobe Illustrator",
          "Photoshop",
          "Layout Design",
          "Typography",
          "PDF Export",
        ],
        pdf: process.env.PUBLIC_URL + "/files/AY2025 C257 FA Template.pdf",
      },
      {
        title: "Business Analytics",
        category: "Analytics",
        tag: "Analytics • Power BI",
        img: process.env.PUBLIC_URL + "/images/BI'cs.png",
        desc: "A data visualization dashboard built in Power BI to analyze trends, KPIs, and business performance.",
        tech: [
          "Power BI",
          "Data Visualization",
          "Power Query",
          "DAX",
          "Dashboard Design",
          "Data Analysis",
        ],
        pdf: process.env.PUBLIC_URL + "/files/slides.pdf",
      },
      {
        title: " Sustainable fashion commerce website ",
        category: "Design",
        tag: "Desgin • Figma",
        img: process.env.PUBLIC_URL + "/images/figma1.png",
        desc: "Online Shopping Platform",
        tech: [
          "High-Fidelity Desktop Wireframe ",
          " High-Fidelity Mobile Wireframe ",
          "Page Interactions and Scrolling Behaviours ",
          "At least 3 Types of Triggers and Animations ",
          " At least 2 Variables and 2 Conditionals ",
        ],
        figma:
          "https://www.figma.com/design/do5qqSfqTGAuV8zvBmImWX/24011941_CA1quinn?node-id=37-399&t=A9H5NKBwtHaMVESa-1",
      },
      {
        title: "Learn@RP Mobile App ",
        category: "Design",
        tag: "Desgin • Figma",
        img: process.env.PUBLIC_URL + "/images/Learn@RP.png",
        desc: "Learn@RP is a mobile learning companion application designed to help Republic Polytechnic students manage their academic journey more effectively. The app provides a centralized platform for accessing courses, tracking learning progress, and organizing daily academic tasks.",
        tech: [
          "Custom UI Kit ",
          " High-Fidelity Mobile Wireframe ",
          "Interactivity and Micro-Interactions ",
        ],
        figma:
          "https://www.figma.com/design/b6Fi89DP5oQY5eGxwaaX2a/quinn-24011941-Learn-RP-App?node-id=0-1&t=go792g450WDmxmw2-1",
      },
      {
        title: "Pokémon GO App",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/pokemon.png",
        desc: "A react native list management app that allows users to add, edit, and delete items using multi-screen navigation and improved UI design.",
        tech: [
          "React Native Basics",
          "React Navigation",
          "List Rendering",
          "CRUD Operations",
          "Flexbox layout",
          "Stylesheets",
        ],
        video: process.env.PUBLIC_URL + "/videos/pokemon.mp4",
      },
      {
        title: "Aninmal Quiz ",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/animal.png",
        desc: "A page tbat allows users to answer a series of multiple choice questions and receive on the accuracy of their answers.",
        tech: [
          "Input Components",
          "Button-type Components (Button and TouchableOpacity)",
          "Display Feedback to User (Alert and Toast)",
          "Get Value of Input Components",
          "React Native State",
          " JavaScript with React Native",
        ],
        video: process.env.PUBLIC_URL + "/videos/animal.webm",
      },
      {
        title: "Boat App",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/boatapp.png",
        desc: "A page tbat allows users to view different boats by one scroll.",
        tech: ["Stylesheets", "Flexbox Props"],
        video: process.env.PUBLIC_URL + "/videos/Week4_Video Project 17.mp4",
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      {
        title: "Edusave for Good Progress Award ",
        year: "2020",
        img: process.env.PUBLIC_URL + "/images/edusave2.png",
      },
      {
        title: "Edusave for Achievement, Good leadership & Service (Eagles)",
        year: "2022",
        img: process.env.PUBLIC_URL + "/images/edusave.png",
      },
      {
        title: "Student Leaders Award",
        year: "2022",
        img: process.env.PUBLIC_URL + "/images/student leaders award.png",
      },
      {
        title: "Colours's Award",
        year: "2022",
        img: process.env.PUBLIC_URL + "/images/colours' award.png",
      },
      {
        title: "VIA Award",
        year: "2022",
        img: process.env.PUBLIC_URL + "/images/VIA.png",
      },
      {
        title: "9th Asia Piano Competition",
        year: "2022",
        img: process.env.PUBLIC_URL + "/images/piano.png",
      },
      {
        title: "Piano Competition in Central Consevatory of Music",
        year: "2022",
        img: process.env.PUBLIC_URL + "/images/piano3.png",
      },
      {
        title: "Grade 8 Piano Examination",
        year: "2025",
        img: process.env.PUBLIC_URL + "/images/piano2.png",
      },
    ],
    []
  );

  const certifications = useMemo(
    () => [
      {
        title: "Agile Foundations",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Agile Foundations.pdf",
      },
      {
        title: "Create a Quick, Clean, and Cheap Website with Bootstrap Templates",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Create a Quick Clean and Cheap Website with Bootstrap Templates (3).pdf",
      },
      {
        title: "From React to React Native",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_From React to React Native.pdf",
      },
      {
        title: "Hands-On Introduction: React",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_HandsOn Introduction React.pdf",
      },
      {
        title: "Illustrator 2023 Quick Start",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Illustrator 2023 Quick Start.pdf",
      },
      {
        title: "ISTQB Foundation Cert Prep",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_ISTQB Foundation Cert Prep.pdf",
      },  
      {
        // eslint-disable-next-line no-script-url
        title: "JavaScript: Enhancing the DOM",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_JavaScript Enhancing the DOM.pdf",
      },  
      {
        // eslint-disable-next-line no-script-url
        title: "JavaScript: Web Form Programming",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_JavaScript Web Form Programming.pdf",
      },
      {
        title: "Learning Jira ( Cloud Edition )",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Learning Jira Cloud Edition 2020.pdf",
      },
      {
        title: "Learning React Native",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Learning React Native.pdf",
      },
      {
        title: "Node.js Essential Training",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Node.js Essential Training.pdf",
      },
      {
        title: "Photoshop 2021 Quick Start",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Photoshop 2021 Quick Start.pdf",
      },
      {
        title: "Programming Foundations: APIs and Web Services",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Programming Foundations APIs and Web Services 2019.pdf",
      },
      {
        title: "Programming Foundations: Software Testing/QA",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Programming Foundations Software TestingQA (1).pdf",
      },
      {
        title: "Software Testing Foundations: Bug Writting and Management",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Software Testing Foundations Bug Writing and Management.pdf",
      },
      {
        title: "Software Testing Foundations: Test Planning",
        issuer: "LinkedIn Learning",
        year: "2025",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Software Testing Foundations Test Planning.pdf",
      },
      {
        title: "Building Modern UIs with React Router v6",
        issuer: "LinkedIn Learning",
        year: "2026",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Building Modern UIs with React Router v6.pdf",
      },
      {
        title: "Designing Accessible Components In Figma Designing Accessible Components In Figma",
        issuer: "LinkedIn Learning",
        year: "2026",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Designing Accessible Components In Figma.pdf",
      },
      {
        title: "Google Analytics 4 (GA4) Essential Training",
        issuer: "LinkedIn Learning",
        year: "2026",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Google Analytics 4 GA4 Essential Training.pdf",
      },
      {
        title: "Unit Testing and Test Driven Development in Python",
        issuer: "LinkedIn Learning",
        year: "2026",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/CertificateOfCompletion_Unit Testing and Test Driven Development in Python.pdf",
      },
      {
        title: "React Basics Certificate",
        issuer: "Hackerank",
        year: "2026",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/react_basic certificate.pdf",
      },
      {
        title: "Frontend Developer Certificate",
        issuer: "Hackerank",
        year: "2026",
        pdf:
          process.env.PUBLIC_URL +
          "/linkedin/frontend_developer_react certificate.pdf",
      },
      
      
    ],
    []
  );

  const [active, setActive] = useState("home");
  const [modalImg, setModalImg] = useState(null);
  const [cat, setCat] = useState("All");

  const filteredProjects = useMemo(() => {
    if (cat === "All") return projects;
    return projects.filter((p) => p.category === cat);
  }, [projects, cat]);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setModalImg(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalImg ? "hidden" : "";
  }, [modalImg]);

  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <div
          className="navLeft"
          onClick={() => scrollToSection("home")}
          role="button"
          tabIndex={0}
        >
          <div className="logo">M</div>
        </div>

        <nav className="navLinks">
          <button
            className={active === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            className={active === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Portfolio
          </button>

          <button
            className={active === "achievements" ? "active" : ""}
            onClick={() => scrollToSection("achievements")}
          >
            Achievements
          </button>

          <button
            className={active === "certifications" ? "active" : ""}
            onClick={() => scrollToSection("certifications")}
          >
            Certifications
          </button>

          {/* ✅ FIXED: capital label but scrolls to id="about" */}
          <button
            className={active === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className={active === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="heroInner">
          <p className="heroKicker">Designer • Developer • VR</p>

          <h1 className="heroTitle">Quinn</h1>
          <p className="heroSubtitle">
            Digital Design & Development — crafting thoughtful, minimalistic
            digital experiences.
          </p>

          <div className="heroActions">
            <button className="btn" onClick={() => scrollToSection("projects")}>
              View My Work
            </button>
            <button
              className="btn outline"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="heroStats">
            <div className="stat">
              <div className="statNum">{projects.length}</div>
              <div className="statLabel">Projects</div>
            </div>
            <div className="stat">
              <div className="statNum">4</div>
              <div className="statLabel">Skill Areas</div>
            </div>
            <div className="stat">
              <div className="statNum">RP</div>
              <div className="statLabel">Student</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="sectionHead">
          <h2 className="sectionTitle">About</h2>
        </div>

        <div className="aboutGrid">
          <div className="panel">
            <p className="text">
              Hi, I’m Quinn — a Digital Design & Development student at Republic
              Polytechnic. I enjoy creating apps, interfaces, and immersive VR
              experiences.
            </p>

            <p className="text muted">
              Interested in AI, analytics dashboards, and meaningful digital
              solutions.
            </p>

            <div className="aboutActions">
              <div className="pillRow">
                <span className="pill">Development</span>
                <span className="pill">Design</span>
                <span className="pill">VR Projects</span>
                <span className="pill">Analytics</span>
              </div>

              <a
                href={process.env.PUBLIC_URL + "/files/resume.pdf"}
                target="_blank"
                rel="noreferrer"
                className="resumeBtn"
              >
                View Resume 📄
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="sectionHead">
          <div>
            <h2 className="sectionTitle">Projects</h2>
            <p className="sectionHint">
              Selected works — Development, Design, VR & Analytics.
            </p>
          </div>

          <div className="catTabs">
            {["All", "Development", "Design", "VR", "Analytics"].map((c) => (
              <button
                key={c}
                className={`catBtn ${cat === c ? "active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filteredProjects.map((p) => (
            <article className="card" key={p.title}>
              <div className="imgWrap">
                <img
                  className="cardImg"
                  src={p.img}
                  alt={p.title}
                  onClick={() => setModalImg(p.img)}
                />
              </div>

              <div className="cardTop">
                <h3 className="cardTitle">{p.title}</h3>
                <span className="badge">{p.category}</span>
              </div>

              <p className="cardTag">{p.tag}</p>
              <p className="cardDesc">{p.desc}</p>

              <div className="chipRow">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="cardBtns">
                <button className="linkBtn" onClick={() => setModalImg(p.img)}>
                  View Preview →
                </button>

                <div className="rightBtns">
                  {p.demo && (
                    <a
                      className="demoBtn"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {p.video && (
                    <a
                      className="demoBtn outline"
                      href={p.video}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Watch Video 🎥
                    </a>
                  )}

                  {p.ppt && (
                    <a
                      className="demoBtn outline"
                      href={p.ppt}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Slides 📊
                    </a>
                  )}

                  {p.pdf && (
                    <a
                      className="demoBtn outline"
                      href={p.pdf}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View PDF 📄
                    </a>
                  )}

                  {p.figma && (
                    <a
                      className="demoBtn outline"
                      href={p.figma}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Figma 🎨
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="sectionHead">
          <h2 className="sectionTitle">Achievements</h2>
          <p className="sectionHint">
            Awards & recognition (leadership / performance / piano).
          </p>
        </div>

        <div className="grid">
          {achievements.map((a) => (
            <article className="card small" key={a.title}>
              {a.img && (
                <div className="imgWrap">
                  <img
                    className="cardImg"
                    src={a.img}
                    alt={a.title}
                    onClick={() => setModalImg(a.img)}
                  />
                </div>
              )}

              <h3 className="cardTitle">{a.title}</h3>
              <p className="cardTag">{a.year}</p>

              <p className="cardDesc muted">
                Award earned through contribution, performance or service.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="sectionHead">
          <h2 className="sectionTitle">Certifications</h2>
          <p className="sectionHint">
            Professional certifications and online learning achievements.
          </p>
        </div>

        <div className="grid">
          {certifications.map((c) => (
            <article className="card small" key={c.title}>
              <h3 className="cardTitle">{c.title}</h3>

              <p className="cardTag">
                {c.issuer} • {c.year}
              </p>

              <p className="cardDesc muted">Verified professional certificate.</p>

              {c.pdf && (
                <div className="cardBtns">
                  <span />
                  <div className="rightBtns">
                    <a
                      className="demoBtn outline"
                      href={c.pdf}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Certificate 📄
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="sectionHead">
          <h2 className="sectionTitle">Contact</h2>
          <p className="sectionHint">
            Let’s connect — internship, collaboration, or project chats.
          </p>
        </div>

        <div className="contactBox">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:24011941@myrp.edu.sg">24011941@myrp.edu.sg</a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/quinn-ng-328160311"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/quinn-ng-328160311
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <span className="muted">(https://github.com/quinns25/my-portfolio)</span>
          </p>
        </div>
      </section>

      <footer className="footer">
        © 2026 The Quinnventory — Portfolio by Quinn
      </footer>

      {/* MODAL (IMAGE ONLY) */}
      {modalImg && (
        <div
          className="modal"
          onClick={() => setModalImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="modalClose"
            onClick={() => setModalImg(null)}
            aria-label="Close"
          >
            ×
          </button>

          <img
            className="modalImg"
            src={modalImg}
            alt="Project preview"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="modalHint">Click outside the image or press ESC to close</p>
        </div>
      )}
    </div>
  );
}
