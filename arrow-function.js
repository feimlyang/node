const event1 = {
    name: "party",
    printGuestList: function(){
        console.log("name is " + this.name) //name is party -> binding this itself
    }
}

const event2 = {
    name: "party",
    printGuestList: () => {
        console.log("name is " + this.name) //name is undefined -> not binding this
    }
}

const event3 = {
    name: "party",
    printGuestList(){
        console.log("name is " + this.name) //name is party -> binding
    }
}

const event4 = {
    name: "party",
    guestList: ["Ann", "Ben", "Cindy"],
    printGuestList(){
        console.log("name is " + this.name) //name is party
        this.guestList.forEach(function(guest){
            console.log(guest + " is attending " + this.name) //bind itself 
            // Ann is attending undefined
            // Ben is attending undefined
            // Cindy is attending undefined
        })
    }
}

const event5 = {
    name: "party",
    guestList: ["Ann", "Ben", "Cindy"],
    printGuestList(){
        const that = this
        console.log("name is " + this.name) //name is party
        this.guestList.forEach(function(guest){
            console.log(guest + " is attending " + that.name)
            // Ann is attending party
            // Ben is attending party
            // Cindy is attending party
        })
    }
}

const event6 = {
    name: "party",
    guestList: ["Ann", "Ben", "Cindy"],
    printGuestList(){
        console.log("name is " + this.name) //name is party
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name)
            // Ann is attending party
            // Ben is attending party
            // Cindy is attending party
        })
    }
}



event1.printGuestList()
event2.printGuestList()
event3.printGuestList()
event4.printGuestList()
event5.printGuestList()
event6.printGuestList()
