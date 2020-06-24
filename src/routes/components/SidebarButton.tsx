import styled from "styled-components";
import React from "react";


const Menu = styled('div')<Props>`
    background: ${(props) => props.active ? "#fcc": "transparent"};
    color: ${(props) => props.active ? "#c00" : "#333"};
    
    height: 40px;
    padding-left: 16px;
    border-radius: 0 20px 20px 0;
    
    font-family: 'Roboto Medium',serif;
    line-height: 42px;
    font-size: 14px;
    
    
    :hover {
      background: ${(props) => props.active ? "#fcc" : "#eee"};
    }
`;


interface Props {
    active: boolean,
    title: string,
    className: string,
}

export default function SidebarButton(props: Props) {
    return (
        <Menu {...props}><span>{props.title}</span></Menu>
    );
}