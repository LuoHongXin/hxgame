const express = require('express');

const multer = require('multer');

const path = require('path');



const app = express();



// Serverless 场景只能读写 /tmp 目录，所以这里需要指定上传文件的目录为 /tmp/upload

const upload = multer({

  dest: '/tmp/upload',

});



app.all('*', (req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');// 所有的请求允许跨域

  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');//

  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');

  // 跨域请求CORS中的预请求

  if (req.method == 'OPTIONS') {

    res.sendStatus(200);/* 让options请求快速返回 */

  } else {

    next();// 任何请求在执行完该响应后，继续往下执行

  }

});

// Routes

// app.get(`/`, (req, res) => {

//   res.sendFile(path.join(__dirname, 'index.html'))

// })

app.use(express.static('./'));



// Error handler

app.use((err, req, res, next) => {

  console.error(err);

  res.status(500).send('Internal Serverless Error');

});



app.listen(9000, () => {

  console.log('Server start on http://localhost:9000');

});
