import React, { Component } from "react";
import styled from "styled-components";
import { getIcons } from "../../utils/getIcons";
import { getIconById } from "../../utils/iconById";
import DisplayCodeSnippet from "../../reusable/display-code-snippet/DisplayCodeSnippet";
import Icon from "../../reusable/icons/Icon";
import loadable from "@loadable/component";
import IconsFlex from "../../reusable/icons/IconsFlex";
import { Scrollbars } from 'react-custom-scrollbars';
import BrowserLink from "../../reusable/browser-links/BrowserLink";
import Loading from "../../reusable/icons/Loading.jsx";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;
const Title = styled.h2`
  font-size: 2.2rem;
  margin:0;

`;


const Field = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const FieldTitle = styled.label`
  font-weight: bold;
`;
const SmallHeader = styled.label`
  pading: 10px 0px;
  font-size: 17px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export default class IconSetDisplay extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    this.setState({
      data: getIconById(this.props.match.params.id),
    });
  }

  render() {
    const { name, license, licenseUrl, id, projectUrl } = this.state.data;
    const IconSet = loadable.lib(() => getIcons(this.props.match.params.id));
    return (
      <Flex>
        <Title>{name}</Title>
        <Field>
          <FieldTitle>License</FieldTitle>
          <BrowserLink url={licenseUrl}>{license}</BrowserLink>
        </Field>
        <Field>
          <FieldTitle>Project</FieldTitle>
          <BrowserLink url={projectUrl}>{projectUrl}</BrowserLink>
        </Field>
        <SmallHeader>Import</SmallHeader>

        <DisplayCodeSnippet
          code={"import { IconName } from " + '"react-icons/' + id + '";'}
        />
        <SmallHeader>Icons</SmallHeader>

    <Scrollbars style={{ width:"100%", height:270 }}>
                <IconSet fallback={<Loading/>}>
                {({ default: icons }) => (
                  <IconsFlex>
                    {Object.keys(icons).map((name) => (
                      <Icon key={name} icon={icons[name]} name={name} />
                    ))}
                  </IconsFlex>
                )}
              </IconSet></Scrollbars>
        

      </Flex>
    );
  }
}
