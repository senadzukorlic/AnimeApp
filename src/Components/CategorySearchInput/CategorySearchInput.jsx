// Components/CategorySelector/CategorySelector.jsx
import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";

const genres = [
  "adventure",
  "action",
  "fantasy",
  "crime",
  "drama",
  "romance",
  "supernatural",
  "magic",
  "horror",
];

const WhiteSelect = styled(Select)({
  "& .MuiSelect-icon": {
    color: "white",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
});

export default function CategorySelector({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <FormControl
      fullWidth
      variant="outlined"
      margin="normal"
      style={{ border: "2px solid gray", borderRadius: "5px", color: "white" }}
    >
      <InputLabel id="category-label" style={{ color: "white" }}>
        Choose a genre
      </InputLabel>
      <WhiteSelect
        labelId="category-label"
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        label="Choose a genre"
        style={{ border: "none", color: "white" }}
      >
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre} style={{}}>
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </MenuItem>
        ))}
      </WhiteSelect>
    </FormControl>
  );
}
