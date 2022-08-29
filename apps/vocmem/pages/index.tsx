import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";
import {Main} from "@vocmem/ui";
import {SyntheticEvent, useState} from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

type DataType = {
  to: string,
  text: string
}
type LangType = {
  lang: string,
  data: DataType[]
}

const languages: LangType[] = [
  {
    lang: "Misc", data: [
      {to: "misc/search", text: "一括検索"},
      {to: "https://www.google.com/inputtools/try/", text: "外部リンク：Google入力ツール"},
      {
        to: "https://docs.google.com/spreadsheets/d/1aL3mw_I4_sSdnW7LarP_3BwlpR9lc5Fub9QA8XIVV6M/edit#gid=92137165",
        text: "外部リンク：Google翻訳による簡易多言語翻訳"
      },
      {to: "https://phasetr.com/archive/fc/lang", text: "外部リンク：phasetr.com 語学情報"}
    ]
  },
  {
    lang: "英語", data: [
      {to: "en/expr", text: "英語表現"}
    ]
  },
  {
    lang: "ロシア語", data: [
      {to: "ru/comp-table", text: "文字対照表"},
      {to: "ru/conv", text: "文字変換ツール"},
      {to: "ru/mem-words", text: "ロシア語単語"}
    ]
  }
];

export function Index() {
  const [expanded, setExpanded] = useState<string | false>(false);

  function handleChange(panel: string) {
    return (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    }
  }

  return (
    <Main>
      <Box component="h1">語学学習アプリ</Box>
      {languages.map(({lang, data}: LangType) => {
        return (
          <Accordion key={lang} expanded={expanded === lang} onChange={handleChange(lang)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>{lang}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.map(({to, text}: DataType) => {
                return (
                  <List key={to}>
                    <Link href={to}>
                      <ListItem>
                        <ListItemButton>
                          <ListItemIcon>
                            <BookIcon/>
                          </ListItemIcon>
                          <ListItemText primary={text}/>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </List>);
              })}
            </AccordionDetails>
          </Accordion>);
      })}
    </Main>
  );
}

export default Index;
