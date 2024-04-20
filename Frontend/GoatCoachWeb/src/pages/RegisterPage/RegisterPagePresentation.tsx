import {
  Button,
  OutlinedInput,
  InputLabel,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { memo } from "react";
import { TranslucidContainer } from "../../components/TranslucidContainer";
import FormControl from '@mui/material/FormControl';

import BackgroundImage from "../../assets/loginBackground.jpg";
import { Link } from "react-router-dom";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const RegisterPagePresentation = memo(() => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <BackgroundContainer BackgroundImage={BackgroundImage}>
      <TranslucidContainer>
        <Typography className="title">Register</Typography>
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          type="password"
          variant="standard"
        />
        <TextField id="standard-basic" label="Team Name" variant="standard" />

        <FormControl>
          <InputLabel id="sports-label">Sports</InputLabel>
          <Select
            labelId="sports-label"
            id="multiple-checkbox-sports"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Sports" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Typography>
          Already have an Account? <Link to="/login">Login</Link>
        </Typography>
        <Button variant="contained">Register</Button>
      </TranslucidContainer>
    </BackgroundContainer>
  );
});
