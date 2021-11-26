function Person(FirstName,LastName,OfficeAddress){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.OfficeAddress = OfficeAddress;
}

Person.prototype.printconsole = function(){
    console.log(this.FirstName+" "+this.LastName+" is a Person from "+this.OfficeAddress);
}

Person.prototype.Print = function(selector){
    selector.innerHTML = (this.FirstName+" "+this.LastName+" is a Person from "+this.OfficeAddress);
}

let a = new Person("Sanjay","Sinha","Romania");
let b = new Person("Shrikant","Manik","Turkey");
let c = new Person("Samarth","Jaiswal","Indonesia");

a.Print(document.getElementById('first'))
b.Print(document.getElementById('second'))
c.Print(document.getElementById('third'))

a.printconsole()
c.printconsole()
b.printconsole()