require("./styles/index.styl"); // Flip the extension and modify webpack.config to test

var root = document.getElementById('root');

root.appendChild(
	document.createTextNode("Hello World")
);
