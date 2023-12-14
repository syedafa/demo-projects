const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.put("/update-json", (req, res) => {
  const data = req.body;
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
  res.send("JSON file updated successfully");
});
app.post("/create-question", async (req, res) => {
  // const data = await JSON.stringify(req.body);
  const data1 = req.body;

  // console.log(data);
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      // console.log(err);
      return;
    }
    // console.log(data);
    const dat = JSON.parse(data);

    dat.push(data1);
    // console.log(dat);
    const jsonData = JSON.stringify(dat, null, 2);
    fs.writeFile("data.json", jsonData, (error) => {
      if (error) {
        console.log("An error has occurred ", error);
        return;
      }
      console.log("Data written successfully to disk");
    });
  });

  res.json(data1);
});

app.get("/qna", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const dat = JSON.parse(data);
    res.send(dat);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
