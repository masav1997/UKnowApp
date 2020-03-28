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

export default class MainPageFilters extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<View style={{ textAlign: 'center', textAlign: 'center', backgroundColor: '#09121C' }}>
				<ScrollView>
					<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: -30 }}>
						<Header center={<Logo />} />
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 4.5 }}>
								<Title title="Викторины" />
							</View>
							<View style={{ flex: 1 }}>
								<PlusButton />
							</View>
						</View>
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
								Рекламные
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
					<AboutQuiz title="Викторина на знание истории отечетсвенного автопрома" descr1="Призовой фонд:" descr2="25 000 руб + подарки" descr3="Начнется через:" descr4="15 ч 15 мин" />
					<Text
						style={{
							fontSize: 16,
							color: '#898F97',
							fontWeight: '500',
							lineHeight: 16,
							marginLeft: 15,
							marginTop: 15,
							marginBottom: 20,
						}}
					>
						Категории
					</Text>
					<ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
						<WinBlock
							image={require('../../assets/icons/carIcon.png')}
							name="Автомобили"
							data="350 викторин"
						/>
						<WinBlock image={require('../../assets/icons/bookIcon.png')} name="Знания" data="18 викторин" />
						<WinBlock
							image={require('../../assets/icons/carIcon.png')}
							name="Автомобили"
							data="350 викторин"
						/>
					</ScrollView>
					<View style={{ flexDirection: 'row', marginTop: 10 }}>
					<View style={{ flex: 5 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#898F97',
									marginLeft: 15,
								}}
							>
								Популярные
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
