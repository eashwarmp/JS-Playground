// let square = function(x) {
//     return x*x
// }

// let square = (x) => {
//     return x*x
// }

// let square = (x) => x*x 
// console.log(square(4))

let event = {
    name: 'Birthday Party',
    guestList : ['Eashwar', 'Rohith', 'Pavan', 'Sri'],
    printGuestList()  {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()