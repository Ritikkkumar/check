const button1 = document.getElementById("button");
const addNew=document.getElementById("addNew")
console.log(button1);
button1.addEventListener("click",addNewFunc);
function addNewFunc(){
    var promise1=new Promise((resolve,reject)=>{
        var check=true;
        if(check)
        {
            resolve("right");
        }
        else{
            reject("wrong");
        }
    }
    )
    setTimeout(function(){const newElement=document.createElement("p");
        newElement.innerHTML="new";
        addNew.appendChild(newElement);},1000);

        const result=promise1.then(res=>console.log(res));
const error=promise1.catch(err=>console.log(err));
}
class check{
    constructor(firstName,lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }
    printFunc(para){
        console.log(`${this.firstName} ${this.lastName}`);
        console.log(para);
    }
}

var obj1=new check("Ritik","Kumar");
obj1.printFunc("hii");
var obj2=new check("Jhon","Cena");
obj1.printFunc.call(obj2,"hii");
var arr=[1,2,3,4,5];
var arr1=arr.reduce((acc,crr)=>{return acc+crr},0);
console.log(arr1);