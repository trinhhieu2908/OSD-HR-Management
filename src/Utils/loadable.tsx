import { Suspense, lazy } from 'react';

// TODO: Add return type
type ImportFuncType = () => Promise<{ default: React.ComponentType<any> }>;

export default (importFunc: ImportFuncType, { fallback = null } = { fallback: null }): React.FC => {
  const LazyComponent = lazy(importFunc);

  return (props: React.ComponentProps<typeof LazyComponent>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
