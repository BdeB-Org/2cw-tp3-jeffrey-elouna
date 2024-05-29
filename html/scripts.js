document.addEventListener('DOMContentLoaded', () => {
    loadMoviesPage();
});

function loadMoviesPage() {
    const movies = [
        {title: 'Inception', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/inception.jpg'},
        {title: 'The Matrix', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/matrix.jpg'},
        {title: 'Interstellar', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/interstellar.jpg'},
        {title: 'The GodFather', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/godfather.jpg'},
        {title: 'The Dark Knight', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/the_dark_knight.jpg'},
        {title: 'Pulp Fiction', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/pulp_fiction.jpg'},
        {title: 'Schindler\'s List', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/SCH_list.jpg'},
        {title: 'Fight Club', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/fight_club.jpg'},
        {title: 'Forrest Gump', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/forrest_gump.jpg'},
        {title: 'The Shawshank Redemption', year: 2024, img: 'https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/html/index.html/images/shawshank_redemption.jpg'},
    ];

    let moviesHTML = '<h2>Movies</h2><div class="movie-gallery">';
    movies.forEach(movie => {
        moviesHTML += `
            <div class="movie">
                <img src="${movie.img}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.year} | Movie</p>
                </div>
            </div>
        `;
    });
    moviesHTML += '</div>';
    document.querySelector('.movies-section').innerHTML = moviesHTML;
}
