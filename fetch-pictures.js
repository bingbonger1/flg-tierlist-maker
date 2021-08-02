const fs = require('fs');
const fetch = require('node-fetch');
const characters = require("./src/assets/characters.json")

const baseurl = "https://static.f-list.net/images/avatar/"

async function download(name) {
  const response = await fetch(baseurl+name.toLowerCase()+".png");
  const buffer = await response.buffer();
  fs.writeFile('./src/assets/avatars/'+name+'.png', buffer, () => 
    console.log('Fetched avatar for '+name+'!'));
}

characters.forEach(character => download(character));