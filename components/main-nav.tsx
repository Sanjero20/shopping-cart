import Link from 'next/link';
import NavLink from './ui/NavLink';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function MainNav() {
  return (
    <header className="h-fit w-full">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-2xl font-bold">Fake Store</h1>

        <nav className="flex gap-10">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/products">SHOP</NavLink>
          <NavLink href="/about">ABOUT</NavLink>
        </nav>

        <Link href="/cart">
          <AiOutlineShoppingCart size={24} />
        </Link>
      </div>
    </header>
  );
}

export default MainNav;
