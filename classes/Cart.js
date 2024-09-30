module.exports = class Cart {
    constructor(){
        this.products = []
        this.total = 0
    }
    addProduct(Product){
        this.products.push(Product)
        this.total += Product.price 
    }
    removeProduct(index){
        this.total -= this.products[index].price
        this.products.splice(index, 1)
    }
    // getTotal(){
    //     let total = 0;
    //     for (let i = 0; i < this.products.length; i++){
    //         total += this.products[i].price
    //     }
    //     return total
    // }
    getTotal(){
        return this.total
    }

    clear(){
        this.total = 0
        this.products = []
    }
}