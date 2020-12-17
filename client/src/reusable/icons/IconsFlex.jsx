import React, { Component } from 'react'
import styled from 'styled-components'
const Flex=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:100%;
`
export default class IconsFlex extends Component {
    render() {
        return (
            <Flex>
                {this.props.children}
            </Flex>
        )
    }
}
