// 解决：CSS 当作文件引入后，CSS 变量（quark-*）不会被识别，无法自动更新
const ws = require("ws");
const chokidar = require("chokidar");

let clientSocket;

chokidar.watch("./src/packages/*/*.css").on("all", (event, path) => {
	if (clientSocket) {
		clientSocket.send("refresh");
	}
});

const webSocketServer = new ws.Server({
	port: 30002,
});

webSocketServer.on("connection", (socket) => {
	clientSocket = socket;
	socket.on("message", () => {});
	socket.on("close", () => {});
	socket.on("error", (err) => {
		console.log(err);
	});
	socket.send("hi ws client");
});
