import * as fs from 'fs';

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
  fs.writeFileSync(write, "export const ruData = " + JSON.stringify({data: data}))
  return data;
}

function ru() {
  csvToJson("scripts/ru.csv", 'apps/vocmem/data/ru/ru.ts');
}

ru()
