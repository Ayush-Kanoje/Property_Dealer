feather.replace();

        const loginSection = document.getElementById('login_section');
        const signupSection = document.getElementById('signup_section');
        const showSignupLink = document.getElementById('show_signup_link');
        const showLoginLink = document.getElementById('show_login_link');
        const headerToggleBtn = document.getElementById('header_toggle_button');
        const imagePanel = document.getElementById('image_panel');
        const formPanel = document.getElementById('form_panel');
        const imagePanelHeader = document.getElementById('image_panel_header');
        
        let isTransitioning = false;
        const transitionDuration = 800;

        const showLoginPage = (e) => {
            if (e) e.preventDefault();
            if (isTransitioning) return;
            isTransitioning = true;

            // Slide panels out (current state: signup)
            // formPanel is on the left (order-1), imagePanel is on the right (order-2)
            formPanel.classList.add('lg:-translate-x-full');
            imagePanel.classList.add('lg:translate-x-full');

            setTimeout(() => {
                // Swap content and order for login view
                signupSection.classList.add('hidden');
                loginSection.classList.remove('hidden');

                imagePanel.classList.remove('image_panel_signup', 'lg:order-2');
                imagePanel.classList.add('image_panel_login', 'lg:order-1');
                imagePanelHeader.textContent = 'Featured Properties';

                formPanel.classList.remove('lg:order-1');
                formPanel.classList.add('lg:order-2');
                
                headerToggleBtn.textContent = 'Sign Up';

                // Slide panels back in to their new positions
                // The classes are removed, and the new order places them correctly.
                formPanel.classList.remove('lg:-translate-x-full');
                imagePanel.classList.remove('lg:translate-x-full');
                
                setTimeout(() => { isTransitioning = false; }, transitionDuration);
            }, transitionDuration);
        };

        const showSignupPage = (e) => {
            if (e) e.preventDefault();
            if (isTransitioning) return;
            isTransitioning = true;

            // Slide panels out (current state: login)
            // imagePanel is on the left (order-1), formPanel is on the right (order-2)
            imagePanel.classList.add('lg:-translate-x-full');
            formPanel.classList.add('lg:translate-x-full');

            setTimeout(() => {
                // Swap content and order for signup view
                loginSection.classList.add('hidden');
                signupSection.classList.remove('hidden');

                imagePanel.classList.remove('image_panel_login', 'lg:order-1');
                imagePanel.classList.add('image_panel_signup', 'lg:order-2');
                imagePanelHeader.textContent = 'Discover Your New Home';

                formPanel.classList.remove('lg:order-2');
                formPanel.classList.add('lg:order-1');

                headerToggleBtn.textContent = 'Log In';
                
                // Slide panels back in to their new positions
                // The classes are removed, and the new order places them correctly.
                imagePanel.classList.remove('lg:-translate-x-full');
                formPanel.classList.remove('lg:translate-x-full');
                
                setTimeout(() => { isTransitioning = false; }, transitionDuration);
            }, transitionDuration);
        };

        showLoginLink.addEventListener('click', showLoginPage);
        showSignupLink.addEventListener('click', showSignupPage);
        headerToggleBtn.addEventListener('click', (e) => {
            if (headerToggleBtn.textContent.trim() === 'Log In') {
                showLoginPage(e);
            } else {
                showSignupPage(e);
            }
        });