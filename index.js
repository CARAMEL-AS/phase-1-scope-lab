var customerName = 'bob'
var upperCaseCustomerName = () => {
    customerName ='BOB'
}

var bestCustomer = undefined;
var setBestCustomer = () => {
    bestCustomer = 'not bob'
}
var overwriteBestCustomer = (string) => {
    bestCustomer = string;
}

var changeLeastFavoriteCustomer = () => {
    throw 'Assignment to constant variable.'
}