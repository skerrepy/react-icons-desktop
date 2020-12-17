import React, { Component } from 'react'
import styled from 'styled-components'
const Flex=styled.div`
    display:flex;
    flex-direction:column;
`
export default class Layout extends Component {
    render() {
        return (
            <Flex>
                {this.props.children}
            </Flex>
        )
    }
}
