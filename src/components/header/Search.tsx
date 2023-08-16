import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SeachIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  margin-left: 10px;
  background: #fff;
  width: 38%;
  border-radius: 2px;
  display: flex;
`;

const InputSearchbase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

export default function Search() {
  return (
    <SearchContainer>
      <InputSearchbase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SeachIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}
