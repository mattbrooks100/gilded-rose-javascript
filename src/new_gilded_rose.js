function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

class Standard extends Item {
  constructor(name, sell_in, quality) {
    super(name, sell_in, quality);
  }
  updateQuality() {
    if (this.quality > 0 && this.sell_in >= 0) this.quality--;
    else if (this.quality >= 2 && this.sell_in < 0) this.quality -= 2;
    else if (this.quality < 2 && this.sell_in < 0) this.quality = 0;
    this.sell_in--;
  }
}

class Legendary extends Item {
  constructor(name, sell_in, quality) {
    super(name, sell_in, quality);
  }
  updateQuality() {
    return;
  }
}

class Aged extends Item {
  constructor(name, sell_in, quality) {
    super(name, sell_in, quality);
  }
  updateQuality() {
    if (this.quality < 50) this.quality++;
    this.sell_in--;
  }
}

class Pass extends Item {
  constructor(name, sell_in, quality) {
    super(name, sell_in, quality);
  }
  updateQuality() {
    if (this.sell_in <= 0) this.quality = 0;
    else if (this.sell_in > 0 && this.sell_in <= 5) this.quality += 3;
    else if (this.sell_in > 5 && this.sell_in <= 10) this.quality += 2;
    else this.quality++;
    this.sell_in--;
  }
}

class Conjured extends Item {
  constructor(name, sell_in, quality) {
    super(name, sell_in, quality);
  }
  updateQuality() {
    if (this.quality >= 2 && this.sell_in >= 0) this.quality -= 2;
    else if (this.quality < 2 && this.sell_in >= 0) this.quality = 0;
    else if (this.quality >= 4 && this.sell_in < 0) this.quality -= 4;
    else if (this.quality < 4 && this.sell_in < 0) this.quality = 0;
    this.sell_in--;
  }
}

function update_quality() {
  for (let item of items) {
    item.updateQuality();
  }
}

var items = [];

items.push(new Standard("+5 Dexterity Vest", 10, 20));
items.push(new Aged("Aged Brie", 2, 0));
items.push(new Standard("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Pass("Backstage passes to a TAFKAL80ETC concert", 10, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));
