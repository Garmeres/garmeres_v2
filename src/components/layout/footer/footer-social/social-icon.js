import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLinkOutline,
} from "react-icons/io5";

const icons = {
    facebook: IoLogoFacebook,
    instagram: IoLogoInstagram,
    default: IoLinkOutline,
};

const SocialIcon = (props) =>
    (icons[props.name.toLowerCase()] != null
        ? icons[props.name.toLowerCase()]
        : icons["default"])(props);

export default SocialIcon;
