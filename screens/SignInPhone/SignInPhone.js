import React from 'react';
import { View, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import ControlTab from '../../components/ControlTab';
import Agreement from '../../components/Agreement';

const { width } = Dimensions.get('window');

export default class SignInPhone extends React.Component {
	state = {
		value: '',
		email: '',
		number: '',
	};

	constructor() {
		super();
		this.state = {
			customStyleIndex: 0,
		};
	}
	handleCustomIndexSelect = (index) => {
		this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
	};

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#19232F', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<ScrollView style={{ width: width - 30 }}>
						<Logo />
						<View style={{ width: width - 160, alignSelf: 'center' }}>
							<ControlTab
								selectedIndex={this.state.customStyleIndex}
								onTabPress={this.handleCustomIndexSelect}
							/>
						</View>
						{this.state.customStyleIndex === 0 ? (
							<View>
								<Title
									title="Авторизация"
									subtitle="Ещё нет аккаунта?"
									linkTitle="Регистрация."
									onPress={() => this.props.navigation.navigate('SignUpPhone')}
								/>
								<Input
									label="Номер телефона"
									value={this.state.value}
									onChangeText={text => this.setState({ value: text })}
									keyboardType="phone-pad"
								/>
								<Button
									buttonTitle="Авторизоваться"
									onPress={() => this.props.navigation.navigate('MainPage')}
								/>
								<Agreement titleName="Авторизоваться" />
							</View>
						) : (
							<View>
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
									onPress={() => this.props.navigation.navigate('MainPage')}
								/>
								<Agreement titleName="Авторизоваться" />
							</View>
						)}
					</ScrollView>
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
