const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});
client.set("visits", 0);

app.get("/", (req, res) => {
  process.exit(0); // 0 we are saying to exist. Any other number is considered failure
  client.get("visits", (err, visits) => {
    res.send("Number of visits is " + visits);
    client.set("visits", parseFloat(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 4001");
});
