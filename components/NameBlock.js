import React from 'react';
import { View, Text, Image } from 'react-native';
import { AppConsumer } from '../AppContextProvider';

export default class NameBlock extends React.Component {
	render() {
		const { name, image, style } = this.props;
		return (
			<AppConsumer>
				{appConsumer1 => (
					<View
						style={{
							flexDirection: 'row',
							marginRight: 15,
						}}
					>
						<Image source={image} style={{ width: 30, height: 30, top: 10, marginRight: 10 }} />
						<Text
							style={style}
						>
							{name}
						</Text>
					</View>
				)}
			</AppConsumer>
		);
	}
}
