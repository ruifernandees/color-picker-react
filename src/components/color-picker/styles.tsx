import { Link } from "@mui/icons-material";
import styled from "styled-components";

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 1.6rem;
`


export const ColorGroup = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColorOption = styled.div<{color: string}>`
  width: 3.2rem;
  height: 3.2rem;
  background-color: ${({color}) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MainContainer = styled.div``;

export const LinkIcon = styled(Link)`
  margin-left: 1.6rem;
  cursor: pointer;
`;