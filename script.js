// Initialize EmailJS with your User ID
// Replace 'YOUR_USER_ID' with your actual EmailJS User ID
emailjs.init('Xc13-0ycqEm0IURM5');

// // Typewriter Effect
// const typewriterText = " Sandip Sanjel"; // Replace with your actual name
// const typewriterElement = document.getElementById('typewriter');
// let charIndex = 0;

// function typeWriter() {
//     if (charIndex < typewriterText.length) {
//         typewriterElement.textContent += typewriterText.charAt(charIndex);
//         charIndex++;
//         setTimeout(typeWriter, 150); // Adjust speed here (100ms per character)
//     }
// }

// // Start typewriter effect when page loads
// window.addEventListener('load', () => {
//     setTimeout(typeWriter, 500); // Start after 500ms delay
// });



const typewriterText = " Sandip Sanjel";
const typewriterElement = document.getElementById('typewriter');

let charIndex = 0;

function typeWriter() {
    if (charIndex < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150);
    } else {
        // wait → reset → restart
        setTimeout(() => {
            typewriterElement.textContent = "";
            charIndex = 0;
            typeWriter();
        }, 1000); // pause before restart
    }
}

window.addEventListener('load', () => {
    typeWriter();
});









// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitBtn = event.target.querySelector('.submit-btn');
    const formStatus = document.getElementById('form-status');
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.style.display = 'none';
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString(),
        // This creates a JSON structure that can be included in the email
        json_data: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }, null, 2)
    };
    
    // Send email using EmailJS
    // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
    emailjs.send('service_c6dd9la', 'template_rkofagi', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            formStatus.className = 'success';
            formStatus.textContent = '✓ Thank you! Your message has been sent successfully.';
            formStatus.style.display = 'block';
            
            // Save to local JSON file (downloads to user's computer)
            saveToLocalJSON(formData);
            
            // Reset form
            document.getElementById('contact-form').reset();
            
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
            
        }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            formStatus.className = 'error';
            formStatus.textContent = '✗ Oops! Something went wrong. Please try again.';
            formStatus.style.display = 'block';
            
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
});

// Function to save feedback to a JSON file (downloads to user's computer)
function saveToLocalJSON(data) {
    // Create a clean JSON object
    const feedbackData = {
        name: data.from_name,
        email: data.from_email,
        subject: data.subject,
        message: data.message,
        timestamp: data.timestamp,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };
    
    // Try to get existing feedback from localStorage
    let allFeedback = [];
    const existingFeedback = localStorage.getItem('portfolioFeedback');
    
    if (existingFeedback) {
        try {
            allFeedback = JSON.parse(existingFeedback);
        } catch (e) {
            allFeedback = [];
        }
    }
    
    // Add new feedback
    allFeedback.push(feedbackData);
    
    // Save back to localStorage
    localStorage.setItem('portfolioFeedback', JSON.stringify(allFeedback));
    
    // Also create a downloadable JSON file
    const dataStr = JSON.stringify(feedbackData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    // Create download link
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `feedback_${Date.now()}.json`;
    
    // Uncomment the line below if you want to automatically download the JSON file
    // link.click();
    
    URL.revokeObjectURL(url);
}

// Function to export all feedback from localStorage
function exportAllFeedback() {
    const allFeedback = localStorage.getItem('portfolioFeedback');
    
    if (!allFeedback) {
        alert('No feedback data found!');
        return;
    }
    
    const dataStr = allFeedback;
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `all_feedback_${Date.now()}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to navigation on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Active nav link on scroll
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});
