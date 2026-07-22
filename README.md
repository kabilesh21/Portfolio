# Personal Portfolio Website - KABILESH M

A modern, elegant, fully responsive, and recruiter-friendly multi-page personal portfolio website built with semantic HTML5, clean CSS3, and vanilla JavaScript. This project is structured around the professional profile of **Kabilesh M**, B.Tech Information Technology student.

---

## 🌟 Features

- **Elegant CSS Texture**: A premium background pattern using subtle gradients and dynamic CSS dot-grids.
- **Dotted Theme Styling**: A custom warm palette focusing on `#E8B298` (Primary), `#FCFAF8` (Background), `#2F2F2F` (Text), and soft subtle shadows.
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
    ├── profile.png     # Circular Avatar Placeholder (Professional Vector Illustration)
    └── icons/          # Subfolder for custom icons (if any)
```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic elements (header, nav, section, main, footer).
- **CSS3**: Variables, Flexbox, Grid, keyframes, transitions, gradients, and dotted backgrounds.
- **Vanilla JavaScript**: DOM manipulation, scroll event observers, form checking, transitions.
- **Font Awesome (v6.4.0)**: Premium icons for cards, social networks, and navigation items.

---

## 🚀 How to Run

Since the website does not use any heavy frameworks, build pipelines, or servers, you can run it instantly:

1. **Download/Clone** this repository directory to your local machine.
2. Locate the `index.html` file in the root folder.
3. **Double-click** `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari, etc.).
4. Navigate through the pages using the header links.

---

## ✍️ Customization Instructions

### Replacing the Profile Picture
Replace the placeholder profile image by copying your headshot/avatar into the `images` directory:
- Name the file `profile.png`.
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
