import Link from 'next/link';
import NavLink from './ui/NavLink';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function MainNav() {
  return (
    <header className="h-fit w-full">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-2xl font-bold">Fake Store</h1>

        <nav className="flex gap-6">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/products">SHOP</NavLink>
          <Link href="/cart">
            <AiOutlineShoppingCart size={24} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
