let websockets;
/**
 *   建立连接
 *
 */
function connect() {
  // 1. 创建websockets对象，参数为服务器websockets地址
  websockets = new WebSocket('ws://127.0.0.1:30002');

  // 监听连接状态的变化
  websockets.onopen = () => {
    console.log('ws client opened');
  };

  // 监听接收消息的情况
  websockets.onmessage = (res) => {
    console.log(`ws client receive msg: ${res.data}`);
    if (res.data === 'refresh') {
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    }
  };

  // 监听关闭时的状态变化
  websockets.onclose = () => {
    websockets.close();
    console.log('ws client cloesed');
  };
}

export function close() {
  websockets.close();
}
export default connect;
