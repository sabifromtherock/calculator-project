import "./style.scss";

const displayFirstRow = document.querySelector(
  ".display__row--first"
) as HTMLParagraphElement;
const displaySecondRow = document.querySelector(
  ".display__row--second"
) as HTMLParagraphElement;

if (!displayFirstRow || !displaySecondRow)
  throw new Error("Issue with selector");

let currentValue: number = 0;

const handleClick = (event: Event) => {
  const targetButton = event.currentTarget as HTMLButtonElement;

  displaySecondRow.innerHTML += targetButton.value;

  if (targetButton.value === "C") {
    displaySecondRow.innerHTML = "";
    displayFirstRow.innerHTML = "";
  }

  if (targetButton.value === "+/-") {
    displaySecondRow.innerHTML = `${
      Number(displaySecondRow.innerHTML.slice(0, -3)) * -1
    }`;
  }

  if (targetButton.value === "=") {
    displayFirstRow.innerHTML = displaySecondRow.innerHTML;

    const numbers = displaySecondRow.innerHTML.match(/[0-9.]+/g);
    const operators = displaySecondRow.innerHTML.match(/[^\d\.]/g);

    if (!numbers || !operators) {
      throw new Error("Error");
    }

    const numA = Number(numbers[0]);
    const numB = Number(numbers[1]);
    const operand = operators[0];

    operand === "+"
      ? (displaySecondRow.innerHTML = `${numA + numB}`)
      : operand === "-"
      ? (displaySecondRow.innerHTML = `${numA - numB}`)
      : operand === "x"
      ? (displaySecondRow.innerHTML = `${numA * numB}`)
      : operand === "/"
      ? (displaySecondRow.innerHTML = `${numA / numB}`)
      : (displaySecondRow.innerHTML = `${0.01 * numA * numB}`);
  }
};

const buttons = document.querySelectorAll("button");

if (!buttons) throw new Error("Issue with selector");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
