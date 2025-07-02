import { NavLink } from "react-router-dom";
// import tw from "tailwind-styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import styled from "styled-components";

// const NavList = tw.ul`
//   flex,
//   flex-col
//   gap-3
// `;
// const TwNavLink = tw(NavLink)`
//   flex
//   items-center
//   gap-5
//   text-stone-500
//   text-2xl
//   font-semibold
//   py-5
//   px-10
//   transition-all
//   duration-300
//   hover:text-stone-800
//   hover:bg-stone-50
//   hover:rounded-sm
//   active:text-stone-800
//   active:bg-stone-50
//   active:
//   rounded-sm
//   [&.active]:text-stone-800
//   [&.active]:bg-stone-50
//   [&.active]:rounded-sm
//   [&>svg]:w-9
//   [&>svg]:h-9
//   [&>svg]:text-stone-400
//   [&>svg]:transition-all
//   [&>svg]:duration-300
//   hover:[&>svg]:text-indigo-600
//   active:[&>svg]:text-indigo-600
//   [&.active>svg]:text-indigo-600
// `;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays /> <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
