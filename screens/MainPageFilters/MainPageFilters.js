import React from 'react';
import { View, Dimensions, ScrollView, Image, Text, SafeAreaView } from 'react-native';
import SearchBlock from '../../components/SearchBlock';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Logo from '../../components/Logo';
import PlusButton from '../../components/PlusButton';
import AboutQuizBlock from '../../components/AboutQuiz';
import { AppConsumer } from '../../AppContextProvider';

const { width } = Dimensions.get('window');

export default class MainPageFilters extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<AppConsumer>
				{(appConsumer1) => (
					<View style={{ flex: 1, backgroundColor: '#09121C', alignItems: 'center' }}>
						<SafeAreaView
							style={{
								paddingTop: Platform.OS === 'android' ? 25 : 0,
							}}
						>
							<View style={{ textAlign: 'center', textAlign: 'center', backgroundColor: '#09121C' }}>
								<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: -40 }}>
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
								<ScrollView>
									<SearchBlock />
									<View style={{ flexDirection: 'row', marginTop: 10 }}>
										<View style={{ flex: 1 }}>
											<Text
												style={{
													fontSize: 16,
													color: '#898F97',
													marginLeft: 15,
												}}
											>
												Результаты поиска
											</Text>
										</View>
										<View style={{ flex: 1 }}>
											<Text
												style={{
													fontSize: 13,
													color: '#FF3358',
													marginRight: 15,
													textAlign: 'right',
													top: 3,
												}}
											>
												Сбросить фильтры
											</Text>
										</View>
									</View>
									<View
										style={{ flexDirection: 'row', marginTop: 25, marginLeft: 15, marginRight: 15 }}
									>
										<View style={{ flex: 1 }}>
											<View
												style={{
													width: 40,
													height: 40,
													borderRadius: 40,
													backgroundColor: appConsumer1.theme.colors.card,
												}}
											>
												<Text
													style={{
														fontSize: 24,
														color: '#898F97',
														textAlign: 'center',
														fontWeight: '500',
														top:'8%'
													}}
												>
													#
												</Text>
											</View>
										</View>
										<View style={{ flex: 5 }}>
											<Text
												style={{
													fontSize: 16,
													color: '#FFFFFF',
													textAlign: 'left',
													fontWeight: '500',
												}}
											>
												#quiz
											</Text>
											<Text
												style={{
													fontSize: 13,
													color: '#898F97',
													textAlign: 'left',
													fontWeight: '500',
												}}
											>
												305 quizes
											</Text>
										</View>
									</View>
									<View
										style={{ flexDirection: 'row', marginTop: 25, marginLeft: 15, marginRight: 15, marginBottom: 15 }}
									>
										<View style={{ flex: 1 }}>
											<View
												style={{
													width: 40,
													height: 40,
													borderRadius: 40,
													backgroundColor: appConsumer1.theme.colors.card,
												}}
											>
												<Text
													style={{
														fontSize: 24,
														color: '#898F97',
														textAlign: 'center',
														fontWeight: '500',
														top:'8%',
													}}
												>
													#
												</Text>
											</View>
										</View>
										<View style={{ flex: 5 }}>
											<Text
												style={{
													fontSize: 16,
													color: '#FFFFFF',
													textAlign: 'left',
													fontWeight: '500',
												}}
											>
												#quiz
											</Text>
											<Text
												style={{
													fontSize: 13,
													color: '#898F97',
													textAlign: 'left',
													fontWeight: '500',
												}}
											>
												305 quizes
											</Text>
										</View>
									</View>
									<AboutQuizBlock
										title="Викторина на знание истории отечетсвенного автопрома"
										descr1="Призовой фонд:"
										descr2="25 000 руб + подарки"
										descr3="Начнется через:"
										descr4="15 ч 15 мин"
										onPress={() => this.props.navigation.navigate('AboutQuiz')}
									/>
									<AboutQuizBlock
										title="Викторина на знание истории отечетсвенного автопрома"
										descr1="Призовой фонд:"
										descr2="25 000 руб + подарки"
										descr3="Начнется через:"
										descr4="15 ч 15 мин"
										onPress={() => this.props.navigation.navigate('AboutQuiz')}
									/>
									<AboutQuizBlock
										title="Викторина на знание истории отечетсвенного автопрома"
										descr1="Призовой фонд:"
										descr2="25 000 руб + подарки"
										descr3="Начнется через:"
										descr4="15 ч 15 мин"
										onPress={() => this.props.navigation.navigate('AboutQuiz')}
									/>
									<AboutQuizBlock
										title="Викторина на знание истории отечетсвенного автопрома"
										descr1="Призовой фонд:"
										descr2="25 000 руб + подарки"
										descr3="Начнется через:"
										descr4="15 ч 15 мин"
										onPress={() => this.props.navigation.navigate('AboutQuiz')}
									/>
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
