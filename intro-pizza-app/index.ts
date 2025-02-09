
type Pizza = {
    name: string;
    price: number;
}

type Order = {
    id: number;
    pizza: Pizza;
    status: string;
}

const menu = [
    {name: 'Margherita', price: 5},
    {name: 'Marinara', price: 5},   
    {name: 'Pepperoni', price: 7},
    {name: 'Four Cheese', price: 8},
    {name: 'Vegetarian', price: 6},
]


let cashInRegister = 100;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

function placeOrder (pizzaName: string) {
    const pizza = menu.find(pizza => pizza.name === pizzaName);
    if (!pizza) {
        return 'Pizza not found';
    }

    cashInRegister += pizza.price;
    const order = {
        id: orderQueue.length + 1,
        pizza: pizza,
        status: 'ordered'
    }
    orderQueue.push(order);
    return order;
}

function completeOrder (orderId: number)  {
    const order = orderQueue.find(order => order.id === orderId);
    if(!order) {
        return
    }
    order.status = 'completed';
    return order;
}

addNewPizza({name: 'Hawaiian', price: 9});
addNewPizza({name: 'Meat Lovers', price: 10});
addNewPizza({name: 'Vegan', price: 8});

placeOrder('Margherita');
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);
