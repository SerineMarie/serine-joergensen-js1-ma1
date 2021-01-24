const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ];
    

    //QUESTION 1
const cat = {
    complain: function() {
        console.log("Meow!")
    }
}
cat.complain();


//QUESTION 2
const headingElement = document.querySelector("h3");

headingElement.innerHTML = "Updated heading";



//QUESTION 3
headingElement.style.fontSize = "2em";



//QUESTION 4
headingElement.className = "subheading";

console.log(headingElement.className);



//QUESTION 5
const paragraph = document.querySelectorAll("p");
for (let i = 0; i < paragraph; i++){
    paragraph.color = "red";
}


//QUESTION 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";


//QUESTION 7
function catList(list){
    for (let i = 0; i < list; i++);

}
catList();


//QUESTION 8
function createCats(cats) {

    let listOfCats = "";

    catAge = "unknown";
    if(cats.age === undefined){
        cats.age = catAge;
    }
    
    for(let i = 0; i < cats.length; i++){
    

        listOfCats = listOfCats + "<h5>" + "Name: " + cats[i].name + "</h5>" + "<p>" + "Age: " + cats[i].age + "</p>";
    }
    const finalHtml = "<div>" + listOfCats + "</div>";

  
    
    return finalHtml;

}

const newHtml = createCats(cats);
console.log(newHtml);


const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;
