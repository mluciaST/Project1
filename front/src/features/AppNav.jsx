//import { useContext } from 'react';
//import { useSelector } from 'react-redux';
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

//NavBar elements
export const AppNav = () => {
    
    return (
        <Nav>
            <NavSection>
                {<NavItem><strong><em>Mango Airlines</em></strong></NavItem>}
            </NavSection>

            <NavSection jc="flex-end">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/addflight" transitionColor="lightgrey">Add Flights</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/viewflights" transitionColor="lightgrey">View Flights</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/removeflights" transitionColor="lightgrey">Remove Flights</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}