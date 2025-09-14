// PropertyHub JavaScript

// Data
const featuredProperties = [
    {
        id: 1,
        title: "Modern Family Home",
        price: "$750,000",
        location: "Beverly Hills, CA",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1Nzg0OTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beds: 4,
        baths: 3,
        sqft: 2500,
        type: "House"
    },
    {
        id: 2,
        title: "Luxury Downtown Apartment",
        price: "$550,000",
        location: "Manhattan, NY",
        image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTc4MDM1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beds: 2,
        baths: 2,
        sqft: 1200,
        type: "Apartment"
    },
    {
        id: 3,
        title: "Contemporary Living Space",
        price: "$425,000",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTc3NTY5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beds: 3,
        baths: 2,
        sqft: 1800,
        type: "Condo"
    }
];

const allProperties = [
    ...featuredProperties,
    {
        id: 4,
        title: "Modern Office Building",
        price: "$2,500,000",
        location: "Downtown Seattle, WA",
        image: "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc4Mzk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beds: 0,
        baths: 8,
        sqft: 15000,
        type: "Commercial",
        priceNum: 2500000
    },
    {
        id: 5,
        title: "Cozy Suburban Home",
        price: "$385,000",
        location: "Phoenix, AZ",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1Nzg0OTU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beds: 3,
        baths: 2,
        sqft: 1600,
        type: "House",
        priceNum: 385000
    },
    {
        id: 6,
        title: "Urban Studio Apartment",
        price: "$285,000",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTc4MDM1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        beds: 1,
        baths: 1,
        sqft: 650,
        type: "Apartment",
        priceNum: 285000
    }
];

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Home Buyer",
        content: "PropertyHub made finding our dream home incredibly easy. The search filters were perfect and the team was very professional throughout the entire process.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Property Investor",
        content: "I've used several property platforms, but PropertyHub stands out with its detailed listings and market insights. Highly recommend for serious buyers.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "First-time Buyer",
        content: "The team at PropertyHub guided me through my first home purchase with patience and expertise. I couldn't have asked for better service.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
];

const features = [
    {
        id: 'emi-calculator',
        title: 'EMI Calculator',
        description: 'Calculate your monthly EMI with different loan amounts and interest rates',
        icon: 'fas fa-calculator',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        id: 'home-loan',
        title: 'Best Home Loan Offer',
        description: 'Compare and find the best home loan offers from top banks',
        icon: 'fas fa-percentage',
        color: 'bg-green-100 text-green-600'
    },
    {
        id: 'rates-trends',
        title: 'Rates and Trends',
        description: 'Stay updated with latest property rates and market trends',
        icon: 'fas fa-chart-line',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        id: 'interior-budget',
        title: 'Interior Budget Estimator',
        description: 'Estimate your interior decoration and furnishing costs',
        icon: 'fas fa-paint-brush',
        color: 'bg-orange-100 text-orange-600'
    },
    {
        id: 'investment-hotspot',
        title: 'Investment Hotspots',
        description: 'Discover top localities and investment opportunities in your city',
        icon: 'fas fa-map-pin',
        color: 'bg-red-100 text-red-600'
    }
];

const teamMembers = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1652878530627-cc6f063e3947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNTc3ODEyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        bio: "With over 15 years in real estate, Sarah founded PropertyHub to revolutionize how people find and buy properties."
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        role: "Head of Sales",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        bio: "Michael leads our sales team with expertise in luxury properties and commercial real estate transactions."
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Property Manager",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        bio: "Emily oversees property management services and ensures our clients receive exceptional post-purchase support."
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Market Analyst",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        bio: "David provides market insights and analysis to help clients make informed investment decisions."
    }
];

const stats = [
    { icon: 'fas fa-home', label: 'Properties Sold', value: '2,500+' },
    { icon: 'fas fa-users', label: 'Happy Clients', value: '1,800+' },
    { icon: 'fas fa-chart-line', label: 'Years Experience', value: '15+' },
    { icon: 'fas fa-award', label: 'Awards Won', value: '25+' }
];

const values = [
    {
        icon: 'fas fa-award',
        title: 'Excellence',
        description: 'We strive for excellence in every transaction, ensuring our clients receive the highest quality service and results.'
    },
    {
        icon: 'fas fa-users',
        title: 'Client-Focused',
        description: 'Our clients are at the heart of everything we do. We listen, understand, and deliver solutions tailored to their unique needs.'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Innovation',
        description: 'We embrace technology and innovative approaches to make real estate transactions smoother and more efficient.'
    }
];

const contactInfo = [
    {
        icon: 'fas fa-map-marker-alt',
        label: 'Office Address',
        value: '123 Real Estate Blvd, Suite 100\nLos Angeles, CA 90210'
    },
    {
        icon: 'fas fa-phone',
        label: 'Phone Number',
        value: '+1 (555) 123-4567'
    },
    {
        icon: 'fas fa-envelope',
        label: 'Email Address',
        value: 'info@propertyhub.com'
    },
    {
        icon: 'fas fa-clock',
        label: 'Business Hours',
        value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed'
    }
];

// Global state
let currentPage = 'home';
let currentFeatureIndex = 0;
let filteredProperties = [...allProperties];

// Utility functions
function createImageWithFallback(src, alt, className) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.className = className;
    img.onerror = function() {
        this.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.className = `image-fallback ${className}`;
        fallback.innerHTML = '<i class="fas fa-image"></i>';
        this.parentNode.replaceChild(fallback, this);
    };
    return img;
}

function createStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        const filled = i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300';
        stars += `<i class="fas fa-star h-4 w-4 ${filled}"></i>`;
    }
    return stars;
}

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.navbar-link').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[data-page="${pageId}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    currentPage = pageId;
}

// Property functions
function createPropertyCard(property) {
    return `
        <div class="property-card bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
            <div class="relative">
                ${createImageWithFallback(property.image, property.title, 'w-full h-48 object-cover').outerHTML}
                <span class="absolute top-4 left-4 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                    ${property.type}
                </span>
            </div>
            
            <div class="p-6">
                <div class="flex items-center text-muted-foreground mb-2">
                    <i class="fas fa-map-marker-alt h-4 w-4 mr-1"></i>
                    <span class="text-sm">${property.location}</span>
                </div>
                
                <h3 class="font-semibold mb-2">${property.title}</h3>
                <p class="text-2xl font-bold text-primary mb-4">${property.price}</p>
                
                <div class="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    ${property.type !== "Commercial" ? `
                        <div class="flex items-center">
                            <i class="fas fa-bed h-4 w-4 mr-1"></i>
                            <span>${property.beds} beds</span>
                        </div>
                    ` : `
                        <div class="flex items-center">
                            <span>Office Space</span>
                        </div>
                    `}
                    <div class="flex items-center">
                        <i class="fas fa-bath h-4 w-4 mr-1"></i>
                        <span>${property.baths} baths</span>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-expand-arrows-alt h-4 w-4 mr-1"></i>
                        <span>${property.sqft} sqft</span>
                    </div>
                </div>
                
                <button class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors" onclick="viewPropertyDetails(${property.id})">
                    View Details
                </button>
            </div>
        </div>
    `;
}

function viewPropertyDetails(propertyId) {
    // For now, just show an alert. In a real app, this would navigate to a details page
    const property = allProperties.find(p => p.id === propertyId);
    if (property) {
        alert(`Viewing details for: ${property.title}\nPrice: ${property.price}\nLocation: ${property.location}`);
    }
}

// Feature carousel functions
function updateFeatureCarousel() {
    const carousel = document.getElementById('features-carousel-track');
    if (!carousel) return;
    
    const visibleFeatures = features.slice(currentFeatureIndex, currentFeatureIndex + 3);
    carousel.innerHTML = visibleFeatures.map((feature, index) => `
        <div class="carousel-item">
            <div class="feature-card bg-white rounded-2xl shadow-lg border-2 border-transparent hover:border-primary/20 p-8 cursor-pointer group transition-all duration-500 hover:shadow-2xl" style="animation-delay: ${index * 0.1}s;">
                <div class="text-center">
                    <div class="p-4 rounded-2xl ${feature.color} w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <i class="${feature.icon} h-8 w-8"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                        ${feature.title}
                    </h3>
                    <p class="text-muted-foreground leading-relaxed mb-6">
                        ${feature.description}
                    </p>
                    <button class="w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-105 font-semibold">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update pagination dots
    updatePaginationDots();
    
    // Add stagger animation to cards
    const cards = carousel.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function updatePaginationDots() {
    const dotsContainer = document.querySelector('.pagination-dot').parentElement;
    if (!dotsContainer) return;
    
    const totalPages = Math.ceil(features.length / 3);
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.className = `pagination-dot w-2 h-2 rounded-full transition-all ${
            Math.floor(currentFeatureIndex / 3) === i ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
        }`;
        dot.onclick = () => {
            currentFeatureIndex = i * 3;
            updateFeatureCarousel();
        };
        dotsContainer.appendChild(dot);
    }
}

function nextFeature() {
    if (currentFeatureIndex < features.length - 3) {
        currentFeatureIndex++;
    } else {
        currentFeatureIndex = 0;
    }
    updateFeatureCarousel();
}

function prevFeature() {
    if (currentFeatureIndex > 0) {
        currentFeatureIndex--;
    } else {
        currentFeatureIndex = Math.max(0, features.length - 3);
    }
    updateFeatureCarousel();
}

// Filter functions
function applyFilters() {
    const typeFilter = document.getElementById('typeFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const locationFilter = document.getElementById('locationFilter').value.toLowerCase();
    
    filteredProperties = allProperties.filter(property => {
        let matches = true;
        
        if (typeFilter !== 'all') {
            matches = matches && property.type.toLowerCase() === typeFilter;
        }
        
        if (priceFilter !== 'all') {
            const price = property.priceNum || 0;
            switch (priceFilter) {
                case '0-200k': matches = matches && price <= 200000; break;
                case '200k-500k': matches = matches && price > 200000 && price <= 500000; break;
                case '500k-1m': matches = matches && price > 500000 && price <= 1000000; break;
                case '1m+': matches = matches && price > 1000000; break;
            }
        }
        
        if (locationFilter) {
            matches = matches && property.location.toLowerCase().includes(locationFilter);
        }
        
        return matches;
    });
    
    updatePropertyListings();
}

function clearFilters() {
    document.getElementById('typeFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('locationFilter').value = '';
    filteredProperties = [...allProperties];
    updatePropertyListings();
}

function updatePropertyListings() {
    const container = document.getElementById('propertyListings');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    if (filteredProperties.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
    } else {
        container.innerHTML = filteredProperties.map(createPropertyCard).join('');
        if (noResults) noResults.classList.add('hidden');
    }
}

// Form handling
function handleContactForm(e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    e.target.reset();
}

// Initialize the application
function initializeApp() {
    // Set up navigation
    document.querySelectorAll('.navbar-link').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.target.getAttribute('data-page');
            if (page) {
                showPage(page);
            }
        });
    });
    
    // Set up tab navigation
    document.querySelectorAll('[data-tab]').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('[data-tab]').forEach(t => {
                t.classList.remove('active', 'text-red-600', 'bg-red-50', 'border-b-2', 'border-red-600');
                t.classList.add('text-muted-foreground');
            });
            e.target.classList.add('active', 'text-red-600', 'bg-red-50', 'border-b-2', 'border-red-600');
            e.target.classList.remove('text-muted-foreground');
        });
    });
    
    // Set up feature carousel
    const nextBtn = document.getElementById('nextFeature');
    const prevBtn = document.getElementById('prevFeature');
    
    if (nextBtn) nextBtn.addEventListener('click', nextFeature);
    if (prevBtn) prevBtn.addEventListener('click', prevFeature);
    
    // Set up filters
    const applyFiltersBtn = document.getElementById('applyFilters');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (applyFiltersBtn) applyFiltersBtn.addEventListener('click', applyFilters);
    if (clearFiltersBtn) clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Set up contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initialize content
    updateFeatureCarousel();
    updatePropertyListings();
    
    // Populate featured properties
    const featuredContainer = document.getElementById('featuredProperties');
    if (featuredContainer) {
        featuredContainer.innerHTML = featuredProperties.map(createPropertyCard).join('');
    }
    
    // Populate testimonials
    const testimonialsContainer = document.getElementById('testimonials');
    if (testimonialsContainer) {
        testimonialsContainer.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial-card bg-white rounded-lg shadow-sm border p-6">
                <div class="flex items-center mb-4">
                    ${createStarRating(testimonial.rating)}
                </div>
                
                <p class="text-muted-foreground mb-6 italic">
                    "${testimonial.content}"
                </p>
                
                <div class="flex items-center">
                    <div class="h-10 w-10 rounded-full bg-muted mr-3 flex items-center justify-center">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="h-10 w-10 rounded-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold" style="display: none;">
                            ${testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                    <div>
                        <p class="font-semibold">${testimonial.name}</p>
                        <p class="text-sm text-muted-foreground">${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Populate stats
    const statsContainer = document.getElementById('stats');
    if (statsContainer) {
        statsContainer.innerHTML = stats.map(stat => `
            <div class="bg-white rounded-lg shadow-sm border text-center p-6">
                <i class="${stat.icon} h-8 w-8 text-primary mx-auto mb-4"></i>
                <p class="text-2xl font-bold mb-2">${stat.value}</p>
                <p class="text-muted-foreground">${stat.label}</p>
            </div>
        `).join('');
    }
    
    // Populate values
    const valuesContainer = document.getElementById('values');
    if (valuesContainer) {
        valuesContainer.innerHTML = values.map(value => `
            <div class="bg-white rounded-lg shadow-sm border p-6 text-center">
                <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="${value.icon} h-8 w-8 text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3">${value.title}</h3>
                <p class="text-muted-foreground">
                    ${value.description}
                </p>
            </div>
        `).join('');
    }
    
    // Populate team
    const teamContainer = document.getElementById('team');
    if (teamContainer) {
        teamContainer.innerHTML = teamMembers.map(member => `
            <div class="team-card bg-white rounded-lg shadow-sm border text-center p-6">
                <div class="relative mb-4">
                    <div class="w-24 h-24 rounded-full mx-auto bg-muted flex items-center justify-center">
                        <img src="${member.image}" alt="${member.name}" class="w-24 h-24 rounded-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-semibold" style="display: none;">
                            ${member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                </div>
                <h3 class="font-semibold mb-1">${member.name}</h3>
                <span class="inline-block bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm mb-3">
                    ${member.role}
                </span>
                <p class="text-sm text-muted-foreground leading-relaxed">
                    ${member.bio}
                </p>
            </div>
        `).join('');
    }
    
    // Populate contact info
    const contactInfoContainer = document.getElementById('contactInfo');
    if (contactInfoContainer) {
        contactInfoContainer.innerHTML = contactInfo.map(info => `
            <div class="contact-card bg-white rounded-lg shadow-sm border p-6">
                <div class="flex items-start">
                    <div class="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                        <i class="${info.icon} h-6 w-6 text-primary"></i>
                    </div>
                    <div>
                        <h3 class="font-semibold mb-2">${info.label}</h3>
                        <p class="text-muted-foreground whitespace-pre-line">
                            ${info.value}
                        </p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Video background functionality
function initializeVideoBackground() {
    const heroVideo = document.getElementById('hero-background-video');
    const videoLoading = document.getElementById('video-loading-state');
    
    if (heroVideo) {
        // Hide loading state when video can play
        heroVideo.addEventListener('canplaythrough', () => {
            if (videoLoading) {
                videoLoading.style.display = 'none';
            }
        });
        
        // Show loading state if video fails to load
        heroVideo.addEventListener('error', () => {
            if (videoLoading) {
                videoLoading.innerHTML = '<div class="text-center"><p class="text-muted-foreground">Video unavailable</p></div>';
            }
        });
        
        // Ensure video plays when page loads
        const playVideo = () => {
            heroVideo.currentTime = 0;
            heroVideo.play().catch(error => {
                console.log('Video autoplay failed:', error);
                // If autoplay fails, try again after user interaction
                document.addEventListener('click', () => {
                    heroVideo.play().catch(e => console.log('Video play after interaction failed:', e));
                }, { once: true });
            });
        };
        
        // Initial play
        playVideo();
        
        // Restart video when user navigates back to home page
        const homePage = document.getElementById('home');
        if (homePage) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                        if (homePage.classList.contains('active')) {
                            // Restart video when home page becomes active
                            playVideo();
                        }
                    }
                });
            });
            
            observer.observe(homePage, { attributes: true });
        }
        
        // Handle visibility change to restart video when user returns to tab
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && homePage.classList.contains('active')) {
                playVideo();
            }
        });
        
        // Restart video on window focus
        window.addEventListener('focus', () => {
            if (homePage.classList.contains('active')) {
                playVideo();
            }
        });
        
        // Restart video when user scrolls back to top (if they're on home page)
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop < lastScrollTop && homePage.classList.contains('active')) {
                // User scrolled up, restart video
                playVideo();
            }
            lastScrollTop = scrollTop;
        });
    }
}

// Enhanced animations and interactions
function initializeAnimations() {
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Add parallax effect to hero content
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add floating animation to action buttons
    const floatingBtns = document.querySelectorAll('.floating-btn');
    floatingBtns.forEach((btn, index) => {
        btn.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 1000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    initializeVideoBackground();
    initializeAnimations();
});
