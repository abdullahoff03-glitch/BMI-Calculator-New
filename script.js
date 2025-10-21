function calculateBMI() {
  let heightinput = parseFloat(document.getElementById("getHeight").value);
  let weight = parseFloat(document.getElementById("getWeight").value);
  let result = document.getElementById("result");
  let mainDiv = document.getElementById("mainDiv");

  if (isNaN(heightinput) || isNaN(weight) || heightinput <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight.";
    return;
  }

  let height = heightinput / 100;

  let bmi = weight / (height * height);

  let category = "";
  if (bmi < 18.5) {
    category = "Under weight";
    mainDiv.style.boxShadow = "10px 10px 45px red";
  } else if (bmi < 24.9) {
    category = "Normal Weight";
    mainDiv.style.boxShadow = "10px 10px 45px green";
  } else if (bmi < 29.9) {
    category = "Overweight";
    mainDiv.style.boxShadow = "10px 10px 45px red";
  } else {
    category = "Obesity";
    mainDiv.style.boxShadow = "10px 10px 45px red";
  }

  result.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
}
