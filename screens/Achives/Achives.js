import React from 'react';
import { View, Dimensions, ScrollView, SafeAreaView } from 'react-native';
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
			<View style={{ flex: 1, backgroundColor: '#09121C', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ textAlign: 'center', backgroundColor: '#09121C' }}>
						<ScrollView>
							<View style={{ width: width, paddingRight: 5 }}>
								<View style={{ paddingLeft: 15, paddingRight: 15, marginBottom: -30 }}>
									<Header center={<Logo />} />
									<Title title="Достижения" />
								</View>
								<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
									<AchivesCard
										percent={37}
										image={require('../../assets/icons/leader.png')}
										title="Лидер"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={100}
										image={require('../../assets/icons/money.png')}
										title="Миллионер"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={100}
										image={require('../../assets/icons/calendar.png')}
										title="Постоянство"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={100}
										image={require('../../assets/icons/checkmark.png')}
										title="Всё верно"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={37}
										image={require('../../assets/icons/medal.png')}
										title="Vene, vidi, vici"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={100}
										image={require('../../assets/icons/car.png')}
										title="Автомобилист"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={37}
										image={require('../../assets/icons/leader.png')}
										title="Лидер"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
									<AchivesCard
										percent={100}
										image={require('../../assets/icons/money.png')}
										title="Миллионер"
										onPress={() => this.props.navigation.navigate('Achive')}
									/>
								</View>
							</View>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
