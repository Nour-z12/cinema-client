document.querySelector('.nav-link-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('http://localhost/cenema-server/controllers/get_films.php?id=1');
        
      
        const data = response.data;
        let movies = [];

        if (data.Films) {
          
            movies = data.Films;
        } else if (data.id) {
         
            movies = [data]; 
        }

        console.log('Movies:', movies);

        const movieInfo = document.querySelector('#movie-info');
        if (movies.length > 0) {
            const movie = movies[0]; 
            movieInfo.innerHTML = `
            <div class="trailer">
                <iframe width="560" height="315" src="${movie.trailer_url}" title="${movie.title} Trailer" frameborder="0" allowfullscreen></iframe>

            
            </div>
                <h1>${movie.title}</h1>
                <img src="${movie.image_url}" alt="${movie.title}">
                <p>${movie.description}</p>
                <p>Release Date: ${movie.release_date}</p>
                <p>Duration: ${movie.duration} minutes</p>
            `;
        } else {
            movieInfo.innerHTML = '<p>No movie information available.</p>';
        }

    } catch (error) {
        console.error('Error fetching movies:', error);
    }
});


