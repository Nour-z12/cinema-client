


document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();
//document.getElementById('submit-btn').addEventListener()
	const username = document.getElementById('username');
	const email = document.getElementById('email');
	const mobile = document.getElementById('mobile');
	const password_hash = document.getElementById('password_hash');
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
