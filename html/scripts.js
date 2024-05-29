document.addEventListener('DOMContentLoaded', () => {
    loadMoviesPage();
});

function loadMoviesPage() {
    const movies = [
        {title: 'Inception', genre: drama , year: 2010, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/inception.jpg"},
        {title: 'The Matrix', genre: sci-fi , year: 1999, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/matrix.jpg"},
        {title: 'Interstellar', genre: sci-fi/space , year: 2014, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/interstellar.jpg"},
        {title: 'The GodFather', genre: Mafia , year: 1972, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/godfather.jpg"},
        {title: 'The Dark Knight', genre: action , year: 2008, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/the_dark_knight.jpg"},
        {title: 'Pulp Fiction', genre: drama , year: 1994, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/pulp_fiction.jpg"},
        {title: 'Schindler\'s List', genre: War , year: 1993, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/SCH_list.jpg"},
        {title: 'Fight Club', genre: Action , year: 1999, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/fight_club.jpg"},
        {title: 'Forrest Gump', genre: Drama , year: 1994, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/forrest_gump.jpg"},
        {title: 'The Shawshank Redemption', genre: drama , year: 1994, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/shawshank_redemption.jpg"},
    ];

    let moviesHTML = '<h2>Movies</h2><div class="movie-gallery">';
    movies.forEach(movie => {
        moviesHTML += `
            <div class="movie">
                <img src="${movie.img}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.year} | Movie</p>
                    <p>${movie.genre} | Movie</p>
                </div>
            </div>
        `;
    });
    moviesHTML += '</div>';
    document.querySelector('.movies-section').innerHTML = moviesHTML;
}
