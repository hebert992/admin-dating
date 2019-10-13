import React from 'react';
import PropTypes from 'prop-types'


const Header = ({titulo}) =>  (
        <div>
            <h1 className="text-center">{titulo}</h1>
        </div>
    );

Header.prototype={
    titulo: PropTypes.string.isRequired
}

export default Header;