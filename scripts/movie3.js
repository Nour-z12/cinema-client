document.querySelector('.nav-link-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await axios.get('http://localhost/cenema-server/controllers/get_films.php?id=3');
    let movie = response.data.Films ? response.data.Films[0] : response.data;

    console.log(movie.title);
    console.log(movie.trailer_url);

    const movieSection = document.querySelector('#movie-info');
    if (movieSection) {
    movieSection.innerHTML = `
   
    <div class="movie-card">
    <h2>${movie.title}</h2>
  <div class="trailer">
  
    <iframe
  width="560"
  height="315"
  ${movie.trailer_url}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
  </div>
  ${movie.rating}
  ${movie.genre}
  <h4>Description : </h4>${movie.description}
  <div class="space"></div>
  <p>cast: ${movie.cast}</p>
 


  </div>
`;

    } else {
      console.warn('Element with class .movie-info not found in DOM');
    }

  } catch (error) {
    console.error('Error fetching movies:', error);
  }
});
