import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {FiList,FiGithub,FiSearch} from 'react-icons/fi'
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-bottom:10px;
`;
const Navs = styled.div`
  display: flex;
  background-color: #e3e5e8;
  border-radius:0px 0px 10px 10px;

`;
const NavItem = styled(Link)`
  color: black;
  text-decoration: none;
  font-size:23px;
  height:100%;
  padding: 5px 5px;
  transition:0.3s;
  border-radius:0px 0px 10px 10px;
  &:nth-child(1){
    border-radius:0px 0px 5px 5px;
  }
  &:nth-child(3){
    border-radius:0px 0px 5px 5px;
  }
  &:hover{
      background:#E82F6E;
      color:white;
  }
`;
export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Navs>
        <NavItem to="/"><FiSearch/></NavItem>

          <NavItem to="/icons/sets"><FiList/></NavItem>

          <NavItem to="/github"><FiGithub/></NavItem>
        </Navs>
      </Container>
    );
  }
}
