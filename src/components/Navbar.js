import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">Hina Aslam</Logo>
      <NavList>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#services">My Websites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
