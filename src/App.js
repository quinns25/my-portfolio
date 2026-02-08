import { useEffect, useMemo, useState } from "react";

export default function App() {
  const projects = useMemo(
    () => [
      {
        title: "VR Science Lab",
        category: "VR",
        tag: "Virtual Reality • Unity XR",
        img: process.env.PUBLIC_URL + "/images/vr-science-lab.jpg",
        desc:
          "A virtual science laboratory developed using Unity and the XR Interaction Toolkit, allowing users to explore a realistic 3D environment and interact with scientific equipment through immersive VR controls. The application simulates hands-on experiments, helping users understand laboratory concepts in a safe and engaging way while demonstrating my skills in VR interaction design, 3D scene setup, and C# scripting.",
        tech: ["Unity", "XR Toolkit", "C#"],
      },
      {
        title: "VR Slime Experience",
        category: "VR",
        tag: "Virtual Reality • Interaction",
        img: process.env.PUBLIC_URL + "/images/slime.jpg",
        desc:
          "An immersive virtual reality experience developed using Unity and the XR Interaction Toolkit, designed to simulate realistic and satisfying slime interactions through hand-tracking and controller-based inputs. Users can deag  & manipulate virtual slime in a playful environment, enhancing sensory engagement while showcasing my skills in physics-based interaction design, real-time feedback systems, and C# scripting for responsive VR experiences.",
        tech: ["Unity", "XR Interaction", "C#"],
      },
      {
        title: "Course Enrolment Portal",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/diplomas.png",
        desc:
          "A full-featured course enrolment web application developed using React and client-side routing, enabling students to browse available courses, register for modules, and manage their enrolment status through an intuitive interface. The system integrates form validation, dynamic data handling, and API communication to ensure accurate submissions, real-time updates, and a smooth user experience while demonstrating my skills in frontend development and web application architecture.",
        tech: ["React", "Data Handling", "Forms & Validation", "API"],
        demo: "https://course-alpha-swart.vercel.app/",
      },
      {
        title: "Pizza App",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/pizza.png",
        desc:
          "A responsive pizza ordering web application built using React, allowing users to browse menu items, customize selections, and view their orders through a dynamic and user-friendly interface. The project demonstrates my understanding of component-based architecture, data rendering using map functions, state management, and prop passing, while focusing on creating an engaging and intuitive frontend shopping experience.",
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
        desc:
          "A practical travel planning web application built using React that helps users create, manage, and organize packing lists for their trips. Users can add, edit, and remove items dynamically, track completed tasks, and view their progress in real time. This project demonstrates my ability to work with arrays and objects, manage application state, handle user events, and implement conditional rendering for an interactive and user-friendly experience.",
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
        desc:
          "A mobile application developed using React Native that enables users to record and manage tree count data across different regions through an intuitive input system. The app integrates web services and APIs to store and retrieve environmental data, automatically calculates severity levels based on total tree counts, and presents insights through structured lists and summaries. This project demonstrates my ability to implement CRUD operations, manage application state, and build data-driven mobile solutions that support environmental monitoring and sustainability efforts.",
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
        desc:
          "A personal finance management mobile application developed using React Native, designed to help users track their income and expenses through an intuitive dashboard and detailed transaction records. The app supports creating, editing, and deleting financial entries, validates user input, and securely stores data using AsyncStorage for persistence. This project demonstrates my ability to apply React Hooks, implement CRUD functionality, and design practical mobile solutions that promote better financial awareness and budgeting habits.",
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
        desc:
          "A centralized assignment management web application developed using React, React Router, and a RESTful API with MySQL database integration, enabling students to track deadlines, monitor progress, and manage overdue tasks efficiently. The system supports secure data storage, dynamic content updates, and full CRUD functionality, demonstrating my ability to design and implement complete full-stack solutions with a strong focus on usability and academic productivity.",
        tech: ["React", "React Router", "REST API", "MySQL", "CRUD Operations"],
        demo: "https://c219ca2educationapp.vercel.app/login",
      },
      {
        title: "Card Management Web",
        category: "Development",
        tag: "Development • Web App",
        img: process.env.PUBLIC_URL + "/images/cardmanagementapp.png",
        desc:
          "A web-based card management system developed using React and a Node.js/Express backend, allowing users to create, edit, view, and delete card records through secure RESTful API interactions. The application demonstrates effective handling of HTTP requests, state management, and component communication using props, while showcasing my ability to build and integrate full-stack systems with reliable CRUD functionality and a user-friendly interface.",
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
        desc:
          "A digital visual design concept created using Adobe Illustrator to promote renewable energy and environmental sustainability in support of the Singapore Green Plan initiative. The artwork combines natural elements with modern graphic styles to communicate innovation and responsibility, while demonstrating my skills in vector illustration, layout composition, and the effective use of design tools to convey meaningful social messages.",
        tech: ["Pen Tool", "Shape Tool"],
      },
      {
        title: "Personal Brand Logo Design",
        category: "Design",
        tag: "Adobe Illustrator",
        img: process.env.PUBLIC_URL + "/images/design2.png",
        desc:
          "A custom personal brand logo designed using Adobe Illustrator that integrates typography with piano-inspired visual elements to represent my identity, creativity, and passion for music. The design process involved concept development, vector illustration, and careful refinement of shapes, spacing, and colour balance, demonstrating my ability to translate personal values into a cohesive and memorable visual identity.",
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
        desc:
          "A visual campaign and event awareness proposal designed using Adobe Illustrator to promote the GreenNudge sustainability initiative through engaging graphics and clear informational layouts. The project focuses on effective visual communication, combining strong typography, balanced colour usage, and QR code integration to encourage public participation while demonstrating my ability to design impactful promotional materials for social and environmental causes.",
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
        desc:
          "A digital promotional banner designed using Adobe Photoshop to advertise travel and holiday packages through a modern, vibrant, and visually engaging layout. The design emphasizes strong visual hierarchy, effective colour grading, and clear call-to-action elements to attract user attention and encourage engagement, while demonstrating my ability to create impactful marketing visuals for social media and digital platforms.",
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
        desc:
          "A cohesive 3×3 travel-themed Instagram grid designed using Adobe Photoshop to enhance brand identity, visual consistency, and audience engagement across social media platforms. The project involved careful planning of layout composition, colour harmony, and typography to create a unified aesthetic, while demonstrating my ability to design content that supports digital branding and strengthens online presence.",
        tech: ["Social media design", "Photo Editing", "Typography", "Branding", "Layout composition"],
      },
      {
        title: "Fundamentals of Design",
        category: "Design",
        tag: "Design • Adobe Illustrator & Photoshop",
        img: process.env.PUBLIC_URL + "/images/adobe_FA.png",
        desc:
          "A design fundamentals project that involved transforming initial hand-drawn sketches of an ideal personal portfolio into refined digital artworks using Adobe Illustrator and Photoshop. The process focused on developing visual concepts, refining layouts, and enhancing typography and colour balance, while demonstrating my understanding of core design principles, vector illustration techniques, and professional design workflows.",
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
        desc:
          "A comprehensive reflective portfolio presentation developed using Adobe Illustrator and Photoshop to document my design journey, branding strategy, original creative assets, and AI-assisted workflows. The presentation showcases my conceptual development, visual experimentation, and final social media and web designs, highlighting how I balance creativity with technical execution while communicating my design process in a clear and professional manner.",
        tech: ["Adobe Illustrator", "Photoshop", "Layout Design", "Typography", "PDF Export"],
        pdf: process.env.PUBLIC_URL + "/files/AY2025 C257 FA Template.pdf",
      },
      {
        title: "Business Analytics",
        category: "Analytics",
        tag: "Analytics • Power BI",
        img: process.env.PUBLIC_URL + "/images/BI'cs.png",
        desc:
          "A business intelligence dashboard developed using Power BI to analyze sales trends, key performance indicators (KPIs), and overall business performance through interactive and visually clear data visualizations. The project involved data cleaning and transformation using Power Query, creating calculated measures with DAX, and designing user-friendly dashboards to support data-driven decision making and analytical insights.",
        tech: ["Power BI", "Data Visualization", "Power Query", "DAX", "Dashboard Design", "Data Analysis"],
        pdf: process.env.PUBLIC_URL + "/files/slides.pdf",
      },
      {
        title: " Sustainable fashion commerce website ",
        category: "Design",
        tag: "Desgin • Figma",
        img: process.env.PUBLIC_URL + "/images/figma1.png",
        desc:
          "A high-fidelity sustainable fashion e-commerce prototype designed using Figma, featuring both desktop and mobile interfaces with interactive user flows and realistic shopping experiences. The project includes detailed wireframes, smooth scrolling behaviours, animated transitions, and conditional interactions to simulate real-world usage, while demonstrating my skills in UI/UX design, prototyping, and creating engaging, user-centred digital interfaces.",
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
        title: " StudyZen",
        category: "Design",
        tag: "Desgin • Figma",
        img: process.env.PUBLIC_URL + "/images/StudyZen.jpg",
        desc:
          "A high-fidelity mobile application prototype designed using Figma to support students in managing their study schedules, monitoring stress and mood levels, and maintaining a healthy study-life balance. The app integrates interactive features such as toggle switches, conditional logic, micro-interactions, and relaxation tools to encourage mindful learning habits, while demonstrating my ability to design user-centred interfaces focused on mental well-being and productivity.",
        tech: [" High-Fidelity Mobile Wireframe ", "Variable & Conditionals", "Toggle Switch ", " Micro Interactions "],
        figma:
          "https://www.figma.com/design/L6LGbTOBhCb6kCUxP6QhQV/StudyZen?node-id=304-334&t=N3eKsuKogh7thfnh-1",
      },
      {
        title: "Learn@RP Mobile App ",
        category: "Design",
        tag: "Desgin • Figma",
        img: process.env.PUBLIC_URL + "/images/Learn@RP.png",
        desc:
          "Learn@RP is a mobile learning companion application designed using Figma to support Republic Polytechnic students in managing their academic journey more effectively. The app provides a centralized platform for accessing course materials, tracking learning progress, and organizing daily study tasks through an intuitive and visually consistent interface. This project demonstrates my ability to design custom UI kits, implement micro-interactions, and create user-centred digital experiences that enhance learning productivity and engagement.",
        tech: ["Custom UI Kit ", " High-Fidelity Mobile Wireframe ", "Interactivity and Micro-Interactions "],
        figma:
          "https://www.figma.com/design/b6Fi89DP9oQY5eGxwaaX2a/quinn-24011941-Learn-RP-App?node-id=0-1&t=go792g450WDmxmw2-1",
      },
      {
        title: "Pokémon GO App",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/pokemon.png",
        desc:
          "A mobile list management application developed using React Native and inspired by the Pokémon GO theme, allowing users to add, edit, and delete items across multiple screens with smooth navigation. The app utilizes React Navigation, dynamic list rendering, and responsive layouts to deliver an intuitive user experience, while demonstrating my ability to implement CRUD functionality, manage application state, and design clean mobile interfaces using Flexbox and stylesheets.",
        tech: ["React Native Basics", "React Navigation", "List Rendering", "CRUD Operations", "Flexbox layout", "Stylesheets"],
        video: process.env.PUBLIC_URL + "/videos/pokemon.mp4",
      },
      {
        title: "Aninmal Quiz ",
        category: "Development",
        tag: "Development • Mobile App",
        img: process.env.PUBLIC_URL + "/images/animal.png",
        desc:
          "An interactive mobile quiz application developed using React Native that allows users to answer a series of multiple-choice questions and receive instant feedback on their performance. The app incorporates input handling, button interactions, and real-time alerts to display results, while demonstrating my ability to manage application state, validate user responses, and design engaging educational experiences using JavaScript and React Native components.",
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
        desc:
          "A mobile browsing application developed using React Native that allows users to explore and view different boat models through a smooth vertical scrolling interface. The app focuses on clean layout design, responsive styling, and visual consistency using Flexbox and custom stylesheets, demonstrating my ability to structure mobile interfaces and create user-friendly content browsing experiences.",
        tech: ["Stylesheets", "Flexbox Props"],
        video: process.env.PUBLIC_URL + "/videos/Week4_Video Project 17.mp4",
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      { title: "Edusave for Good Progress Award ", year: "2020", img: process.env.PUBLIC_URL + "/images/edusave2.png" },
      { title: "Edusave for Achievement, Good leadership & Service (Eagles)", year: "2022", img: process.env.PUBLIC_URL + "/images/edusave.png" },
      { title: "Student Leaders Award", year: "2022", img: process.env.PUBLIC_URL + "/images/student leaders award.png" },
      { title: "Colours's Award", year: "2022", img: process.env.PUBLIC_URL + "/images/colours' award.png" },
      { title: "VIA Award", year: "2022", img: process.env.PUBLIC_URL + "/images/VIA.png" },
      { title: "9th Asia Piano Competition", year: "2022", img: process.env.PUBLIC_URL + "/images/piano.png" },
      { title: "Piano Competition in Central Consevatory of Music", year: "2022", img: process.env.PUBLIC_URL + "/images/piano3.png" },
      { title: "Grade 8 Piano Examination", year: "2025", img: process.env.PUBLIC_URL + "/images/piano2.png" },
    ],
    []
  );

  const certifications = useMemo(
    () => [
      { title: "Agile Foundations", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Agile Foundations.pdf" },
      { title: "Create a Quick, Clean, and Cheap Website with Bootstrap Templates", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Create a Quick Clean and Cheap Website with Bootstrap Templates (3).pdf" },
      { title: "From React to React Native", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_From React to React Native.pdf" },
      { title: "Hands-On Introduction: React", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_HandsOn Introduction React.pdf" },
      { title: "Illustrator 2023 Quick Start", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Illustrator 2023 Quick Start.pdf" },
      { title: "ISTQB Foundation Cert Prep", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_ISTQB Foundation Cert Prep.pdf" },
      // eslint-disable-next-line no-script-url
      { title: "JavaScript: Enhancing the DOM", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_JavaScript Enhancing the DOM.pdf" },
      // eslint-disable-next-line no-script-url
      { title: "JavaScript: Web Form Programming", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_JavaScript Web Form Programming.pdf" },
      { title: "Learning Jira ( Cloud Edition )", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Learning Jira Cloud Edition 2020.pdf" },
      { title: "Learning React Native", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Learning React Native.pdf" },
      { title: "Node.js Essential Training", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Node.js Essential Training.pdf" },
      { title: "Photoshop 2021 Quick Start", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Photoshop 2021 Quick Start.pdf" },
      { title: "Programming Foundations: APIs and Web Services", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Programming Foundations APIs and Web Services 2019.pdf" },
      { title: "Programming Foundations: Software Testing/QA", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Programming Foundations Software TestingQA (1).pdf" },
      { title: "Software Testing Foundations: Bug Writting and Management", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Software Testing Foundations Bug Writing and Management.pdf" },
      { title: "Software Testing Foundations: Test Planning", issuer: "LinkedIn Learning", year: "2025", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Software Testing Foundations Test Planning.pdf" },
      { title: "Building Modern UIs with React Router v6", issuer: "LinkedIn Learning", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Building Modern UIs with React Router v6.pdf" },
      { title: "Designing Accessible Components In Figma Designing Accessible Components In Figma", issuer: "LinkedIn Learning", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Designing Accessible Components In Figma.pdf" },
      { title: "Google Analytics 4 (GA4) Essential Training", issuer: "LinkedIn Learning", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Google Analytics 4 GA4 Essential Training.pdf" },
      { title: "Unit Testing and Test Driven Development in Python", issuer: "LinkedIn Learning", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/CertificateOfCompletion_Unit Testing and Test Driven Development in Python.pdf" },
      { title: "React Basics Certificate", issuer: "Hackerank", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/react_basic certificate.pdf" },
      { title: "Frontend Developer Certificate", issuer: "Hackerank", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/frontend_developer_react certificate.pdf" },
      { title: "CSS Certificate", issuer: "Hackerank", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/css certificate (1).pdf" },
      { title: "Jsvascript Certificate", issuer: "Hackerank", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/javascript_basic certificate.pdf" },
      { title: "Python Certificate", issuer: "Hackerank", year: "2026", pdf: process.env.PUBLIC_URL + "/linkedin/python_basic certificate.pdf" },
    ],
    []
  );

  const [active, setActive] = useState("home");
  const [modalImg, setModalImg] = useState(null);
  const [cat, setCat] = useState("All");
  const [certFilter, setCertFilter] = useState("All");

  // ✅ NEW: flip state for cards (Projects)
  const [flipped, setFlipped] = useState({}); // { [key]: true/false }

  function toggleFlip(key) {
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const filteredProjects = useMemo(() => {
    if (cat === "All") return projects;
    return projects.filter((p) => p.category === cat);
  }, [projects, cat]);

  const certificationsWithPlatform = useMemo(() => {
    return certifications.map((c) => {
      const issuerLower = (c.issuer || "").toLowerCase();
      const platform = issuerLower.includes("hacker") ? "HackerRank" : "LinkedIn";
      return { ...c, platform };
    });
  }, [certifications]);

  const filteredCertifications = useMemo(() => {
    if (certFilter === "All") return certificationsWithPlatform;
    return certificationsWithPlatform.filter((c) => c.platform === certFilter);
  }, [certFilter, certificationsWithPlatform]);

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
        <div className="navLeft" onClick={() => scrollToSection("home")} role="button" tabIndex={0}>
          <div className="logo">M</div>
        </div>

        <nav className="navLinks">
          <button className={active === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button className={active === "projects" ? "active" : ""} onClick={() => scrollToSection("projects")}>
            Portfolio
          </button>

          <button className={active === "achievements" ? "active" : ""} onClick={() => scrollToSection("achievements")}>
            Achievements
          </button>

          <button
            className={active === "certifications" ? "active" : ""}
            onClick={() => scrollToSection("certifications")}
          >
            Certifications
          </button>

          <button className={active === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>
            About
          </button>

          <button className={active === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>
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
            Digital Design & Development — crafting thoughtful, minimalistic digital experiences.
          </p>

          <div className="heroActions">
            <button className="btn" onClick={() => scrollToSection("projects")}>
              View My Work
            </button>
            <button className="btn outline" onClick={() => scrollToSection("contact")}>
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
              Hi, I’m Quinn — a Digital Design & Development student at Republic Polytechnic. I enjoy creating apps,
              interfaces, and immersive VR experiences.
            </p>

            <p className="text muted">
              Interested in coding, analytics dashboards, and meaningful digital solutions.
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
          </div>

          <div className="catTabs">
            {["All", "Development", "Design", "VR", "Analytics"].map((c) => (
              <button key={c} className={`catBtn ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filteredProjects.map((p) => {
            const key = `proj-${p.title}`;
            const isFlipped = !!flipped[key];

            return (
              <article key={p.title} className={`card flipCard ${isFlipped ? "isFlipped" : ""}`}>
                <div className="flipInner">
                  {/* FRONT */}
                  <div className="flipFace flipFront">
                    <div className="imgWrap">
                      <img className="cardImg" src={p.img} alt={p.title} onClick={() => setModalImg(p.img)} />
                    </div>

                    <div className="cardTop">
                      <h3 className="cardTitle">{p.title}</h3>
                      <span className="badge">{p.category}</span>
                    </div>

                    <p className="cardTag">{p.tag}</p>

                    <div className="flipActions">
                      <button className="linkBtn" onClick={() => toggleFlip(key)}>
                        Flip for details ↻
                      </button>

                      <button className="linkBtn" onClick={() => setModalImg(p.img)}>
                        View Preview →
                      </button>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flipFace flipBack">
                    <div className="backTop">
                      <h3 className="cardTitle">{p.title}</h3>
                      <button className="linkBtn" onClick={() => toggleFlip(key)}>
                        Back ↩
                      </button>
                    </div>

                    <p className="cardDesc">{p.desc}</p>

                    <div className="chipRow">
                      {p.tech.map((t) => (
                        <span className="chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="cardBtns">
                      <span />
                      <div className="rightBtns">
                        {p.demo && (
                          <a className="demoBtn" href={p.demo} target="_blank" rel="noreferrer">
                            Live Demo ↗
                          </a>
                        )}

                        {p.video && (
                          <a className="demoBtn outline" href={p.video} target="_blank" rel="noreferrer">
                            Watch Video 🎥
                          </a>
                        )}

                        {p.ppt && (
                          <a className="demoBtn outline" href={p.ppt} target="_blank" rel="noreferrer">
                            View Slides 📊
                          </a>
                        )}

                        {p.pdf && (
                          <a className="demoBtn outline" href={p.pdf} target="_blank" rel="noreferrer">
                            View PDF 📄
                          </a>
                        )}

                        {p.figma && (
                          <a className="demoBtn outline" href={p.figma} target="_blank" rel="noreferrer">
                            View Figma 🎨
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <div className="sectionHead">
          <h2 className="sectionTitle">Achievements</h2>
        </div>

        <div className="grid">
          {achievements.map((a) => (
            <article className="card small" key={a.title}>
              {a.img && (
                <div className="imgWrap">
                  <img className="cardImg" src={a.img} alt={a.title} onClick={() => setModalImg(a.img)} />
                </div>
              )}

              <h3 className="cardTitle">{a.title}</h3>
              <p className="cardTag">{a.year}</p>

              
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">
        <div className="sectionHead">
          <div>
            <h2 className="sectionTitle">Certifications</h2>
          </div>

          <div className="catTabs">
            {["All", "LinkedIn", "HackerRank"].map((x) => (
              <button key={x} className={`catBtn ${certFilter === x ? "active" : ""}`} onClick={() => setCertFilter(x)}>
                {x}
              </button>
            ))}
          </div>
        </div>

        <div className="grid">
          {filteredCertifications.map((c) => (
            <article className="card small" key={c.title}>
              <h3 className="cardTitle">{c.title}</h3>

              <p className="cardTag">
                {c.issuer} • {c.year}
              </p>

              {c.pdf && (
                <div className="cardBtns">
                  <span />
                  <div className="rightBtns">
                    <a className="demoBtn outline" href={c.pdf} target="_blank" rel="noreferrer">
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
        </div>

        <div className="contactBox">
          <p>
            <strong>Email:</strong> <a href="mailto:24011941@myrp.edu.sg">24011941@myrp.edu.sg</a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/quinn-ng-328160311" target="_blank" rel="noreferrer">
              linkedin.com/in/quinn-ng-328160311
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/quinns25/my-portfolio"
              target="_blank"
              rel="noreferrer"
              className="muted"
            >
              https://github.com/quinns25/my-portfolio
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">© 2026 The Quinnventory — Portfolio by Quinn</footer>

      {/* MODAL (IMAGE ONLY) */}
      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)} role="dialog" aria-modal="true">
          <button className="modalClose" onClick={() => setModalImg(null)} aria-label="Close">
            ×
          </button>

          <img className="modalImg" src={modalImg} alt="Project preview" onClick={(e) => e.stopPropagation()} />

          <p className="modalHint">Click outside the image or press ESC to close</p>
        </div>
      )}
    </div>
  );
}
