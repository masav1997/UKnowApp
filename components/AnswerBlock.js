import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppConsumer } from '../AppContextProvider';

export default class AnswerBlock extends React.Component {
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
		const { answer, id } = this.props;
		return (
      <AppConsumer>
				{appConsumer1 => (
			<View
				style={
					this.state.pressStatus
						? {
								backgroundColor: appConsumer1.theme.colors.card,
								height: 'auto',
								borderTopRightRadius: 16,
								borderTopLeftRadius: 16,
								borderBottomLeftRadius: 16,
								marginLeft: 15,
								marginRight: 15,
								flexDirection: 'row',
								marginBottom: 15,
						  }
						: {
								backgroundColor: appConsumer1.theme.colors.card,
								height: 'auto',
								borderTopRightRadius: 16,
								borderTopLeftRadius: 16,
								borderBottomLeftRadius: 16,
								marginLeft: 15,
								marginRight: 15,
								flexDirection: 'row',
								marginBottom: 15,
								borderColor: '#FF3358',
								borderWidth: 5,
						  }
				}
			>
				<View style={{ flex: 0.8 }}>
					<Text
						style={
							this.state.pressStatus
								? {
										textAlign: 'center',
										fontSize: 20,
										fontWeight: '600',
										color: '#898F97',
										textAlign: 'center',
										marginTop: 15,
										marginBottom: 20,
								  }
								: {
										textAlign: 'center',
										fontSize: 20,
										fontWeight: 'bold',
										color: '#FF3358',
										textAlign: 'center',
										marginTop: 15,
										marginBottom: 20,
								  }
						}
					>
						{id}
					</Text>
				</View>
				<View style={{ flex: 4 }}>
					<TouchableOpacity onPress={this._onShowUnderlay.bind(this)}>
						<Text
							style={{
								textAlign: 'center',
								fontSize: 20,
								fontWeight: '500',
								color: appConsumer1.theme.colors.text,
								textAlign: 'left',
								marginTop: 15,
								marginBottom: 20,
							}}
						>
							{answer}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
      )}
			</AppConsumer>
		);
	}
}
