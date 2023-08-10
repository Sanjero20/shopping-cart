type Props = {
  params: { id: string };
};

function ProductPage({ params }: Props) {
  return <div> Product ID: {params.id}</div>;
}

export default ProductPage;
