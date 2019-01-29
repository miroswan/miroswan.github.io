import * as React from 'react';

import ErrorBoundary from 'react-error-boundary';

function withErrorBoundary<P>(Component: React.ComponentType<P>): React.ComponentType<P> {
  const WithErrorBoundary: React.SFC<P> = (props: P) => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
  return WithErrorBoundary;
}

export default withErrorBoundary;
