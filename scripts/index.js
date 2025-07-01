

    document.getElementById('submit-btn').addEventListener('click', async function (e) {
    e.preventDefault();

    console.log("Hello")

    const input = document.getElementById('email').value;
    const password_hash = document.getElementById('password_hash').value;

    function isEmail(input) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(input);
    }

    let email = null;
    let mobile = null;

    if (isEmail(input)) {
        email = input;
    } else {
        mobile = input;
    }


    try {
        const response = await axios.post('http://localhost/cenema-server/controllers/login.php', {
            email: email,
            mobile: mobile,
            password_hash: password_hash
        });
        console.log(response.data);
         
         if(response.status===200){
            localStorage.setItem('id', response.data.user_data.id)
            localStorage.setItem('name', response.data.user_data.name)
            localStorage.setItem('email', input)
        




            window.location.href='../cinima-client/pages/home.html'
        } 
        else if(response.status=== 400){
            alert("Invalid email or pass");
        }
    } catch (error) {
        console.error(error);
    }   
});
