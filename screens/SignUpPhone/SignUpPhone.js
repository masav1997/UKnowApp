import React from 'react';
import { View, Dimensions, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import ControlTab from '../../components/ControlTab';
import Agreement from '../../components/Agreement';

const { width } = Dimensions.get('window');

export default class SignUpPhone extends React.Component {
	state = {
		value: '',
		email: '',
		password: '',
		password1: '',
	};
	constructor() {
		super();
		this.state = {
			customStyleIndex: 0,
		};
	};
	
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
									title="Регистрация"
									subtitle="Уже есть аккаунт?"
									linkTitle=" Авторизироваться."
									onPress={() => this.props.navigation.navigate('SignInPhone')}
								/>
								<Input
									label="Номер телефона"
									value={this.state.value}
									onChangeText={text => this.setState({ value: text })}
									keyboardType="phone-pad"
								/>
								<Button
									buttonTitle="Зарегистрироваться"
									onPress={() => this.props.navigation.navigate('Code')}
								/>
								<Agreement titleName="Зарегистрироваться" />
							</View>
						) : (
							<View>
								<Title
									title="Регистрация"
									subtitle="Уже есть аккаунт?"
									linkTitle=" Авторизироваться."
									onPress={() => this.props.navigation.navigate('SignInPhone')}
								/>
								<Input
									label="Эл.почта"
									value={this.state.email}
									onChangeText={text => this.setState({ email: text })}
									keyboardType="email-address"
								/>
								<View style={styles.delSpace}></View>
								<Input
									label="Пароль"
									value={this.state.password}
									onChangeText={text => this.setState({ password: text })}
									autoCompleteType="password"
									textContentType="password"
									secureTextEntry={true}
								/>
								<View style={styles.delSpace}></View>
								<Input
									label="Повторите пароль"
									value={this.state.password1}
									onChangeText={text => this.setState({ password1: text })}
									autoCompleteType="password"
									textContentType="newPassword"
									secureTextEntry={true}
								/>
								<Button
									buttonTitle="Зарегистрироваться"
									onPress={() => this.props.navigation.navigate('CodeEmail')}
								/>
								<Agreement titleName="Зарегистрироваться" />
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
});
