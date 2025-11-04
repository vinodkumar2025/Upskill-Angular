// SOLID principles
// SOLID is an acronym for five design principles introduced by Robert C. Martin (“Uncle Bob”).
// They help you design software that’s:
// Easy to maintain
// Easy to extend
// Less prone to bugs
// Follows clean architecture

// S - Single Responsibility Principle (SRP)
// Each class or module should do only one thing.
class UserService{
    saveUser(){
        console.log("user saved")
    }
}

class EmailService{
    sendEmail(){
       console.log("Email successfully sent.") 
    }
}
//Now, if the email logic changes, you modify only EmailService.

// O - Open/Closed Principle (OCP)
// Classes should be open for extension but closed for modification.
interface Discount {
  calculate(): number;
}

class PremiumDiscount implements Discount {
  calculate() { return 20; }
}

class GoldDiscount implements Discount {
  calculate() { return 15; }
}

class RegularDiscount implements Discount {
  calculate() { return 5; }
}

function getDiscount(discount: Discount) {
  return discount.calculate();
}
// You can add new discounts without changing existing code.

// L - Liskov Substitution Principle (LSP)
// Derived classes must be substitutable for their base classes.
class Bird { }

class FlyingBird extends Bird {
  fly() { console.log('Flying'); }
}

class Penguin extends Bird {
  swim() { console.log('Swimming'); }
}
// We separated the hierarchy so subclasses behave correctly.

// Interface Segregation Principle (ISP)
// Don’t force a class to implement methods it doesn’t need.
interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() {}
  eat() {}
}

class Robot implements Workable {
  work() {}
}
// Classes implement only what’s relevant to them.

// Dependency Inversion Principle (DIP)
// High-level modules shouldn’t depend on low-level modules; both should depend on abstractions.
interface Database {
  connect(): void;
}

class MySQLDatabase implements Database {
  connect() { console.log('Connecting to MySQL...'); }
}

class PostgresDatabase implements Database {
  connect() { console.log('Connecting to PostgreSQL...'); }
}

class UserService1 {
  constructor(private db: Database) {}

  getUsers() {
    this.db.connect();
  }
}

// Easily swap databases
const service = new UserService1(new MySQLDatabase());
service.getUsers();
