import * as _ from 'lodash';
import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as MobileDetect from 'mobile-detect';

import RAppBar from './components/RAppBar';
import { IState, View } from './types';
import RExperience from './views/RExperience';
import RHome from './views/RHome';
import RNotSupported from './views/RNotSupported';

const setView = (view: View): JSX.Element => {
  if (new MobileDetect(window.navigator.userAgent).mobile()) {
    return <RNotSupported msg='Mobile' />;
  } else if (window.navigator.userAgent.includes('MSIE')) {
    return  <RNotSupported msg='Internet Explorer' />;
  }
  switch (view) {
    case View.Home:
      return <RHome />;
    case View.Experience:
      return <RExperience />;
  }
  return <h1>You should never see this </h1>;
};

const Main: React.SFC = (props: {} = {}): JSX.Element => {
  const [state, setState] = React.useState({view: View.Home});

  return (
    <MuiThemeProvider theme={createMuiTheme({palette: { type: 'dark'}})}>
      <CssBaseline />
      <div>
        <RAppBar
          setView={(view: View) => setState({view})}
        />
      </div>
      {setView(state.view)}
    </MuiThemeProvider>
  );
};

export default Main;
