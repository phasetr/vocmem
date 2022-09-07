import {DataType, Main} from "@vocmem/ui";
import {Box, Link as MuiLink, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

export function Index() {
  const data: DataType[] = [
    {
      href: "https://phasetr.com/archive",
      primary: "外部リンク：相転移プロダクション",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      href: "art/sample",
      primary: "ジェネラティブアート：サンプル"
    }
  ]

  return (
    <Main>
      <Box component="h1">数学ギャラリー</Box>
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
