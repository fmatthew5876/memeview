bullxUrlBase="https://neo.bullx.io/terminal?chainId=1399811149&address="

function modifyAll() {
	for (node of document.querySelectorAll('a')) {
		oldUrl = node.getAttribute("href");
		if (oldUrl.startsWith("/solana")) {
			ca = oldUrl.split("/").slice(-1)[0];
			newUrl = bullxUrlBase + ca;
			node.setAttribute("href", newUrl);
			node.setAttribute("target", "_blank");
			node.setAttribute("rel", "noopener noreferrer");
			//console.log(`REPLACE ${node}`);
		}
	}
}


//console.log("START");
let observer = new MutationObserver(mutations => {
	modifyAll();
});
observer.observe(document, { childList: true, subtree: true });

