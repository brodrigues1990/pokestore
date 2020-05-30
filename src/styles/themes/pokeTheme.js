import { createMuiTheme } from '@material-ui/core/styles'

export const defaultTheme = createMuiTheme({

    palette: {
        primary: {
            main: '#005BAC',
        },
    },
});

export const fireTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#da1e37',
            main: '#bd1f36',
            dark: '#85182a',
            contrastText: '#fff',
        },
    },
});

export const waterTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#97d1f4',
            main: '#2d92d1',
            dark: '#2d92d1',
            contrastText: '#fff',
        },
    },
});

export const grassTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#73a942',
            main: '#538d22',
            dark: '#245501',
            contrastText: '#fff',
        },
    },
});

export default defaultTheme;