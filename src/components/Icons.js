import styled from "styled-components";
import { textThemeColor } from "../core/color";

const StyledAddIcon = styled.svg`
    width: 4rem;
    height: 4rem;
    align-self: center;
    fill: ${textThemeColor};
`;

export function AddIcon() {
    return (
        <StyledAddIcon xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 
                    1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"/>
        </StyledAddIcon>
    );
}