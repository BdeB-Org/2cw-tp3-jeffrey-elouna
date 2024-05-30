document.addEventListener('DOMContentLoaded', () => {
    loadMoviesPage();
    loadReviewsPage(); // Add this line to load reviews when the page loads
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
            review: 'A powerful and moving historical drama.',
            rating: 5
        },
        {
            title: 'Fight Club',
            year: 1999,
            genre: 'Drama',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/fight_club.jpg",
            review: 'A thought-provoking and intense film.',
            rating: 4.6
        },
        {
            title: 'Forrest Gump',
            year: 1994,
            genre: 'Drama, Romance',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/forrest_gump.jpg",
            review: 'A heartwarming and inspirational story.',
            rating: 4.8
        },
        {
            title: 'The Shawshank Redemption',
            year: 1994,
            genre: 'Drama',
            img: "https://bdeb-org.github.io/2cw-tp3-jeffrey-elouna/images/shawshank_redemption.jpg",
            review: 'A timeless story of hope and friendship.',
            rating: 5
        }
    ];

        let reviewsHTML; }