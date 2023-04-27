class Car{

    car_name
    car_model
    car_price

    constructor(car_name, car_model, car_price){
        this.car_name  = car_name
        this.car_model = car_model
        this.car_price = car_price
    }
    start(){
        console.log('Car has started...')
    }
}
const c1 = new Car('Honda City','2005','10 lakh')
const c2 = new Car('Maruti Swift','2008','12 lakh')
c1.start()
