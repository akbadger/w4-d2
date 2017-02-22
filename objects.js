// var house = {
//     stories: 3,
//     location: 'Carmel',
//     zipCode: 46032, 
//     materials: ['brick', 'gold', 'marble'],
//     color: 'yellow',
//     clean: function() {
//         console.log('All clean.');
//     }
// };

// // console.log (house.stories);
// // house.clean();

// var house2 = {
//     stories: 1,
//     location: 'Indianapolis',
//     zipCode: 46240,
//     materials: ['wood', 'siding'], 
//     color: 'tan',
//     clean: function() {
//         console.log('All clean.');
//     }
// };

// // Constructor Functions
// var House = function() {
//     // Instance Variables
//     this.stories = 1;
//     this.materials = ['wood', 'brick'];
// };

// // New Instances
// var carmelHouse = new House ();
// carmelHouse.stories = 3;
// carmelHouse.materials = ['gold', 'marble'];

// console.log(carmelHouse);

// var indyHouse = new House();

// console.log(indyHouse);

// var Movie = function() {
//     this.title = '';
//     this.youtubeID = '';

//     this.play = function() {
//         youtube.play(this.youtubeID);
//     }
// }

// var laLaLandTrailer = new Movie();
// laLaLandTrailer.title = 'La La Land';
// laLaLandTrailer.youtubeID = '';

// ES6 Classes

class Movie {

    constructor(movieTitle, movieID) {
        this.title = movieTitle;
        this.youtubeID = movieID;

        // Method Bindings
        this.play = this.play.bind(this); // binding the 'this' contexts together
        this.pause = this.pause.bind(this);
    }

    play() {
        console.log('Playing' + this.title);
    }

    pause() {
        console.log('Pausing' + this.title);
    }

    bite() {
        console.log('Biting you.');
    }

}

class ThrillerMovie extends Movie {
    constructor(movieTitle, movieID) {
        super(movieTitle, movieID);
        this.genre = 'Thriller';
    }
}

var jawsFilm = new ThrillerMovie('Jaws', 'U1fu_sA7XhE');
jawsFilm.play();
jawsFilm.pause();
jawsFilm.bite();
