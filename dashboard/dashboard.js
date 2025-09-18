document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Profile dropdown
    const profileDropdown = document.querySelector('.profile-dropdown');
    profileDropdown.addEventListener('click', function() {
        // Add dropdown functionality here
        console.log('Profile dropdown clicked');
    });

    // Notification click
    const notification = document.querySelector('.notification');
    notification.addEventListener('click', function() {
        // Add notification functionality here
        console.log('Notification clicked');
    });

    // Messages click
    const messages = document.querySelector('.messages');
    messages.addEventListener('click', function() {
        // Add messages functionality here
        console.log('Messages clicked');
    });

    // Button actions
    const confirmButtons = document.querySelectorAll('.btn-confirm');
    confirmButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add confirm appointment functionality
            console.log('Appointment confirmed');
        });
    });

    const rescheduleButtons = document.querySelectorAll('.btn-reschedule');
    rescheduleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add reschedule functionality
            console.log('Reschedule requested');
        });
    });

    const replyButtons = document.querySelectorAll('.btn-reply');
    replyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add reply functionality
            console.log('Reply to inquiry');
        });
    });

    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // Add view functionality
            console.log('View inquiry details');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {

    // --- Sidebar Navigation ---
    const navItems = document.querySelectorAll('.nav-item a');
    const contentPages = document.querySelectorAll('.page-content');

    navItems.forEach(navLink => {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            
            // Update active link
            navItems.forEach(link => link.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');

            // Show/Hide content pages
            contentPages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
        });
    });

    // --- Header Dropdowns ---
    function toggleDropdown(iconId, panelId) {
        const icon = document.getElementById(iconId);
        const panel = document.getElementById(panelId);

        icon.addEventListener('click', function(event) {
            event.stopPropagation();
            // Hide other open dropdowns
            document.querySelectorAll('.dropdown-panel.show').forEach(openPanel => {
                if (openPanel !== panel) {
                    openPanel.classList.remove('show');
                }
            });
            panel.classList.toggle('show');
        });
    }

    toggleDropdown('notification-icon', 'notification-panel');
    toggleDropdown('messages-icon', 'messages-panel');
    toggleDropdown('profile-dropdown', 'profile-menu');

    // Close dropdowns if clicking outside
    window.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-panel.show').forEach(openPanel => {
            openPanel.classList.remove('show');
        });
    });


    // --- Dynamic Button Actions ---
    document.querySelector('.page-content-area').addEventListener('click', function(e) {
        // Confirm Appointment
        if (e.target.classList.contains('btn-confirm') && !e.target.disabled) {
            e.stopPropagation();
            const button = e.target;
            button.textContent = 'Confirmed';
            button.classList.add('confirmed');
            button.disabled = true;
            console.log('Appointment confirmed!');
        }

        // Reschedule Appointment
        if (e.target.classList.contains('btn-reschedule')) {
            e.stopPropagation();
            console.log('Reschedule modal should open for this appointment.');
            alert('Functionality for rescheduling would go here.');
        }

        // Reply to Inquiry
        if (e.target.classList.contains('btn-reply')) {
            e.stopPropagation();
            console.log('Reply modal should open for this inquiry.');
            alert('Functionality for replying would go here.');
        }

        // View Inquiry
        if (e.target.classList.contains('btn-view')) {
            e.stopPropagation();
            console.log('Navigating to inquiry details page.');
            alert('Functionality for viewing details would go here.');
        }
    });

    // Placeholder content for demo
    // You would fetch this data from a server in a real application
    const propertyList = document.querySelector('.property-list');
    if(propertyList) propertyList.innerHTML = `<div class="property-item"><img src="property1.jpg" class="property-img"><div class="property-details"><h3 class="property-title">Modern Apartment</h3><p class="property-location">123 Main St</p><p class="property-price">$425,000</p></div></div>`;
    
    const appointmentList = document.querySelector('.appointment-list');
    if(appointmentList) appointmentList.innerHTML = `<div class="appointment-item"><div class="appointment-date"><div class="date">24</div><div class="month">SEP</div></div><div class="appointment-details"><h3>Property Viewing</h3><p>Sarah Johnson</p><p>10:00 AM</p></div><div class="appointment-actions"><button class="btn-confirm">Confirm</button><button class="btn-reschedule">Reschedule</button></div></div>`;
    
    const inquiriesTable = document.querySelector('.inquiries-table');
    if(inquiriesTable) inquiriesTable.innerHTML = `<thead><tr><th>Client</th><th>Property</th><th>Date</th><th>Action</th></tr></thead><tbody><tr><td>Jennifer Wilson</td><td>Modern Apartment</td><td>Sep 17</td><td><div class="action-buttons"><button class="btn-reply"><i class="fas fa-reply"></i></button><button class="btn-view"><i class="fas fa-eye"></i></button></div></td></tr></tbody>`;
});