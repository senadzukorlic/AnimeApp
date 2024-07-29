import React from "react"
import Paper from "@mui/material/Paper"
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import "./input.css"
function SearchInput({ valueProp, onChangeProp }) {
  return (
    <div className="searchContainer">
      <Paper
        component="form"
        sx={{
          backgroundColor: "rgb(52, 51, 56)",
          p: "2px 2px",
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 56,
          marginTop: "-57px",
          border: "1px solid gray",
          borderRadius: "4px",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          style={{ color: "white", boxShadow: "none", marginBottom: "-5px" }}
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          style={{ color: "white" }}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Anime"
          inputProps={{ "aria-label": "Search Anime" }}
          value={valueProp}
          onChange={onChangeProp}
        />
      </Paper>
    </div>
  )
}

export default SearchInput
