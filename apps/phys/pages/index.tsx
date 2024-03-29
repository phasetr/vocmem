import {DataType, Main} from "@vocmem/ui";
import {Box, Link as MuiLink, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

export function Index() {
  const data: DataType[] = [
    {href: "/expr", primary: "鑑賞"},
    {href: "/quote", primary: "【作成中】物理学者の名言"},
    {
      href: "https://phasetr.com/archive",
      primary: "外部リンク：相転移プロダクション",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ]

  return (
    <Main>
      <Box component="h1">物理学ギャラリー</Box>
      <Box component="h2">方程式とともに</Box>
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
