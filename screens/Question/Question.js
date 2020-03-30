import React from 'react';
import { View, ScrollView, Dimensions, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderQuestionTitle from '../../components/HeaderQuestionTitle';
import HeaderQuestionDesc from '../../components/HeaderQuestionDesc';
import BackButton from '../../components/BackButton';
import QuestionBlock from '../../components/Question';
import AnswerBlock from '../../components/AnswerBlock';
import Button from '../../components/Button';

const { width } = Dimensions.get('window');

export default class Question extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#19232F', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ textAlign: 'center', backgroundColor: '#09121C' }}>
						<ScrollView>
							<View
								style={{
									backgroundColor: '#19232f',
									height: 'auto',
									borderBottomLeftRadius: 35,
									borderBottomRightRadius: 35,
									marginBottom: 35,
								}}
							>
								<View style={{ marginLeft: 15, marginRight: 15 }}>
									<Header
										left={
											<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
												<View style={{ width: 60, height: 50, top: 10 }}>
													<BackButton />
												</View>
											</TouchableOpacity>
										}
										center={<HeaderQuestionTitle title="15:45" />}
										right={<HeaderQuestionDesc question="8 из 15" />}
									/>
								</View>
								<QuestionBlock question="Какой автомобиль победил в гонке «24 часа Ле-манн» в 1964 году?" />
							</View>
							<AnswerBlock id="A" answer="Mercedes Benz GlS-2510" />
							<AnswerBlock id="B" answer="Ferrari F350" />
							<AnswerBlock id="C" answer="Lotus MG-13" />
							<AnswerBlock id="D" answer="Жигули Лада 2108" />
							<View style={{ marginTop: 15, width: width - 30, alignSelf: 'center' }}>
								<Button
									buttonTitle="Продолжить"
									onPress={() => this.props.navigation.navigate('FinishPage1')}
								/>
							</View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('FinishPage2')}>
								<Text
									style={{
										fontSize: 16,
										fontWeight: '500',
										lineHeight: 20,
										marginBottom: 25,
										textAlign: 'center',
										color: '#FF3358',
									}}
								>
									Пропустить
								</Text>
							</TouchableOpacity>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
