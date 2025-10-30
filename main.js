import express from "express";


const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
      res.json({msg: "Hello students!"});
});


app.listen(PORT, ()=> {
    console.log(`The server is running at http://localhost:${PORT}`);
});
