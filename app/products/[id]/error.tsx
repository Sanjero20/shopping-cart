'use client';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

function ItemErrorPage({ error, reset }: ErrorProps) {
  return <div>{error.message}</div>;
}

export default ItemErrorPage;
