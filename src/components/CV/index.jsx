import React from 'react';
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image,
} from '@react-pdf/renderer';
import {styles as pageStyles} from './cv.styles';
import AvatarSrc from '../../images/avatar.png';
import './cv.scss';

const styles = StyleSheet.create(pageStyles);

const CV = () => {
	return (
		<div className="host">
			<Document>
				<Page size="A4" style={styles.mainView}>
					<View style={{display: 'flex', width: '100%'}}>
						<View style={styles.leftCol}>
							<Image src={AvatarSrc} style={styles.avatar} />
							<Text>hello</Text>
						</View>
						<View style={styles.rightCol}>
							<Text>mr</Text>
						</View>
					</View>
				</Page>
			</Document>
		</div>
	);
};

export default CV;
