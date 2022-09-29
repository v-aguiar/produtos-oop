class Item {
  constructor(category, description, price) {
    if (this.constructor === Item) {
      throw new Error("⚠ Item is an Abtract class, and cannot be instanciated!");
    }

    this.category = category;
    this.description = description;
    this.price = price;
  }
}

class TaxItem extends Item {
  constructor(category, description, price) {
    super(category, description, price);

    if (this.constructor === TaxItem) {
      throw new Error("⚠ TaxItem is an Abtract class, and cannot be instanciated!");
    }
  }

  calculateTax(tax = 0) {
    return this.price * tax;
  }

  getTax() {
    return this.calculateTax(this.tax);
  }
}

export class Beer extends TaxItem {
  constructor(description, price) {
    super("Beer", description, price);
    this.tax = 0.2;
  }
}

export class Cigar extends TaxItem {
  constructor(description, price) {
    super("Cigar", description, price);
    this.tax = 0.25;
  }
}

export class Eletronics extends TaxItem {
  constructor(description, price) {
    super("Eletronics", description, price);
    this.tax = 0.3;
  }
}

export class Water extends Item {
  constructor(description, price) {
    super("Water", description, price);
    this.tax = 0;
  }

  getTax() {
    return this.tax;
  }
}
