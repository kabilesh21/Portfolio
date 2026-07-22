# Personal Portfolio Website - KABILESH M

A modern, elegant, fully responsive, and recruiter-friendly multi-page personal portfolio website built with semantic HTML5, clean CSS3, and vanilla JavaScript. This project showcases my skills, experience, and projects.

---

## 👤 About Me
Driven B.Tech Information Technology student with practical experience in Python, Java, and SQL, complemented by exposure to Database Management Systems. Passionate about building efficient backend systems and transforming theoretical knowledge into scalable software solutions.

- 🎓 **Education:** B.Tech in Information Technology, V.S.B. Engineering College (2024 - 2028)
- 💼 **Experience:** FitPulse-Health Anomaly Detection Virtual Internship at Infosys Springboard 6.0
- 🛠️ **Core Skills:** Python, Java, SQL, JavaScript, C++, HTML5, CSS3, Data Structures & Algorithms (DSA), DBMS, OOP
- 🌐 **LinkedIn:** [kabilesh-m-185a21377](https://linkedin.com/in/kabilesh-m-185a21377)
- 💻 **LeetCode:** [kabi_lesh_678](https://leetcode.com/u/kabi_lesh_678/)
- 📧 **Email:** [kabileshclg0678@gmail.com](mailto:kabileshclg0678@gmail.com)

---

## 🌟 Features

- **Elegant CSS Texture**: A premium background pattern using subtle gradients and dynamic CSS grid-lines.
- **Dark Terracotta Theme**: A custom warm palette focusing on `#8C3A1A` (Primary), `#FCFAF8` (Background), `#2F2F2F` (Text), and soft subtle shadows.
- **Sticky Blur Navigation**: The navbar stays fixed on scroll with a modern glassmorphic background blur and dynamic active-link highlighting.
- **Mobile Menu**: Responsive hamburger menu that slides in on mobile and tablet devices.
- **Scroll Reveal Animations**: Smooth entry animations using high-performance `IntersectionObserver`.
- **Dynamic Typing Effect**: Rotates through roles ("B.Tech IT Student", "Backend Enthusiast", "Problem Solver") in the Hero section.
- **Interactive Timelines**: Sleek timelines for Education and Internship milestones.
- **Responsive Layout**: Fluid design optimizing readability on Desktop, Laptop, Tablet, and Mobile.
- **Back to Top Control**: Floating button with smooth scrolling.
- **Contact Form Validation**: Full client-side validation with instant response messages.

---

## 📁 Folder Structure

```text
portfolio/
│── index.html          # Home Page (Hero, Skills, Projects, Education, Internship, Certifications)
│── about.html          # About Page (Detailed Bio, Highlights, Core Competencies)
│── contact.html        # Contact Page (Contact Info & Validation-enabled Contact Form)
│── style.css           # Global Design Tokens, Core Styles, Breakpoints, Animations
│── script.js           # Dynamic Behaviors, Observers, Validators, Animations
│── README.md           # Project Documentation & Guides
└── images/
    ├── profile.jpg     # Profile Picture headshot
    └── icons/          # Subfolder for custom icons (if any)
```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic elements (header, nav, section, main, footer).
- **CSS3**: Variables, Flexbox, Grid, keyframes, transitions, gradients, and custom background patterns.
- **Vanilla JavaScript**: DOM manipulation, scroll event observers, form checking, transitions.
- **Font Awesome (v6.4.0)**: Premium icons for cards, social networks, and navigation items.

---

## ✍️ Customization Instructions

### Replacing the Profile Picture
Replace the profile image by copying your headshot/avatar into the `images` directory:
- Name the file `profile.jpg`.
- Ensure it is square (e.g., `400x400` pixels) for a perfect circle frame.

### Modifying the Typing Roles
To change the titles printed in the typing effect on the Home Page, open `script.js` and edit the array in the **Typing Effect** section:
```javascript
const roles = ["B.Tech IT Student", "Backend Enthusiast", "Problem Solver"];
```

### Modifying the Contact Form Actions
Currently, the contact form validates and displays a local success response message. To receive emails directly, you can connect the form to free submission handlers (like [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/)) by editing the `<form>` tag in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
