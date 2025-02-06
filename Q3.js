//3 a)Calculate the height of the end user's browser screen

console.log(window.innerHeight);

// 3 b)Calculate the height of the end user's browser screen

console.log(location.hostname);

//3 c)To console the name of the web host

if (location.protocol !== "https:") {
    console.warn("Warning!!");
}

//3 d)To show an alert message after 10 seconds while the page is refreshed.

setTimeout(()=>{
    alert("hello");
}, 10000)

