import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Card className="relative h-full w-full p-0 md:w-1/3">
        <CardContent className="h-[30vh] w-full p-0">
          <Skeleton className="h-full w-full" />
        </CardContent>
      </Card>

      <section className="flex flex-col justify-between gap-2 md:w-2/3">
        <div className="flex flex-col">
          <Skeleton className="h-4 w-48" />

          <div className="flex gap-2">
            <Skeleton className="mt-1 h-4 w-24" />
            <Skeleton className="mt-1 h-4 w-8" />
          </div>

          <div className="mt-2">
            <Skeleton className="mt-1 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-full" />
            <Skeleton className="mt-1 h-4 w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loading;
