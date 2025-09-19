feather.replace();

        const loginSection = document.getElementById('login_section');
        const signupSection = document.getElementById('signup_section');
        const showSignupLink = document.getElementById('show_signup_link');
        const showLoginLink = document.getElementById('show_login_link');
        const headerToggleBtn = document.getElementById('header_toggle_button');
        const imagePanel = document.getElementById('image_panel');
        const formPanel = document.getElementById('form_panel');
        const imagePanelHeader = document.getElementById('image_panel_header');
        const loginQuote = document.getElementById('login_quote');
        const signupQuote = document.getElementById('signup_quote');
        
        let isTransitioning = false;
        const transitionDuration = 800;

        const showLoginPage = (e) => {
            if (e) e.preventDefault();
            if (isTransitioning) return;
            isTransitioning = true;

            formPanel.classList.add('lg:-translate-x-full');
            imagePanel.classList.add('lg:translate-x-full');

            setTimeout(() => {
                // Swap content and order for login view
                signupSection.classList.add('hidden');
                loginSection.classList.remove('hidden');
                
                // Toggle quotes
                signupQuote.classList.add('hidden');
                loginQuote.classList.remove('hidden');

                imagePanel.classList.remove('image_panel_signup', 'lg:order-2');
                imagePanel.classList.add('image_panel_login', 'lg:order-1');
                
                // Update header with highlighted text
                imagePanelHeader.innerHTML = '<span class="text-red-500">Welcome Back</span>, Future Homeowner';

                formPanel.classList.remove('lg:order-1');
                formPanel.classList.add('lg:order-2');
                
                headerToggleBtn.textContent = 'Sign Up';

                // Slide panels back in to their new positions
                formPanel.classList.remove('lg:-translate-x-full');
                imagePanel.classList.remove('lg:translate-x-full');
                
                setTimeout(() => { isTransitioning = false; }, transitionDuration);
            }, transitionDuration);
        };

        const showSignupPage = (e) => {
            if (e) e.preventDefault();
            if (isTransitioning) return;
            isTransitioning = true;

            imagePanel.classList.add('lg:-translate-x-full');
            formPanel.classList.add('lg:translate-x-full');

            setTimeout(() => {
                // Swap content and order for signup view
                loginSection.classList.add('hidden');
                signupSection.classList.remove('hidden');
                
                // Toggle quotes
                loginQuote.classList.add('hidden');
                signupQuote.classList.remove('hidden');

                imagePanel.classList.remove('image_panel_login', 'lg:order-1');
                imagePanel.classList.add('image_panel_signup', 'lg:order-2');
                imagePanelHeader.textContent = 'Discover Your New Home';

                formPanel.classList.remove('lg:order-2');
                formPanel.classList.add('lg:order-1');

                headerToggleBtn.textContent = 'Log In';
                
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