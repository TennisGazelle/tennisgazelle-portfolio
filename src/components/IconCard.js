/* eslint-disable react/prop-types */
import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SvgTile = styled.button`
    // background-color: white;
    border-radius: 20px;
    border: none;
    // drop-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    padding: 10px;
    transition: transform, 0.5s;
    transition: box-shadow, 0.5s;
 
    &:hover {
        position: relative;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.25);
        transform: translate(-3px, -3px);
    }
    
    & > * {
        drop-shadow: 100px
    }
`;

let Icons = {};

// Icons['github'] = require('../icons/Github').default;
// Icons['facebook'] = require('../icons/Facebook').default;

const reportClickingOnLink = (link) => {
    console.log(`clicked on ${link}`);
};

class IconCard extends Component {
    // onClick() {
        
    // }

    render() {
        return <a href={this.props.link}>
            <SvgTile onClick={reportClickingOnLink(this.props.link)}>
                {this.props.children}
            </SvgTile>
        </a>;
    }
}

export default IconCard;

IconCard.propTypes = {
    // color: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    // metrics_link: PropTypes.string.isRequired
};

export {
    Icons
};

