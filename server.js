import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

const BASE_URL = "http://192.145.237.160:5000";

app.use("/api", async (req, res) => {
  try {
    const url = `${BASE_URL}${req.url}`;

    const response = await fetch(url);
    const data = await response.text();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Proxy error" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
