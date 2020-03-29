import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { AppConsumer } from '../AppContextProvider';

export default class InputBorder extends React.Component {
	render() {
		const { label, keyboardType, placeholder, ...props } = this.props;
		const textInputStyle = {
			height: 26,
			fontSize: 14,
			color: '#FFF',
			marginLeft: 15,
		};
		const labelStyle = {
			position: 'absolute',
			left: 0,
			top: 5,
			fontSize: 12,
			color: '#898F97',
			marginLeft: 15,
		};
		return (
			<AppConsumer>
				{appConsumer1 => (
					<View
						style={{
							paddingTop: 20,
							backgroundColor: appConsumer1.theme.colors.input,
							borderRadius: 15,
							height: 50,
							marginBottom: 20,
							borderColor: '#4BC0C8',
							borderWidth: 3,
						}}
					>
						<Text style={labelStyle}>{label}</Text>
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
}
