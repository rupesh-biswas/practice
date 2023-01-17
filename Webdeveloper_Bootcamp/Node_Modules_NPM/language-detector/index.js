// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { franc } from "franc";
const langs = require('langs');
const colors = require('colors');

const inputs = process.argv.slice(2)

for (let input of inputs) {
    let langCode = franc(input);
    if (langCode !== "und") {
        let lang_name = langs.where(3, langCode).name;
        console.log(`Our best guess is for ${input}: ${colors.green(lang_name)}`);
    }
    else {
        console.log(colors.red('Could not match a language. Please try again with a larger sample'));
    }
}