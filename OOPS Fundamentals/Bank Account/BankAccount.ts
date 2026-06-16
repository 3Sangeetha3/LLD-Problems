class BankAccount {
    private accountNumber: string;
    private ownerName: string;
    private balance: number;

    constructor(
        accountNumber: string,
        ownerName: string
    ){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0;
    }

    deposit(amount: number): boolean{
        if(amount <= 0){
            console.log(`Amount less than or equal '0' cannot be deposited.`);
            return false;
        }
        

        this.balance += amount;
        console.log(`Amount ${amount} has been deposited to you bank account.`);
        
        console.log(`Total Balance: ${this.balance}`);
        return true;
    }

    withDraw(amount: number): boolean{
        if(amount<=0){
            console.log(`Cannot withdraw amount less or equal to 0.`);
            return false;
        }

        if(this.balance < amount){
            console.log(`No sufficient balance. Check your balance and try again.`);
            return false;
        }
        
        this.balance -= amount;
        console.log(`Withdrawal amount ${amount} has been successful.`);
        console.log(`Total Balance: ${this.balance}`);
        return true;
    }

    getBalance(): number{
        console.log(`Total Balance: ${this.balance}`);
        return this.balance;
    }
}


// ===============================
// Happy Path
// ===============================

console.log("\n===== Happy Path =====");

const account1 = new BankAccount("12345", "Sangeetha");

account1.deposit(1000);
account1.withDraw(500);
account1.getBalance();


// ===============================
// Deposit Validation
// ===============================

console.log("\n===== Deposit Validation =====");

const account2 = new BankAccount("12346", "John");

account2.deposit(0);
account2.deposit(-100);
account2.getBalance();


// ===============================
// Withdraw Validation
// ===============================

console.log("\n===== Withdraw Validation =====");

const account3 = new BankAccount("12347", "Alice");

account3.deposit(1000);

account3.withDraw(0);
account3.withDraw(-100);

account3.getBalance();


// ===============================
// Edge Case: Withdraw Entire Balance
// ===============================

console.log("\n===== Withdraw Entire Balance =====");

const account4 = new BankAccount("12348", "Bob");

account4.deposit(1000);

account4.withDraw(1000);

account4.getBalance();


// ===============================
// Edge Case: Withdraw More Than Balance
// ===============================

console.log("\n===== Withdraw More Than Balance =====");

const account5 = new BankAccount("12349", "Charlie");

account5.deposit(1000);

account5.withDraw(1001);

account5.getBalance();


// ===============================
// Multiple Deposits
// ===============================

console.log("\n===== Multiple Deposits =====");

const account6 = new BankAccount("12350", "David");

account6.deposit(100);
account6.deposit(200);
account6.deposit(300);

account6.getBalance();


// ===============================
// Multiple Withdrawals
// ===============================

console.log("\n===== Multiple Withdrawals =====");

const account7 = new BankAccount("12351", "Emma");

account7.deposit(2000);

account7.withDraw(500);
account7.withDraw(500);
account7.withDraw(500);

account7.getBalance();


// ===============================
// Fresh Account Withdrawal
// ===============================

console.log("\n===== Fresh Account Withdrawal =====");

const account8 = new BankAccount("12352", "Frank");

account8.withDraw(100);

account8.getBalance();


// ===============================
// Decimal Amounts
// ===============================

console.log("\n===== Decimal Amounts =====");

const account9 = new BankAccount("12353", "Grace");

account9.deposit(1000.75);

account9.withDraw(500.25);

account9.getBalance();


// ===============================
// Stress Test
// ===============================

console.log("\n===== Stress Test =====");

const account10 = new BankAccount("12354", "Henry");

account10.deposit(1000);

account10.withDraw(100);
account10.deposit(500);
account10.withDraw(200);
account10.deposit(300);
account10.withDraw(50);

account10.getBalance();