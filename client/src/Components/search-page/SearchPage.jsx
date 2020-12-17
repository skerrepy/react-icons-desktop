import React, { Component } from "react";
import styled from "styled-components";
import Search from "./components/Search";
import { ALL_ICONS } from "../../utils/iconById";
import SearchIconSet from "./components/SearchIconSet";
import IconsFlex from "../../reusable/icons/IconsFlex";
import { Scrollbars } from 'react-custom-scrollbars';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Header1 = styled.h1`
  text-align: center;
`;
export default class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: "",
      allIcons:[]
    };
  }
  componentDidMount() {
    this.setState({
      allIcons:ALL_ICONS
    })
  }
  render() {
    let { searchValue } = this.state;
    return (
      <Container>
        <Header1>Search</Header1>
        <Search
          onChange={(e) => {
            this.setState({
              searchValue: e.target.value,
            });
          }}
        />
        <hr />
        <Scrollbars style={{ width:"95%", height:400 }}>
        <IconsFlex>

        {this.state.searchValue.length>2&&this.state.allIcons.map(i=>{
            return <SearchIconSet key={i.id} icon={i} query={searchValue} />
        })}
        </IconsFlex>
       </Scrollbars>
      </Container>
    );
  }
}
