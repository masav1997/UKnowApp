import React from 'react';
import { View, Dimensions, ScrollView, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import SearchBlock from '../../components/SearchBlock';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import AboutQuizBlock from '../../components/AboutQuiz';
import AboutQuizPrice from '../../components/AboutQuizPrice';
import { AppConsumer } from '../../AppContextProvider';

export default class MyQuiz extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<AppConsumer>
				{appConsumer1 => (
					<View style={{ flex: 1, backgroundColor: appConsumer1.theme.colors.bg1, alignItems: 'center' }}>
						<SafeAreaView
							style={{
								paddingTop: Platform.OS === 'android' ? 25 : 0,
							}}
						>
							<View
								style={{
									textAlign: 'center',
									textAlign: 'center',
									backgroundColor: appConsumer1.theme.colors.bg1,
								}}
							>
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
									<AboutQuizPrice />
									<View style={{ marginBottom: 75 }} />
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
