// function theClick(){
//     alert("hi")
// }

// function hover(){
    
//     document.getElementById("btn");
//     let hoverr = btn ;
//     hoverr.style.color = "red"
//     hoverr.style.background = "green"
// }


// function greet(elem) {
//   // alert("Assalam walaikum");
//   // console.log(elem);
//   console.dir(elem);
// }
// function swap(elem) {
//   elem.src = "./big.jpg";
// }
// function restore(elem) {
//   elem.src = "./banner.jpg";
// }
// function resize(elem, size) {
//   console.dir(elem);
//   if (size === "big") {
//     elem.width = 300;
//     elem.height = 300;
//   } else {
//     elem.width = 100;
//     elem.height = 100;
//   }
// }
// function swapImage() {
//     // console.log(document);
//     // console.dir(document);
//     document.getElementById("banner").src = "./big.jpg";
//     //  var elem = document.getElementById('banner');
//   }



// function showAlert (){
//     alert("This is An Alert");
// }

function swapChange (myElement,change){
    if (change === "second"){
        myElement.src = "./banner.jpg"
    }else if (change === "first"){
        myElement.src = "./wall.jpeg";
    }

}


function swapClick (){
  let img = document.getElementById("img")
  if (img.src.includes("banner.jpg")){
      img.src = "./big.jpg"
      img.style.width = "500px"
  }else if (img.src.includes("big.jpg")){
    img.src = "./wall.jpeg";
    img.style.width = "600px";
    img.style.backgroundSize = "cover"
  }else{
      img.style.width = "400px"
      img.src = "./banner.jpg"
  }
}

let changebtn = document.getElementById("btn")

changebtn.style.textDecoration = "none"
changebtn.style.display = "block";
changebtn.style.margin = "100px auto";
changebtn.style.fontSize = "30px"

let images = document.querySelectorAll("img1");


function buyMob () {
    alert("Thanks For Buying A Mobile")
}

function changeOnHover (ele){
    ele.src = "./wall.jpeg";
    ele.style.backgroundSize = "cover"
}

function changeOnmouseDown (ele){
    ele.src = "./banner.jpg";
    ele.style.backgroundSize = "cover"
}

// let studentData = [
//     { Name: "Ahmed", Class: 10 },
//     { Name: "kashan", Class: 11 },
//     { Name: "umair", Class: 12 },
//     { Name: "Bobby", Class: 10 },
//     { Name: "raheem", Class: 11 },
//     { Name: "rehman", Class: 12 },
//     { Name: "moiz", Class: 10 },
//     { Name: "sameer", Class: 11 },
//     { Name: "kabeer", Class: 12 },
//     { Name: "hasnain", Class: 10 }
//   ];


//   let table = document.getElementById("tabledata").getElementsByTagName("tbody")[0];


//   studentData.forEach( function (student,index) {
//     let row = table.insertRow();
//     let cell1 = row.insertCell(0);
//     let cell2 = row.insertCell(1);
//     let cell3 = row.insertCell(2);
//     let cell4 = row.insertCell(3);
//     cell1.innerHTML = index
//     cell2.innerHTML = student.Name
//     cell3.innerHTML = student.Class
//     cell4.innerHTML =  "<button onclick='deleteRow("+index+")'>Delete</button>";
//   });

//   function deleteRow (index){
//     table.deleteRow(index);
//   }
var counter = document.getElementById("counter");
var counterVal = parseInt(counter.innerText)
counter.style.fontSize = "100px"

function plus1 () {
counterVal++;
if (counterVal <= 0){
    counterVal = 1
}
counter.innerText = counterVal
}
function minus1 () {
    counterVal--;
    if (counterVal >= 0){
    counter.innerText = counterVal
    }else{
        alert("Number Not Allowed Us Minus ")
    }
}

let halfPara = "Without struggles, there would be no striving to be better, to overcome, to acquire the skills and strength to evolve as people."

let fullPara = " Without struggles, there would be no striving to be better, to overcome, to acquire the skills and strength to evolve as people. These are struggles that make us beautiful. Without difficulty, without suffering, no one would be on the path to self-actualization. It's a struggle, life."

let paragraph = document.querySelector(".paragraph");
let btnSee = document.querySelector(".seemorebtn");
btnSee.style.fontSize = "24px";
btnSee.style.cursor = "pointer"
paragraph.style.fontSize = "30px"
paragraph.innerHTML = halfPara;


btnSee.addEventListener("click" , function (){

  if (paragraph.innerHTML === halfPara){
  paragraph.innerHTML = fullPara;
  btnSee.innerHTML = "See Less"
}else{
  paragraph.innerHTML = halfPara;
  btnSee.innerHTML = "See More"
}

});




let name = document.getElementById("name");
let fatherName= document.getElementById("fathername");
let education = document.getElementById("education");
let form = document.getElementById("signUpForm");
let formData = document.getElementById("formData")

form.addEventListener("submit" , function (event){
  event.preventDefault();
  let getName = name.value;
  let getFatherName = fatherName.value;
  let getEducation = education.value;

  formData.innerHTML += "<h2> Your Form Data </h2>";
  formData.innerHTML +="<h2> Name : " + getName +  "</h2>";
  formData.innerHTML +="<h2> Father Name : " + getFatherName +  "</h2>";
  formData.innerHTML += "<h2> Education : " + getEducation +  "</h2>";
})


let studentData = [];

let StudentForm = document.getElementById("studentData");
let $name = document.getElementById("studentName");
let $class = document.getElementById("class");
let rollno = document.getElementById("rollno");

StudentForm.addEventListener("submit" , function(event){
    event.preventDefault();
})

function addingData () {
    let getName = $name.value;
    let getClass = $class.value;
    let getRollno = rollno.value;
    if (getName !== "" || getClass !== "" ||  getClass !== ""){
    studentData.push({
        Name : getName,
        Class : getClass,
        RollNo : getRollno
    })
}else{
    alert("please fill up the form to submit")
}
    renderData()
    $name.value = "";
    $class.value = "";
    rollno.value = "";
}

function renderData () {
    let data = document.getElementById("data").getElementsByTagName("tbody")[0];
    data.innerHTML = ""; // Clear previous rows
    studentData.forEach(function (student,index){
        let row = data.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = index;
        cell2.innerHTML = student.Name;
        cell3.innerHTML = student.Class;
        cell4.innerHTML = student.RollNo;
        cell5.innerHTML = `<button class="tbtn" onclick="forDelete(${index})">Delete</button> <button class="tbtn" onclick = "showForm(${index})">Edit</button>`;
    });
}

function forDelete(index) {
    studentData.splice(index, 1);
    renderData(); // Call the renderData function to update the table
}

function showForm (index) {
    let hide = document.getElementById("hiddenform");
    let editName =document.getElementById("editname");
    let editClass = document.getElementById("editclass");
    let editRollno = document.getElementById("editrollno");

    hide.addEventListener("submit" , function(event){
        event.preventDefault();
    })

    hide.style.display = "unset";
    let student =  studentData[index];
    editName.value = student.Name;
    editClass.value = student.Class;
    editRollno.value = student.RollNo;

}

function updateData() {
    let getName = document.getElementById("editname").value;
    let getClass = document.getElementById("editclass").value;
    let getRollno = document.getElementById("editrollno").value;
    if (getName !== "" || getClass !== "" ||  getClass !== ""){
    studentData.splice(0,1)
    studentData.push ( {
        Name: getName,
        Class: getClass,
        RollNo: getRollno
    });
    renderData();
    document.getElementById("hiddenform").style.display = "none";
}else{
    alert("please fill up the form")
}


    
}