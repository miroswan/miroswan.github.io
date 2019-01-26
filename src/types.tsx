import { Theme } from '@material-ui/core/styles/createMuiTheme';

export enum ThemeType  {
  Light = 'light',
  Dark = 'dark',
}

export enum View {
  Experience = 1,
  Home,
  Technology,
  Contact,
}

export interface IState {
  theme: Theme;
  resumeButtonSelected: boolean;
  view: View;
}
