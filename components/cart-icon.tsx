'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import countItems from '@/lib/countItems';
import useCartStore from '@/store/cartStore';
import Link from 'next/link';

function CartIcon() {
  const { cart } = useCartStore();
  const path = usePathname();

  const cartQuantity = useMemo(() => countItems(cart), [cart]);

  if (path === '/cart') return;

  return (
    <Link href="/cart" className="relative">
      <AiOutlineShoppingCart size={24} />
      <span className="absolute right-[-1.15em] top-[-0.75em] flex aspect-square h-8 w-8 scale-[65%] items-center justify-center rounded-full bg-slate-900 text-slate-50">
        {cartQuantity}
      </span>
    </Link>
  );
}

export default CartIcon;
