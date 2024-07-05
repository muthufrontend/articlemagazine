
import headerJson from '../../data/header.json';
import './header.scss';
import Navbar from 'react-bootstrap/Navbar';
import Topheader from '../TopHeader';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header__inner'>               
                    <Topheader/>

                    <Navbar expand="lg" className="bg-body-tertiary header__secondary">
                        <nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className='nav'>
                                {headerJson.map((data) => (
                                    <li>
                                        {data.absolute_url && <a href={data.absolute_url}>{data.title}</a>}
                                        {!data.absolute_url && <span>{data.title}</span>}
                                        {data.below && 
                                            <ul className='subnav'>
                                                {data.below.map((subnav) => (
                                                    <li><a href={subnav.absolute_url}>{subnav.title}</a></li>
                                                ))}
                                            </ul>
                                        }
                                        
                                    </li>
                                ))}
                            </ul>
                        </Navbar.Collapse>
                        </nav>
                    </Navbar>
                </div>
            </header>
       </>
    );
}

export default Header;