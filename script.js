//your JS code here. If required.
let count = 0;
let coutn_el = document.querySelector("#results");
coutn_el.innerText = `${count}`
let btn_el = document.querySelector("#fetch-button");
btn_el.addEventListener("click", function (e) {
	//console.log("fetch data");
	count++;
	coutn_el.innerText = count;
})
