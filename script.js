// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const projectModal = document.getElementById('projectModal');
const blogModal = document.getElementById('blogModal');
const contactForm = document.getElementById('contactForm');

// Project Data
const projects = {
    'imdb-sentiment': {
        title: 'IMDB Sentiment Analysis with TensorFlow',
        overview: 'Built a CNN-based deep learning model to classify IMDB movie reviews into positive/negative sentiment categories.',
        features: ['Text preprocessing', 'Word embeddings', 'Sentiment prediction', 'Model saving'],
        techStack: ['Python', 'TensorFlow', 'NLP'],
        challenges: 'Implementing efficient text preprocessing and optimizing CNN architecture.',
        achievements: 'Achieved good accuracy in sentiment prediction for IMDB reviews.',
        futureScope: 'Deploying model as web API for real-time sentiment analysis.'
    },
    'pet-classification': {
        title: 'Pet Face Classification with ResNet50',
        overview: 'Developed AI system to classify pet images by type and emotion using transfer learning.',
        features: ['Pet type classification', 'Emotion detection', 'Dataset support', 'Results filtering'],
        techStack: ['Python', 'PyTorch', 'ResNet50', 'Computer Vision'],
        challenges: 'Handling diverse dataset structures and filtering unknown categories.',
        achievements: 'Successfully implemented transfer learning for pet classification.',
        futureScope: 'Expanding to more pet types and real-time classification API.'
    },
    'shopeasy': {
        title: 'ShopEasy – E-commerce Website',
        overview: 'Lightweight e-commerce application with API integration and modern UX.',
        features: ['Product listing', 'API integration', 'Filtering', 'User authentication'],
        techStack: ['HTML', 'CSS', 'JavaScript', 'REST API'],
        challenges: 'Creating seamless UX without backend database.',
        achievements: 'Built fully functional e-commerce interface with modern patterns.',
        futureScope: 'Adding shopping cart and real e-commerce API integration.'
    },
    'text-to-speech': {
        title: 'Text-to-Speech Converter Web App',
        overview: 'Web-based application converting text to natural speech using Web Speech API.',
        features: ['Natural speech', 'User-friendly interface', 'Responsive design', 'Accessibility'],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
        challenges: 'Cross-browser compatibility and speech quality optimization.',
        achievements: 'Created accessible text-to-speech tool for enhanced productivity.',
        futureScope: 'Voice customization and offline capabilities.'
    },
    'snake-game': {
        title: 'Snake Game in Python',
        overview: 'Classic Snake game implementation with smooth gameplay and score tracking.',
        features: ['Classic gameplay', 'Score system', 'Game over detection', 'Replayable'],
        techStack: ['Python', 'Game Logic', 'Score Tracking'],
        challenges: 'Implementing smooth mechanics and responsive controls.',
        achievements: 'Created fully playable and addictive Snake game.',
        futureScope: 'Multiplayer support and mobile app port.'
    }
};

// Blog Data
const blogs = {
    'imdb-sentiment': {
        title: 'Building a Sentiment Analyzer with TensorFlow',
        category: 'AI/ML',
        date: 'December 2024',
        content: `
            <h2>Why Sentiment Analysis Matters</h2>
            <p>Sentiment analysis has become crucial in today's digital world. From understanding customer feedback to analyzing social media trends, the ability to automatically classify text sentiment provides valuable insights.</p>
            
            <h3>The Challenge</h3>
            <p>Traditional rule-based approaches often fall short with complex language patterns, sarcasm, and context-dependent expressions. This is where deep learning models, particularly CNNs, excel.</p>
            
            <h3>Implementation Steps</h3>
            <h4>1. Text Preprocessing</h4>
            <p>Cleaning and normalizing IMDB review text, removing HTML tags, converting to lowercase, and handling special characters.</p>
            
            <h4>2. CNN Model Architecture</h4>
            <p>Multiple convolutional layers with different filter sizes to capture various n-gram patterns, followed by global max pooling and dense layers.</p>
            
            <h3>Key Achievements</h3>
            <p>The model successfully predicts IMDB review sentiments with good accuracy, demonstrating CNN effectiveness in NLP tasks.</p>
        `
    },
    'pet-classification': {
        title: 'Classifying Pet Faces with AI',
        category: 'Computer Vision',
        date: 'November 2024',
        content: `
            <h2>The Problem</h2>
            <p>Identifying pet types and emotions from images presents unique challenges in computer vision. Pet faces have diverse structures and emotions are expressed differently across species.</p>
            
            <h3>Solution Approach</h3>
            <p>Used ResNet50, a pre-trained convolutional neural network, with transfer learning to adapt it to our specific pet classification problem.</p>
            
            <h3>Implementation Details</h3>
            <p>The dataset was organized hierarchically with pet types as main categories and emotions as subcategories. Modified final layers of ResNet50 for dual classification.</p>
            
            <h3>Key Insights</h3>
            <p>The model provided insights into pet distributions across different emotions, showing correlations between pet types and emotional states.</p>
        `
    },
    'shopeasy': {
        title: 'ShopEasy – A Simple E-Commerce with API Data',
        category: 'Web Development',
        date: 'October 2024',
        content: `
            <h2>The Problem</h2>
            <p>Creating a lightweight e-commerce solution without traditional database while providing full shopping experience.</p>
            
            <h3>Features Implemented</h3>
            <p>API integration for product data, advanced filtering, pagination, and user authentication using local storage.</p>
            
            <h3>Learning Outcomes</h3>
            <p>Valuable lessons about REST API handling, UI logic implementation, and state management in pure JavaScript applications.</p>
            
            <h3>Technical Highlights</h3>
            <p>Efficient API integration, responsive design principles, and modern JavaScript patterns for maintainability.</p>
        `
    },
    'text-to-speech': {
        title: 'From Text to Voice – My Web Speech API Project',
        category: 'Web APIs',
        date: 'September 2024',
        content: `
            <h2>The Problem</h2>
            <p>Converting text to speech is a common need for accessibility, productivity, and entertainment purposes.</p>
            
            <h3>Solution Implementation</h3>
            <p>User-friendly interface integrating with Web Speech API, providing natural speech synthesis capabilities directly in the browser.</p>
            
            <h3>Key Features</h3>
            <p>Natural speech output, responsive design, and accessibility focus with proper ARIA labels and keyboard navigation.</p>
            
            <h3>Benefits</h3>
            <p>Enhances accessibility for users with visual impairments and provides productivity benefits for audio preference.</p>
        `
    },
    'snake-game': {
        title: 'The Snake Game Revival in Python',
        category: 'Game Development',
        date: 'August 2024',
        content: `
            <h2>Why Build a Snake Game?</h2>
            <p>The classic Snake game holds nostalgic value and provides excellent opportunity to practice fundamental programming concepts.</p>
            
            <h3>Technical Implementation</h3>
            <p>Classic Snake mechanics with Python game loop pattern, collision detection, and comprehensive scoring system.</p>
            
            <h3>The Fun Factor</h3>
            <p>Highly replayable and addictive with increasing difficulty as the snake grows, creating engaging challenge.</p>
            
            <h3>Learning Outcomes</h3>
            <p>Reinforced understanding of game development fundamentals, Python programming patterns, and user experience design.</p>
        `
    }
};

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Modal functionality
function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    const modalContent = document.getElementById('projectModalContent');
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <div class="project-modal-content">
            <div class="project-overview">
                <h3>Overview</h3>
                <p>${project.overview}</p>
            </div>
            
            <div class="project-details">
                <div class="detail-section">
                    <h3>Features</h3>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h3>Tech Stack</h3>
                    <div class="tech-tags">
                        ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>Challenges</h3>
                    <p>${project.challenges}</p>
                </div>
                
                <div class="detail-section">
                    <h3>Achievements</h3>
                    <p>${project.achievements}</p>
                </div>
                
                <div class="detail-section">
                    <h3>Future Scope</h3>
                    <p>${project.futureScope}</p>
                </div>
            </div>
        </div>
    `;
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function openBlogModal(blogId) {
    const blog = blogs[blogId];
    if (!blog) return;

    const modalContent = document.getElementById('blogModalContent');
    modalContent.innerHTML = `
        <div class="blog-modal-header">
            <h2>${blog.title}</h2>
            <div class="blog-meta">
                <span class="blog-category">${blog.category}</span>
                <span class="blog-date">${blog.date}</span>
            </div>
        </div>
        <div class="blog-modal-content">
            ${blog.content}
        </div>
    `;
    
    blogModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modals
function closeModals() {
    projectModal.style.display = 'none';
    blogModal.style.display = 'none';
    const resumeModalRef = document.getElementById('resumeModal');
    if (resumeModalRef) {
        resumeModalRef.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
}

// Close modal when clicking on X or outside
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModals);
});

window.addEventListener('click', (e) => {
    const resumeModalRef = document.getElementById('resumeModal');
    if (e.target === projectModal || e.target === blogModal || e.target === resumeModalRef) {
        closeModals();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModals();
    }
});

// Contact form handling with EmailJS
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    
    try {
        // Initialize EmailJS with your public key
        emailjs.init("ywWnrhhE2mosGjH8h");
        
        // Send email using EmailJS with your actual service and template IDs
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'ravulapradeep8@gmail.com'
        };
        
        const response = await emailjs.send(
            'service_61jzg6t', // Your EmailJS service ID
            'template_644gyv8', // Your EmailJS template ID
            templateParams
        );
        
        if (response.status === 200) {
            // Success - message sent to your email
            alert(`✅ Message sent successfully!\n\n📧 New message from:\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}\n\nI'll receive this in my email and get back to you soon!`);
            
            // Reset form
            contactForm.reset();
        } else {
            throw new Error('Failed to send message. Please try again.');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert(`❌ Failed to send message: ${error.message}\n\nPlease try again or contact me directly at ravulapradeep8@gmail.com`);
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
    
    // Log to console for debugging
    console.log('Contact form submitted:', { name, email, message });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .blog-card, .skill-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Skill card hover effects
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add modal styles
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .project-modal-content, .blog-modal-content {
        line-height: 1.8;
    }
    
    .detail-section {
        margin-bottom: 2rem;
    }
    
    .detail-section h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    
    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .tech-tag {
        background: rgba(0, 212, 255, 0.1);
        color: var(--primary-color);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        border: 1px solid var(--primary-color);
        font-size: 0.9rem;
    }
    
    .blog-modal-header {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
    }
    
    .blog-modal-content h2 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .blog-modal-content h3 {
        color: var(--secondary-color);
        margin: 1.5rem 0 0.5rem 0;
    }
    
    .blog-modal-content p {
        margin-bottom: 1rem;
        color: var(--text-secondary);
    }
    
    .blog-modal-content ul {
        margin: 1rem 0;
        padding-left: 2rem;
    }
    
    .blog-modal-content li {
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
    }
`;

document.head.appendChild(modalStyles);

// Resume modal open function
function openResumeModal(src) {
    const resumeModal = document.getElementById('resumeModal');
    const resumeContent = document.getElementById('resumeModalContent');

    // Prefer embed, fallback to iframe
    resumeContent.innerHTML = `
        <embed src="${src}" type="application/pdf" />
    `;

    resumeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Resume upload local preview (client-side only)
const resumeFileInput = document.getElementById('resumeFile');
if (resumeFileInput) {
    resumeFileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        if (file.type !== 'application/pdf') {
            alert('Please upload a PDF file.');
            return;
        }
        const url = URL.createObjectURL(file);
        openResumeModal(url);
    });
}

// ----- Admin Mode for Resume Management -----
(function setupAdminMode() {
    const ADMIN_PASSCODE = 'Lucky@123'; // change this to your secret

    function enableAdminMode() {
        document.body.classList.add('admin-mode');
        localStorage.setItem('pr_admin_mode', '1');
    }

    function disableAdminMode() {
        document.body.classList.remove('admin-mode');
        localStorage.removeItem('pr_admin_mode');
    }

    // Persist admin mode across refresh (on your device/browser)
    if (localStorage.getItem('pr_admin_mode') === '1') {
        document.body.classList.add('admin-mode');
    }

    // Toggle admin prompt: Ctrl+Alt+R
    document.addEventListener('keydown', (e) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const altPressed = e.altKey;
        const ctrlOrCmdPressed = isMac ? e.metaKey : e.ctrlKey;
        if (altPressed && ctrlOrCmdPressed && e.key.toLowerCase() === 'r') {
            e.preventDefault();
            const currentAdmin = document.body.classList.contains('admin-mode');
            if (currentAdmin) {
                if (confirm('Exit admin mode?')) {
                    disableAdminMode();
                }
                return;
            }
            const code = prompt('Enter admin passcode');
            if (code && code === ADMIN_PASSCODE) {
                enableAdminMode();
                alert('Admin mode enabled');
            } else if (code !== null) {
                alert('Invalid passcode');
            }
        }
    });

    // Delete resume handler (admin)
    const deleteBtn = document.getElementById('deleteResumeBtn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            if (!document.body.classList.contains('admin-mode')) return;
            if (!confirm('This will mark resume as unavailable. Continue?')) return;
            // Mark resume as deleted in this deployment context
            localStorage.setItem('pr_resume_deleted', '1');
            alert('Resume marked as unavailable for this browser. Replace assets/resume.pdf to restore.');
        });
    }

    // If marked deleted, disable view/download buttons
    const isDeleted = localStorage.getItem('pr_resume_deleted') === '1';
    if (isDeleted) {
        const viewBtn = document.querySelector('#resume .resume-actions .btn.btn-primary');
        const downloadBtn = document.querySelector('#resume .resume-actions a.btn.btn-secondary');
        if (viewBtn) {
            viewBtn.disabled = true;
            viewBtn.style.opacity = '0.6';
            viewBtn.style.cursor = 'not-allowed';
            viewBtn.title = 'Resume currently unavailable';
        }
        if (downloadBtn) {
            downloadBtn.removeAttribute('href');
            downloadBtn.style.opacity = '0.6';
            downloadBtn.style.pointerEvents = 'none';
            downloadBtn.title = 'Resume currently unavailable';
        }
    }
})(); 

// Achievements Configuration System
const achievementsConfig = [
    {
        id: 'nptel-design-thinking',
        title: 'Completed NPTEL Certification in Design Thinking',
        issuer: 'NPTEL',
        date: '2024',
        category: 'Design Thinking',
        imagePath: 'assets/achievements/Completed NPTEL Certification in Design Thinking.png'
    },
    {
        id: 'java-fundamentals',
        title: 'Completed Java Fundamentals in Infosys Springboard',
        issuer: 'Infosys Springboard',
        date: '2024',
        category: 'Java Programming',
        imagePath: 'assets/achievements/Completed Java Fundementals in Infoys Spring board.png'
    },
    {
        id: 'tata-crucible',
        title: 'Participated in Tata Crucible',
        issuer: 'Tata Group',
        date: '2024',
        category: 'Competition',
        imagePath: 'assets/achievements/Participated in Tata Crucible.png'
    },
    {
        id: 'prototype-challenge',
        title: 'Participated in Prototype Challenge',
        issuer: 'Prototype Challenge',
        date: '2024',
        category: 'Innovation',
        imagePath: 'assets/achievements/Participated in Prototype Challenge.png'
    },
    {
        id: 'nptel-java',
        title: 'Completed NPTEL Certification in Java',
        issuer: 'NPTEL',
        date: '2024',
        category: 'Java Programming',
        imagePath: 'assets/achievements/Completed NPTEL Certification in Java.png'
    },
    {
        id: 'flipkart-grid',
        title: 'Participated in Flipkart Grid',
        issuer: 'Flipkart',
        date: '2024',
        category: 'Competition',
        imagePath: 'assets/achievements/Participated in flipkart Grid.png'
    },
    {
        id: 'machine-learning',
        title: 'Completed Machine Learning Projects',
        issuer: 'Machine Learning',
        date: '2024',
        category: 'AI/ML',
        imagePath: 'assets/achievements/Completed Machine Learning Projects.png'
    },
    {
        id: 'ideation-challenge',
        title: 'Secured First Place in Ideation Challenge',
        issuer: 'Ideation Challenge',
        date: '2024',
        category: 'Innovation',
        imagePath: 'assets/achievements/Secured First Place in IdeationChallenge.png'
    }
];

// Load achievements on page load
document.addEventListener('DOMContentLoaded', () => {
    loadAchievements();
});

// Load and display achievements
function loadAchievements() {
    const grid = document.getElementById('achievementsGrid');
    
    if (achievementsConfig.length === 0) {
        grid.innerHTML = `
            <div class="no-achievements">
                <i class="fas fa-trophy"></i>
                <h3>No Achievements Yet</h3>
                <p>Add achievements to the configuration to display them here.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = achievementsConfig.map(achievement => `
        <div class="achievement-card" data-achievement-id="${achievement.id}">
            <img src="${achievement.imagePath}" alt="${achievement.title}" class="achievement-image" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div class="achievement-placeholder" style="display:none;">
                <i class="fas fa-trophy"></i>
                <p>Image not found</p>
            </div>
            <div class="achievement-content">
                <h3>${achievement.title}</h3>
                <p class="achievement-issuer">${achievement.issuer}</p>
                <p class="achievement-date">${achievement.date}</p>
                <div class="achievement-badge">
                    <span class="badge-text">${achievement.category}</span>
                </div>
            </div>
        </div>
    `).join('');
} 