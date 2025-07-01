document.querySelector('.nav-link-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});




window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('http://localhost/cenema-server/controllers/get_films.php');
        const movies = response.data.Films;
        const movieSection = document.querySelector('.movie-section');
        for(let movie of movies) {
            movieSection.innerHTML += `
                <div class="movie-card" onclick= booking(${movie.id})>
                    <img  src="${movie.image_url}  alt="${movie.title}">
                    <h2>${movie.title}</h2>
                   <div class="movie-info">
                    
                    </div>
                    
                </div>
            `;
           
           
            
        }

      

      
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
});
function booking(id) {
    window.location.href = `movie${id}.html?id=${id}`;
}