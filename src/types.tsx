import { Theme } from '@material-ui/core/styles/createMuiTheme';

export enum View {
  Home = 1,
  Experience,
  Technology,
  Contact,
}

export interface IState {
  view: View;
}
