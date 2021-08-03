const fs = require('fs');
const fetch = require('node-fetch');
const characters = require("./src/assets/characters.json")
var dir = './src/assets/avatars';
const baseurl = "https://static.f-list.net/images/avatar/"

async function download(name) {
  const response = await fetch(baseurl+name.toLowerCase()+".png");
  const buffer = await response.buffer();
  
  fs.writeFile(dir+'/'+name+'.png', buffer, () => 
    console.log('Fetched avatar for '+name+'!'));
}


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}
characters.forEach(character => download(character));