    const loginDiv = document.getElementById('login-div');
    const signupDiv = document.getElementById('signup-div');
    document.querySelector('a[href="#signup"]').addEventListener('click', () => {
        loginDiv.style.display = 'none';
        signupDiv.style.display = 'block';
    }); 
    document.querySelector('a[href="#login"]').addEventListener('click', () => {
        signupDiv.style.display = 'none';
        loginDiv.style.display = 'block';
    });