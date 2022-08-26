import {Box, Link as MuiLink, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import {DataType, Main} from "@vocmem/ui";
import Link from "next/link";

export function Index() {
  const data: DataType[] = [
    {href: "https://www.google.co.jp/maps", primary: "外部リンク：Google map", target: "_blank", rel: "noopener noreferrer"}
  ]

  return (
    <Main>
      <Box component="h1">社会</Box>
      {data.map((props: DataType) => (
        <List key={props.href}>
          <Link {...props} passHref>
            <MuiLink {...props}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <BookIcon/>
                  </ListItemIcon>
                  <ListItemText primary={props.primary}/>
                </ListItemButton>
              </ListItem>
            </MuiLink>
          </Link>
        </List>
      ))}
    </Main>
  );
}

export default Index;
