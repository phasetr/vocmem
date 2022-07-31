import {Main} from "@vocmem/ui";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import Link from "next/link";

type DataType = { href: string, primary: string };
const data: DataType[] = [
  {href: "/expr", primary: "鑑賞"},
  {href: "/quote", primary: "【作成中】物理学者の名言"},
  {href: "https://phasetr.com/archive", primary: "外部リンク：相転移プロダクション"}
]

export function Index() {
  return (
    <Main>
      <Box component="h1">物理学ギャラリー</Box>
      <Box component="h2">方程式とともに</Box>
      <List>
        {data.map(({href, primary}: DataType) => (
          <Link href={href} key={href}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <BookIcon/>
                </ListItemIcon>
                <ListItemText primary={primary}/>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Main>
  );
}

export default Index;
