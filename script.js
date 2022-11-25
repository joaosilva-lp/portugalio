const puppeteer = require('puppeteer');
const fs = require('fs');
const open = require('open');
const url = "https://www.portugalio.com/canalizadores/coimbra/"; // colar o link entre aspas


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const name = await page.$$eval('.list-item-container > p', as => as.map(p => p.innerText));
  console.log(name);
  const data = `${name}\n`;
  fs.appendFile('saida.txt', data, (err) => {
  if (err) throw err;
  console.log('Ficheiro escrito');
});
  console.log(data)
  await open('C:\\Users\\joaosilva\\Desktop\\our\\saida.txt', {app: {name: 'firefox', arguments: ['--incognito']}}); //escrever o caminho para o ficheiro saida.txt entre aspas
  await browser.close()
})();
