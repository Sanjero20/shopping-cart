import NavLink from './ui/NavLink';
import CartIcon from './cart-icon';

function MainNav() {
  return (
    <header className="h-fit w-full">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-2xl font-bold">Fake Store</h1>

        <nav className="flex gap-4">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/products">SHOP</NavLink>
          <CartIcon />
        </nav>
      </div>
    </header>
  );
}

export default MainNav;
