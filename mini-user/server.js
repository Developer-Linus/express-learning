import express from "express";
import { requestTimeMiddleware } from "./middlewares/requestTimeMiddleware.js";

const app = express();
const port = 3001;

app.use(requestTimeMiddleware);

app.get('/', (req, res)=>{
  res.send('Welcome to the User Directory API');
})
app.get('/users', (req, res)=>{
 let users = [
    {"name":"Linus", "id": 1},
    {"name": "Ezra", "id": 2},
    {"name": "Memo", "id": 3},
  ];
  res.json(users);
})
app.get('/users/:userId/', (req, res)=>{
  try{
    res.send(req.params);
  } catch(e){
    res.statusCode(404);
  }
})
app.post('/users', (req, res)=>{
  res.send('User added.')
});

app.all('/admin', (req, res)=>{
  console.log('Admin area accessed.');
  res.send('Admin section.')
})

app.listen(port, () => {
  `Server is running on http://localhost:${port}`;
});
