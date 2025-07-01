document.querySelector('.nav-link-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

const userName= localStorage.getItem('name');
const email= localStorage.getItem('email');
const mobile= localStorage.getItem('mobile');


window.addEventListener('DOMContentLoaded', async () => {
    
    document.getElementById('name').placeholder=userName;
    document.getElementById('email').placeholder=email;
    document.getElementById('mobile').placeholder=mobile;
});

document.getElementById('save').addEventListener('click', async () => {
  try {
    const id = localStorage.getItem('id');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();

    const updateData = {};


    if (name !== "") updateData.name = name;
    if (email !== "") updateData.email = email;
    if (mobile !== "") updateData.mobile = mobile;

  
    if (Object.keys(updateData).length === 0) {
      alert("Please enter something to update.");
      return;
    }

    const response = await axios.post('http://localhost/cenema-server/controllers/update.php', {
      id: id,
      data: updateData
    });

    console.log('Update successful:', response.data);
    alert("Update successful!");

    // Optionally update localStorage with new values
    if (updateData.name) localStorage.setItem('name', updateData.name);
    if (updateData.email) localStorage.setItem('email', updateData.email);
    if (updateData.mobile) localStorage.setItem('mobile', updateData.mobile);



if(updateData.response==200){    
document.getElementById('name').placeholder = updateData.name;
document.getElementById('email').placeholder = updateData.email;
udocument.getElementById('mobile').placeholder = updateData.mobile;
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('mobile').value = "";
window.location.href = "file:///C:/Users/yaran/OneDrive/Desktop/cinima-client/index.html";

}

  } catch (error) {
    console.error('Error updating user:', error);
    alert("Something went wrong while updating.");
  }
});



