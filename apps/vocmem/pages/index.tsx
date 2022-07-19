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
import Main from "../components/main";
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
    lang: "English", data: [
      {to: "en/expr", text: "英語表現"}
    ]
  },
  {
    lang: "Russian", data: [
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
      <Box component="h1">単語学習アプリ</Box>
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
                  <List key="to">
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
