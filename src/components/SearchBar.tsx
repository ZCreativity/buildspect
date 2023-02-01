import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { CloseOutlined } from "@mui/icons-material";

type SearchBarProps = {
	value: string;
	setValue: (value: string) => void;
};

const SearchBar = ({ value, setValue }: SearchBarProps) => {
	return (
		<div style={{ margin: "2rem 0" }}>
			<TextField
				fullWidth
				placeholder="Search for a building..."
				variant="outlined"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							{!value ? (
								<SearchIcon sx={{ marginLeft: ".5rem" }} />
							) : (
								<IconButton onClick={() => setValue("")}>
									<CloseOutlined />
								</IconButton>
							)}
						</InputAdornment>
					),
				}}
				sx={{
					"& .MuiOutlinedInput-root": {
						border: "none",
						fontFamily: "Poppins",
						color: "black",
						fontSize: "1rem",
						padding: "0.5rem 1rem",
					},

					"& .MuiOutlinedInput-notchedOutline": {
						border: "none",
						borderRadius: 999,
						WebkitBoxShadow: "0px 0px 50px -20px rgba(0,0,0,0.63)",
						boxShadow: "0px 0px 50px -20px rgba(0,0,0,0.63)",
					},
				}}
			/>
		</div>
	);
};

export default SearchBar;
