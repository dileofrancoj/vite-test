import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CharacterName = styled(Card.Title)`
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size:14px
`;
