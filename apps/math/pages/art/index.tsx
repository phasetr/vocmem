import {DataType, Main} from "@vocmem/ui";
import {Box, Link as MuiLink, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

export function Index() {
  const data: DataType[] = [
    {href: "art/sample", primary: "サンプル"}
    , {href: "art/log-spiral-recur-polygon", primary: "対数ら線"}
  ]

  return (
    <Main>
      <Box component="h1">p5.js</Box>
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
