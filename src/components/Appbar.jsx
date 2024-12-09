import { NavLink } from 'react-router-dom';
import { Wrap,WrapItem,Avatar } from '@chakra-ui/react';
import '../index.css';
import Sidebar from './sidebar';
import Signup from './signup';
import Login from './login';

const TabBar = () => {
    
    return (
        <div className="tab-bar d-flex justify-content-between align-items-center bg-dark p-3">
            <Wrap>
            <WrapItem>
              <Avatar size='md' name='Sam' src='https://bit.ly/dan-abramov' />
            </WrapItem>
          </Wrap>
            <div className="tab-links">
            <Sidebar/>
                <NavLink exact to="/" className="tab-link" >Home</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/features" className="tab-link" >Features</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/pricing" className="tab-link" >Pricing</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/faqs" className="tab-link" >FAQs</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to="/about" className="tab-link" >About</NavLink>
            </div>
            <div className="search-bar d-flex align-items-center ml-auto">
               
                <input type="text" className="form-control mr-2" />
                <Login/>
                <Signup/>
            </div>
        </div>
    );
}

export default TabBar;