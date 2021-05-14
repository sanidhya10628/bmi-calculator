function func() {
    var a = document.getElementById("height").value
    var b = document.getElementById("weight").value

    // formula height*height/weight

    var bm = b / (a * a);
    var bmi = bm.toFixed(2);
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more
    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Underweight " + bmi;
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("result").innerHTML = "Normal " + bmi;
    }

    else if (bmi > 24.9 && bmi <= 29.9) {
        document.getElementById("result").innerHTML = "OverWeight " + bmi;
    }
    else{
        document.getElementById("result").innerHTML = "Obese " + bmi;
    }

    console.log(a);
    console.log(b);
    console.log("sanidhya");
}