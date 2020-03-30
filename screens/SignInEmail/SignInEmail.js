import React from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView, TouchableOpacityBase } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import ControlTab from '../../components/ControlTab';
import Agreement from '../../components/Agreement';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class SignInEmail extends React.Component {
	state = {
		email: '',
		number: '',
	};

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#19232F', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ width: width - 30 }}>
						<Logo />
						<TouchableOpacity onPress={() => this.props.navigation.navigate('SignInPhone')}>
							<ControlTab selectedIndex={1} />
						</TouchableOpacity>
						<Title
							title="Авторизация"
							subtitle="Ещё нет аккаунта?"
							linkTitle="Регистрация."
							onPress={() => this.props.navigation.navigate('SignInPhone')}
						/>
						<Input
							label="Эл.почта"
							value={this.state.email}
							onChangeText={text => this.setState({ email: text })}
						/>
						<View style={styles.delSpace}></View>
						<Input
							label="Номер телефона"
							value={this.state.number}
							onChangeText={text => this.setState({ number: text })}
							keyboardType="phone-pad"
						/>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
							<Text style={styles.textStyle}>Забыли пароль?</Text>
						</TouchableOpacity>
						<Button
							buttonTitle="Авторизоваться"
							onPress={() => this.props.navigation.navigate('CodeEmail')}
						/>
						<Agreement titleName="Авторизоваться" />
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	delSpace: {
		marginBottom: -10,
	},
	textStyle: {
		fontStyle: 'normal',
		fontSize: 16,
		lineHeight: 20,
		textAlign: 'right',
		fontWeight: '500',
		color: '#FF3358',
		marginBottom: 20,
	},
});
