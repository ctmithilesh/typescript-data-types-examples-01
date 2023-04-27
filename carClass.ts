class Car{

    public car_name: string
    public car_model: string
    private car_price: string
    protected car_designed_by: string

    constructor(car_name: string, car_model: string, car_price: string){
        this.car_name  = car_name
        this.car_model = car_model
        this.car_price = car_price
        this.car_designed_by = 'German Engineers'
    }
    protected start(){
        console.log('Car has started...')
    }
}
const c1 = new Car('Honda City','2005','10 lakh')
const c2 = new Car('Maruti Swift','2008','12 lakh')
console.log(c1.car_model)
console.log(c1.car_name)
class BMW extends Car{

    displayInfo(){
        console.log(`This car is designed by ${this.car_designed_by}`)
    }

}
const b1 = new BMW('BMW X5','2010','25 lakh')
b1.displayInfo()