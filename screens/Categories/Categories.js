import React from 'react';
import { View, Dimensions, ScrollView, Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import SearchBlock from '../../components/SearchBlock';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import BackButton from '../../components/BackButton';
import FondsBlock from '../../components/FondsBlock';
import AboutQuizFull from '../../components/AboutQuizFull';
import AboutQuizPrice from '../../components/AboutQuizPrice';

export default class Categories extends React.Component {
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
							<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 10 }}>
								<Header
									left={
										<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
											<View style={{ width: 60, height: 50, top: 10 }}>
												<BackButton />
											</View>
										</TouchableOpacity>
									}
									center={<HeaderTitle title="Автомобили " />}
								/>
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
										Список фондов
									</Text>
								</View>
								<TouchableOpacity
									style={{ flex: 1.5, flexDirection: 'row' }}
									onPress={() => this.props.navigation.navigate('Fonds')}
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
							<ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
								<FondsBlock
									image={require('../../assets/icons/avatar.png')}
									name="Название фонда"
									data="до 15%"
									onPress={() => this.props.navigation.navigate('AboutFond')}
								/>
								<FondsBlock
									image={require('../../assets/icons/avatar.png')}
									name="Название фонда"
									data="до 15%"
									onPress={() => this.props.navigation.navigate('AboutFond')}
								/>
								<FondsBlock
									image={require('../../assets/icons/avatar.png')}
									name="Название фонда"
									data="до 15%"
									onPress={() => this.props.navigation.navigate('AboutFond')}
								/>
							</ScrollView>
							<AboutQuizFull onPress={() => this.props.navigation.navigate('AboutQuiz')} />
							<AboutQuizPrice onPress={() => this.props.navigation.navigate('AboutQuiz')} />
							<View style={{ marginBottom: 75 }} />
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
