import { useState } from "react";

import { TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("search products ...");

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function onClickHandler() {
    if (searchValue === "search products ...") {
      setSearchValue("");
    }
  }

  function onBlurHandler() {
    if (searchValue === searchValue) {
      setSearchValue("search products ...");
    }
  }

  return (
    <div className="search_container">
      <SearchOutlinedIcon fontSize="large" />
      <TextField
        hiddenLabel
        value={searchValue}
        onChange={onChangeHandler}
        onClick={onClickHandler}
        onBlur={onBlurHandler}
        fullWidth
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "inherit",
              borderWidth: 1,
            },
            "&.Mui-focused fieldset": {
              borderColor: "inherit",
              borderWidth: 1,
            },
          },
        }}
      />
    </div>
  );
}
