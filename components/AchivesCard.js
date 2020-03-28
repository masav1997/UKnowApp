import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const { width } = Dimensions.get('window');

export default class AchivesCard extends React.Component {
	render() {
		const { percent, image, title } = this.props;
		return (
			<View
				style={{
					backgroundColor: '#19232f',
					height: 'auto',
					width: width / 2 - 30,
					borderBottomLeftRadius: 16,
					borderTopRightRadius: 16,
					borderTopLeftRadius: 16,
					marginBottom: 15,
					marginRight: 10,
					marginLeft: 15,
					paddingLeft: 15,
					paddingRight: 15,
					paddingTop: 15,
					alignItems: 'center',
				}}
			>
				<ProgressCircle
					percent={percent}
					radius={46}
					borderWidth={5}
					color="#FF3358"
					shadowColor="#060A10"
					bgColor="#19232F"
				>
					<Image source={image} style={{ width: 64, height: 64 }} />
				</ProgressCircle>
				<Text
					style={{
						fontStyle: 'normal',
						fontSize: 16,
						fontWeight: '600',
						color: '#FFF',
						textAlign: 'center',
						marginTop: 10,
						marginBottom: 15,
					}}
				>
					{title}
				</Text>
			</View>
		);
	}
}
