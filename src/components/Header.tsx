import React from 'react';
import { useHistory } from 'react-router-dom'

const Header = () => {
    const history = useHistory()
    return (
        <div className="header" onClick={() => history.push('/')}><div className="header-text">CATS GALLERY</div></div>
    )
}

export default Header;