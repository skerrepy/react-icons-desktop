import React, { Component } from 'react'
import styled from 'styled-components'
import {FiGithub} from 'react-icons/fi';
import BrowserLink from '../../reusable/browser-links/BrowserLink';
const Card=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:10px;
    margin-bottom:10px;
    justify-content:center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
    width:300px;
    padding:10px 10px;
    transition:0.3s;
    border-radius:3px;
    &:hover{
        border-radius:5px;
        background:#E3E5E8;
    }
    `
const Flex=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const IconContainer=styled.div`
    font-size:30px;
`
const Title=styled.h3`

`

export default class GithubPage extends Component {
    render() {
        return (
            <Flex>
                <Card>
                    <IconContainer>
                    <FiGithub/>
                    </IconContainer>
                    <Title>
                            React Icons
                    </Title>
                    <BrowserLink url="https://github.com/react-icons/react-icons">
                    Github Link
                    </BrowserLink>
                    <BrowserLink url="https://react-icons.github.io/react-icons/">
                        Preview React Icons
                    </BrowserLink>
                </Card>
                <Card>
                    <IconContainer>
                    <FiGithub/>
                    </IconContainer>
                    <Title>
                            React Icons Desktop V1.0.0
                    </Title>
                    <BrowserLink url="https://github.com/skerrepy/react-icons-desktop">
                    Github Link
                    </BrowserLink>
                </Card>
            </Flex>
        )
    }
}
