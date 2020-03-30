import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import AboutQuizFull from '../../components/AboutQuizFull';
import BackButton from '../../components/BackButton';
const { width } = Dimensions.get('window');
import { AppConsumer } from '../../AppContextProvider';

export default class Quizes extends React.Component {
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
							<View style={{ textAlign: 'center', backgroundColor: appConsumer1.theme.colors.bg1 }}>
								<View
									style={{
										marginLeft: 15,
										marginRight: 15,
										flexDirection: 'row',
										marginBottom: -10,
										marginTop: -10,
									}}
								>
									<Header
										left={
											<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
												<View style={{ width: 60, height: 50, top: 10 }}>
													<BackButton onPress={() => this.props.navigation.goBack()}/>
												</View>
											</TouchableOpacity>
										}
										center={<HeaderTitle title="Список викторин" />}
									/>
								</View>
								<ScrollView style={{ width: width }}>
									<AboutQuizFull onPress={() => this.props.navigation.navigate('AboutQuiz')} />
									<AboutQuizFull onPress={() => this.props.navigation.navigate('AboutQuiz')} />
									<AboutQuizFull onPress={() => this.props.navigation.navigate('AboutQuiz')} />
									<AboutQuizFull onPress={() => this.props.navigation.navigate('AboutQuiz')} />
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
