import {Box, Link as MuiLink, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";
import Main from "../components/main";

const languages = [{to: "ru", text: "ロシア語単語"}];

export function Index() {
  return (
    <Main>
      <Box component="h1">単語学習アプリ</Box>
      <Box component={List}>
        {languages.map(({to, text}) => (
          <Link href={to} key={to} passHref>
            <MuiLink href={to} key={to}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon><BookIcon/></ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>
            </MuiLink>
          </Link>
        ))}
      </Box>
    </Main>
  );
}

export default Index;
