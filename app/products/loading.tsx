import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const NUMBER_OF_PRODUCTS = 20;

function Loading() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[...Array(NUMBER_OF_PRODUCTS)].map((product, index) => (
        <Card
          key={index}
          className="flex h-full flex-col justify-end py-4 hover:cursor-pointer"
        >
          <CardContent className="flex flex-col justify-end gap-4 py-0 pb-2">
            <Skeleton className="h-40 w-auto object-contain" />
            <Skeleton className="h-4 rounded" />
            <Skeleton className="h-4 rounded" />
          </CardContent>

          <CardFooter className="flex justify-between py-0">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-1/3" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Loading;
