import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';
import {A4_CM} from '@/constants';
import {styles as pageStyles} from './cv.styles';
import './cv.scss';

const styles = StyleSheet.create(pageStyles);

const CV = () => {
	return (
		<div className="host">
			<Document>
				<Page size="A4" style={styles.mainView}>
					<View style={{display: 'flex', width: '100%'}}>
						<View style={styles.leftCol}>
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
