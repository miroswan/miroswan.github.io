import { Theme } from '@material-ui/core/styles/createMuiTheme';

export enum View {
  Home = 1,
  Experience,
  Technology,
  Contact,
  NotSupported,
}

export interface IRState {
  view: View;
}
