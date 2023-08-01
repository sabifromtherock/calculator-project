import "./style.scss";

const displayFirstRow = document.querySelector(".display__row--first");
const displaySecondRow = document.querySelector(".display__row--second");

if (!displayFirstRow || !displaySecondRow)
  throw new Error("Issue with selector");

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
    const operator = displaySecondRow.innerHTML.match(/[^\d\.]/g);

    if (!numbers || !operator) {
      throw new Error("Error");
    }

    console.log(operator[0], operator[1]);

    operator[0] === "+"
      ? (displaySecondRow.innerHTML = `${
          Number(numbers[0]) + Number(numbers[1])
        }`)
      : operator[0] === "-"
      ? (displaySecondRow.innerHTML = `${
          Number(numbers[0]) - Number(numbers[1])
        }`)
      : operator[0] === "x"
      ? (displaySecondRow.innerHTML = `${
          Number(numbers[0]) * Number(numbers[1])
        }`)
      : operator[0] === "/"
      ? (displaySecondRow.innerHTML = `${
          Number(numbers[0]) / Number(numbers[1])
        }`)
      : (displaySecondRow.innerHTML = `${
          0.01 * Number(numbers[0]) * Number(numbers[1])
        }`);
  }
};

const buttons = document.querySelectorAll("button");

if (!buttons) throw new Error("Issue with selector");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
