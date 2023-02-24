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
