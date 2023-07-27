import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type SearchProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
};

export default function Search({
  searchValue,
  setSearchValue,
  sort,
  setSort,
}: SearchProps) {
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  return (
    <Box className="search_container">
      <div className="search_icon">
        <SearchOutlinedIcon fontSize="large" />
      </div>
      <TextField
        hiddenLabel
        value={searchValue}
        onChange={onChangeHandler}
        placeholder="search products..."
        variant="outlined"
        sx={{
          width: "20rem",
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
      <Box
        sx={{
          minWidth: 120,
          marginLeft: "15px",
        }}
      >
        <FormControl
          fullWidth
          sx={{
            "& .MuiInputLabel-root": {
              color: "black",
              "&.Mui-focused": {
                color: "black",
              },
            },
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
        >
          <InputLabel>Sort</InputLabel>
          <Select value={sort} label="Sort" onChange={handleChange}>
            <MenuItem value={"A-Z"}>A-Z</MenuItem>
            <MenuItem value={"Z-A"}>Z-A</MenuItem>
            <MenuItem value={"Price Down"}>Price Down</MenuItem>
            <MenuItem value={"Price Up"}>Price Up</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
