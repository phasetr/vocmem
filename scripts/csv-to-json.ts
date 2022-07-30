import * as fs from 'fs';
import {createReadStream} from 'fs';
import {parse} from "csv-parse";

type RuWordData = {
  ru: string,
  en: string,
  roman: string
}

function csvToJson(csv: string, write: string) {
  const xa: string[] = fs.readFileSync(csv, 'utf8').trim().split('\n');
  const data: RuWordData[] = [];
  xa.shift();
  xa.forEach((s) => {
    const a = s.split(",");
    data.push({ru: a[0], en: a[1], roman: a[2]});
  })
  fs.writeFileSync(write, "export const memWords = " + JSON.stringify({data: data}).replace(/},/ig, "},\n"))
  return data;
}

type MathExprData = { title: string, expression: string, commentary: string };

function mathExprCsvToJson(csvFileName: string, writeFileName: string) {
  const data: MathExprData[] = [];
  createReadStream(csvFileName)
    .pipe(parse({delimiter: ",", from_line: 2}))
    .on("data", (row) => {
      data.push({title: row[1], expression: row[2], commentary: row[3]});
    })
    .on("end", () => {
      fs.writeFileSync(writeFileName, "export const physExprData = " + JSON.stringify({data: data}).replace(/},/ig, "},\n"));
    });
}

function main() {
  csvToJson("scripts/ru.csv", 'libs/data/src/data/ru.ts');
  mathExprCsvToJson("scripts/phys-exprs.csv", "libs/data/src/data/phys-exprs.ts");
}

main()
