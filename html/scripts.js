document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');  // Debugging line

    if (document.querySelector('.movies-section')) {
        console.log('Loading movies page');  // Debugging line
        loadMoviesPage();
    }
    if (document.querySelector('.reviews-section')) {
        console.log('Loading reviews page');  // Debugging line
        loadReviewsPage();
    }

    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }
});

function loadMoviesPage() {
    const movies = [
        {title: 'Inception', year: 2010, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/inception.jpg"},
        {title: 'The Matrix', year: 1999, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/matrix.jpg"},
        {title: 'Interstellar', year: 2014, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/interstellar.jpg"},
        {title: 'The GodFather', year: 1972, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/godfather.jpg"},
        {title: 'The Dark Knight', year: 2008, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/the_dark_knight.jpg"},
        {title: 'Pulp Fiction', year: 1994, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/pulp_fiction.jpg"},
        {title: 'Schindler\'s List', year: 1993, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/SCH_list.jpg"},
        {title: 'Fight Club', year: 1999, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/fight_club.jpg"},
        {title: 'Forrest Gump', year: 1994, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/forrest_gump.jpg"},
        {title: 'The Shawshank Redemption', year: 1994, img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/shawshank_redemption.jpg"},
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

function loadReviewsPage() {
    console.log('Executing loadReviewsPage');  // Debugging line

    const reviews = [
        {title: 'Inception', review: 'Amazing movie with a complex plot!', rating: 5},
        {title: 'The Matrix', review: 'A groundbreaking sci-fi film.', rating: 4},
        {title: 'Interstellar', review: 'A visually stunning and emotionally powerful film.', rating: 5},
        {title: 'The GodFather', review: 'An absolute classic. A must-watch.', rating: 5},
        {title: 'The Dark Knight', review: 'Heath Ledger\'s Joker is unforgettable.', rating: 5},
        {title: 'Pulp Fiction', review: 'Quentin Tarantino at his best.', rating: 4},
        {title: 'Schindler\'s List', review: 'A harrowing but essential film.', rating: 5},
        {title: 'Fight Club', review: 'A dark and thought-provoking movie.', rating: 4},
        {title: 'Forrest Gump', review: 'Heartwarming and inspirational.', rating: 5},
        {title: 'The Shawshank Redemption', review: 'A story of hope and friendship.', rating: 5},
    ];

    let reviewsHTML = '<h2>Reviews</h2>';
    reviews.forEach(review => {
        reviewsHTML += `
            <div class="review">
                <h3>${review.title}</h3>
                <p>${review.review}</p>
                <div class="rating">
                    ${[5, 4, 3, 2, 1].map(r => `
                        <input type="radio" id="star${r}-${review.title}" name="rating-${review.title}" value="${r}" ${r === review.rating ? 'checked' : ''} disabled>
                        <label for="star${r}-${review.title}">&#9733;</label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    document.querySelector('.reviews-section').innerHTML = reviewsHTML;
}

function handleReviewSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('movie-title').value;
    const review = document.getElementById('movie-review').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const newReview = {
        title: title,
        review: review,
        rating: parseInt(rating)
    };

    addReview(newReview);
    event.target.reset();
}

function addReview(review) {
    const reviewsSection = document.querySelector('.reviews-section');
    
    const reviewHTML = `
        <div class="review">
            <h3>${review.title}</h3>
            <p>${review.review}</p>
            <div class="rating">
                ${[5, 4, 3, 2, 1].map(r => `
                    <input type="radio" id="star${r}-${review.title}" name="rating-${review.title}" value="${r}" ${r === review.rating ? 'checked' : ''} disabled>
                    <label for="star${r}-${review.title}">&#9733;</label>
                `).join('')}
            </div>
        </div>
    `;
    
    reviewsSection.insertAdjacentHTML('beforeend', reviewHTML);
}
