import React from 'react';
import { View, Text, Dimensions, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import AnswersBlock from '../../components/AnswersYes';
import AnswersBlock1 from '../../components/AnswersNo';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import Quit from '../../components/Quit';

const { width } = Dimensions.get('window');

export default class Answers extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#19232F', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ width: width - 30, textAlign: 'center' }}>
						<View style={{ flexDirection: 'row', marginBottom: -20 }}>
							<Header
								left={
									<TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')}>
										<View style={{ width: 40, height: 45, top: 10 }}>
											<Quit />
										</View>
									</TouchableOpacity>
								}
								center={<HeaderTitle title="Ответы" />}
							/>
						</View>
						<ScrollView style={{marginBottom:130}}>
							<AnswersBlock
								id="1"
								question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?"
								uAnswer="Жигули Лада 2108"
								answer="Mercedes Benz GlS-2510"
								description="Тут пояснение к правильному ответу"
							/>
							<AnswersBlock1
								id="2"
								question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?"
								uAnswer="Жигули Лада 2108"
								answer="Mercedes Benz GlS-2510"
								description="Тут пояснение к правильному ответу"
							/>
							<AnswersBlock
								id="3"
								question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?"
								uAnswer="Жигули Лада 2108"
								answer="Mercedes Benz GlS-2510"
								description="Тут пояснение к правильному ответу"
							/>
							<AnswersBlock
								id="4"
								question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?"
								uAnswer="Жигули Лада 2108"
								answer="Mercedes Benz GlS-2510"
								description="Тут пояснение к правильному ответу"
							/>
							<AnswersBlock
								id="5"
								question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?"
								uAnswer="Жигули Лада 2108"
								answer="Mercedes Benz GlS-2510"
								description="Тут пояснение к правильному ответу"
							/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
