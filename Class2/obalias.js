var addressQasim = {
    address1: "address 1",
    address2: "address 2",
    zip: 74300,
    city: "Karachi",
    country: 'Pakistan'
};
var personQasim = {
    name: 'Qasim',
    age: 30,
    address: addressQasim
};
var Car = {
    make: "Mehran",
    model: "2020",
    owner: personQasim,
    ownerAddress: addressQasim
};
console.log(Car);
