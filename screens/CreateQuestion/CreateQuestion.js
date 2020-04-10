import React from 'react';
import { View, ScrollView, Dimensions, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRedTitle from '../../components/HeaderRedTitle';
import BackButton from '../../components/BackButton';
import Input from '../../components/Input';
import InputWithImg from '../../components/InputWithImg';
import Button from '../../components/Button';
import InputBorder from '../../components/InputBorder';
const { width } = Dimensions.get('window');
import { AppConsumer } from '../../AppContextProvider';
import { TextInput } from 'react-native-paper';

export default class CreateQuestion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pressInput: 0,
			pressButton: true,
			pressInput1: true,
			inputList: [],
			inputList1: [],
			questions: [],
			cards: [],
		};
		this.onAddBtnClick = this.onAddBtnClick.bind(this);
		this.onAddBtnClick1 = this.onAddBtnClick1.bind(this);
		this._onShowCard = this._onShowCard.bind(this);
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
		description: ''
	};

	onAddBtnClick(event) {
		const inputList = this.state.inputList;
		this.setState({
			inputList: inputList.concat(<Input label="Ответ" />),
		});
	}
	onAddBtnClick1(event) {
		const inputList1 = this.state.inputList1;
		this.setState({
			inputList1: inputList1.concat(
				<View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
					<Input label="Ответ" />
				</View>
			),
		});
		this.state.inputList.map(function(input, index) {
			return input;
		});
	}

	_onShowCard(event) {
		const cards = this.state.cards;
		this.setState({
			cards: cards.concat(
				<AppConsumer>
					{appConsumer1 => (
						<View>
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
							<View style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }} key={cards.length}>
								<InputWithImg label="Текст вопроса" />
								<InputBorder label="Верный ответ" />
								<Input label="Ответ" />
								<TouchableOpacity onPress={this.onAddBtnClick1}>
									<Text
										style={{
											fontSize: 13,
											fontWeight: '500',
											lineHeight: 16,
											textAlign: 'center',
											color: '#FF3358',
											alignSelf: 'center',
										}}
									>
										+ Вариант ответа
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					)}
				</AppConsumer>
			),
		});
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
							<View
								style={{
									textAlign: 'center',
									backgroundColor: appConsumer1.theme.colors.bg1,
									width: width,
								}}
							>
								<View style={{ paddingLeft: 15, paddingRight: 15 }}>
									<View style={{ flexDirection: 'row' }}>
										<Header
											left={
												<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
													<View style={{ width: 60, height: 50, top: 10 }}>
														<BackButton onPress={() => this.props.navigation.goBack()}/>
													</View>
												</TouchableOpacity>
											}
											center={<HeaderTitle title="Создание викторины" />}
											right={<HeaderRedTitle title="Очистить" />}
										/>
									</View>
								</View>
								<ScrollView>
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
											<InputWithImg
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
											{this.state.inputList.map(function(input, index) {
												return input;
											})}
											<Input
												label="Комментарий к правильному ответу"
												value={this.state.description}
												onChangeText={text => this.setState({ description: text })}
												placeholder="Ссылка или краткое пояснение"
											/>
											<TouchableOpacity onPress={this.onAddBtnClick}>
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
										{this.state.cards.map(function(input, index) {
											return input;
										})}
										{this.state.inputList1.map(function(input, index) {
											return input;
										})}
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
										<TouchableOpacity
											style={{ marginLeft: 15, marginRight: 15, marginBottom: 10 }}
											onPress={this._onShowCard}
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
									</View>
									<View style={{ marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom:150 }}>
									<Button
										buttonTitle="Продолжить"
										onPress={() => this.props.navigation.navigate('FinishCreate')}
									/>
								</View>
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
