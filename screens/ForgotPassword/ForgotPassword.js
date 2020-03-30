import React from 'react';
import { View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';

const { width } = Dimensions.get('window');

export default class ForgotPassword extends React.Component {
	state = {
		email: '',
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
						<Header
							left={
								<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
									<View style={{ width: 60, height: 50, top: 10 }}>
										<BackButton onPress={() => this.props.navigation.goBack()}/>
									</View>
								</TouchableOpacity>
							}
							center={<Logo />}
						/>
						<Title
							title="Забыли пароль?"
							subtitle="Введите адрес эл.почты и мы вышлем вам инструкцию по восстановлению пароля"
						/>
						<Input
							label="Эл.почта"
							value={this.state.email}
							onChangeText={text => this.setState({ email: text })}
						/>
						<Button
							buttonTitle="Восстановить пароль"
							onPress={() => this.props.navigation.navigate('SignInEmail')}
						/>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
