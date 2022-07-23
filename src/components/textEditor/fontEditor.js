import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";

export default function FontEditor(props) {
  const { stl, setStyle } = props;
  const style = stl;

  const selectWeight = (e) =>
    setStyle((prev) => ({
      ...prev,
      fontWeight: e.target.value,
    }));

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Font Weight</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stl.fontWeight}
          label="Age"
          onChange={selectWeight}
        >
          <MenuItem value={"lighter"}>light</MenuItem>
          <MenuItem value={"normal"}>normal</MenuItem>
          <MenuItem value={"bolder"}>bold</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
