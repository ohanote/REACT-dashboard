declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}
/// <reference types="vite/client" />
// vite-env.d.ts
// ...
/// <reference types="vite-plugin-svgr/client" />
