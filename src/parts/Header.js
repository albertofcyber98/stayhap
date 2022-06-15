import Button from 'elements/Button'
import React from 'react'
import IconText from './IconText'
export default function Header(props) {
    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    };
    return (
        <header className='spacing-sm'>
            <div className='container'>
                <nav className='navbar navbar-expand-lg navbar-light'>
                    <div>
                        <IconText />
                    </div>
                    <div className='collapse navbar-collapse justify-content-end'>
                        <ul className='navbar-nav'>
                            <li className={`nav-item ${getNavLinkClass("/")}`}>
                                <Button className='nav-link' type='link' href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                                <Button className='nav-link' type='link' href="/browse-by">
                                    Browse By
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                                <Button className='nav-link' type='link' href="/stories">
                                    Stories
                                </Button>
                            </li>
                            <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                                <Button className='nav-link' type='link' href="/agents">
                                    Agents
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
