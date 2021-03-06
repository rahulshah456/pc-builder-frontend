import styled from "styled-components";
import { rigHoverThemeColor } from "../../../core/color";
import Thumbnail from "../../home/components/Thumbnail";
import ThumbnailComponent from "./ThumbnailComponent";
import { componentsActions } from "../../../store/slices/components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatLocaleCurrency, getComponentThumbnail } from "../../../core/utils";

const StyledSelectionComponent = styled.div`
    border: 0.5px solid ${rigHoverThemeColor};
    width: 250px;
    height: 80px;
    border-radius: 0.5rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    transition: 250ms ease-in;
    cursor: pointer;

    p {
        margin: 0;
        padding: 0;
        font-family: 'Product Sans Light';
        font-weight: 300;
    }

    &:hover {
        background-color: ${rigHoverThemeColor};
    }
`;

const StyledSelectionDesc = styled.div`
    margin: 0;
    padding: 0;

    h3 {
        margin: 0;
        padding: 0;
        font-family: 'Product Sans Black';
    }
`;


const SelectionComponent = (props) => {

    const dispatch = useDispatch();
    const component = props.data;
    const imageUrl = getComponentThumbnail(component.image);
    const navigate = useNavigate();


    return (
        <StyledSelectionComponent onClick={() => {
            dispatch(componentsActions.updateSelection({ component: component, type: props.type }));
            navigate(-1);
        }}>
            <ThumbnailComponent url={imageUrl} />
            <StyledSelectionDesc>
                <h3>{component.name}</h3>
                <p>&#8377;{formatLocaleCurrency(Math.round(component.price))}</p>
            </StyledSelectionDesc>
        </StyledSelectionComponent>
    );
}

export default SelectionComponent;