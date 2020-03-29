import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AppConsumer } from '../AppContextProvider';

export default class DescriptionBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pressStatus: true };
	}

	_onShowUnderlay() {
		if (!this.state.pressStatus) {
			this.setState({ pressStatus: true });
		} else {
			this.setState({ pressStatus: false });
		}
	}
	render() {
		const { description } = this.props;
		return this.state.pressStatus ? (
			<AppConsumer>
				{appConsumer1 => (
					<TouchableOpacity onPress={this._onShowUnderlay.bind(this)}>
						<Text
							style={{
								fontSize: 16,
								color: "#FFFFFF",
								textAlign: 'left',
								marginBottom: 35,
								marginLeft: 15,
								marginRight: 15,
								height: 120,
							}}
						>
							{description}
						</Text>
						<LinearGradient
							start={{ x: 0.0, y: 0.0 }}
							end={{ x: 0.0, y: 1.0 }}
							locations={[0.0, 1.0]}
							colors={['rgba(9, 18, 28, 0)', appConsumer1.theme.colors.gradient]}
							useViewFrame={false}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 15,
								width: 'auto',
							}}
						/>
						<TouchableOpacity style={{ alignSelf: 'center' }} onPress={this._onShowUnderlay.bind(this)}>
							<Image
								source={require('../assets/icons/down.png')}
								style={{ width: 32, height: 34, top: -55, marginBottom: -55 }}
							/>
						</TouchableOpacity>
					</TouchableOpacity>
				)}
			</AppConsumer>
		) : (
      <AppConsumer>
				{appConsumer1 => (
			<TouchableOpacity onPress={this._onShowUnderlay.bind(this)}>
				<Text
					style={{
						fontSize: 16,
						color: "#FFFFFF",
						textAlign: 'left',
						marginBottom: 15,
						marginLeft: 15,
						marginRight: 15,
					}}
				>
					Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum
					quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur
					culpa velit esse. Nisi labore consequat tempor esse amet
				</Text>
			</TouchableOpacity>
      )}
			</AppConsumer>
		);
	}
}
