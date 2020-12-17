import React, { Component } from 'react'
import styled from 'styled-components';
import {VscChromeClose,VscChromeMinimize} from 'react-icons/vsc'
import BrandLogo from '../../../reusable/brand/logo/BrandLogo';
const { remote } = window.require("electron")

const Bar=styled.div`
-webkit-app-region: drag;
height: 50px; 
background-color: #E3E5E8;
padding: none;
margin: 0px; 
display:flex;

`
const Buttons=styled.div`
    display:flex;
    margin-left:auto;
`
const Button=styled.button`
    height:100%;
    padding:10px 10px;
    background:none;
    border:none;
    font-size:20px;
    -webkit-app-region: no-drag;
    transition:0.3s;
    outline:none;
    &:hover {
        background:${props=>props.bgc};
        cursor:pointer;
    }
`
export default class WindowFrame extends Component {
    minimizeWindow=()=>{
        remote.getCurrentWindow().minimize();
    }
    closeWindow=()=>{
        remote.getCurrentWindow().close();

    }
    render() {
        return (
            <Bar>
                <BrandLogo/>
                <Buttons>
                <Button onClick={e=>{
                    this.minimizeWindow()
                }} bgc="#FFF44F"><VscChromeMinimize /></Button>
                    <Button onClick={e=>{
                    this.closeWindow()
                }} bgc="#D73D42"><VscChromeClose/></Button>
                </Buttons>
            </Bar>
        )
    }
}
