function Bankaccount (name, acnum, type, balance)
{
    this.name = name ;
    this.acnum = acnum;
    this.type = type ;
    this.balance = balance ;
    this.deposit = function(amount)
    {
        this.balance+=amount;
    };
    this.withdraw = function(amount)
    {
        if(amount>this.balance)
        {
            console.log("Low balance")
        }
        else
        {
            this.balance-=amount
            //console.log("sucessfully withdraw",amount)
        }
    };
    this.checkBalance = function()
    {
        console.log(this.balance)
    };
     
    this.isActive= function()
    {
        if(this.balance>100 || this.deposit>100)
        {
            console.log("account is active")
        }
        
        else
        {
            console.log("acccount is not active")
        }
    }
    

    

    
    
    
    
    
}

let customer1 = new Bankaccount("Saurabh", 321654987, "Saving", 1000)
let customer2 = new Bankaccount("Ravi", 321654987, "Saving", 1000)
let customer3 = new Bankaccount("Ankit", 321654987, "Saving", 3000)
let customer4 = new Bankaccount("Lalit", 321654987, "Saving", 4000)
let customer5 = new Bankaccount("Rampal", 321654987, "Saving", 5000)

let arr = [customer1,customer2,customer3,customer4,customer5]
for(let i = 0 ; i<arr.length ; i++)
{
    console.log(arr[i])
    
}
//customer1.deposit(1000)
//customer1.withdraw(0)
//customer1.checkBalance()
//console.log(customer1)
//customer2.isActive()


