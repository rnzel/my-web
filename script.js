const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const errorMessage = document.getElementById('errorMessage');

const validCredentials = {
    username: "boss",
    password: "1425",
};

signInButton.addEventListener('click', () => {
    const username = document.getElementById('username').value.toLowerCase(); 
    const password = document.getElementById('password').value;

    if (username === validCredentials.username.toLowerCase() && password === validCredentials.password) { 
        container.classList.add("right-panel-active");
        errorMessage.style.display = "none"; 
    } else {
        errorMessage.style.display = "block";
    }
});
