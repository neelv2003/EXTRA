let app = (function() {
    let carID = 123;
    let name = "Neel";
    let getID = function() {
        return carID;
    };
    let getName = function() {
        return name;
    };
    return {
        getID: getID,
        getName: getName
        
    };
})();

console.log(app.getID());

let o  = {
    carId: 123,
    getID: function() {
        return this.carId;
    }


};

let newCar = {car: 456};

console.log(o.getID.call(newCar));