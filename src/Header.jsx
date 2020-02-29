import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { title, subTitle } = props;
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{title}</h1>
                <h2 className="header__subtitle">{subTitle}</h2>
            </div>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

Header.defaultProps = {
    title: 'Decide App',
    subTitle: 'Let the computer decide!',
};

export default Header;
