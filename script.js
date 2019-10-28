var maleAkanName = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame"
];
var femaleAkanName = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama"
];
var daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

//Hides bootstrap success button
document.getElementById("output").style.display = "none";

//called when submit button is clicked
function onSubmit() {
  var day = daysOfTheWeek[calculateDay()];
  var name = getAkanName();
  document.getElementById("day").innerHTML = day;
  document.getElementById("name").innerHTML = name;
  document.getElementById("output").style.display = "block";
}

function getYear() {
  var year = document.getElementById("year").value;
  return year;
}

function getMonth() {
  var month = document.getElementById("monthID").value;
  return month;
}
function getDate() {
  var date = document.getElementById("dateID").value;
  return date;
}
function getGender() {
  var gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return gender[i].value;
    }
  }
}

// calculate day of the week you were born
function calculateDay() {
  var year = parseInt(getYear());
  var MM = parseInt(getMonth());
  var DD = parseInt(getDate());
  var date = new Date(year + "/" + MM + "/" + DD);
  var d = date.getDay();
  return d;
}


//determine Akan name
function getAkanName() {
  var gender = getGender();
  var d = calculateDay();
  var akanName = "";
  if (gender === "male") {
    akanName = maleAkanName[d];
  } else {
    akanName = femaleAkanName[d];
  }
  return akanName;
}
//function to clear form
function clearForm() {
  document.getElementById("myform").reset();
}
