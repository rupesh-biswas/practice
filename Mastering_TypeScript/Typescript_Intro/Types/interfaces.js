var pt = { x: 123, y: 23 };
var thomas = {
    id: 123,
    first: "Thomas",
    last: "Hardy",
    //   nickname: "TOm",
    sayHi: function () {
        return "Hello!";
    },
};
var shoes = {
    name: "Nike",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));
