import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { AppConsumer } from '../AppContextProvider';

const { width } = Dimensions.get('window');

export default class AchivesCard extends React.Component {
	render() {
		const { percent, image, title, onPress } = this.props;
		return (
			<AppConsumer>
				{appConsumer1 => (
			<TouchableOpacity
				style={{
					backgroundColor: appConsumer1.theme.colors.card,
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
				onPress={onPress}
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
						color: appConsumer1.theme.colors.text,
						textAlign: 'center',
						marginTop: 10,
						marginBottom: 15,
					}}
				>
					{title}
				</Text>
			</TouchableOpacity>
			)}
			</AppConsumer>
		);
	}
}
