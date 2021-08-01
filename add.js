let age= prompt("How old are you?")
let name= prompt("Enter your name: ")

if(age > 18){

    document.write( "<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyxmVjfhYUXNJO-ovch15uwURFKGQ_A-Cig&usqp=CAU' alt='Car' />" );
}
else{
    document.write("<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6loCx36rsztAfEQJ8CBOdJSbv0SsQu16gjA&usqp=CAU' alt='Car' />");
}
let CC=prompt("how many times do you want to see an animal pecture")
for(i=0; i<CC ;i++){
    document.write(
    "<p>Understanding the animals would help us interacting with nature better</p>"+
      "<div> "+
        "<img src='https://i.pinimg.com/originals/3d/25/db/3d25dbb646dad29a418d2a2863acd328.jpg' alt='Animals'>"+
          "<h4>Animals</h4>"+
      "</div>"
    )
    }
alert("in case you forgot your name your name is : " + name)