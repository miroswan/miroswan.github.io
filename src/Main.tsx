import * as _ from 'lodash';
import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import RAppBar from './components/RAppBar';
import { IState, View } from './types';
import RExperience from './views/RExperience';
import RHome from './views/RHome';

const Main: React.SFC = (props: {} = {}): JSX.Element => {
  const viewMap = new Map()
    .set(View.Home, <RHome />)
    .set(View.Experience, <RExperience />);

  const [state, setState] = React.useState({view: View.Home});
  return (
    <MuiThemeProvider theme={createMuiTheme({palette: { type: 'dark'}})}>
      <CssBaseline />
      <RAppBar
        setView={(view: View) => setState({view})}
      />
      {viewMap.get(state.view)}
    </MuiThemeProvider>
  );
};

export default Main;
