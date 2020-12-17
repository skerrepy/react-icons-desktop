import React, { Component } from 'react'
import styled from 'styled-components'
import { ALL_ICONS } from '../../utils/iconById'
import IconSet from './components/IconSet';
import { Scrollbars } from 'react-custom-scrollbars';

const Flex=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:10px;
`
export default class IconSets extends Component {
    constructor(){
        super();
        this.state={
            iconSets:[]
        }
    }

    componentDidMount(){
        this.setState({
            iconSets:ALL_ICONS
        })
    }
    render() {
        const {iconSets}=this.state
        return (
            <Scrollbars style={{height:'540px',width:'100%'}}>
            <Flex>
                {iconSets.map(i=>{
                    return <IconSet key={i.id} id={i.id} title={i.name}/>
                })}
            </Flex>
            </Scrollbars>

        )
    }
}
