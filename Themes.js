import { DefaultTheme } from "react-native-paper";

export const DarkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        bg1: '#060A10',
        bg2: '#19232F',
        input: '#060A10',
        card: '#19232F',
        text: '#FFFFFF',
        gradient: 'rgba(9, 18, 28, 1)',
        border: '#19232F',
        bar:'#060A10'
    }
}

export const LightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        bg1: '#2A2D36',
        bg2: '#222327',
        input: '#2A2D36',
        card: '#FFFFFF',
        text: '#313745',
        gradient: '#313745',
        border: '#545964',
        bar:'#222327'
    }
}