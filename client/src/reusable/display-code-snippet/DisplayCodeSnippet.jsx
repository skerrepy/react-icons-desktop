import React, { Component } from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import {IoMdClipboard} from 'react-icons/io'
import styled from "styled-components";
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 10px 10px;
  font-size:15px;
  border-radius:5px;
`;
 
const Line = styled.div`
  display: table-row;

`;
 
 
const LineContent = styled.span`
  display: table-cell;
  padding: 5px 5px;

`;
const CopyButton=styled.button`
    background:none;
    outline:none;
    border:none;
    color:white;
    padding:5px 5px;
    &:hover{
        cursor:pointer;
    }
`
export default class DisplayCodeSnippet extends Component {
    copyCodeToClipboard=(code)=>{
        copy(code)
        toast.success('Code snippet copied into your clipboard.', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    render() {
        return (
            <React.Fragment>
                {this.props.code&&
                    <Highlight {...defaultProps} theme={theme} code={this.props.code.trim()} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                          <Line key={i} {...getLineProps({ line, key: i })}>
                                                          <CopyButton onClick={e=>this.copyCodeToClipboard(this.props.code)}><IoMdClipboard/></CopyButton>

                            <LineContent>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                              ))}
                            </LineContent>
                          </Line>
                        ))}
                      </Pre>
                    )}
                  </Highlight>
                }
            
            </React.Fragment>

        )
    }
}
