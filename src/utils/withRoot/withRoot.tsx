import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { IRMainProps } from '../../types';

export default function withRoot(Component: React.ComponentType<IRMainProps>) {
  function WithRoot(props: IRMainProps) {
    return (
      <div id='root'>
        <MuiThemeProvider theme={createMuiTheme({palette: { type: 'dark'}})}>
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
      </div>
    );
  }
  return WithRoot;
}
