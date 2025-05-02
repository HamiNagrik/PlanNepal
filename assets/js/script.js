document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Dropdown Functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownId = this.getAttribute('data-dropdown');
            const dropdown = document.getElementById(`${dropdownId}Dropdown`);
            
            // Close all other dropdowns first
            document.querySelectorAll('.fullscreen-dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('active');
                    const otherToggle = document.querySelector(`[data-dropdown="${d.id.replace('Dropdown', '')}"]`);
                    if (otherToggle) {
                        otherToggle.querySelector('i').style.transform = '';
                    }
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (dropdown.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
                document.addEventListener('click', closeDropdownsOutside);
            } else {
                icon.style.transform = '';
                document.removeEventListener('click', closeDropdownsOutside);
            }
        });
    });
    
    function closeDropdownsOutside(e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.fullscreen-dropdown')) {
            document.querySelectorAll('.fullscreen-dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            
            document.querySelectorAll('.dropdown-toggle i').forEach(icon => {
                icon.style.transform = '';
            });
            
            document.removeEventListener('click', closeDropdownsOutside);
        }
    }
    
        
        // Modal Functionality
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const loginClose = document.getElementById('loginClose');
        const registerClose = document.getElementById('registerClose');
        const showRegister = document.getElementById('showRegister');
        const showLogin = document.getElementById('showLogin');
        
        // Show Login Modal
        loginBtn.addEventListener('click', function() {
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Show Register Modal
        registerBtn.addEventListener('click', function() {
            registerModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close Modals
        loginClose.addEventListener('click', function() {
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        registerClose.addEventListener('click', function() {
            registerModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Switch Between Modals
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.remove('active');
            registerModal.classList.add('active');
        });
        
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerModal.classList.remove('active');
            loginModal.classList.add('active');
        });
        
        // Close Modals When Clicking Outside
        window.addEventListener('click', function(e) {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (e.target === registerModal) {
                registerModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Social Login Buttons
        document.querySelectorAll('.social-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.classList.contains('facebook') ? 'Facebook' : 
                                this.classList.contains('google') ? 'Google' :
                                this.classList.contains('twitter') ? 'Twitter' : 'LinkedIn';
            });
        });
        
        // Form Submissions
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login form has been submitted to PlanNepal');
            loginModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if (document.getElementById('registerPassword').value !== 
                document.getElementById('registerConfirm').value) {
                alert('Passwords did not match as given details!');
                return;
            }
            alert('Your Registration form has been submitted to PlanNepal');
            registerModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });