/*


Final Project
Authors:  Matthew Reda(1778288) & Seena Sabet-Kassouf(1160693)
Date:   August 12 2022


Filename:         main.js

*/

// Script(s) for teams-current.html, teams-2021.html and teams-2019.html

// Creating a function that stores all the teams in an array
function teamsStartUp() {

    let teams = document.querySelectorAll('div.team');
    let teamsArray = new Array();
    let index = 0;

    for (let team of teams) {
        teamsArray[index] = team.innerHTML;

        team.addEventListener('mouseover', () => {
            team.style.background = '#a1a0a0';
            team.style.boxShadow = '5px 5px #414040';
        });

        team.addEventListener('mouseout', () => {
            team.style.background = 'white';
            team.style.boxShadow = 'none';
        })

        index++;
    };

    // alert('There were '+ teamsArray.length + ' teams this year.');
}// end function teamsStartUp


/* ******************************************************************************* */
// Script(s) for register-team.html

var tbl = document.createElement("table");
var tblHead = document.createElement("thead");
var tblBody = document.createElement('tbody');

/** Create function to generate a caption for the table
 * 
 * @param {*} value */

function generate_table_caption(value) {

    let caption = document.createElement('caption');
    value = document.getElementById('team-name').value;
    
    let captionText = document.createTextNode(value);
    caption.appendChild(captionText);

    tbl.appendChild(caption);
}

// Create a function that generates the headers of the table
function generate_table_head() {

    // creating all cells
    for (let i = 0; i < 1; i++) {
        // creates a table row
        const row = document.createElement("tr");

        for (let j = 1 ; j <= 1; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell1 = document.createElement("th");
            const cellText1 = document.createTextNode('Player Name');
            cell1.appendChild(cellText1);
            row.appendChild(cell1);
            const cell2 = document.createElement("th");
            const cellText2 = document.createTextNode('Date Of Birth');
            cell2.appendChild(cellText2);
            row.appendChild(cell2);
            const cell3 = document.createElement("th");
            const cellText3 = document.createTextNode('Phone Number');
            cell3.appendChild(cellText3);
            row.appendChild(cell3);
            const cell4 = document.createElement("th");
            const cellText4 = document.createTextNode('Email');
            cell4.appendChild(cellText4);
            row.appendChild(cell4);
        }

        // add the row to the end of the table body
        tblHead.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblHead);
    // appends <table> into <body>
    let sideBar = document.getElementById('register-right');
    sideBar.appendChild(tbl);
}


// Create a function that generates the table body with data
function generate_table_body() {

    let validate = validateForm2();

    if (validate === false) {
        return false;
    }

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let dob = document.getElementById('date-of-birth').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

      // creating all cells
      for (let i = 0; i < 1; i++) {
        // creates a table row
        const rowBody = document.createElement("tr");

        for (let j = 1 ; j <= 1; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const data1 = document.createElement("td");
            const dataText1 = document.createTextNode(firstName + ' ' + lastName);
            data1.appendChild(dataText1);
            rowBody.appendChild(data1);
            const data2 = document.createElement("td");
            const dataText2 = document.createTextNode(dob);
            data2.appendChild(dataText2);
            rowBody.appendChild(data2);
            const data3 = document.createElement("td");
            const dataText3 = document.createTextNode(phone);
            data3.appendChild(dataText3);
            rowBody.appendChild(data3);
            const data4 = document.createElement("td");
            const dataText4 = document.createTextNode(email);
            data4.appendChild(dataText4);
            rowBody.appendChild(data4);
        }

        tblBody.appendChild(rowBody);
    }

    tbl.appendChild(tblBody);

    return tbl;
}


/* Scripts for register.html, register-team.html, register-payment.html, register-complete.html */

// Create function validateForm1 to validate the individual registration form 
function validateForm1() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let dob = document.getElementById("date-of-birth");
    let city = document.getElementById("city");
    let address = validateAddress();
    let pc = validatePostalCode();
    let phone = validatePhone();
    let email = validateEmail();
    let check = validateCheckBox();
    let radio = validateRadio();

    if(firstName.value.length === 0) {
        alert('You must enter your first name!');
        firstName.focus();
        firstName.style.background = "#FE5D5D";

        return false;
    } else if(lastName.value.length === 0) {
        alert('You must enter your last name!');
        lastName.focus();
        lastName.style.background = "#FE5D5D";

        return false;
    } else if(dob.value === ""){
        alert('You must enter a valid date of birth.');
        dob.focus();
        dob.style.background = "#FE5D5D";

        return false;
    } else if (address === false) {
        return false;
    } else if(city.value.length === 0) {
        alert('You must enter a valid city.');
        city.focus();
        city.style.background = "#FE5D5D";

        return false;
    } else if (pc === false) {
        return false;
    } else if (phone === false) {
        return false;
    } else if (email === false) {
        return false;
    } else if (check === false) {
        return false;
    } else if (radio === false) {
        return false;
    }
}// end function validateForm1


// Create function validateForm2 for team registration form
function validateForm2() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let dob = document.getElementById("date-of-birth");
    let phone = validatePhone();
    let email = validateEmail();

    if(firstName.value.length === 0) {
        alert('You must enter your first name!');
        firstName.focus();
        firstName.style.background = "#FE5D5D";

        return false;
    } else if(lastName.value.length === 0) {
        alert('You must enter your last name!');
        lastName.focus();
        lastName.style.background = "#FE5D5D";

        return false;
    } else if(dob.value === ""){
        alert('You must enter a valid date of birth.');
        dob.focus();
        dob.style.background = "#FE5D5D";

        return false;
    } else if (phone === false) {
        return false;
    } else if (email === false) {
        return false;
    }
}// end function validateForm2


// Create a function validateForm3() that validates the payment form
function validateForm3() {
    let frequency = document.getElementById("frequency");
    let numPlayers = document.getElementById("num-players");
    let methods = validatePaymentMethod();
    let type = validateCardType();
    let cardNumber = validateCardNumber();
    let exp = document.getElementById("exp-date");
    let cvv = document.getElementById("cvv");
    let address = validateAddress();
    let city = document.getElementById("city");
    let pc = validatePostalCode();


    if(frequency.value === "") {
        alert('You must enter a payment frequency');
        frequency.focus();
        frequency.style.background = "#FE5D5D";

        return false;
    } else if(numPlayers.value === "") {
        alert('You must enter a valid number of players.');
        numPlayers.focus();
        numPlayers.style.background = "#FE5D5D";

        return false;
    } else if(methods === false){
        return false;

    } else if (type === false) {
        return false;

    } else if(cardNumber === false) {
        return false;

    } else if (exp.value === "") {
        alert('You must enter a valid expiration date.')
        exp.focus();
        exp.style.background = "#FE5D5D";

        return false;
    } else if (isNaN(cvv.value)) {
        alert('You must enter a valid CVV number.')
        cvv.focus();
        cvv.style.background = "#FE5D5D";

        return false;
    } else if (address === false) {
        return false;

    } else if (city === false) {
        return false;

    } else if (pc === false) {
        return false;

    }
}// end function validateForm3

// Create the function that validates the address pattern
function validateAddress() {
    var address = document.getElementById("address");
    var addressPattern = /^(\d{3,})\s?(\w{0,5})\s([a-zA-Z]{2,30})\s([a-zA-Z]{2,15})\.?\s?(\w{0,5})$/;

    if(!(address.value.match(addressPattern))) {
        alert('You must enter a valid address.');
        address.focus();
        address.style.background = "#FE5D5D";

        return false;
    }

}// end function

// Create the function that validates the postal code pattern
function validatePostalCode() {
    var postalCode = document.getElementById("postal-code");
    var postalPattern = /([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\ ?([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])/;

    if(!(postalCode.value.match(postalPattern))) {
        alert('You must enter a valid Postal Code.');
        postalCode.focus();
        postalCode.style.background = "#FE5D5D";

        return false;
    }
}// end function

// Create the function that validates the phone pattern
function validatePhone() {
    var phoneNumber = document.getElementById("phone");
    var phonePattern = /^[2-9]\d{2}-\d{3}-\d{4}$/;

    if(!(phoneNumber.value.match(phonePattern))) {
        alert('You must enter a valid phone number.');
        phoneNumber.focus();
        phoneNumber.style.background = "#FE5D5D";

        return false;
    }
}// end function

// Create the function that validates the email pattern
function validateEmail() {
    var email = document.getElementById("email");
    var emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(!(email.value.match(emailPattern))) {
        alert('You must enter a valid email.');
        email.focus();
        email.style.background = "#FE5D5D";

        return false;
    }
}// end function

// Create the function that validates if a position is chosen
function validateCheckBox() {
    var positions = document.querySelectorAll("input.positions");

    for(let options = 0 ; options < positions.length ; options++) {
        if(positions[options].checked) {
            return true;
        }
    }

    alert('You must choose at least one position.');

    return false;
}// end function

// Create the function that validates a size is chosen
function validateRadio() {
    var sizes = document.querySelectorAll("input.sizes");

    for(let options = 0 ; options < sizes.length ; options++) {
        if(sizes[options].checked) {
            return true;
        }
    }

    alert('You must choose a jersey size.');

    return false;
}// end function

// Create the function that validates the payment method
function validatePaymentMethod() {
    var method = document.querySelectorAll("input.method");

    for(let options = 0 ; options < method.length ; method++) {
        if(method[options].checked) {
            return true;
        }
    }

    alert('You must choose a payment method.');

    return false;
}// end function

// Create the function that validates the card type
function validateCardType() {
    var type = document.querySelectorAll("input.types");

    for(let options = 0 ; options < type.length ; type++) {
        if(type[options].checked) {
            return true;
        }
    }

    alert('You must choose a card type.');

    return false;
}// end function

// Create the function that validates the email pattern
function validateCardNumber() {
    var number = document.getElementById("card-number");
    var cardPattern = /^((4\d{3})|(5[1-5]\d{2}))(-?|\040?)(\d{4}(-?|\040?)){3}|^(3[4,7]\d{2})(-?|\040?)\d{6}(-?|\040?)\d{5}/;

    if(!(number.value.match(cardPattern))) {
        alert('You must enter a valid email.');
        number.focus();
        number.style.background = "#FE5D5D";

        return false;
    }
}// end function


// Create function calculateAmount() that calculates the total amount of a registration
function calculateAmount() {
    let payFrequency = document.getElementById("frequency");
    let index = payFrequency.selectedIndex;
    let players = document.getElementById("num-players").value;
    var amount = document.getElementById("amount");
    const WEEKLY = 15;
    const MONTHLY = 60;
    const ANNUALLY = 650;

    if (index == 1) {
        amount.value = "$" + players * WEEKLY + " /week";
    }

    if (index == 2) {
        amount.value = "$" + players * MONTHLY + " /month";
    }

    if (index == 3) {
        amount.value = "$" + players * ANNUALLY + " /year";
    }
}