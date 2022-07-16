import {Autocomplete, TextField} from "@mui/material";
import {marginPx, maxWidth} from "@vocmem/data";

export function SelectBlock({allBlocks, handleSelect}){
  return <Autocomplete
    disablePortal
    id="block"
    options={allBlocks}
    onChange={handleSelect}
    sx={{maxWidth: maxWidth, width: "full", margin: marginPx}}
    defaultValue={1}
    getOptionLabel={(option) => option.toString()}
    renderInput={(params) => <TextField {...params} label="ブロック指定"/>}
  />
}
export default SelectBlock;
