function Displacement(Vi, t, a) {
  var d = Vi * t + 0.5 * a * Math.pow(t, 2);
  return d;
}

function Velocityfinal(Vi, t, a) {
  var Vf = Vi + a * t;
  return Vf;
}

function Acceleration(Vi, Vf, t) {
  var a = (Vf - Vi) / t;
  return a;
}

function Time(Vi, Vf, a) {
  var t = (Vf - Vi) / a;
  return t;
}

function calculate() {
  try {
    var Vi = parseFloat(document.getElementById("Vi").value);
    var Vf = parseFloat(document.getElementById("Vf").value);
    var t = parseFloat(document.getElementById("t").value);
    var a = parseFloat(document.getElementById("a").value);
    var option = document.getElementById("option").value;

    var result;

    if (option === "Displacement") {
      result = Displacement(Vi, t, a);
    } else if (option === "Final Velocity") {
      result = Velocityfinal(Vi, t, a);
    } else if (option === "Acceleration") {
      result = Acceleration(Vi, Vf, t);
    } else if (option === "Time") {
      result = Time(Vi, Vf, a);
    }

    displayResult(result);
  } catch (error) {
    document.getElementById("error-message").textContent =
      "Invalid input. Please enter valid numbers for all fields.";
  }
}

// Function to display the result
function displayResult(result) {
  var units = "";
  var option = document.getElementById("option").value;
  if (option === "Displacement") {
    units = "m"
  } else if (option === "Final Velocity") {
    units = " m/s"
  } else if (option === "Acceleration") {
    units = " m/s^2"
  } else if (option === "Time") {
    units = "s"
  }
  document.getElementById("answer").value = result + units;
}

// Function to disable appropriate input field based on selected option
function handleOptionChange() {
  var option = document.getElementById("option").value;

  // Enable all input fields
  document.getElementById("Vi").disabled = false;
  document.getElementById("Vf").disabled = false;
  document.getElementById("t").disabled = false;
  document.getElementById("a").disabled = false;

  // Disable the appropriate input field based on the selected option
  if (option === "Displacement" || option === "Final Velocity") {
    document.getElementById("Vf").disabled = true;
  } else if (option === "Acceleration") {
    document.getElementById("a").disabled = true;
  } else if (option === "Time") {
    document.getElementById("t").disabled = true;
  }
}

// Add event listener to the option select element
var optionSelect = document.getElementById("option");
optionSelect.addEventListener("change", handleOptionChange);

// Call handleOptionChange once to set the initial state
handleOptionChange();

// Add event listener to the calculate button
var calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculate);