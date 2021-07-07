import {A4_CM} from '@/constants';
export const styles = {
    mainView: {
		display: 'flex',
		height: `${A4_CM.height}`,
		width: `${A4_CM.with}`,
	},
	leftCol: {
		backgroundColor: '#01579b',
		width: '300px',
	},
	rightCol: {
		minWidth: 'calc(100% - 300px)',
		backgroundColor: '#fafafa',
	},
    avatar: {
        width: '50px',
        height: '50px',
        display: 'block'
    }
}