
var spaceship1 = {
    topSpeed: '2lyph',
    name: 'Galaxy Cruiser',
    launch: function() {
        console.log('launching to infinity and beyond at ' + topSpeed + '!');
    }
}
spaceship1.launch(2)



class Spaceship {
    constructor() {
        this.topSpeed = '1lyph'
        this.name = 'goGoGadget'
    }

    launch() {
        console.log('launching to infinity and beyond at ' + topSpeed + '!')
    }
}
var rocket = new Spaceship()
rocket.launch(75)




var Spaceship = function() {
    this.topSpeed = '3lyph'
    this.name = 'search&destroy'
    this.drive = function(speed) {
        console.log(this.name + ' ' + ' can reach ' + this.topSpeed + ' and is driving ' + speed + '!')
    }
}
var rocket = new Spaceship()
rocket.speed(120,000,000,000,000)




var rocket = new Object()
rocket.topSpeed = '5lyph'
rocket.name = 'Fastest'
rocket.launch = function(speed) {
    console.log(this.name + ' ' + ' is launching ' + speed + 'lyph.')
}
rocket.launch(5)


