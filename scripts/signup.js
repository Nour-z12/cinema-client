


document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password_hash = document.getElementById('password_hash').value;
    try {
        const response = await axios.post('http://localhost/cenema-server/controllers/authenticator.php', {
            name: username,
            email: email,
            mobile: mobile,
            password_hash: password_hash
        });
        console.log(response.data);
        if(response.status===200){
            window.location.href='../index.html'
            localStorage.setItem('mobile', mobile)
        }
        else if(response.status=== 401){
            alert("email or password incorrect");
        }
    } catch (error) {
        console.error(error);
    }
});
