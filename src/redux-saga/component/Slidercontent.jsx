import React, { useState } from 'react';

const Slidercontent = ({ name, icon }) => {
    const dropdownItems = ['sales', 'purchase', 'items'];
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dropdown state
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="slidercontent">
            {dropdownItems.includes(name) ? (
                <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                    <li 
                        onClick={toggleDropdown} 
                        className='d-flex align-self-center justify-content-between'
                    >
                        <a href="javascript:void(0);">{icon}{name}</a>
                        <i className={`fi fi-rs-angle-small-${isOpen ? 'down' : 'right'} align-self-end`}></i>
                    </li>
                    {isOpen && (
                        <ul className="dropdown-menu show">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    )}
                </div>
            ) : (
                <li>
                    <a href="javascript:void(0);"> {icon}{name}</a>
                </li>
            )}
        </div>
    );
};

export default Slidercontent;
