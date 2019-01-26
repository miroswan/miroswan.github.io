import * as _ from 'lodash';
import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Link, Route, Router, Switch } from 'react-router-dom';

// Local
import RAppBar from './components/RAppBar';
import RHome from './components/RHome';
import { IState, ThemeType, View } from './types';

class Main extends React.Component<{}, IState> {
  public state = {
    resumeButtonElAnchor: false,
    resumeButtonSelected: false,
    theme: createMuiTheme({
      palette: {
        type: ThemeType.Dark,
      },
      typography: {
        useNextVariants: true,
      },
    }),
    view: View.Home,
  };

  public setView = (view: View) => {
    this.setState({...this.state, view});
  }

  public setTheme = () => {
    this.setState({
      ...this.state,
      theme: createMuiTheme({
        palette: {
          type: this.state.theme.palette.type === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark,
        },
      }),
    });
  }

  public setResumeButtonSelected = (event: any) => {
    this.setState({
      ...this.state,
      resumeButtonSelected: true,
    });
  }

  public getResumeButtonSelected = (): boolean => {
    const clonedState = _.cloneDeep(this.state);
    return clonedState.resumeButtonSelected;
  }

  public disableResumeButtonSelected = (): void => {
    this.setState({...this.state, resumeButtonSelected: false});
  }

  public render() {
    return (
      <div>
        <MuiThemeProvider theme={this.state.theme}>
          <CssBaseline />
          <RAppBar
            disableResumeButtonSelected={this.disableResumeButtonSelected}
            getResumeButtonSelected={this.getResumeButtonSelected}
            setResumeButtonSelected={this.setResumeButtonSelected}
            setTheme={this.setTheme}
            setView={this.setView}
          />
          <RHome />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Main;
