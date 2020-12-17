import React from 'react'
import styled from 'styled-components'
import {FiSearch} from 'react-icons/fi'

const Container=styled.div`
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
`
const Input=styled.input`
    outline:none;
    font-size:20px;
    border:none;
    background:#f5f5f5;
    border-radius:5px 5px 0px 0px;

    padding:10px 8px;
`
const SearchInput=styled.div`
    display:flex;
    align-items:center;
    height:100%;
    background:#f5f5f5;
    justify-content:center;
    border-radius:5px ;

`
const IconContainer=styled.div`
    height:100%;
    padding:10px 5px;
    border-radius:0px 5px 0px 5px;
    font-size:20px;

`
export default function Search({...props}) {
    return (
        <Container>
            <SearchInput>
            <Input {...props}/>
           <IconContainer>
           <FiSearch/>
               </IconContainer>
            </SearchInput>
        </Container>
    )
}
