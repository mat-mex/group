import styled from "styled-components";
import React from "react";
import SidebarButton from "./SidebarButton";

interface Props {
    offset: string;
}

const StyledSidebar = styled('div')<Props>`
    background: white;
    
    overflow-y: scroll;
    position: fixed;
    bottom: 0;
    top: 0;
    
    padding: 16px 16px 16px 0;
    min-width: 240px;
    max-height: 100%;
    
    
    @media only screen and (max-width: 600px) {
        top: calc(100% - ${(props) => props.offset});
        bottom: auto;
        width: 100%;
        
        box-shadow: 0 0 20px 0 #0006;

        transition: transform .5s, box-shadow .5s;
        
        :hover {
            transform: translateY(max(calc(32px - 100%), calc(32px - 100vh)));
            box-shadow: 0 0 20px 0 #0006, 0 0 0 5000px #0003;
        }
    }
`;


export default function Sidebar() {
    return (
        <StyledSidebar offset="32px">
            <div className="mobile-only">классный прогрессбар</div>
            <SidebarButton active={true} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
            <SidebarButton active={false} title="Курсы" className="collapse"/>
        </StyledSidebar>
    );
}