import { getMenu } from './apiRestaurant';

export async function loader() {
  const menu = await getMenu();
  return menu;
}
