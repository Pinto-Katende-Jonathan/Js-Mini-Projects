export class Calculator {
  constructor(currOutput, prevOutput) {
    this.currOutput = currOutput;
    this.prevOutput = prevOutput;
    this.clear();
  }
  /**
   * cette méthode ajoute une valeur dans la variable CurrValue,
   * Si cette dernière contient un point, on ne fait rien
   * @param {*} number
   * @returns
   */
  appendToValue(number) {
    if (this.currValue.toString().includes(".") && number === ".") return;
    this.currValue = this.currValue.toString() + number.toString();
  }

  clear() {
    this.currValue = "";
    this.prevValue = "";
    this.operation = "";
  }

  delete() {
    this.currValue = this.currValue.toString().slice(0, -1); //Supprime le dernier caractère
  }

  choseOperation(op) {
    if (this.currValue === "") return;
    this.prevValue = this.currValue;
    this.operation = op;
    this.currValue = "";
    console.log(this.operation);
  }

  compute() {
    switch (this.operation) {
      case "÷":
        this.computation =
          parseFloat(this.prevValue) / parseFloat(this.currValue);
        break;

      case "+":
        this.computation =
          parseFloat(this.prevValue) + parseFloat(this.currValue);
        break;

      case "x":
        this.computation =
          parseFloat(this.prevValue) * parseFloat(this.currValue);
        break;

      case "-":
        this.computation =
          parseFloat(this.prevValue) - parseFloat(this.currValue);
        break;
    }

    this.currValue = this.computation;
  }

  updateDisplay() {
    this.prevOutput.innerText = `${this.prevValue}${this.operation}`;

    this.currOutput.innerText = this.currValue;
  }
}
