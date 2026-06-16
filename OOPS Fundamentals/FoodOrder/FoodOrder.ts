class FoodOrder {
    private orderId: string;
    private customerName: string;
    private items: string[];
    private totalAmount: number;
    private isPlaced: boolean;

    constructor(orderId: string, customerName:string){
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
        this.isPlaced = false;
    }

    addItem(name: string, price: number): void{
        if(this.isPlaced){
            console.log("Cannot modify the placed order.");
            return;
        }
        this.items.push(name);
        this.totalAmount += price;
    }

    placeOrder(): boolean{
        if(this.isPlaced || this.items.length === 0){
            return false;
        }
        this.isPlaced = true;
        return true;
    }

    displayOrder(): void {
        const status = this.isPlaced ? "PLACED" : "PENDING";
        console.log(`Order ${this.orderId} (${this.customerName}) - ${status}`);
        for (const item of this.items) {
            console.log(`  - ${item}`);
        }
        console.log(`  Total: $${this.totalAmount.toFixed(2)}`);
    }
};



const order1 = new FoodOrder("101", "sangeetha");
order1.addItem("Pizaa", 200);
order1.addItem("lemon Juice", 50);
order1.addItem("Garlic Bread", 4.99);
order1.addItem("Coke", 2.49);
order1.placeOrder();
order1.addItem("Burger", 100);
order1.displayOrder();
