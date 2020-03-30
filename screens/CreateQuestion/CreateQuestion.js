import React from 'react';
import { View, ScrollView, Dimensions, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRedTitle from '../../components/HeaderRedTitle';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import Button from '../../components/Button';
import InputBorder from '../../components/InputBorder';
const { width } = Dimensions.get('window');
import { AppConsumer } from '../../AppContextProvider';

export default class CreateQuestion extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pressInput: true, pressButton: true, pressInput1: true };
	}

	state = {
		question: '',
		answer1: '',
		answer2: '',
		answer3: '',
		question1: '',
		answer1_1: '',
		answer2_1: '',
		answer3_1: '',
	};

	_onShowInput() {
		if (!this.state.pressInput) {
			this.setState({ pressInput: true });
		} else {
			this.setState({ pressInput: false });
		}
	}

	_onShowInput1() {
		if (!this.state.pressInput1) {
			this.setState({ pressInput1: true });
		} else {
			this.setState({ pressInput1: false });
		}
	}

	_onShowCard() {
		if (!this.state.pressButton) {
			this.setState({ pressButton: true });
		} else {
			this.setState({ pressButton: false });
		}
	}

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
								<ScrollView>
									<View style={{ width: width }}>
										<View style={{ marginLeft: 15, marginRight: 15 }}>
											<Header
												left={
													<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
														<View style={{ width: 60, height: 50, top: 10 }}>
															<BackButton />
														</View>
													</TouchableOpacity>
												}
												center={<HeaderTitle title="Создание викторины" />}
												right={<HeaderRedTitle title="Очистить" />}
											/>
										</View>
									</View>
									<View
										style={{
											backgroundColor: appConsumer1.theme.colors.card,
											height: 'auto',
											borderTopRightRadius: 16,
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											marginLeft: 15,
											marginRight: 15,
											marginBottom: 15,
										}}
									>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '500',
												lineHeight: 20,
												marginTop: 15,
												marginBottom: 15,
												marginLeft: 15,
												color: '#898F97',
											}}
										>
											Вопрос
										</Text>
										<View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
											<Input
												label="Текст вопроса"
												value={this.state.question}
												onChangeText={text => this.setState({ question: text })}
											/>
											<InputBorder
												label="Верный ответ"
												value={this.state.answer1}
												onChangeText={text => this.setState({ answer1: text })}
											/>
											<Input
												label="Ответ"
												value={this.state.answer2}
												onChangeText={text => this.setState({ answer2: text })}
											/>

											{this.state.pressInput ? (
												<TouchableOpacity onPress={this._onShowInput.bind(this)}>
													<Text
														style={{
															fontSize: 13,
															fontWeight: '500',
															lineHeight: 16,
															marginBottom: 10,
															textAlign: 'center',
															color: '#FF3358',
														}}
													>
														+ Вариант ответа
													</Text>
												</TouchableOpacity>
											) : (
												<View>
													<Input
														label="Ответ"
														value={this.state.answer3}
														onChangeText={text => this.setState({ answer3: text })}
													/>
													<TouchableOpacity onPress={this._onShowInput.bind(this)}>
														<Text
															style={{
																fontSize: 13,
																fontWeight: '500',
																lineHeight: 16,
																marginBottom: 10,
																textAlign: 'center',
																color: '#FF3358',
															}}
														>
															+ Вариант ответа
														</Text>
													</TouchableOpacity>
												</View>
											)}
										</View>
									</View>
									<View
										style={{
											backgroundColor: appConsumer1.theme.colors.card,
											height: 'auto',
											borderTopRightRadius: 16,
											borderTopLeftRadius: 16,
											borderBottomLeftRadius: 16,
											marginLeft: 15,
											marginRight: 15,
											marginBottom: 15,
										}}
									>
										<Text
											style={{
												fontSize: 16,
												fontWeight: '500',
												lineHeight: 20,
												marginTop: 15,
												marginBottom: 15,
												marginLeft: 15,
												color: '#898F97',
											}}
										>
											Следующий вопрос
										</Text>
										{this.state.pressButton ? (
											<TouchableOpacity
												style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}
												onPress={this._onShowCard.bind(this)}
											>
												<Text
													style={{
														fontSize: 16,
														fontWeight: 'bold',
														lineHeight: 20,
														marginBottom: 10,
														textAlign: 'center',
														color: '#FF3358',
													}}
												>
													+ Ещё вопрос
												</Text>
											</TouchableOpacity>
										) : (
											<View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
												<Input
													label="Текст вопроса"
													value={this.state.question1}
													onChangeText={text => this.setState({ question1: text })}
												/>
												<InputBorder
													label="Верный ответ"
													value={this.state.answer1_1}
													onChangeText={text => this.setState({ answer1: text })}
												/>
												<Input
													label="Ответ"
													value={this.state.answer2_1}
													onChangeText={text => this.setState({ answer2: text })}
												/>

												{this.state.pressInput1 ? (
													<TouchableOpacity onPress={this._onShowInput1.bind(this)}>
														<Text
															style={{
																fontSize: 13,
																fontWeight: '500',
																lineHeight: 16,
																marginBottom: 10,
																textAlign: 'center',
																color: '#FF3358',
															}}
														>
															+ Вариант ответа
														</Text>
													</TouchableOpacity>
												) : (
													<Input
														label="Ответ"
														value={this.state.answer3_1}
														onChangeText={text => this.setState({ answer2: text })}
													/>
												)}
											</View>
										)}
									</View>
								</ScrollView>
								<View style={{ marginLeft: 15, marginRight: 15, marginTop: 15 }}>
									<Button
										buttonTitle="Продолжить"
										onPress={() => this.props.navigation.navigate('FinishCreate')}
									/>
								</View>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
