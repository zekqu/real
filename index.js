/*
NOTE: THIS IS NOT THE SOURCE CODE

This redirects to the main servers so all the players are on the same servers.

If you want access to the old source code email me at futurethepear@gmail.com or message me on discord: @Future#6507

Join the discord server: https://discord.gg/9UtQHeEy73 

*/


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.redirect("https://erth2.party/?referrer=replit");
});
app.listen(3000, () => { });
