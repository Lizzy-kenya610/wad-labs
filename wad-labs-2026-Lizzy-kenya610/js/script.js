//comment
/* 
multi-line comments
*/

//re-assignment, redeclaration
//scope must be initialized

//let, const and var (declaring variables in JS)

var students = "Lizzy";
students = "Muthengi"; //re-assigned (yes)

//printing out student value on the console
console.log('var: ', students)

let course = "HTML";
course = "Javascript";//re-assigned (yes)

console.log('let: ', course);

const university = "Strathmore University";
//university = "USIU"; //re-assigned (no)
console.log('const: ', university);

//Re-declaration
var students = "Brian"; //can be re-declared
console.log('var: ', students);

//let course = "rust programming" //cannot be re-declared
//console.log('let: ', course);

// const university = "UoN"; //cannot be redeclared
//console.log('const: ', university);

//if block - in between curly braces
if (true) {
    var age = 20;
    let grade = "A";
    const subject = "chemistry";
    console.log('----- inside block ----');
    console.log('var: ', age);
    console.log('var: ', grade);
    console.log('var: ', subject);
}

console.log('----- outside block ----');
console.log('var: ', age);
//console.log('var: ', grade);
//console.log('var: ', subject);

// no data types (loosely typed)
// single Responsiblity
// 1. define functions
/**
 * A function that calculate the area of the triangle: this called documentation. 
 * @param number width 
 * @param number height 
 * @returns number
 */
function calculateArea(width, height) {

    //printing out and returnin are not the same
    let area = 0;
    //Someone has provided a widh
    if (width == null && height == null) {
        console.error('you must provide a width and height');
        //  return;
    } else if (width == null) {
        console.error('You must provide the width');
        //  return;
    } else if (height == null) {
        console.error('You must provide the height');
        // return;
    } else {
        area = width * height;
        return area;
    }

    return area;
    // console.log('Function calculateArea')
}

//anonymous Functions 

//2. Expressions functions
const calculateAreaOfCircle = function (radius) {
    return Math.PI * radius * radius;
}
console.log('The circle with radius 7.6 has an area of', calculateAreaOfCircle(7.6));

//3.Arrow Functions
const calculateAreaOfTriangle = (base, height) => {
    return 0.5 * base * height;
}
console.log('The triangle has an area of ', calculateAreaOfTriangle(7, 15));
// call it
let area1 = calculateArea();
console.log("the area is", area1);

let area2 = calculateArea(8);
console.log("The area is", area2);

let area3 = calculateArea(8, 3);
console.log("The area is", area3);

//JavaScript Arrays
//1. Array definitions
//ordered list
//zero-indexed
//10 - index 0, 25 - index 1....
const scores = [10, 25, 7, 42, 18];

console.log(scores[0]); //10
console.log(scores[3]); //42
console.log(scores[4]); //18

//arrays can have any data types

let governors = [
    "Johnson Sakaja",
    "Cecily Mbarire",
    "Ann Waiguru",
    "Anyang' Nyong'o"
];

console.log(governors[0]); // JS
console.log(governors[3]); //AN
console.log(governors[1]); // CM

//n-d arrays 
//2d
let senators = [
    [1, "Mohamed Faki", "ODM"],
    [2, "Issa Juma", "ODM"],
    [3, "Steward Madzayo", "ODM"]
];

console.log(senators[0][1]);//Mohamed Faki
console.log(senators[1][2]); //ODM
console.log(senators[2][1]); //Steward Madzayo

let sample_3d = [
    [
        "One", ["two"]
    ],

    ["three", ["four"]],
];

//size or length of an array
// Kenya has b governors
console.log("Kenya has ", governors.length, " governors");
//Kenya has c senators
console.log("Kenya has ", senators.length, " senators");

//map
let double_scores = scores.map(score => score * 2);
console.log(double_scores);
let scores_above_30 = scores.filter(score => score > 30);
console.log(scores_above_30);
//loops
governors.forEach(function (governor) {
    console.log(governor);
});

senators.forEach(function (senator_array) {
    console.log(senator_array[1]);
});

//Objects in JavaScript

let student = {
    name: "Fidel Omondi", //one property
    "admisssion number": 1,
    course: "BBIT",
    group: "2B",
    gender: "male",
    fees_paid: true,
    unit: "Web app development",
    attendance: 20, //number of hours attended in the unit so far
    updateAttendance: function () {
        this.attendance = this.attendance + 1;
    },
    clubs: [
        'sumg', 'drama', 'aiesec', 'mental health club'
    ]


}

//access

console.log(student.name); //access usiing dot notaiton
console.log(student["admisssion number"]); //access using square brackets
//error for console.log(student.addmission number);
console.log(student["unit"]);


//function call within an object
student.updateAttendance();
console.log(student.attendance);


//loop

//keys of object
let studentKeys = Object.keys(student);
console.log(studentKeys); //array of keys


//values of object
let studentValues = Object.values(student);
console.log(studentValues); //array of values

//keys and values of object
let studentKV = Object.entries(student);
console.log(studentKV); //array of keys and value


studentKeys.forEach(function (key) {
    console.log(key);
});

studentValues.forEach(function (value) {
    console.log(value);
});

studentKV.forEach(function (entries) {
    console.log(entries);
});

//DOM

console.log(document);

//accessing elements from the page
let heading = document.getElementById('mainHeading');
let form_row = document.getElementsByClassName("form-row");

//modern
let interactive_lab_section = document.querySelector("#interactive-lab");
let form_row_v2 = document.querySelector(".form-row");
let interactive_lab_paragraph = document.querySelector("#interactive-lab p");

// querySelectorAll - return all matching
let sections = document.querySelectorAll('section');

console.log("==== DOM Access things from the page ====");
console.log(form_row);
console.log(sections);
console.log(interactive_lab_paragraph);
console.log(interactive_lab_paragraph.textContent);

console.log("==== DOM Update 'things' on the page ====");
interactive_lab_paragraph.textContent = "Text changed!";

let previewImage = document.querySelector("img");
previewImage.setAttribute("title", "new Image Title");
console.log(previewImage);

//we can change the css 
interactive_lab_paragraph.style.color = "white";


console.log("==== Handing event on our page ====");
//case 1 - click

// 1.a - get element from page via the dom (document)

let changeTextBtn = document.querySelector("#changeTextBtn");

// 1.b - attach an eventlistener to the element a.k.a handle the event
changeTextBtn.addEventListener('click', function (event) {
    // 1c - do sth
    console.log("somebody clicked me maaan!");
    let demoText = document.querySelector("#demoText");
    demoText.textContent = "I'm gonna change coz you clicked sth";
});

//case 2 - highlighting sections on click

let hightlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
let allSections = document.querySelectorAll("section");
highlightSectionsBtn.addEventListener("click", event => {
    //function body a.k.a what happens when the button is clicked
    //console.log("highlight section button clicked");
    //console.log(allSections);

    allSections.forEach(section => {
        section.classList.toggle("section-highlight");
    });

});

//case 3 - greetings
let nameInput = document.querySelector("#nameInput"); //textbox
let nameOutput = document.querySelector("#nameOutput"); //paragraph

//when someone enters a name (inpux)
nameInput.addEventListener("input", event => {
    //console.log("typing...");
    nameOutput.textContent = "Hello " + nameInput.value + "!";
})

//case 4 - character count
let commentInput = document.querySelector("#commentInput"); //text area
let charCount = document.querySelector("#charCount");// paragraph


commentInput.addEventListener("input", event => {
    let totalChars = commentInput.value.length; //number of chars typed into the textarea
    charCount.textContent = "character: " + totalChars;
    //@TODO - modify this to count the number of words instead
});

//case 5
let keyOutput = document.querySelector("#keyOutput");
document.addEventListener("keydown", event => {
    keyOutput.textContent = "You pressed: " + event.key;
});

//case 6(a)  adding items to a list
let wishlistInput = document.querySelector("#wishlistInput"); //textbox
let addWishlistButton = document.querySelector("#wishlistForm button"); //button
let wishlistItems = document.querySelector("#wishlistItems"); //ul

addWishlistButton.addEventListener("click", event => {
    event.preventDefault(); //stop from from being submitted
    console.log(" You typed: " + wishlistInput.value);

    //we only want to add where there in a value in the wishlistinput
    if (wishlistInput.value != "") {
        console.log("you typed: " + wishlistInput.value);

        //dynamically create elements
        let li = document.createElement('li');
        let button = document.createElement('button');
        li.textContent = wishlistInput.value; //typed in value
        button.textContent = "Delete";

        //add an eventlistener for the new element
        button.addEventListener("click", event => {
            li.remove();
        })


        //add the button to the li
        li.appendChild(button);
        wishlistItems.appendChild(li); //add li to the existing ul
        //we clear the wishlist input
        wishlistInput.value = "";
    }
    else {
        alert("please type a wish");
    }
});

//case 6b = remove static elements from the list
let deleteButtons = document.querySelectorAll("#wishlistItems button");
console.log(deleteButtons);

let firstDeleteButton = document.querySelector("#wishlistItems button");
console.log(firstDeleteButton);

deleteButtons.forEach(button => {
    //one button at a time
    button.addEventListener("click", event => {
        //console.log("button has been clicked");
        button.parentElement.remove();
    });
});

//case 7 - form submit, show the submitted details on a page
let feedbackForm = document.querySelector("#feedbackForm"); //form
let feedbackOutput = document.querySelector("#feedbackOutput");//div

feedbackForm.addEventListener("submit", event => {
    //prevent the form from being submitted normally
    event.preventDefault();
    //console.log("gggy");

    //get the form inputs
    let nameInput = document.querySelector("#fanName");
    let emailInput = document.querySelector("#fanEmail");
    let messageInput = document.querySelector("#fanMessage");

    //make it clear for you
    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
    //here - can validate names (eg make sure no numbers are entered)

    //update the div (feedbackOutput) with the values
    feedbackOutput.innerHTML = "<b>Feedback submitted </b> <br>" +
        "<p>Name: " + name + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Message: " + message + "</p>";

    //clear the input fields on the form
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    //bonus
    feedbackOutput.classList.add("success-text");

});

//forgotten case
let demoText = document.querySelector("#demoText");
let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", event=> {
//undo changes
//changeText
demoText.textContent = "Click the button to modify this text using JavaScript. ";

//highligh sections


});
