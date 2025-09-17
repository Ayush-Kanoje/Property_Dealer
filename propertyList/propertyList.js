document.addEventListener('DOMContentLoaded', () => {

    // --- PROPERTY DATA (INDIAN LOCALIZATION) ---
    const defaultProperties = [
        {
            id: 1,
            title: 'Sea View Luxury Flat',
            location: 'Bandra, Mumbai',
            price: 150000,
            type: 'Apartment',
            bedrooms: 3,
            bathrooms: 3,
            sqft: 2200,
            amenities: ['Parking', 'Gym', 'Security'],
            imageUrl: '',
            tags: ['Featured']
        },
        {
            id: 2,
            title: 'Modern Family Villa',
            location: 'Koregaon Park, Pune',
            price: 250000,
            type: 'Villa',
            bedrooms: 5,
            bathrooms: 4,
            sqft: 3500,
            amenities: ['Parking', 'Swimming Pool', 'Garden', 'Security'],
            imageUrl: '',
            tags: ['New']
        },
        {
            id: 3,
            title: 'Spacious Family Home',
            location: 'Indiranagar, Bangalore',
            price: 95000,
            type: 'House',
            bedrooms: 4,
            bathrooms: 3,
            sqft: 2400,
            amenities: ['Parking', 'Garden'],
            imageUrl: '',
            tags: ['New', 'Featured']
        },
        {
            id: 4,
            title: 'Gated Community Condo',
            location: 'Hitech City, Hyderabad',
            price: 70000,
            type: 'Condo',
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1100,
            amenities: ['Parking', 'Swimming Pool', 'Gym', 'Security'],
            imageUrl: '',
            tags: []
        },
        {
            id: 5,
            title: 'Cozy Suburban House',
            location: 'Adyar, Chennai',
            price: 80000,
            type: 'House',
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1800,
            amenities: ['Parking'],
            imageUrl: '',
            tags: []
        },
        {
            id: 6,
            title: 'Modern Studio Apartment',
            location: 'Cyber City, Gurgaon',
            price: 65000,
            type: 'Apartment',
            bedrooms: 1,
            bathrooms: 1,
            sqft: 650,
            amenities: ['Gym', 'Security'],
            imageUrl: '',
            tags: ['New']
        },
    
            {
              id: 7,
              title: "Contemporary 3BHK — Bright & Airy",
              price: 8500000,
              location: "Bandra West, Mumbai",
              imageUrl: "",
              bedrooms: 3,
              bathrooms: 2,
              sqft: 1200,
              type: "Apartment",
              amenities: [],
              tags: ["New"]
            },
            {
              id: 8,
              title: "Modern Villa with Private Garden",
              price: 42000000,
              location: "Whitefield, Bengaluru",
              imageUrl: "",
              bedrooms: 4,
              bathrooms: 4,
              sqft: 3000,
              type: "Villa",
              amenities: ["Parking", "Garden"],
              tags: ["New", "Featured"]
            },
            {
              id: 9,
              title: "Chic 2BHK Near Metro — Ready to Move",
              price: 6500000,
              location: "Hauz Khas, New Delhi",
              imageUrl: "",
              bedrooms: 2,
              bathrooms: 2,
              sqft: 950,
              type: "Apartment",
              amenities: [],
              tags: ["New"]
            },
            {
                id: 10,
                title: "Sea-facing 3BHK Penthouse",
                price: 65000000,
                location: "Adyar, Chennai",
                imageUrl: "",
                bedrooms: 3,
                bathrooms: 3,
                sqft: 2200,
                type: "Penthouse",
                amenities: ["Parking", "Gym", "Security"],
                tags: ["Featured"]
              },
              {
                id: 11,
                title: "Newly Renovated Studio",
                price: 2800000,
                location: "Hitech City, Hyderabad",
                imageUrl: "",
                bedrooms: 1,
                bathrooms: 1,
                sqft: 420,
                type: "Studio",
                amenities: ["Gym"],
                tags: ["New"]
              },
              {
                id: 12,
                title: "Spacious 4BHK — Family Home",
                price: 17500000,
                location: "Koregaon Park, Pune",
                imageUrl: "",
                bedrooms: 4,
                bathrooms: 4,
                sqft: 2400,
                type: "Independent House",
                amenities: ["Parking", "Garden", "Security"],
                tags: ["Featured"]
              },
              {
                id: 13,
                title: "Stylish Builder Floor with Terrace",
                price: 9500000,
                location: "Salt Lake (Sector V), Kolkata",
                imageUrl: "",
                bedrooms: 3,
                bathrooms: 3,
                sqft: 1500,
                type: "Builder Floor",
                amenities: ["Parking", "Garden"],
                tags: ["New"]
              },
              {
                id: 14,
                title: "Corner Row House — Gated Community",
                price: 11000000,
                location: "Satellite, Ahmedabad",
                imageUrl: "",
                bedrooms: 3,
                bathrooms: 3,
                sqft: 1800,
                type: "Row House",
                amenities: ["Parking", "Security"],
                tags: ["New"]
              }
    ];

    // Fallback images for properties without images
    const fallbackImages = [
        'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ];

    // Merge any newly posted properties stored in localStorage
    // Expecting localStorage key 'postedProperties' to be an array of objects
    const storedPosted = JSON.parse(localStorage.getItem('postedProperties') || '[]');
    const normalizePosted = (items) => {
        if (!Array.isArray(items)) return [];
        return items.map((p, idx) => {
            // Get fallback image based on property type or random
            const getFallbackImage = () => {
                if (p.imageUrl && p.imageUrl.trim() !== '') return p.imageUrl;
                if (p.photos && p.photos.length > 0) return p.photos[0];
                return fallbackImages[idx % fallbackImages.length];
            };

            return {
                id: Number(p.id) || Date.now() + idx,
                title: p.title || p.address || 'New Property',
                location: p.location || [p.locality, p.city].filter(Boolean).join(', ') || '—',
                price: Number((p.rentPrice || p.salePrice || p.price || 0)) || 0,
                type: p.type || p.propertyType || 'House',
                bedrooms: Number(p.bedrooms || p.beds || 0) || 0,
                bathrooms: Number(p.bathrooms || p.baths || 0) || 0,
                sqft: Number(p.sqft || p.area || 0) || 0,
                amenities: Array.isArray(p.amenities) ? p.amenities : [],
                imageUrl: getFallbackImage(),
                tags: ['New']
            };
        });
    };
    const postedProperties = normalizePosted(storedPosted);
    const properties = [...postedProperties, ...defaultProperties];

    // --- DOM ELEMENTS ---
    const propertyListContainer = document.getElementById('property_list');
    const propertyCountEl = document.getElementById('property_count');
    const filterForm = document.getElementById('filter_form');
    const clearFiltersBtn = document.getElementById('clear_all_filters');
    const applyFiltersBtn = document.getElementById('apply_filters_btn');

    // --- PAGINATION STATE ---
    let currentPage = 1;
    const pageSize = 6;

    // --- RENDER FUNCTION (Optimized for large datasets) ---
    const renderProperties = (propertiesToRender) => {
        // Use DocumentFragment for better performance with large datasets
        const fragment = document.createDocumentFragment();

        if (propertiesToRender.length === 0) {
            propertyListContainer.innerHTML = '<p>No properties match your criteria.</p>';
            return;
        }

        // Create cards in batches to prevent UI blocking
        const createCard = (prop) => {
            const tagsHTML = prop.tags.map(tag => {
                const tagClass = tag.toLowerCase();
                return `<span class="tag ${tagClass}">${tag}</span>`;
            }).join('');

            const card = document.createElement('div');
            card.className = 'card';
            card.id = `property_no${prop.id}`;
            
            // Handle image with fallback
            const imageUrl = prop.imageUrl && prop.imageUrl.trim() !== '' 
                ? prop.imageUrl 
                : fallbackImages[prop.id % fallbackImages.length];

            card.innerHTML = `
                <div class="top-card" style="background-image: url('${imageUrl}')">
                    <div class="card_tags">${tagsHTML}</div>
                    <div class="card_heart"><i class="fa-regular fa-heart"></i></div>
                    <div class="property_type_tag">${prop.type}</div>
                </div>
                <div class="bottom-card">
                    <div class="card-content">
                        <div class="card-price">₹${prop.price.toLocaleString('en-IN')}<span>/month</span></div>
                        <span class="card-title">${prop.title}</span>
                        <p class="card-txt">${prop.location}</p>
                         <div class="card-details">
                            <span><i class="fa-solid fa-bed"></i> ${prop.bedrooms}</span>
                            <span><i class="fa-solid fa-bath"></i> ${prop.bathrooms}</span>
                            <span><i class="fa-solid fa-ruler-combined"></i> ${prop.sqft} sqft</span>
                    </div>
                </div>
            </div>
            `;

            // Add image error handling
            const topCard = card.querySelector('.top-card');
            const handleImageError = () => {
                const randomFallback = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
                topCard.style.backgroundImage = `url('${randomFallback}')`;
            };

            // Preload image and handle errors
            const img = new Image();
            img.onload = () => {
                topCard.style.backgroundImage = `url('${imageUrl}')`;
            };
            img.onerror = handleImageError;
            img.src = imageUrl;

            return card;
        };

        // Render cards in batches to prevent UI blocking
        const batchSize = 10;
        let currentIndex = 0;

        const renderBatch = () => {
            const endIndex = Math.min(currentIndex + batchSize, propertiesToRender.length);
            
            for (let i = currentIndex; i < endIndex; i++) {
                const card = createCard(propertiesToRender[i]);
                fragment.appendChild(card);
            }
            
            currentIndex = endIndex;
            
            if (currentIndex < propertiesToRender.length) {
                // Use requestAnimationFrame for smooth rendering
                requestAnimationFrame(renderBatch);
            } else {
                // All cards created, update DOM
                propertyListContainer.innerHTML = '';
                propertyListContainer.appendChild(fragment);
                propertyCountEl.textContent = `${propertiesToRender.length} properties found`;
            }
        };

        renderBatch();
    };

    // --- PAGINATION RENDER (Optimized for large datasets) ---
    const renderPagination = (totalItems) => {
        const paginationEl = document.getElementById('pagination');
        if (!paginationEl) return;

        const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
        if (currentPage > totalPages) currentPage = totalPages;

        const btn = (label, page, disabled = false, active = false) =>
            `<a href="#" data-page="${page}" class="${active ? 'active' : ''}" ${disabled ? 'aria-disabled="true"' : ''}>${label}</a>`;

        let html = '';
        html += btn('Previous', currentPage - 1, currentPage === 1);
        
        // Smart pagination for large datasets
        const windowSize = totalPages > 10 ? 7 : 5;
        let start = Math.max(1, currentPage - Math.floor(windowSize / 2));
        let end = Math.min(totalPages, start + windowSize - 1);
        
        if (end - start + 1 < windowSize) {
            start = Math.max(1, end - windowSize + 1);
        }
        
        // Add first page and ellipsis if needed
        if (start > 1) {
            html += btn('1', 1);
            if (start > 2) {
                html += '<span class="pagination-ellipsis">...</span>';
            }
        }
        
        // Add page numbers
        for (let p = start; p <= end; p++) {
            html += btn(String(p), p, false, p === currentPage);
        }
        
        // Add last page and ellipsis if needed
        if (end < totalPages) {
            if (end < totalPages - 1) {
                html += '<span class="pagination-ellipsis">...</span>';
            }
            html += btn(String(totalPages), totalPages);
        }
        
        html += btn('Next', currentPage + 1, currentPage === totalPages);
        paginationEl.innerHTML = html;

        // Add event listeners with throttling for better performance
        let clickTimeout;
        paginationEl.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Throttle clicks to prevent rapid navigation
                if (clickTimeout) return;
                clickTimeout = setTimeout(() => {
                    clickTimeout = null;
                }, 300);
                
                const target = Number(a.getAttribute('data-page'));
                if (!target || a.getAttribute('aria-disabled') === 'true') return;
                currentPage = Math.min(Math.max(1, target), totalPages);
                filterAndRender();
            });
        });
    };

    // --- REFRESH PROPERTIES FROM LOCALSTORAGE ---
    const refreshPropertiesFromStorage = () => {
        const storedPosted = JSON.parse(localStorage.getItem('postedProperties') || '[]');
        const postedProperties = normalizePosted(storedPosted);
        const newProperties = [...postedProperties, ...defaultProperties];
        
        // Update the properties array
        properties.length = 0;
        properties.push(...newProperties);
        
        // Reset to first page and re-render
        currentPage = 1;
        filterAndRender();
    };

    // --- FILTER & SORT FUNCTION ---
    const filterAndRender = () => {
        // Get filter values
        const minPrice = parseFloat(document.getElementById('min_price').value) || 0;
        const maxPrice = parseFloat(document.getElementById('max_price').value) || Infinity;
        const propertyType = document.querySelector('input[name="property_type"]:checked').value;
        const bedrooms = parseInt(document.querySelector('#bedrooms_group button.active').dataset.value);
        const bathrooms = parseInt(document.querySelector('#bathrooms_group button.active').dataset.value);
        const selectedAmenities = Array.from(document.querySelectorAll('.amenities_list input:checked')).map(cb => cb.value);
        const sortBy = document.getElementById('sort_by').value;

        // Filter properties
        let filteredProperties = properties.filter(prop => {
            // Price check
            if (prop.price < minPrice || prop.price > maxPrice) return false;
            // Type check
            if (propertyType !== 'any' && prop.type !== propertyType) return false;
            // Bedrooms check
            if (prop.bedrooms < bedrooms) return false;
            // Bathrooms check
            if (prop.bathrooms < bathrooms) return false;
            // Amenities check
            if (selectedAmenities.length > 0) {
                const hasAllAmenities = selectedAmenities.every(amenity => prop.amenities.includes(amenity));
                if (!hasAllAmenities) return false;
            }
            return true;
        });
        
        // Sort properties
        switch(sortBy) {
            case 'price_asc':
                filteredProperties.sort((a, b) => a.price - b.price);
                break;
            case 'price_desc':
                filteredProperties.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                // Assuming higher ID is newer. In a real app, you'd use a timestamp.
                filteredProperties.sort((a, b) => b.id - a.id);
                break;
        }

        // Pagination slice
        const startIdx = (currentPage - 1) * pageSize;
        const visible = filteredProperties.slice(startIdx, startIdx + pageSize);
        renderProperties(visible);
        renderPagination(filteredProperties.length);
    };

    // --- EVENT LISTENERS ---

    // Button group active state handler
    const setupButtonGroup = (groupId) => {
        const group = document.getElementById(groupId);
        if (group) {
            const buttons = group.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    buttons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    filterAndRender(); // Re-filter on click
                });
            });
        }
    };

    // Like button handler (using event delegation)
    propertyListContainer.addEventListener('click', (e) => {
        const heartIcon = e.target.closest('.card_heart i');
        if(heartIcon) {
            heartIcon.classList.toggle('fa-regular');
            heartIcon.classList.toggle('fa-solid');
            heartIcon.parentElement.classList.toggle('liked');
        }
    });

    // Add listeners to all filter inputs
    filterForm.addEventListener('change', filterAndRender);
    filterForm.addEventListener('keyup', (e) => { // for price inputs
         if(e.target.type === 'number') filterAndRender();
    });
    
    // Listener for the "Apply Filters" button
    applyFiltersBtn.addEventListener('click', (e) => {
        e.preventDefault();
        filterAndRender();
    });


    // Clear filters button
    clearFiltersBtn.addEventListener('click', () => {
        filterForm.reset();
        // Manually reset button groups to 'Any'
        document.querySelectorAll('.button_group').forEach(group => {
            group.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
            group.querySelector('button').classList.add('active');
        });
         // Reset radio button for property type
        document.getElementById('type_any').checked = true;
        filterAndRender();
    });

    // --- STORAGE EVENT LISTENER ---
    // Listen for changes to localStorage from other tabs/windows
    window.addEventListener('storage', (e) => {
        if (e.key === 'postedProperties') {
            refreshPropertiesFromStorage();
        }
    });

    // --- PERIODIC REFRESH (Optional - for real-time updates) ---
    // Check for new properties every 5 seconds
    setInterval(() => {
        const currentStored = JSON.parse(localStorage.getItem('postedProperties') || '[]');
        if (currentStored.length !== storedPosted.length) {
            refreshPropertiesFromStorage();
        }
    }, 5000);

    // --- INITIAL SETUP ---
    setupButtonGroup('bedrooms_group');
    setupButtonGroup('bathrooms_group');
    
    // Initial render
    filterAndRender();
    
    // Expose refresh function globally for manual refresh if needed
    window.refreshPropertyList = refreshPropertiesFromStorage;
});