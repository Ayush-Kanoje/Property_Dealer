
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Stepper and Form Navigation ---
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const formSteps = document.querySelectorAll('.form-step');
    const stepperItems = document.querySelectorAll('.stepper-item');
    const form = document.getElementById('property-form');
    
    let currentStep = 1;
    const totalSteps = formSteps.length;

    const updateStepper = () => {
        stepperItems.forEach((item, index) => {
            const step = index + 1;
            if (step < currentStep) {
                item.classList.add('completed');
                item.classList.remove('active');
            } else if (step === currentStep) {
                item.classList.add('active');
                item.classList.remove('completed');
            } else {
                item.classList.remove('active', 'completed');
            }
        });
    };
    
    const showStep = (stepNumber) => {
        formSteps.forEach(step => step.classList.remove('active'));
        document.querySelector(`.form-step[data-step="${stepNumber}"]`).classList.add('active');
        
        prevBtn.style.display = stepNumber > 1 ? 'block' : 'none';
        nextBtn.textContent = stepNumber === totalSteps ? 'List Property' : 'Next Step';
        
        updateStepper();
    };

    const validateStep = (stepNumber) => {
        const currentStepEl = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        const inputs = currentStepEl.querySelectorAll('input[required], select[required]');
        let isValid = true;
        
        // Simple validation for required fields, extend as needed
        currentStepEl.querySelectorAll('input, select').forEach(input => {
            if(input.name === "propertyType" && input.value === "Select Property Type"){
                 showToast('Please select a property type.', 'error');
                 isValid = false;
            }
            if(input.name === "city" && input.value.trim() === ""){
                 showToast('Please enter a city.', 'error');
                 isValid = false;
            }
        });

        if (stepNumber === 4) { // Contact Details Step
            const emailField = form.querySelector('#email');
            const phoneField = form.querySelector('#phone');
            const userTypeField = form.querySelector('#user-type');

            if (userTypeField.value === 'Select your role') {
                showToast('Please select your role.', 'error');
                userTypeField.classList.add('error-field');
                isValid = false;
            } else {
                userTypeField.classList.remove('error-field');
            }

            if (!isValidEmail(emailField.value)) {
                showToast('Please enter a valid email address', 'error');
                emailField.classList.add('error-field');
                isValid = false;
            } else {
                emailField.classList.remove('error-field');
            }
            if (!isValidPhone(phoneField.value)) {
                showToast('Please enter a valid phone number', 'error');
                phoneField.classList.add('error-field');
                isValid = false;
            } else {
                phoneField.classList.remove('error-field');
            }
        }
        
        return isValid;
    };
    
    nextBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
            } else {
                // Submit the form
                submitPropertyWithMedia(form);
            }
        }
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });
    
    showStep(currentStep); // Initialize first step

    // --- Dynamic Price Fields ---
    const propertyForRadios = document.querySelectorAll('input[name="propertyFor"]');
    const rentPriceSection = document.getElementById('rent-price-section');
    const salePriceSection = document.getElementById('sale-price-section');

    propertyForRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'rent') {
                rentPriceSection.style.display = 'block';
                salePriceSection.style.display = 'none';
            } else if (radio.value === 'sale') {
                rentPriceSection.style.display = 'none';
                salePriceSection.style.display = 'block';
            }
        });
    });


    // --- Media Uploader (from original JS, integrated) ---
    const photoInput = document.getElementById('property-photos');
    const videoInput = document.getElementById('property-videos');
    const photoPreview = document.getElementById('photo-preview');
    const videoPreview = document.getElementById('video-preview');
    const photoInitial = document.getElementById('photo-upload-initial');
    const photoComplete = document.getElementById('photo-upload-complete');
    const videoInitial = document.getElementById('video-upload-initial');
    const videoComplete = document.getElementById('video-upload-complete');
    const photoReupload = document.getElementById('photo-reupload');
    const videoReupload = document.getElementById('video-reupload');
    const progressFill = document.getElementById('upload-progress-fill');
    const uploadStatus = document.getElementById('upload-status');
    
    let selectedPhotos = [];
    let selectedVideos = [];
    
    photoInput.addEventListener('change', (e) => handleFileSelection(e, selectedPhotos, 10, 'photos', photoPreview, photoInitial, photoComplete));
    videoInput.addEventListener('change', (e) => handleFileSelection(e, selectedVideos, 2, 'videos', videoPreview, videoInitial, videoComplete));
    
    photoReupload.addEventListener('click', () => photoInput.click());
    videoReupload.addEventListener('click', () => videoInput.click());

    function handleFileSelection(e, fileArray, maxFiles, type, previewEl, initialEl, completeEl) {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        if (fileArray.length + files.length > maxFiles) {
            showToast(`You can only upload up to ${maxFiles} ${type}.`, 'error');
            return;
        }

        files.forEach(file => {
            const isImage = file.type.startsWith('image/');
            const isVideo = file.type.startsWith('video/');
            const maxSize = isImage ? 5 * 1024 * 1024 : 100 * 1024 * 1024;
            
            if ((type === 'photos' && !isImage) || (type === 'videos' && !isVideo)) {
                showToast(`Please select only ${isImage ? 'image' : 'video'} files.`, 'error');
                return;
            }
            if (file.size > maxSize) {
                showToast(`${isImage ? 'Image' : 'Video'} size should not exceed ${isImage ? '5MB' : '100MB'}.`, 'error');
                return;
            }
            
            fileArray.push(file);
            addPreview(file, previewEl, fileArray, initialEl, completeEl);
        });

        if (fileArray.length > 0) {
            initialEl.style.display = 'none';
            completeEl.style.display = 'block';
            showToast(`${fileArray.length} ${type} selected`, 'success');
        }
    }
    
    function addPreview(file, container, fileArray, initialEl, completeEl) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewItem = document.createElement('div');
            previewItem.className = 'preview_item_container';
            
            const mediaEl = file.type.startsWith('image/') ? document.createElement('img') : document.createElement('video');
            mediaEl.src = e.target.result;
            mediaEl.className = 'preview_media';
            previewItem.appendChild(mediaEl);

            if (file.type.startsWith('video/')) {
                 const videoIndicator = document.createElement('div');
                 videoIndicator.className = 'preview_video_indicator';
                 videoIndicator.textContent = 'VIDEO';
                 previewItem.appendChild(videoIndicator);
            }

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'preview_remove_button';
            removeBtn.innerHTML = '&times;';
            removeBtn.title = 'Remove';
            
            removeBtn.addEventListener('click', function(evt) {
                evt.stopPropagation();
                const index = fileArray.indexOf(file);
                if (index > -1) fileArray.splice(index, 1);
                container.removeChild(previewItem);
                
                if (fileArray.length === 0) {
                    initialEl.style.display = 'block';
                    completeEl.style.display = 'none';
                }
            });

            previewItem.appendChild(removeBtn);
            container.appendChild(previewItem);
        };
        reader.readAsDataURL(file);
    }
    
    function isValidEmail(email) { return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); }
    function isValidPhone(phone) { return /^(\+\d{1,3}[ -]?)?\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$/.test(phone); }
    
    function showToast(message, type = 'info') {
        const container = document.querySelector('.toast-container') || createToastContainer();
        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;
        
        const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
        toast.innerHTML = `<div class="toast-icon"><i class="fas ${icons[type]}"></i></div><div class="toast-message">${message}</div><button class="toast-close">&times;</button>`;
        
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('toast-visible'), 10);
        
        const removeToast = () => {
            toast.classList.add('toast-exiting');
            toast.addEventListener('transitionend', () => toast.remove());
        };
        
        setTimeout(removeToast, 4000);
        toast.querySelector('.toast-close').addEventListener('click', removeToast);
    }
    
    function createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
    
    window.submitPropertyWithMedia = function(formElement) {
        if (!validateStep(totalSteps)) return false;

        const formData = new FormData(formElement);
        selectedPhotos.forEach((photo, index) => formData.append(`photo_${index}`, photo));
        selectedVideos.forEach((video, index) => formData.append(`video_${index}`, video));
        
        // --- Mocking API call for demonstration ---
        progressFill.style.width = '10%';
        uploadStatus.textContent = 'Preparing upload...';
        document.querySelectorAll('.upload-card').forEach(c => c.classList.add('pulse'));
        
        let progress = 10;
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 10);
            if (progress > 95) progress = 95;
            progressFill.style.width = `${progress}%`;
            uploadStatus.textContent = `Uploading: ${progress}%`;
            if (progress >= 95) clearInterval(interval);
        }, 300);

        setTimeout(() => {
            progressFill.style.width = '100%';
            uploadStatus.textContent = 'Upload complete!';
            document.querySelectorAll('.upload-card').forEach(c => c.classList.remove('pulse'));
            
            const rentPrice = formData.get('rent-price');
            const rentPeriod = formData.get('rent-period');
            const salePrice = formData.get('sale-price');
            let displayPrice = '';

            if (rentPrice) {
                displayPrice = `₹${rentPrice} ${rentPeriod === 'yearly' ? '/ year' : '/ month'}`;
            } else if (salePrice) {
                displayPrice = `₹${salePrice}`;
            }

            // Persist minimal listing to localStorage for Property List page
            const newListing = {
                id: Date.now(),
                title: formData.get('address') || 'Beautiful New Property',
                address: formData.get('address') || '',
                locality: formData.get('locality') || '',
                city: formData.get('city') || '',
                type: formData.get('propertyType') || 'House',
                bedrooms: formData.get('bedrooms') || 0,
                bathrooms: formData.get('bathrooms') || 0,
                sqft: formData.get('builtup-area') || 0,
                rentPrice: formData.get('rent-price') || '',
                salePrice: formData.get('sale-price') || '',
                imageUrl: selectedPhotos.length > 0 ? URL.createObjectURL(selectedPhotos[0]) : '',
                photos: selectedPhotos.map(f => URL.createObjectURL(f))
            };
            const existing = JSON.parse(localStorage.getItem('postedProperties') || '[]');
            existing.unshift(newListing);
            localStorage.setItem('postedProperties', JSON.stringify(existing));

            // Data for success modal
            const mockPropertyData = {
                id: String(newListing.id),
                title: newListing.title,
                price: displayPrice,
                location: `${newListing.locality}, ${newListing.city}`
            };
            showPropertyConfirmation(mockPropertyData);
        }, 3000);
        
        return false;
    };
    
    function showPropertyConfirmation(propertyData) {
        const overlay = document.createElement('div');
        overlay.className = 'property-confirmation-overlay';
        
        overlay.innerHTML = `
        <div class="property-confirmation-content">
            <button class="close-modal-btn">&times;</button>
            <div class="confirmation-header" style="background: linear-gradient(135deg, #22c55e, #10b981); padding: 1.5rem; text-align: center; color: white; border-top-left-radius: 12px; border-top-right-radius: 12px;">
                <div class="success-checkmark">
                    <div class="check-icon">
                        <span class="icon-line line-tip"></span>
                        <span class="icon-line line-long"></span>
                        <div class="icon-circle"></div>
                    </div>
                </div>
                <h2 style="font-size: 1.5rem; font-weight: 700; margin-top: 1rem; margin-bottom: 0.25rem;">Property Listed Successfully!</h2>
                <p style="opacity: 0.9;">Your property is now visible to thousands of potential clients.</p>
            </div>
            <div style="padding: 1.5rem;">
                <div class="property-confirmation-card" style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06); margin-bottom: 1.5rem;">
                    <div class="property-card-media" style="height: 12rem; background-color: #f3f4f6;">
                        ${selectedPhotos.length > 0 ? `<img src="${URL.createObjectURL(selectedPhotos[0])}" alt="Property" style="width: 100%; height: 100%; object-fit: cover;">` : `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #9ca3af;">No Image</div>`}
                    </div>
                    <div style="padding: 1rem;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                            <h3 style="font-weight: 700; color: #1e293b;">${propertyData.title}</h3>
                            <span style="font-weight: 700; color: #16a34a;">${propertyData.price}</span>
                        </div>
                        <div style="font-size: 0.875rem; color: #64748b; display: flex; align-items: center;"><i class="fas fa-map-marker-alt" style="margin-right: 0.5rem;"></i><span>${propertyData.location}</span></div>
                        <div style="display: flex; justify-content: space-around; text-align: center; border-top: 1px solid #e5e7eb; margin-top: 1rem; padding-top: 0.75rem;">
                            <div class="stat-item"><i class="fas fa-images" style="color: #4f46e5; margin-bottom: 0.25rem;"></i><span style="font-size: 0.75rem; display: block;">${selectedPhotos.length} Photos</span></div>
                            <div class="stat-item"><i class="fas fa-video" style="color: #16a34a; margin-bottom: 0.25rem;"></i><span style="font-size: 0.75rem; display: block;">${selectedVideos.length} Videos</span></div>
                        </div>
                    </div>
                </div>
                <div class="confirmation-actions" style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
                    <button class="action-btn view-btn" style="width: 100%; background-color: #4f46e5; color: white; font-weight: 600; padding: 0.625rem 1rem; border-radius: 0.5rem; transition: background-color 0.2s; border: none; cursor: pointer;">View Listing</button>
                    <button class="action-btn another-btn" style="width: 100%; background-color: #475569; color: white; font-weight: 600; padding: 0.625rem 1rem; border-radius: 0.5rem; transition: background-color 0.2s; border: none; cursor: pointer;">Add Another Property</button>
                </div>
            </div>
        </div>`;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';

        setTimeout(() => overlay.classList.add('active'), 10);

        const closeAndReset = () => {
             overlay.classList.remove('active');
             overlay.addEventListener('transitionend', () => {
                overlay.remove();
                document.body.style.overflow = '';
                resetForm();
             });
        };
        
        overlay.querySelector('.close-modal-btn').addEventListener('click', closeAndReset);
        overlay.querySelector('.view-btn').addEventListener('click', () => alert("Redirecting to listing page..."));
        overlay.querySelector('.another-btn').addEventListener('click', closeAndReset);

        // Hover effects for buttons
        const viewBtn = overlay.querySelector('.view-btn');
        const anotherBtn = overlay.querySelector('.another-btn');
        viewBtn.onmouseover = () => viewBtn.style.backgroundColor = '#4338ca';
        viewBtn.onmouseout = () => viewBtn.style.backgroundColor = '#4f46e5';
        anotherBtn.onmouseover = () => anotherBtn.style.backgroundColor = '#1e293b';
        anotherBtn.onmouseout = () => anotherBtn.style.backgroundColor = '#475569';
    }
    
    function resetForm() {
        form.reset();
        selectedPhotos = [];
        photoPreview.innerHTML = '';
        photoInitial.style.display = 'block';
        photoComplete.style.display = 'none';
        
        selectedVideos = [];
        videoPreview.innerHTML = '';
        videoInitial.style.display = 'block';
        videoComplete.style.display = 'none';
        
        progressFill.style.width = '0%';
        uploadStatus.textContent = 'Ready to upload';

        currentStep = 1;
        showStep(1);
    }

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq_item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq_question');
        const answer = item.querySelector('.faq_answer');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all items
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq_answer').style.maxHeight = null;
            });
            // Open the clicked one if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

    // Inject shared footer
    const footerMount = document.getElementById('footer-placeholder');
    if (footerMount) {
        fetch('../Footer/footer.html')
            .then(res => res.text())
            .then(html => {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const footerEl = temp.querySelector('footer');
                if (footerEl) {
                    footerMount.replaceWith(footerEl);
                } else {
                    footerMount.innerHTML = '<p>Footer failed to load.</p>';
                }
            })
            .catch(() => {
                footerMount.innerHTML = '<p>Failed to load footer content.</p>';
            });
    }