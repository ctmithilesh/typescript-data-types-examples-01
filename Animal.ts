// parent class
class Animal{
    takeLeft(){
        console.log('The animal just turned left...')
    }

}
// child class
class Dog extends Animal{
    bark(){
        console.log('The dog is barking....')
    }
}
const d1 = new Dog()
d1.takeLeft()

