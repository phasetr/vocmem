import {Box, Link as MuiLink, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

const languages = [{to: "ru", text: "ロシア語"}];

export function Index() {
  return (
    <>
      <Box component="h1">単語暗記</Box>
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
    </>
  );
}

export default Index;
