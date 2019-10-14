'use strict';
//Node.jsのHTTPモジュール読み込み
const http = require('http');
//httpモジュール機能でサーバを作成
//サーバにはリクエストを表すオブジェクトの引数[req]とレスポンスを表すオブジェクトの引数[res]を受け取る無名関数を渡す
//この無名関数はサーバにリクエストがあった場合に呼び出される
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    //レスポンスヘッダを書き出し
    'Content-Type': 'text/plain; charset=utf-8'
  });
  //response headerのuser-agentの中身をレスポンスの内容として書き出し
  res.write(req.headers['user-agent']);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});