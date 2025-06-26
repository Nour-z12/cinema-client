


document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const input = document.getElementById('email').value;
    const password_hash = document.getElementById('password_hash').value;
     function isEmail(input) {
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  }
  if (isEmail(input)== true){
    try {
        const response = await axios.post('http://localhost/cinema-server/controllers/authenticator.php', {
           
            email: input,
            mobile: null,
            password_hash: password_hash
        });
       
        console.log(response.entry);
    } 

    
    catch (error) {
        console.error(error);
    }
}}
);document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault();
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
        const response = await axios.post('http://localhost/cinema-server/controllers/authenticator.php', {
            email: email,
            mobile: mobile,
            password_hash: password_hash
        });
        console.log(response.data);
         if(response===200){
            window.location.href='../pages/home.html'
        } 
    } catch (error) {
        console.error(error);
    }
});
