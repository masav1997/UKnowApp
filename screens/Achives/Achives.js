import React from 'react';
import { View, Dimensions, ScrollView, Image, Text } from 'react-native';
import AchivesCard from '../../components/AchivesCard';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Logo from '../../components/Logo';

const { width } = Dimensions.get('window');

export default class Achives extends React.Component {
	state = {
		email: '',
	};

	render() {
		return (
			<View style={{ textAlign: 'center', backgroundColor: '#09121C' }}>
				<ScrollView>
					<View style={{ width: width, paddingRight: 5 }}>
						<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: -30 }}>
							<Header center={<Logo />} />
							<Title title="Достижения" />
						</View>
						<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
							<AchivesCard percent={37} image={require('../../assets/icons/leader.png')} title="Лидер" />
              <AchivesCard percent={100} image={require('../../assets/icons/money.png')} title="Миллионер" />
              <AchivesCard percent={100} image={require('../../assets/icons/calendar.png')} title="Постоянство" />
              <AchivesCard percent={100} image={require('../../assets/icons/checkmark.png')} title="Всё верно" />
              <AchivesCard percent={37} image={require('../../assets/icons/medal.png')} title="Vene, vidi, vici" />
              <AchivesCard percent={100} image={require('../../assets/icons/car.png')} title="Автомобилист" />
              <AchivesCard percent={37} image={require('../../assets/icons/leader.png')} title="Лидер" />
              <AchivesCard percent={100} image={require('../../assets/icons/money.png')} title="Миллионер" />
						</View>
					</View>
				</ScrollView><NavBar/>
			</View>
		);
	}
}
