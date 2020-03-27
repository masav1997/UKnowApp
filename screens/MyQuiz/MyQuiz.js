import React from 'react';
import { View, Dimensions, ScrollView, Image, Text } from 'react-native';
import SearchBlock from '../../components/SearchBlock';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import PlusButton from '../../components/PlusButton';
import AboutQuiz from '../../components/AboutQuiz';
import AboutQuizPrice from '../../components/AboutQuizPrice';
import WinBlock from '../../components/WinBlock';

const { width } = Dimensions.get('window');

export default class MyQuiz extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<View style={{ textAlign: 'center', textAlign: 'center', backgroundColor: '#09121C' }}>
				<ScrollView>
					<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: -30 }}>
						<Header center={<Logo />} />
								<Title title="Мои викторины" />
					</View>
					<SearchBlock />
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
					<View style={{ flex: 5 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#898F97',
									marginLeft: 15,
								}}
							>
								Предстоящие
							</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#FF3358',
									marginLeft: 15,
									textAlign: 'right',
								}}
							>
								Все
							</Text>
						</View>
						<View style={{ flex: 0.8 }}>
							<Image
								source={require('../../assets/icons/right.png')}
								style={{ width: 32, height: 32, bottom: 5 }}
							/>
						</View>
					</View>
					<AboutQuiz />
					<View style={{ flexDirection: 'row', marginTop: 30 }}>
					<View style={{ flex: 5 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#898F97',
									marginLeft: 15,
								}}
							>
								Собственные
							</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#FF3358',
									marginLeft: 15,
									textAlign: 'right',
								}}
							>
								Все
							</Text>
						</View>
						<View style={{ flex: 0.8 }}>
							<Image
								source={require('../../assets/icons/right.png')}
								style={{ width: 32, height: 32, bottom: 5 }}
							/>
						</View>
					</View>
					<AboutQuizPrice />
				</ScrollView>
				<NavBar />
			</View>
		);
	}
}
