class Person{

    person_name: string = 'Amit Shah'
    address: string
    // normal constructor
    constructor(){
        this.address = 'New Delhi'          
    }
  
      viewInfo(){
          console.log(`My name is ${this.person_name}`)
          console.log(`My address is ${this.address}`)
      }
  
    
  }
  const p1 = new Person()
  p1.viewInfo()