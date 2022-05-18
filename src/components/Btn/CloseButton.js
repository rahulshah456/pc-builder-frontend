import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { blackColor, whiteColor } from "../../core/color";

const StyledCloseButton = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.5rem;
    cursor: pointer;
`;


export const CloseButton = () => {

    const darkThemeEnabled = useSelector((state) => state.global.darkThemeEnabled);
    const color = darkThemeEnabled ? whiteColor : blackColor;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}>
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
        </svg>
    );
}

export const RemoveButton = (props) => {
    const darkThemeEnabled = useSelector((state) => state.global.darkThemeEnabled);
    const color = darkThemeEnabled ? whiteColor : blackColor;

    return (
        <StyledCloseButton onClick={props.onClickEvent}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={color}>
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>
        </StyledCloseButton>
    );
}