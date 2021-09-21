export enum Screens {
  Top = 0,
  Bottom = 1,
}

export type ScreenValue = number | null;

interface State {
  activeScreen: Screens;
  screenValues: [string, string];
  resultValue: string;
}

export const state: State = {
  activeScreen: Screens.Top,
  screenValues: ['', ''],
  resultValue: '',
};
