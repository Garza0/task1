import {createMuiTheme} from '@material-ui/core/styles';

const colors = {
	green: '#6D9B12',
	blue: '#4285F4',
	grey: '#E5E5E5',
	white: '#fff'
};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
	palette: {
		// primary: {
		// 	main: colors.blue
		// },
		// secondary: {
		// 	main: colors.grey
		// }
	}});

	theme.overrides = {
		MuiButton: {
			root: {
				background: colors.green,
				color: colors.white,
				width: '133px',
				height: '50px',
				borderRadius: '6px',
				marginLeft: defaultTheme.spacing(1.875),
				marginRight: defaultTheme.spacing(1.875),
				fontFamily: 'Roboto, sans-serif',
				fontWeight: 900,
				fontSize: '16px',
				lineHeight: '19px'
			},
			sizeLarge: {
				width: '270px'
			},
			sizeSmall: {
				width: '120px',
				height: '40px'
			},
		}
	};

export default theme;