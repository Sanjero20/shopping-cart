import Link from 'next/link';
import { Button } from './ui/button';

type ButtonShopProps = {
  text?: string;
};

function ButtonShop({ text = 'Shop Now' }: ButtonShopProps) {
  return (
    <Link href={'products'} className="mx-auto">
      <Button>{text}</Button>
    </Link>
  );
}

export default ButtonShop;
