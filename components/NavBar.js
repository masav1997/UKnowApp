import React from 'react';
import { Image, TouchableOpacity, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pressHome: true, pressQuiz: true, pressAchive: true, pressProfile: true };
	}

	_onPressHome() {
		if (!this.state.pressHome) {
			this.setState({ pressHome: true });
		} else {
			this.setState({ pressHome: false });
		}
  }
  
  _onPressQuiz() {
		if (!this.state.pressQuiz) {
			this.setState({ pressQuiz: true });
		} else {
			this.setState({ pressQuiz: false });
		}
  }
  
  _onPressAchive() {
		if (!this.state.pressAchive) {
			this.setState({ pressAchive: true });
		} else {
			this.setState({ pressAchive: false });
		}
  }

  _onPressProfile() {
		if (!this.state.pressProfile) {
			this.setState({ pressProfile: true });
		} else {
			this.setState({ pressProfile: false });
		}
  }

	render() {
		const logoStyle = {
			top: 20,
			height: 18.76,
			width: 99,
			alignSelf: 'center',
		};
		return (
			<View
				style={{
					alignContent: 'flex-end',
					backgroundColor: '#09121C',
					height: 60,
					width: width,
					borderTopLeftRadius: 25,
					borderTopRightRadius: 25,
					paddingLeft: 15,
					paddingRight: 15,
					flexDirection: 'row',
				}}
			>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={this._onPressHome.bind(this)}>
						<Image
							source={require('../assets/icons/home.png')}
							style={
								!this.state.pressHome
									? { width: 25, height: 25, alignSelf: 'center', top: 15, tintColor: '#FF3358' }
									: { width: 25, height: 25, alignSelf: 'center', top: 15 }
							}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={this._onPressQuiz.bind(this)}>
						<Image
							source={require('../assets/icons/quiz.png')}
							style={
								!this.state.pressQuiz
									? { width: 25, height: 25, alignSelf: 'center', top: 15, tintColor: '#FF3358' }
									: { width: 25, height: 25, alignSelf: 'center', top: 15 }
							}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={this._onPressAchive.bind(this)}>
						<Image
							source={require('../assets/icons/achive.png')}
							style={!this.state.pressAchive
                ? { width: 25, height: 25, alignSelf: 'center', top: 15, tintColor: '#FF3358' }
                : { width: 25, height: 25, alignSelf: 'center', top: 15 }}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this._onPressProfile.bind(this)}>
						<Image
							source={require('../assets/icons/profile.png')}
							style={!this.state.pressProfile
                ? { width: 25, height: 25, alignSelf: 'center', top: 15, tintColor: '#FF3358' }
                : { width: 25, height: 25, alignSelf: 'center', top: 15 }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
