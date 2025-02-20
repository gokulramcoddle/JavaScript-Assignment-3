// Q4)Store your basic details in localstorage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load. 

const details={name:"gokul", age:22, address:"Tamil nadu"};
localStorage.setItem("details",JSON.stringify(details));
let data=JSON.parse(localStorage.getItem("details"));
console.log(data);
setTimeout(()=>{
    localStorage.removeItem("details");
    console.log("After deletion:", localStorage.getItem("details"));
    },5000);