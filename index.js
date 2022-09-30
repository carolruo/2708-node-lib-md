import fs from 'fs';
import chalk from 'chalk';

function getFile(path) {
    const encoding = 'utf-8';
    fs.readFile(path, encoding, (_, text) => {
        console.log(chalk.green(text))
    })
}

getFile('./arquivos/texto.md');


console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);