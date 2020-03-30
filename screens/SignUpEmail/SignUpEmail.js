import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import ControlTab from '../../components/ControlTab';
import Agreement from '../../components/Agreement';
import { AppConsumer } from '../../AppContextProvider';

const { width } = Dimensions.get('window');

export default class SignUpEmail extends React.Component {
	state = {
		email: '',
		password: '',
		password1: '',
	};

	render() {
		return (
			<AppConsumer>
				{appConsumer1 => (
					<View style={{ flex: 1, backgroundColor: appConsumer1.theme.colors.bg2, alignItems: 'center' }}>
						<SafeAreaView
							style={{
								paddingTop: Platform.OS === 'android' ? 25 : 0,
							}}
						>
							<ScrollView style={{ width: width - 30 }}>
								<Logo />
								<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpPhone')}>
									<ControlTab selectedIndex={1} />
								</TouchableOpacity>
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
							</ScrollView>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}

const styles = StyleSheet.create({
	delSpace: {
		marginBottom: -10,
	},
});
