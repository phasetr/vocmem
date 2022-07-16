import * as fs from 'fs';

type RuWordData = {
  id: number,
  ru: string,
  en: string
}

function csvToJson(csv: string, write: string) {
  const xa: string[] = fs.readFileSync(csv, 'utf8').trim().split('\n');
  const data: RuWordData[] = [];
  xa.shift();
  for (const s of xa) {
    const a = s.split(",");
    data.push({id: Number(a[0]), ru: a[1], en: a[2]});
  }
  fs.writeFileSync(write, "export const ruData = " + JSON.stringify({data: data}))
  return data;
}

function ru() {
  csvToJson("libs/data/src/csv/ru.csv",'libs/data/src/data/ru.ts');
}
ru()
