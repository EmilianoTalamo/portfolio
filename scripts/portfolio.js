var projects;
var linksContainer = document.getElementById("linksContainer");


fetch("./scripts/projects.json") // Read projects JSON
.then(
	response => {
		return response.json(); // Get JSON
	}
)
.then(
	data => {
		projects = data.projects; // Save JSON data on variable
		writeProjects(); // Deploy info on web
	}
)
.catch(err => {
	console.log("ERROR");
});


function writeProjects() {
	linksContainer.innerHTML = "";
	for(let [index, value] of projects.entries()) {
		let li = linksContainer.appendChild(document.createElement("li"));
		let a = li.appendChild(document.createElement("a"));
		a.innerHTML = value.title;
		a.style.backgroundColor = value.color;
		a.dataset.index = index;
		if(value.isbright == true) {
			a.style.textShadow = "0 0 2px rgba(0,0,0,0.4), 1px 1px 1px rgba(0,0,0,0.2)";
		}
		a.addEventListener("click", projectClicked, false);
	}
}


function projectClicked() {
	if(document.getElementById("projectInfo") != undefined) {
		closeProject();
	}
	var index = this.dataset.index;
	let article = document.body.appendChild(document.createElement("article"));
	article.id = "projectInfo";

	// Close button
	article.appendChild(document.createElement("span")).id = "close";
	document.getElementById("close").innerHTML = "&times;";
	document.getElementById("close").addEventListener("click", closeProject);
	// Divider
	article.appendChild(document.createElement("div")).id = "divider";

	let content = article.appendChild(document.createElement("div"));
	content.id = "content";
	// Title
	content.appendChild(document.createElement("h1")).innerHTML = projects[index].title;
	// Tech list
	let tech = content.appendChild(document.createElement("ul"));
	tech.id = "tech";
	for(let i of projects[index].tech) {
		tech.appendChild(document.createElement("li")).innerHTML = i;
	}
	// Description
	content.appendChild(document.createElement("p")).innerText = projects[index].info;
	// Gallery
	let gallery = content.appendChild(document.createElement("ul"));
	gallery.id = "galleryThumbs";
	for(let i=1 ; i<=projects[index].ssqt ; i++ ) {
		let galleryItem = gallery.appendChild(document.createElement("li"));
		let galleryLink = galleryItem.appendChild(document.createElement("a"));
		galleryLink.className = "gallery";
		galleryLink.href = "./res/gallery/" + projects[index].folder + "/" + i + ".jpg";
		galleryLink.appendChild(document.createElement("img")).src = "./res/gallery/" + projects[index].folder + "/" + i + "-thumb.jpg";
	}
	new LuminousGallery(document.querySelectorAll(".gallery"), options, options);
	// Links
	let links = content.appendChild(document.createElement("div"));
	links.id = "links";
	// Code link
	if(projects[index].code != false) {
		let codeLink = links.appendChild(document.createElement("a"));
		codeLink.className = "icon-code";
		codeLink.href = projects[index].code;
		codeLink.target = "_blank";
		codeLink.innerHTML = "Code";
	}
	// View link
	if(projects[index].view != false) {
		let viewLink = links.appendChild(document.createElement("a"));
		viewLink.className = "icon-export";
		viewLink.href = projects[index].view;
		viewLink.target = "_blank";
		viewLink.innerHTML = "View";
	}
}

function closeProject() {
	document.body.removeChild(document.getElementById("projectInfo"));
}

// Gallery
var options = {
	appendToSelector: "#projectInfo",
	closeWithEscape: true,
	closeOnScroll: true,
	arrowNavigation: true
};