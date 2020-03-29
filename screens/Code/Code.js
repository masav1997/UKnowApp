import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Title from '../../components/Title';

const { width } = Dimensions.get('window');

export default class Code extends React.Component {
	state = {
		code: '',
	};
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#19232F', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ width: width - 30, textAlign: 'center' }}>
						<Header
							left={
								<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
									<View style={{ width: 60, height: 50, top: 10 }}>
										<BackButton />
									</View>
								</TouchableOpacity>
							}
							center={<Logo />}
						/>
						<View style={styles.space}></View>
						<Title title="Код из смс" />
						<View style={styles.delSpace1}></View>
						<Text style={styles.descriptionText}>
							Введите код, который был выслан на указанный номер{' '}
							<Text style={styles.boldText}>+7 (890) 541-74-50.</Text> Введите его чтобы продолжить.
						</Text>
						<View style={{ width: 120, alignSelf: 'center' }}>
							<View
								style={{
									width: 200,
									height: 50,
									backgroundColor: '#060A10',
									borderRadius: 15,
									borderColor: '#060A10',
									alignSelf: 'center',
									marginBottom: 25,
								}}
							>
								<TextInput
									style={{
										height: 23,
										width: 40,
										fontSize: 16,
										fontWeight: '500',
										color: '#FFF',
										marginTop: 14,
										alignSelf: 'center',
									}}
									autoCompleteType="cc-number"
									keyboardType="number-pad"
									maxLength={4}
								/>
							</View>
						</View>
						<Button buttonTitle="Продолжить" onPress={() => this.props.navigation.navigate('MainPage')} />
						<View style={styles.delSpace}></View>
						<TouchableOpacity
							style={{ marginLeft: 19, textAlign: 'center', alignSelf: 'center', marginTop: -10 }}
						>
							<Title linkTitle="Выслать код повторно" />
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	descriptionText: {
		fontStyle: 'normal',
		fontSize: 16,
		lineHeight: 20,
		fontWeight: '500',
		color: '#898F97',
		marginRight: 15,
		marginBottom: 30,
	},
	boldText: {
		fontStyle: 'normal',
		fontSize: 16,
		lineHeight: 20,
		textAlign: 'center',
		fontWeight: '600',
		color: '#FFF',
		marginTop: 5,
	},
	delSpace1: {
		marginBottom: -25,
	},
	delSpace: {
		marginBottom: -15,
	},
	space: {
		marginBottom: 10,
	},
});
