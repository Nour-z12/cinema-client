


document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();
//document.getElementById('submit-btn').addEventListener()
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const mobile = document.getElementById('mobile').value;
	const password_hash = document.getElementById('password_hash').value;
      try{
        const response = await
        axios.post('http//localhost/cinema-server/controllers/authenticator.php',{
            username: username,
            email: email,
            mobile: mobile,
            password_hash: password_hash
        });
        console.log(response.entry);
      } catch (error) {
        console.error(error);
    }

	
});
