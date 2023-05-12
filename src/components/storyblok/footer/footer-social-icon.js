import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLinkOutline,
} from "react-icons/io5";
import styled from "styled-components";

const icons = {
    facebook: IoLogoFacebook,
    instagram: IoLogoInstagram,
    default: IoLinkOutline,
};

const SocialIcon = styled((props) =>
    (icons[props.name.toLowerCase()] != null
        ? icons[props.name.toLowerCase()]
        : icons["default"])(props)
)`
    color: inherit;
    width: 100%;
    height: 100%;
`;

export default SocialIcon;
