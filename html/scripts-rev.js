document.addEventListener('DOMContentLoaded', () => {
    loadReviewsPage();
});

function loadReviewsPage() {
    const reviews = [
        {
            title: 'Inception',
            year: 2010,
            genre: 'Sci-Fi, Thriller',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/inception.jpg",
            review: 'A mind-bending masterpiece!',
            rating: 5
        },
        {
            title: 'The Matrix',
            year: 1999,
            genre: 'Sci-Fi, Action',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/matrix.jpg",
            review: 'A groundbreaking sci-fi classic.',
            rating: 4.5
        },
        {
            title: 'Interstellar',
            year: 2014,
            genre: 'Sci-Fi, Adventure',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/interstellar.jpg",
            review: 'A visually stunning journey through space and time.',
            rating: 4.8
        },
        {
            title: 'The GodFather',
            year: 1972,
            genre: 'Crime, Drama',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/godfather.jpg",
            review: 'An epic tale of family and power.',
            rating: 5
        },
        {
            title: 'The Dark Knight',
            year: 2008,
            genre: 'Action, Crime, Drama',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/dark_knight.jpg",
            review: 'A dark and thrilling superhero film.',
            rating: 4.9
        },
        {
            title: 'Pulp Fiction',
            year: 1994,
            genre: 'Crime, Drama',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/pulp_fiction.jpg",
            review: 'A stylish and unpredictable crime drama.',
            rating: 4.7
        },
        {
            title: 'Schindler\'s List',
            year: 1993,
            genre: 'Biography, Drama, History',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/schindlers_list.jpg",
            review: 'A harrowing and powerful historical drama.',
            rating: 5
        }
    ];

    const reviewsContainer = document.getElementById('reviews');
    
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        
        const imgElement = document.createElement('img');
        imgElement.src = review.img;
        imgElement.alt = review.title;
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = review.title;
        
        const yearElement = document.createElement('p');
        yearElement.textContent = `Year: ${review.year}`;
        
        const genreElement = document.createElement('p');
        genreElement.textContent = `Genre: ${review.genre}`;
        
        const reviewTextElement = document.createElement('p');
        reviewTextElement.textContent = review.review;
        
        const ratingElement = document.createElement('p');
        ratingElement.textContent = `Rating: ${review.rating}`;
        
        reviewElement.appendChild(imgElement);
        reviewElement.appendChild(titleElement);
        reviewElement.appendChild(yearElement);
        reviewElement.appendChild(genreElement);
        reviewElement.appendChild(reviewTextElement);
        reviewElement.appendChild(ratingElement);
        
        reviewsContainer.appendChild(reviewElement);
    });
}