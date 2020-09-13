import '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface TypeText {
    white: string;
  }

  interface TypeBackground {
    tag: string;
    light: string;
    overlay: string;
    field: string;
  }
}
