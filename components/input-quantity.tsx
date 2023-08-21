'use client';

import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type InputQuantityProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

function InputQuantity({ quantity, setQuantity }: InputQuantityProps) {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  const editQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!value || value < 1) return;
    setQuantity(value);
  };

  return (
    <div className="flex gap-1">
      <Button variant="outline" onClick={decrementQuantity}>
        -
      </Button>

      <Input
        type="number"
        className="w-12 text-center"
        value={quantity}
        onChange={(e) => editQuantity(e)}
        min={1}
      />

      <Button variant="outline" onClick={incrementQuantity}>
        +
      </Button>
    </div>
  );
}

export default InputQuantity;
