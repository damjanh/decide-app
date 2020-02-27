import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default Header;
