import React from 'react';
import { View, ScrollView, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import SearchBlock from '../../components/SearchBlock';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import PlusButton from '../../components/PlusButton';
import AboutQuizBlock from '../../components/AboutQuiz';
import AboutQuizPrice from '../../components/AboutQuizPrice';
import WinBlock from '../../components/WinBlock';

export default class MainPageFilters extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#09121C', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ textAlign: 'center', textAlign: 'center', backgroundColor: '#09121C' }}>
						<ScrollView>
							<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: -30 }}>
								<Header center={<Logo />} />
								<View style={{ flexDirection: 'row' }}>
									<View style={{ flex: 4.5 }}>
										<Title title="Викторины" />
									</View>
									<View style={{ flex: 1 }}>
										<PlusButton onPress={() => this.props.navigation.navigate('CreateQuiz')} />
									</View>
								</View>
							</View>
							<SearchBlock onPress={() => this.props.navigation.navigate('Filters')} />
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
								<TouchableOpacity
									style={{ flex: 1.5, flexDirection: 'row' }}
									onPress={() => this.props.navigation.navigate('Quizes')}
								>
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
									<Image
										source={require('../../assets/icons/right.png')}
										style={{ width: 32, height: 32, bottom: 5 }}
									/>
								</TouchableOpacity>
							</View>
							<AboutQuizBlock
								title="Викторина на знание истории отечетсвенного автопрома"
								descr1="Призовой фонд:"
								descr2="25 000 руб + подарки"
								descr3="Начнется через:"
								descr4="15 ч 15 мин"
								onPress={() => this.props.navigation.navigate('AboutQuiz')}
							/>
							<Text
								style={{
									fontSize: 16,
									color: '#898F97',
									fontWeight: '500',
									lineHeight: 16,
									marginLeft: 15,
									marginTop: 45,
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
									onPress={() => this.props.navigation.navigate('Categories')}
								/>
								<WinBlock
									image={require('../../assets/icons/bookIcon.png')}
									name="Знания"
									data="18 викторин"
									onPress={() => this.props.navigation.navigate('Categories')}
								/>
								<WinBlock
									image={require('../../assets/icons/carIcon.png')}
									name="Автомобили"
									data="350 викторин"
									onPress={() => this.props.navigation.navigate('Categories')}
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
								<TouchableOpacity
									style={{ flex: 1.5, flexDirection: 'row' }}
									onPress={() => this.props.navigation.navigate('Quizes')}
								>
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
									<Image
										source={require('../../assets/icons/right.png')}
										style={{ width: 32, height: 32, bottom: 5 }}
									/>
								</TouchableOpacity>
							</View>
							<View style={{ marginBottom: 50 }}>
								<AboutQuizPrice onPress={() => this.props.navigation.navigate('AboutQuiz')} />
							</View>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
