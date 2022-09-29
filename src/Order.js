class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTaxes() {
    return this.items.reduce((total, item) => total + item.getTax(), 0);
  }
}

export default Order;
