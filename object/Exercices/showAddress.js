// constructor function
console.log("Constructor: ");
function ShowAddress(Street, City, zipCode) {
    this.Street= Street,
    this.City= City,
    this.zipCode= zipCode
}
const ShowAddress1 = new ShowAddress("SMC Palyam", "Coimbatore", 641107);
console.log(ShowAddress1);
const ShowAddress2 = new ShowAddress("Mailapur", "Chennai", 641040);
console.log(ShowAddress2);
console.log();

// To call the ShowAddress function by using (for in loop)
console.log("for in loop: ");
function iterate(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}
iterate(ShowAddress1);
console.log();
iterate(ShowAddress2);