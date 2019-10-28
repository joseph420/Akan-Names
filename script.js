/*var male = ["kwasi", "kwadwo", "kwabena", "kwaku","Yaw", "Kofi", "Kwame"];
var female = ["Akousa", "Adwoa", "Abeana","Akua", "Yaa", "Afua", "Ama"];
var dayWeek = ["Sunday", "Monday", "Tuesday","Wensday","Thursday", "Friday", "Saturday"];
var gender;
function akan(){
     var dayBorn = parseInt(document.getElementById("dayBorn").value);
     var monthBorn = document.getElementById("monthBorn").value;
     var yearBorn = parseInt(document.getElementById("yearborn").value);
     gender= document.getElementById("Gender").value;
     var results = document.getElementById("results").value;
};      
var dayWeek = new Date(year + "/" + month + "/" + day);
var d = dayWeek.getDay();
var name ="";
if (gender === "male"){
    name  = male[d];
}
else{
    name = female[d];
}
alert("Your were born on "+ dayWeek[d] +  " and your Akan name is " +name );
*/
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

function giveDay() {
  var day = document.getElementById("dayBorn").value;
  if (day == "") {
    alert("Day must be filled ");
    return false;
  }

  function giveMonth() {
    var month = document.getElementById("monthBorn").value;
    if (month == "0") {
      alert("Month must be selected");
      return false;
    }
  }
  
  function giveYear() {
    var year = document.getElementById("yearBorn").value;
    if (year == "") {
      alert("Year must be filled out");
      return false;
    }
  }


function selectGender() {
  var gender = document.getElementById("gender").value;
  if (gender == "") {
    alert("selecte gender");
    return false;
  }
}

}
// function that restrict users from not keying in different numbers on letters and number section
function allLetters(input){
  var characters = /[^a-z]/gi;
  input.value = input.value.replace(characters, "");
}

function digits(input){
  var digits = /[^0-9]/;
  input.value = input.value.replace(digits, "");
}
function validYear(){
  var year = document.getElementById('yearBorn').value;
  if (year < 1599 || year > currentYear) {
    alert("Invalid Year");
    return false;
  }
}

function validDay(){
  var oddMonths = [1, 3, 5, 7, 9, 10, 12];
  var dayNumber = parseInt(document.getElementById("dayBorn").value);
  var monthNumber = parseInt(document.getElementById("monthBorn").value);
  var yearNumber = parseInt(document.getElementById("yearBorn").value);
  var a = yearNumber % 100;
  var b = yearNumber % 400;
  var c = yearNumber % 4;
  var d = oddMonths.includes(monthNumber);
  if (monthNumber === 2 && dayNumber > 28 && a === 0 && b !== 0){
    alert("Invalid day: The entered year, February had 28 days.");
    return false;
  }
  else if (monthNumber === 2 && dayNumber > 28 && c !== 0) {
    alert("Invalid day: The entered year, February had 28 days.");
    return false;
  }
  else if (!d && dayNumber > 30) {
    alert("Invalid day: The selected month has 30 days");
    return false;
  }
  else if (dayNumber > 31 || dayNumber < 1) {
    alert("Invalid day: Months have a possible 1 to 31 days");
    return false;
  }
}

function getName(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var yy = parseInt(document.getElementById("yearBorn").value.slice(2, 4));
  var dd = parseInt(document.getElementById("dayBorn").value);
  var mm = parseInt(document.getElementById("monthBorn").value);
  var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  var akanDay = days[day.toFixed()];
  var gender = parseInt(document.getElementById("gender").value);
  if (gender == 2) {
    if (akanDay === 'Sunday') {
      document.getElementById("output").value = "Born on Sunday: Your Akan Name would be: " + akanMale[0];
      return true;
    }
    else if (akanDay === 'Monday') {
      document.getElementById("output").value = "Born on Monday: Your Akan Name would be: " + akanMale[1];
      return true;
    }
    else if (akanDay === 'Tuesday') {
      document.getElementById("output").value = "Born on Tuesday: Your Akan Name would be: " + akanMale[2];
      return true;
    }
    else if (akanDay === 'Wednesday') {
      document.getElementById("output").value = "Born on Wednesday: Your Akan Name would be: " + akanMale[3];
      return true;
    }
    else if (akanDay === 'Thursday') {
      document.getElementById("output").value = "Born on Thursday: Your Akan Name would be: " + akanMale[4];
      return true;
    }
    else if (akanDay === 'Friday') {
      document.getElementById("output").value = "Born on Friday: Your Akan Name would be: " + akanMale[5];
      return true;
    }
    else {
      document.getElementById("output").value = "Born on Saturday: Your Akan Name would be: " + akanMale[6];
      return true;
    }
  }
    if (gender == 3) {
      if (akanDay === 'Sunday') {
        document.getElementById("output").value = "Born on Sunday: Your Akan Name would be: " + akanFemale[0];
        return true;
      }
      else if (akanDay === 'Monday') {
        document.getElementById("output").value = "Born on Monday: Your Akan Name would be: " + akanFemale[1];
        return true;
      }
      else if (akanDay === 'Tuesday') {
        document.getElementById("output").value = "Born on Tuesday: Your Akan Name would be: " + akanFemale[2];
        return true;
      }
      else if (akanDay === 'Wednesday') {
        document.getElementById("output").value = "Born on Wednesday: Your Akan Name would be: " + akanFemale[3];
        return true;
      }
      else if (akanDay === 'Thursday') {
        document.getElementById("output").value = "Born on Thursday: Your Akan Name would be: " + akanFemale[4];
        return true;
      }
      else if (akanDay === 'Friday') {
        document.getElementById("output").value = "Born on Friday: Your Akan Name would be: " + akanFemale[5];
        return true;
      }
      else {
        document.getElementById("output").value = "Born on Saturday: Your Akan Name would be: " + akanFemale[6];
        return true;
      }
    }
}
function clearForm(){
  document.getElementById("form").reset();
}





 
