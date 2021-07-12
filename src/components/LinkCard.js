import { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const RoundButton = styled.button`
    border-radius: 20px;
    border: none;
    box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);
    padding: 10px;rt
    transition: transform, 0.5s;
    transition: box-shadow, 0.5s;
    font-family: 'Avenir', Helvetica, sans-serif;
 
    &:hover {
        position: relative;
        box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.15);
        transform: translate(-3px, -3px);
    }
    
`

const TextBuffer = styled.div`
    padding: 15px
`

class LinkCard extends Component {
    render() {
        return <a href={this.props.link}>
            <RoundButton>
                <TextBuffer>
                    {this.props.children}
                </TextBuffer>
            </RoundButton>
        </a>
    }
}

export default LinkCard;

LinkCard.propTypes = {
    // color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    link: PropTypes.string.isRequired,
    // metrics_link: PropTypes.string.isRequired
};