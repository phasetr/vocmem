import {Card, CardContent, List, ListItem, Typography} from "@mui/material";
import {EnExprData, ExprExample, marginPx} from "@vocmem/data";
import TranslateIcon from '@mui/icons-material/Translate';
import {Fragment} from "react";

export function Expression({expr, translation, examples}: EnExprData) {
  return (
    <Card sx={{width: "auto", margin: marginPx}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>{expr}</Typography>
        <Typography variant="h5" component="div">{translation}</Typography>
        <List>
          {examples.map(({orig, ja}: ExprExample, i: number) => {
            return (
              <Fragment key={i}>
                <ListItem>{orig}</ListItem>
                <ListItem><TranslateIcon/>{ja}</ListItem>
              </Fragment>);
          })}
        </List>
      </CardContent>
    </Card>)
}

export default Expression;
