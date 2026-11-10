class WorkshopPass {
  constructor(holder, entries) {
    this.holder = holder;
    this.entries = entries;
  }

  useEntry() {
    if (this.entries > 0) this.entries -= 1;
  }

  describe() {
    return `${this.holder}: ${this.entries} entries`;
  }
}

const mina = new WorkshopPass("Mina", 2);
const teo = new WorkshopPass("Teo", 1);
console.log("initial:", mina.describe(), "|", teo.describe());
mina.useEntry();
mina.useEntry();
mina.useEntry();
console.log("after use:", mina.describe(), "|", teo.describe());
console.log("shared method:", mina.useEntry === teo.useEntry);
