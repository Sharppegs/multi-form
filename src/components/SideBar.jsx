import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

const sidebarNavItems = [
    {
        step: 'Step 1',
        display: 'Your Info',
        id: 1,
        isActive: false
    },
    {
        step: 'Step 2',
        display: 'Select Plan',
        id: 2,
        isActive: true
    },
    {
        step: 'Step 3',
        display: 'Add-ons',
        id: 3,
        isActive: false
    },
    {
        step: 'Step 4',
        display: 'Summary',
        id: 4,
        isActive: false
    },
    
]

const SideBar = (props) => {
   const sidebarRef = useRef();
   

     return (
    <div className='sidebar'>
    <div ref={sidebarRef} className="sidebar__menu">
            {sidebarNavItems.map((item, index) => (
                    <div className="sidebar__menu__item" key={index}>
                      <div className={props.id === item.id ? "active-section" : "sidebar__menu__item__id" }>
                        <p>{item.id}</p>
                      </div>
                            
                      <div className="sidebar__menu__item__text">
                        <p className='item-step'>{item.step}</p>
                        <p className='item-display'>{item.display}</p>
                      </div>
                    </div>
                ))
            }
        </div>
        <div className='blob1'></div>
    </div>
    );
};

// {`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}

export default SideBar;
