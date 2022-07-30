import {Main} from "@vocmem/ui";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

export function Index() {
  return (
    <Main>
      <Box component="h1">物理学ギャラリー</Box>
      <Box component="h2">方程式とともに</Box>
      <List>
        <Link href="/expr">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <BookIcon/>
              </ListItemIcon>
              <ListItemText primary="鑑賞"/>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Main>
  );
}

export default Index;
