import React from "react";
import styled from "styled-components";
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

const Container = styled.div`
  border-radius: 5px;
  display: flex;
  width:100px;
  flex-direction: column;
  margin-left:10px;
  margin-right:5px;
  margin-top:10px;
`;
const IconPlaceholder = styled.div`
  font-size: 22px;
  border-radius:10px;
  padding: 5px 5px;
  display:flex;
  align-items:center;
  justify-content:center;
  height:65px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
  0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const IconName = styled.label`
margin-top: 0.5rem;
font-size: 0.7em;
overflow: hidden;
text-align:center;
user-select: all;
`;

export default class Icon extends React.Component {
   copyToClipboard=()=>{
    copy("import {"+this.props.name+"} "+"from 'react-icons/"+this.props.name.substring(0,2).toLowerCase()+"';");
    toast.success('Icon address copied into your clipboard.', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }
  render(){
    return (
      <Container onClick={e=>{
        this.copyToClipboard()
      }}>
        <IconPlaceholder>{typeof this.props.icon === "function" && this.props.icon()}</IconPlaceholder>
        <IconName>{this.props.name}</IconName>
      </Container>
    );
  }

}
