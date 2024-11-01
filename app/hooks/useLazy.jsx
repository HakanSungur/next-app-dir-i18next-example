import React, { Suspense } from "react";
import Loading from "shared/Loading/Loading";


export const useLazy = (importMethod) => {
  const LazyComponent = React.lazy(importMethod);

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};