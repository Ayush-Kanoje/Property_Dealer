      feather.replace();

        const loginSection = document.getElementById('login-section');
        const signupSection = document.getElementById('signup-section');
        const showSignupBtn = document.getElementById('show-signup');
        const showLoginBtn = document.getElementById('show-login');
        const headerSignupBtn = document.getElementById('header-signup-btn');
        const leftPanel = document.getElementById('left-panel');
        const leftPanelHeader = document.getElementById('left-panel-header');

        const switchToSignup = (e) => {
            if (e) e.preventDefault();
            loginSection.classList.add('hidden');
            signupSection.classList.remove('hidden');
            leftPanel.classList.add('left-panel-signup');
            leftPanelHeader.textContent = 'Discover Your New Home';
        };

        const switchToLogin = (e) => {
            if (e) e.preventDefault();
            signupSection.classList.add('hidden');
            loginSection.classList.remove('hidden');
            leftPanel.classList.remove('left-panel-signup');
            leftPanelHeader.textContent = 'Featured Properties';
        };

        showSignupBtn.addEventListener('click', switchToSignup);
        headerSignupBtn.addEventListener('click', switchToSignup);
        showLoginBtn.addEventListener('click', switchToLogin);