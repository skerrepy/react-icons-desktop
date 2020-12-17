import React, { Component } from 'react'
import styled from 'styled-components';

const { shell } = window.require('electron');
const Linkify=styled.div`
color: #1987d3;
text-decoration: none;
padding: 0px 10px;
margin: 0px;
&:hover {
cursor:pointer;
  text-decoration: underline;
}
`
export default class BrowserLink extends Component {
    openLink = (link) => {
        shell.openExternal(link);   // Here I utilize the feature. 
      }
    render() {
        return (
            <Linkify onClick={e=>{
                this.openLink(this.props.url)
            }} >
                {this.props.children}
            </Linkify>
        )
    }
}
