import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
//import { loader } from '../services/apiMenu';

function Menu() {
  const menu = useLoaderData();

  return (
    <>
      <h1>Меню</h1>
      <ul className="divide-y divide-stone-200">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}
export default Menu;
