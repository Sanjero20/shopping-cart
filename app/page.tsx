import ButtonShop from '@/components/btn-shop';

function HomePage() {
  return (
    <div className="flex h-full flex-col items-center">
      <section className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          Enter the World of Unrivaled Shopping
        </h1>
        <p className="text-lg text-neutral-600 md:w-2/3 md:text-xl">
          Immerse yourself in a shopping adventure like no other, where our vast
          array of products, unbeatable value, and remarkable customer care
          redefine your entire shopping voyage. Begin exploring today and
          revolutionize your retail experience with us.
        </p>

        <ButtonShop />
      </section>
    </div>
  );
}

export default HomePage;
