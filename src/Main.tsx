import * as _ from 'lodash';
import * as React from 'react';

import * as MobileDetect from 'mobile-detect';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import RAppBar from './components/RAppBar';

import { IRState, View } from './types';

import RContact from './views/RContact';
import RExperience from './views/RExperience';
import RHome from './views/RHome';
import RNotSupported from './views/RNotSupported';
import RTechnology from './views/RTechnology';

import withErrorBoundary from './utils/withErrorBoundary';

const MainView: React.SFC<{ view: View }> = (props: { view: View }): JSX.Element => {
  if (new MobileDetect(window.navigator.userAgent).mobile()) {
    return <RNotSupported msg='Mobile' />;
  } else if (window.navigator.userAgent.includes('MSIE')) {
    return <RNotSupported msg='Internet Explorer' />;
  }
  switch (props.view) {
    case View.Home:
      return <RHome />;
    case View.Experience:
      return <RExperience />;
    case View.Technology:
      return <RTechnology />;
    case View.Contact:
      return <RContact />;
  }
  return <h1>You should never see this </h1>;
};

const Main: React.SFC = (): JSX.Element => {
  const [state, setState] = React.useState({view: View.Home});

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
    typography: {
      useNextVariants: true,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <RAppBar setView={(view: View) => setState({view})}/>
      </div>
      <MainView view={state.view} />
    </MuiThemeProvider>
  );
};

export default withErrorBoundary(Main);
