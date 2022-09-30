import fs from 'fs';
import chalk from 'chalk';

function treatError(err) {
    throw new Error(chalk.red(err.code, 'não há arquivo'));
}

function getFile(path) {
    const encoding = 'utf-8';
    fs.readFile(path, encoding, (err, text) => {
        if (err) {
            treatError(err);
        }
        console.log(chalk.green(text))
    })
}

getFile('./arquivos/');


console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);