// Factory Function way:
console.log("Factory function:");
function ShowAddress(Street, City, zipCode) {
    return {                        //another calling method
        Street,                    // Street:Street,
        City,                     // City:City,
        zipCode                  // zipCode:zipCode
    }
};
const ShowAddress1 = ShowAddress("SMC Palyam", "Coimbatore", 641107);
console.log(ShowAddress1);
const ShowAddress2 = ShowAddress("Mailapur", "Chennai", 641040);
console.log(ShowAddress2);
console.log();

// Constructor Function Way:
console.log("Constructor: ");
function Address(Street, City, zipCode) {
        this.Street = Street,
        this.City = City,
        this.zipCode = zipCode
};
const Address1 = new Address("SMC Palyam", "Coimbatore", 641107);
console.log(Address1);
const Address2 = new Address("Mailapur", "Chennai", 641040);
console.log(Address2);