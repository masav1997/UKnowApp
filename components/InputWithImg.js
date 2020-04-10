import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { AppConsumer } from '../AppContextProvider';
import * as ImagePicker from 'expo-image-picker';

export default class InputWithImg extends React.Component {
	state = {
		image: null,
		bool: 1,
		email: '',
		wallet: '',
		validator: '',
		img: '',
	};
	render() {
		const { label, keyboardType, placeholder, ...props } = this.props;
		const textInputStyle = {
			height: 26,
			fontSize: 14,
			color: '#FFF',
			marginLeft: 15,
		};
		const labelStyle = {
			fontSize: 12,
			color: '#898F97',
			marginLeft: 15,
		};
		return (
			<AppConsumer>
				{(appConsumer1) => (
					<View
						style={{
							paddingTop: 20,
							backgroundColor: appConsumer1.theme.colors.input,
							borderRadius: 15,
							height: 'auto',
							marginBottom: 20,
						}}
					>
						<View style={{ position: 'absolute', left: 0, top: 5, flexDirection: 'row' }}>
							<Text style={labelStyle}>{label}</Text>
							<TouchableOpacity onPress={this._pickImage}>
								<Image
									source={require('../assets/icons/add.png')}
									style={{ width: 15, height: 15, marginLeft: 3 }}
								/>
							</TouchableOpacity>
						</View>
						{this.state.img === 'yes' ? (
							<Image
								source={{ uri: this.state.image }}
								style={{ width: 50, height: 50, marginLeft: 15 }}
							/>
						) : null}
						<TextInput
							{...props}
							style={textInputStyle}
							keyboardType={keyboardType}
							placeholder={placeholder}
							placeholderTextColor={'#FFF'}
						/>
					</View>
				)}
			</AppConsumer>
		);
	}
	_pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			this.setState({ image: result.uri, bool: true, img: 'yes' });
		}
	};
}
