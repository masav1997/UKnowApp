import React from 'react';
import { View, Dimensions, ScrollView, Image, Text } from 'react-native';
import SearchBlock from '../../components/SearchBlock';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import HeaderTitle from '../../components/HeaderTitle';
import BackButton from '../../components/BackButton';
import PlusButton from '../../components/PlusButton';
import FondsBlock from '../../components/FondsBlock';
import AboutQuizFull from '../../components/AboutQuizFull';
import AboutQuizPrice from '../../components/AboutQuizPrice';

const { width } = Dimensions.get('window');

export default class Categories extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<View style={{ textAlign: 'center', textAlign: 'center', backgroundColor: '#09121C' }}>
				<ScrollView>
					<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: 10 }}>
						<Header left={<BackButton />} center={<HeaderTitle title="Автомобили " />} />
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
					<ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
						<FondsBlock
							image={require('../../assets/icons/avatar.png')}
							name="Название фонда"
							data="до 15%"
						/>
						<FondsBlock
							image={require('../../assets/icons/avatar.png')}
							name="Название фонда"
							data="до 15%"
						/>
						<FondsBlock
							image={require('../../assets/icons/avatar.png')}
							name="Название фонда"
							data="до 15%"
						/>
					</ScrollView>
								<AboutQuizFull/>
								<AboutQuizPrice/>
				</ScrollView>
				<NavBar />
			</View>
		);
	}
}
