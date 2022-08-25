import {Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import {DataType, Main} from "@vocmem/ui";

export function Index() {
  const data: DataType[] = [
    {href: "https://www.google.co.jp/maps", primary: "外部リンク：Google map"}
  ]

  return (
    <Main>
      <Box component="h1">社会</Box>
      {data.map(({href, primary}: DataType) => (
        <List key={href}>
          <Link href={href}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText primary={primary}/>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      ))}
    </Main>
  );
}

export default Index;
