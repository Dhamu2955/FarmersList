const Customer = require('./Customer');
module.exports = class Auth {
    constructor() {
        this.customers = [] 
    }
    register(name, email, shippingAddress){
        this.customers.push(new Customer(name, email, shippingAddress))
    }
    login(email){
        for (let i = 0; i < this.customers.length; i++){
            if (this.customers[i].email === email)
            {
                return this.customers[i]
            } else {
                return null
            }
        }
    }
}