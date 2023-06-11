import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

type TLangResource = {
    default: {
        ns: string;
        locale: string;
    };
    ns: string[];
    locales: string[];
    resources: any;
};

const config: TLangResource = {
    default: {
        ns: 'core',
        locale: 'en',
    },
    ns: [],
    locales: [],
    resources: {},
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const locales_path = path.join(__dirname, '..', 'src/locales');

// Create translation file
fs.writeFileSync(path.join(locales_path, 'index.ts'), '', 'utf-8');

// Available locales
config.locales = fs.readdirSync(path.join(locales_path), { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

// Available namespaces
config.ns = fs.readdirSync(path.join(locales_path, config.default.locale)).map((file) => file.split('.')[0]);

// Add resources
for (const locale_key in config.locales) {
    const locale = config.locales[locale_key];
    config.resources[locale] = {};

    for (const ns_key in config.ns) {
        const ns = config.ns[ns_key];
        const file_path = path.join(locales_path, locale, `${ns}.json`);
        const file_exist = fs.existsSync(file_path);
        let resource = {};
        if (file_exist && fs.readFileSync(file_path, 'utf8') !== '') {
            resource = JSON.parse(fs.readFileSync(file_path, 'utf8'));
        } else if (file_exist && fs.readFileSync(file_path, 'utf8') === '') {
            console.log();
            console.log(chalk.red(`This file in ${locale.toUpperCase()} locale is empty: ${ns}.json`));
            fs.writeFileSync(file_path, JSON.stringify(resource), 'utf-8');
            console.log(chalk.green('Empty object added to file!'));
            console.log(chalk.blue('File path: ', `src/locales/${locale}/${ns}.json`));
            console.log();
        } else {
            console.log();
            console.log(chalk.red(`This NAMESPACE is missed in ${locale.toUpperCase()} locale: ${ns}`));
            fs.writeFileSync(file_path, JSON.stringify(resource), 'utf-8');
            console.log(chalk.green(`The empty file for ${ns.toUpperCase()} namespace is created`));
            console.log(chalk.blue('File path: ', `src/locales/${locale}/${ns}.json`));
            console.log();
        }
        config.resources[locale][ns] = resource;
    }
}

const file_content = `
const config = ${JSON.stringify(config, null, 4)};

export default config;
`;

fs.writeFileSync(path.join(locales_path, 'index.ts'), file_content, 'utf-8');

