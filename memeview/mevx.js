bullxUrlBase="https://neo.bullx.io/terminal?chainId=1399811149&address="
topClass="hidden lg:block mb-2 MuiBox-root css-k1yhe9"
listClass="MuiBox-root css-1l9fms5"

function modifyUrl(node) {
	oldUrl = node.getAttribute("href");
	if (oldUrl.startsWith("/solana")) {
		console.log(`OLD URL ${oldUrl}`);
		ca = oldUrl.split("/").slice(-1)[0];
		newUrl = bullxUrlBase + ca;
		node.setAttribute("href", newUrl);
		node.setAttribute("target", "_blank");
		node.setAttribute("rel", "noopener noreferrer");
		console.log(`REPLACE ${node}`);
	}
}

function modifyAll() {
	for (element of document.getElementsByClassName(topClass)) {
		modifyUrl(element)
	}
	for (element of document.getElementsByClassName(listClass)) {
		modifyUrl(element)
	}
}


console.log("START");
let observer = new MutationObserver(mutations => {
	modifyAll()
});
observer.observe(document, { childList: true, subtree: true });

