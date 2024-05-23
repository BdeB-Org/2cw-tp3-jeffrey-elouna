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
            let moviesHTML = '<h2>Movies</h2><div class="movie-gallery">';
            movies.forEach(movie => {
                moviesHTML += `
                    <div class="movie">
                        <img src="${movie.image}" alt="${movie.title}">
                        <div class="movie-info">
                            <h3>${movie.title}</h3>
                            <p>${movie.release_year} | Movie</p>
                        </div>
                    </div>
                `;
            });
            moviesHTML += '</div>';
            document.getElementById('main-content').innerHTML = moviesHTML;
        });
}

function loadWatchlistPage() {
    fetch('/api/watchlist')
        .then(response => response.json())
        .then(watchlist => {
            let watchlistHTML = '<h2>Watchlist</h2><div class="movie-gallery">';
            watchlist.forEach(item => {
                watchlistHTML += `
                    <div class="movie">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="movie-info">
                            <h3>${item.title}</h3>
                            <p>${item.release_year} | Movie</p>
                        </div>
                    </div>
                `;
            });
            watchlistHTML += '</div>';
            document.getElementById('main-content').innerHTML = watchlistHTML;
        });
}

function loadReviewsPage() {
    fetch('/api/reviews')
        .then(response => response.json())
        .then(reviews => {
            let reviewsHTML = '<h2>Reviews</h2><div class="movie-gallery">';
            reviews.forEach(review => {
                reviewsHTML += `
                    <div class="movie">
                        <div class="movie-info">
                            <h3>${review.title}</h3>
                            <p>Rating: ${review.rating}/5</p>
                            <p>${review.review}</p>
                        </div>
                    </div>
                `;
            });
            reviewsHTML += '</div>';
            document.getElementById('main-content').innerHTML = reviewsHTML;
        });
}


document.addEventListener('DOMContentLoaded', () => {
    loadMoviesPage();
});

function loadMoviesPage() {
    const movies = [
        {title: 'The Confession', year: 2024, img: 'path/to/image1.jpg'},
        {title: 'Crawlers', year: 2024, img: 'path/to/image2.jpg'},
        {title: 'Death Whisperer 2', year: 2024, img: 'path/to/image3.jpg'},
        {title: 'Blink Twice', year: 2024, img: 'path/to/image4.jpg'},
        {title: 'Deadpool & Wolverine', year: 2024, img: 'path/to/image5.jpg'},
        {title: 'The Winter Witch', year: 2024, img: 'path/to/image6.jpg'},
        {title: 'The Haunting of the Tower of London', year: 2024, img: 'path/to/image7.jpg'},
        {title: 'Sleep with Your Eyes Open', year: 2024, img: 'path/to/image8.jpg'},
        {title: 'Food, Inc. 2', year: 2024, img: 'path/to/image9.jpg'},
        {title: 'Terror Zone', year: 2024, img: 'path/to/image10.jpg'},
        {title: 'Balinsasayaw', year: 2024, img: 'path/to/image11.jpg'},
        {title: 'Touch', year: 2024, img: 'path/to/image12.jpg'},
        {title: 'Everything Puppies', year: 2024, img: 'path/to/image13.jpg'},
        {title: 'Thelma the Unicorn', year: 2024, img: 'path/to/image14.jpg'},
        {title: 'Hit Man', year: 2024, img: 'path/to/image15.jpg'},
        {title: 'You Can\'t Run Forever', year: 2024, img: 'path/to/image16.jpg'}
    ];

    let moviesHTML = '';
    movies.forEach(movie => {
        moviesHTML += `
            <div class="movie">
                <img src="${movie.img}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `;
    });
    document.querySelector('.movies-section').innerHTML = moviesHTML;
}
