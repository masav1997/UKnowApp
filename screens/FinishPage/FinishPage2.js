import React from 'react';
import { View, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Quit from '../../components/Quit';

const { height, width } = Dimensions.get('window');

export default class FinishPage2 extends React.Component {
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
								<TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')}>
									<View style={{ width: 40, height: 35, top: 5 }}>
										<Quit />
									</View>
								</TouchableOpacity>
							}
							center={<HeaderTitle title="Викторина закончена" />}
						/>
						<View style={{ marginBottom: height / 5 }}></View>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 20,
								fontWeight: 'bold',
								color: '#FFF',
								marginBottom: 10,
								textAlign: 'center',
							}}
						>
							Поздравляем!
						</Text>
						<Text
							style={{
								fontStyle: 'normal',
								fontSize: 16,
								lineHeight: 20,
								fontWeight: '500',
								color: '#FFF',
								marginBottom: 40,
								textAlign: 'center',
								marginLeft: 12,
								marginRight: 12,
							}}
						>
							Викторина успешно закончена. Дождитесь пока все участники закончат. Осталось{' '}
							<Text
								style={{
									fontStyle: 'normal',
									fontSize: 16,
									lineHeight: 20,
									fontWeight: 'bold',
									color: '#FEAC5E',
									textAlign: 'center',
								}}
							>
								15 из 250
							</Text>
						</Text>
						<View style={{ width: width - 30, marginBottom: 20 }}>
							<Button
								buttonTitle="Продолжить"
								onPress={() => this.props.navigation.navigate('Results')}
							/>
						</View>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
