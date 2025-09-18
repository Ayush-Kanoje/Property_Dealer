document.addEventListener('DOMContentLoaded', function() {
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(performanceCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [
                {
                    label: 'Property Views',
                    data: [650, 750, 820, 900, 950, 1100, 1050, 1150, 1250],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Inquiries',
                    data: [25, 30, 28, 32, 36, 40, 38, 42, 45],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Appointments',
                    data: [15, 18, 17, 20, 22, 25, 23, 26, 28],
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Property Type Chart
    const propertyTypeCtx = document.getElementById('propertyTypeChart').getContext('2d');
    const propertyTypeChart = new Chart(propertyTypeCtx, {
        type: 'doughnut',
        data: {
            labels: ['Apartments', 'Houses', 'Villas', 'Commercial', 'Land'],
            datasets: [{
                data: [42, 23, 15, 12, 8],
                backgroundColor: [
                    '#3498db',
                    '#27ae60',
                    '#f39c12',
                    '#9b59b6',
                    '#e74c3c'
                ],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%'
        }
    });

    // Navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Favorite button toggle
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            
            if (icon.classList.contains('fas')) {
                icon.style.color = '#e74c3c';
            } else {
                icon.style.color = '';
            }
        });
    });

    // Property card hover effect
    const propertyCards = document.querySelectorAll('.property-card');
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.property-action-btn').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.property-action-btn').style.opacity = '0.9';
        });
    });

    // Add Property Button Click Event
    document.querySelector('.add-property-btn').addEventListener('click', function() {
        alert('Add Property form will open here');
    });

    // Notification Click Event
    document.querySelector('.notification-icon').addEventListener('click', function() {
        alert('Notifications panel will open here');
    });

    // Messages Click Event
    document.querySelector('.messages-icon').addEventListener('click', function() {
        alert('Messages panel will open here');
    });

    // Appointment confirmation
    const confirmButtons = document.querySelectorAll('.confirm-btn');
    confirmButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const appointmentItem = this.closest('.appointment-item');
            appointmentItem.style.borderColor = '#27ae60';
            this.textContent = 'Confirmed';
            this.disabled = true;
        });
    });

    // Appointment reschedule
    const rescheduleButtons = document.querySelectorAll('.reschedule-btn');
    rescheduleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Reschedule form will open here');
        });
    });
});