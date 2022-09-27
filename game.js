console.log("hello world");
x = Math.floor((Math.random() * 100) + 1);
var nameInput = document.getElementById('dedo');
document.querySelector("button").addEventListener("click", myFunction);
let count = 0;
function myFunction() {
    t = document.getElementById("inp").value;
    count = count + 1;
    console.log(t);
    console.log(x);
    console.log(nameInput.value);
    if(count<6){
        if (x < t) {
            if (x > t - 5 && x < t) {
                document.getElementById("demo").innerHTML = "NO. IS SLIGHTLY  SMALLER THAN YOUR NUMBER";
                document.getElementById("demo1").innerHTML = "Chances-" + count;
            }
            else {
                document.getElementById("demo").innerHTML = "NO. IS SMALLER THAN YOUR NUMBER";
                document.getElementById("demo1").innerHTML = "Chances-" + count;
            }
        }
        else if (x == t) {
            document.getElementById("demo").innerHTML = "NICE YOU GUESS THE NO.";
            document.getElementById("demo1").innerHTML = nameInput.value +" " + "Your Score is =  " + (11-count)*10;
        }
        else {
            if (x - 5 < t && x > t) {
                document.getElementById("demo").innerHTML = "NO. IS SLIGHTLY  Greater THAN YOUR NUMBER";
                document.getElementById("demo1").innerHTML = "Chances-" + count;
            }
            else {
                document.getElementById("demo").innerHTML = "NO. IS greater THAN YOUR NUMBER";
                document.getElementById("demo1").innerHTML = "Chances-" + count;
            }
        }
    }
    else{
        document.getElementById("demo").innerHTML = "Chances are over";
        document.getElementById("demo1").innerHTML = "The no. is  ->"+ x;
    }
    }