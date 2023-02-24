//
const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

// Create variable name idx what start with zero
let idx = 0;

updateNum();

// Function to update/mnioulate for loading bar
function updateNum() {
	counterEl.innerText = idx + "%";
	barEl.style.width = idx + "%";
	idx++;
	if (idx < 101) {
		// setTimeout methode to call this updateNum Function in every 20 mm sec.
		setTimeout(updateNum, 20);
	}
}

//Pagination
const items = [
	{
		src: "https://images.pexels.com/photos/1012216/pexels-photo-1012216.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Pine tree leaves",
	},
	{
		src: "https://images.pexels.com/photos/2253934/pexels-photo-2253934.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Abandoned building",
	},
	{
		src: "https://images.pexels.com/photos/935944/pexels-photo-935944.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Bible reading",
	},
	{
		src: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=300",
		desc: "Sunny day",
	},
	{
		src: "https://images.pexels.com/photos/2962257/pexels-photo-2962257.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Flying over the sea",
	},
	{
		src: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Sunset",
	},
	{
		src: "https://media.istockphoto.com/id/1297450179/de/foto/golfplatzrichtungsschild-und-weg-neben-dem-fairway.jpg?b=1&s=612x612&w=0&k=20&c=-WKzLeA1i9YZqwQEGCBZfqzZSLCBLHXe9laqWQy7SZw=",
		desc: "Clubhouse",
	},
	{
		src: "https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Suburbs",
	},
	{
		src: "https://images.pexels.com/photos/2861883/pexels-photo-2861883.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "By boat",
	},
	{
		src: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Laptop",
	},
	{
		src: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Plant",
	},
	{
		src: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Coffee",
	},
	{
		src: "https://images.pexels.com/photos/5864290/pexels-photo-5864290.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Beer",
	},
	{
		src: "https://images.pexels.com/photos/1724228/pexels-photo-1724228.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Kamin",
	},
	{
		src: "https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?auto=compress&cs=tinysrgb&w=300",
		desc: "Sofa",
	},
];

const nav = document.getElementById("nav");
const content = document.getElementById("content");

let pageIndex = 0;
let itemsPerPage = 3;

loadItems();

function loadItems() {
	content.innerHTML = "";

	for (
		let i = pageIndex * itemsPerPage;
		i < pageIndex * itemsPerPage + itemsPerPage;
		i++
	) {
		if (!items[i]) {
			break;
		}

		const item = document.createElement("div");
		item.innerHTML = `
        <div> 
        <img src = "${items[i].src}"/>
        </div>
        <div> 
        <span>${items[i].desc} </span>
        </div>
        `;

		content.append(item);
	}

	loadPageNav();
}

function loadPageNav() {
	nav.innerHTML = "";
	for (let i = 0; i < items.length / itemsPerPage; i++) {
		const span = document.createElement("span");
		span.innerHTML = i + 1;
		span.addEventListener("click", (e) => {
			pageIndex = e.target.innerHTML - 1;
			loadItems();
		});
		if (i === pageIndex) {
			span.style.fontSize = "2rem";
		}

		nav.append(span);
	}
}

// Array for all terstimonials with objects
const testimonials = [
	{
		name: "Mohammed A",
		photoUrl:
			"https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		text: "Rainbow web dev is the most valuable business resource we have EVER purchased.Thanks for the great service. Rainbow web dev was worth a fortune to my company.",
	},
	{
		name: "Fammi H",
		photoUrl:
			"https://images.unsplash.com/photo-1604607055958-4def78942d6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		text: "Rainbow web dev was the best investment I ever made. I can't say enough about rainbow web dev.",
	},
	{
		name: "Zingjang W",
		photoUrl:
			"https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		text: "Rainbow web dev is exactly what our business has been lacking. We've seen amazing results already. rainbow web dev is exactly what our business has been lacking. Rainbow web dev saved my business.",
	},
	{
		name: "Rosin B",
		photoUrl:
			"https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		text: "I would also like to say thank you to all your staff. Wow what great service, I love it! RainbowDev impressed me on multiple levels.",
	},
	{
		name: "Robert D",
		photoUrl:
			"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
		text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
	},
];

// to getthree elements (img, p, h4) from html
const imgEl = document.querySelector(".testimonial-img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

//define a index
let idx2 = 0;

updateTestimonial();

//Create function for update testimonials
function updateTestimonial() {
	//To get values like testimonals index
	const { name, photoUrl, text } = testimonials[idx2];
	//to change foto, text and name using JS
	//to change the image, we just change src to be photoUrl
	imgEl.src = photoUrl;
	//For the textelement we just change innerText to be textelement
	textEl.innerText = text;
	usernameEl.innerText = name;
	//To increase number of idx
	idx2++;

	if (idx2 === testimonials.length) {
		idx2 = 0;
	}
	//To call it function using setTimeout methode. This sets the timer
	setTimeout(() => {
		updateTestimonial();
	}, 7000);
}
