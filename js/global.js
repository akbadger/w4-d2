// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {

        // 3. Call the parent constructor function using the super function
            super();
        // 4. Assign a name and id instance property to the incoming name and id arguments
            this.name = name;
            this.id = id;
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
        
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument

var moonlight = new Trailer('Moonlight', '9NJj12tJzqc')

var paterson = new Trailer('Paterson', 'm8pGJBgiiDU')

var onlyLoversLeftAlive = new Trailer('Only Lovers Left Alive', '-TbxI_oRSKI')

var ourIdiotBrother = new Trailer('Our Idiot Brother', '1yvn8a16B9Q')
