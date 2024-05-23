document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();

    document.querySelector('nav ul').addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const section = e.target.getAttribute('href').substring(1);
            switch (section) {
                case 'home':
                    loadHomePage();
                    break;
                case 'movies':
                    loadMoviesPage();
                    break;
                case 'watchlist':
                    loadWatchlistPage();
                    break;
                case 'reviews':
                    loadReviewsPage();
                    break;
                default:
                    loadHomePage();
            }
        }
    });
});

function loadHomePage() {
    document.getElementById('main-content').innerHTML = '<h2>Welcome to Movie Streaming</h2>';
}

function loadMoviesPage() {
    fetch('/api/movies')
        .then(response => response.json())
        .then(movies => {
            let moviesHTML = '<h2>Movies</h2>';
            movies.forEach(movie => {
                moviesHTML += `
                    <div class="movie">
                        <h3>${movie.title}</h3>
                        <p>${movie.description}</p>
                        <p>Year: ${movie.release_year}</p>
                    </div>
                `;
            });
            document.getElementById('main-content').innerHTML = moviesHTML;
        });
}

function loadWatchlistPage() {
    fetch('/api/watchlist')
        .then(response => response.json())
        .then(watchlist => {
            let watchlistHTML = '<h2>Watchlist</h2>';
            watchlist.forEach(item => {
                watchlistHTML += `
                    <div class="movie">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p>Year: ${item.release_year}</p>
                    </div>
                `;
            });
            document.getElementById('main-content').innerHTML = watchlistHTML;
        });
}

function loadReviewsPage() {
    fetch('/api/reviews')
        .then(response => response.json())
        .then(reviews => {
            let reviewsHTML = '<h2>Reviews</h2>';
            reviews.forEach(review => {
                reviewsHTML += `
                    <div class="movie">
                        <h3>${review.title}</h3>
                        <p>Rating: ${review.rating}/5</p>
                        <p>${review.review}</p>
                    </div>
                `;
            });
            document.getElementById('main-content').innerHTML = reviewsHTML;
        });
}
