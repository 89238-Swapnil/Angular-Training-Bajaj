class Employee {
  constructor(name, id, email, salary) {
    console.log("Employee constructor called");
    this.name = name;
    this.id = id;
    this.email = email;
    this.salary = salary;
  }


  get salary() {
    return this._salary;
  }

  
  set salary(sal) {
   
    this._salary = sal;
  }

  
  _validateSalary(sal) {
    if (sal <= 0) {
      throw new Error("Salary must be greater than 0");
    }
  }


  #showDetails() {
    console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
  }

  calculateSalary() {
    this.#showDetails();
    console.log("Base employee salary calculation...");
  }
}




class SalesEmployee extends Employee {
  constructor(name, id, email, salary, region, sales) {
    super(name, id, email, salary);
    this.region = region;
    this.sales = sales;
    this.commission = 0;
    this.netSalary = 0;
  }

  calculateSalary() {
    let commissionRate = 0;

    if (this.sales > 50000) {
      commissionRate = 0.07;
    } else if (this.sales >= 5000 && this.sales < 10000) {
      commissionRate = 0.10;
    } else if (this.sales >= 10000 && this.sales < 15000) {
      commissionRate = 0.15;
    } else if (this.sales >= 15000) {
      commissionRate = 0.20;
    } else {
      commissionRate = 0;
    }

    this.commission = this.salary * commissionRate;
    this.netSalary = this.salary + this.commission;

    console.log(`\nSales Employee: ${this.name}`);
    console.log(`Region: ${this.region}`);
    console.log(`Sales Amount: ₹${this.sales}`);
    console.log(`Commission Rate: ${(commissionRate * 100).toFixed(1)}%`);
    console.log(`Commission Earned: ₹${this.commission.toFixed(2)}`);
    console.log(`Net Salary: ₹${this.netSalary.toFixed(2)}`);
  }
}


const emp1 = new SalesEmployee("Sara", 102, "sara@gmail.com", 40000, "North", 12000);
emp1.calculateSalary();

console.log("---------------");

const emp2 = new SalesEmployee("Ravi", 103, "ravi@gmail.com", 50000, "South", 55000);
emp2.calculateSalary();
