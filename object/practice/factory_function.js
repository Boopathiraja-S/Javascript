function factory(name, age) {
    return {
        name,
        age,
        details(salary, job) {  // details function
            return {
                salary,
                job
            };
        }
    };
};
const factory1 = factory("Boopathiraja", 21);
console.log(
    factory1,  // this is for name and age value only
    factory1.details(35000, "Software developer") // this is a details function
);