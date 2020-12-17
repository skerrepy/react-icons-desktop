import React, { Component } from "react";
import styled,{keyframes} from "styled-components";
import { Link } from "react-router-dom";
const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  width:80%;
  border-radius:5px;
  padding:10px 10px; 
  background:#f5f5f5;
  margin-bottom:5px;
  transition:0.3s;
  height:30px;
  background-size: 100% 200%;
  background-image: linear-gradient(to bottom, #f5f5f5 50%, #E82F6E 50%);
  transition: background-position 1s;
      &:hover{
      background-position: 0 -100%;
      color:white;

  }
`;
const Title = styled.div``;
export default class IconSet extends Component {
  render() {
    return (
      <Card to={`/icons/sets/${this.props.id}`}>
        <Title>{this.props.title}</Title>
      </Card>
    );
  }
}
