import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	mainView: {
		display: 'flex',
	},
});

const CV = () => {
	return (
		<Document>
			<Page size="A4" style={styles.mainView}>
				<View style={{display: 'flex'}}>
					<View>
						<Text>hello</Text>
					</View>
					<View>
						<Text>mr</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
};

export default CV;
