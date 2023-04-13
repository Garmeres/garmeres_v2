import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const H1 = styled.h1``;
const P = styled.p``;
const CallToAction = styled((props) => <Link {...props} />)``;

const resolvers = {
    featured_title: (props) => <H1>{props.featuredComponent.text}</H1>,
    featured_text: (props) => <P>{props.featuredComponent.text}</P>,
    call_to_action: (props) => (
        <CallToAction to="/">{props.featuredComponent.text}</CallToAction>
    ),
    default: () => null,
};

export const DynamicFeaturedComponent = (props) =>
    props.featuredComponent.component != null &&
    resolvers[props.featuredComponent.component] != null
        ? resolvers[props.featuredComponent.component](props)
        : resolvers.default(props);
