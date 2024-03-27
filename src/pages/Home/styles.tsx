import React from 'react';
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";
import { IAutocompleteParams } from "./props";
import { SearchOutlined } from '@mui/icons-material';

export const SearchAutocomplete = styled(Autocomplete).attrs({
  freeSolo: true,
  disableClearable: true,
  sx: { 
    width: { md: '30rem', xs: '80vw' }, 
    marginX: '1rem',
    marginY: '1rem',
  }
})``

export const SearchContainer = styled(Box).attrs({
  sx: {
    display: 'flex', 
    flexDirection: { md: 'row', xs: 'column' }, 
    alignItems: { md: 'center' },
    justifyContent: { md: 'flex-start' },
  }
})``

export const SearchInput = styled(TextField).attrs<IAutocompleteParams>(({params}) => ({
  ...params,
  InputProps:{
    ...params.InputProps,
    type: 'search',
    startAdornment: (
      <InputAdornment position="start">
        <SearchOutlined />
      </InputAdornment>
    ),
  }
}))<IAutocompleteParams>``

export const ContentContainer = styled(Box).attrs({
  sx: { 
    my: 4, 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})``
