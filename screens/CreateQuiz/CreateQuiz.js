import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRedTitle from '../../components/HeaderRedTitle';
import BackButton from '../../components/BackButton';
import RadioList from '../../components/RadioList';
import Multislider from '../../components/Multislider';
import Slider from '../../components/Slider';
import Button from '../../components/Button';
import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';
import { AppConsumer } from '../../AppContextProvider';
import { DatePicker } from '../../components/DatePicker/datePicker/DatePicker';
import Modal from 'react-native-modal';
import { utils } from '../../utils';
export const { getFormatedDate, getToday } = new utils({ isGregorian: true });

const { width } = Dimensions.get('window');

const options = [
	{
		key: 'data',
		text: 'По дате',
	},
	{
		key: 'mount',
		text: 'По количеству участников',
	},
];

const options1 = [
	{
		key: 'yandex',
		text: 'Яндекс.Деньги',
	},
	{
		key: 'tinkoff',
		text: 'Тинькофф',
	},
	{
		key: 'sberbank',
		text: 'Сбербанк',
	},
	{
		key: 'paypal',
		text: 'PayPal',
	},
];

const PROP = [
	{
		key: 'cars',
		text: 'Автомобили',
	},
	{
		key: 'knowledge',
		text: 'Знания',
	},
	{
		key: 'health',
		text: 'Красота и медицина',
	},
	{
		key: 'travel',
		text: 'Путешествия',
	},
	{
		key: 'games',
		text: 'Игры',
	},
	{
		key: 'films',
		text: 'Фильмы',
	},
	{
		key: 'music',
		text: 'Музыка',
	},
	{
		key: 'other',
		text: 'Разное',
	},
];

export default class CreateQuiz extends React.Component {
	state = {
		title: '',
		description: '',
		data: '',
		people: '',
		min: '',
		minTime: '',
		date: '30.03.2020',
		time: '16:00',
		month: '',
		isModalVisible: false,
		isModalVisible1: false,
		pressStatus: true,
		pressManual: true,
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	toggleModal1 = () => {
		this.setState({ isModalVisible1: !this.state.isModalVisible1 });
	};
	_onShowUnderlay() {
		if (!this.state.pressStatus) {
			this.setState({ pressStatus: true, isModalVisible1: !this.state.isModalVisible1 });
		} else {
			this.setState({ pressStatus: false, isModalVisible1: !this.state.isModalVisible1 });
		}
	}
	_onShowInput() {
		if (!this.state.pressManual) {
			this.setState({ pressManual: true });
		} else {
			this.setState({ pressManual: false });
		}
	}
	render() {
		return (
			<AppConsumer>
				{(appConsumer1) => (
					<View style={{ flex: 1, backgroundColor: appConsumer1.theme.colors.bg2, alignItems: 'center' }}>
						<SafeAreaView
							style={{
								paddingTop: Platform.OS === 'android' ? 25 : 0,
							}}
						>
							<View
								style={{
									textAlign: 'center',
									textAlign: 'center',
									backgroundColor: appConsumer1.theme.colors.bg2,
								}}
							></View>
							<View style={{ width: width - 30, textAlign: 'center' }}>
								<View
									style={{
										flexDirection: 'row',
										backgroundColor: appConsumer1.theme.colors.bg2,
										marginBottom: -10,
									}}
								>
									<Header
										left={
											<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
												<View style={{ width: 60, height: 50, top: 10 }}>
													<BackButton onPress={() => this.props.navigation.goBack()} />
												</View>
											</TouchableOpacity>
										}
										center={<HeaderTitle title="Создание викторины" />}
										right={<HeaderRedTitle title="Очистить" />}
									/>
								</View>
								<ScrollView style={{ marginBottom: 130 }}>
									<RadioList PROP={PROP} title="Категория" />
									<Multislider title="Стоимость входа" />
									<Slider title="Первое место" />
									<Slider title="Второе место" />
									<Slider title="Третье место" />
									<Input
										label="Название викторины"
										value={this.state.title}
										onChangeText={(text) => this.setState({ title: text })}
										placeholder="Название викторины тут"
									/>
									<Input
										label="Описание викторины"
										value={this.state.title}
										onChangeText={(text) => this.setState({ title: text })}
										placeholder="Описание тут"
									/>
									<TouchableOpacity onPress={this.toggleModal}>
										<Input
											label="Дата и время проведения"
											value={this.state.title}
											placeholder={this.state.date + ' ' + this.state.time}
											editable={false}
										/>
									</TouchableOpacity>
									<Modal isVisible={this.state.isModalVisible}>
										<View
											style={{
												width: width - 30,
												height: 'auto',
												backgroundColor: appConsumer1.theme.colors.card,
												borderTopLeftRadius: 16,
												borderTopRightRadius: 16,
												borderBottomLeftRadius: 16,
											}}
										>
											<DatePicker
												options={{
													backgroundColor: appConsumer1.theme.colors.card,
													textHeaderColor: appConsumer1.theme.colors.text,
													textDefaultColor: appConsumer1.theme.colors.text,
													selectedTextColor: appConsumer1.theme.colors.card,
													mainColor: appConsumer1.theme.colors.text,
													textSecondaryColor: appConsumer1.theme.colors.text,
													borderColor: appConsumer1.theme.colors.text,
												}}
												mode="datepicker"
												minuteInterval={30}
												style={{ borderRadius: 10 }}
												onTimeChange={(date) => this.setState({ time: date })}
												onDateChange={(date) => this.setState({ date: date })}
												onMonthYearChange={(date) => this.setState({ month: date })}
												minuteInterval={1}
											/>
											<View style={{ width: width - 60, alignSelf: 'center' }}>
												<Button buttonTitle="Сохранить" onPress={this.toggleModal} />
											</View>
										</View>
									</Modal>
									{this.state.pressManual ? (
										<View>
											<Input
												label="Минимальное количество участников"
												value={this.state.min}
												onChangeText={(text) => this.setState({ min: text })}
												placeholder="500 человек"
											/>
											<Input
												label="Максимальное время прохождения"
												value={this.state.minTime}
												onChangeText={(text) => this.setState({ minTime: text })}
												placeholder="50 минут"
											/>
										</View>
									) : null}
									<Text
										style={{
											fontSize: 16,
											color: '#898F97',
											marginBottom: 20,
										}}
									>
										Старт викторины
									</Text>
									<RadioButton options={options} />
									<Modal isVisible={this.state.isModalVisible1}>
										<View
											style={{
												width: width - 30,
												height: 'auto',
												backgroundColor: appConsumer1.theme.colors.bg2,
												borderTopLeftRadius: 16,
												borderTopRightRadius: 16,
												borderBottomLeftRadius: 16,
												paddingRight: 15,
												paddingLeft: 15,
												paddingTop: 15,
												textAlign: 'left',
											}}
										>
											<Text style={{ fontSize: 16, color: '#898F97', marginBottom: 20 }}>
												Cпонсирование
											</Text>
											<Input label="Сумма" keyboardType="phone-pad" />
											<Text style={{ fontSize: 16, color: '#898F97', marginBottom: 20 }}>
												Способ спонсирования
											</Text>
											<RadioButton options={options1} />
											<Button buttonTitle="Спонсировать" onPress={this.toggleModal1} />
										</View>
									</Modal>
									<View style={{ flexDirection: 'row' }}>
										<View
											style={
												this.state.pressStatus
													? {
															flex: 1,
															backgroundColor: '#000',
															borderRadius: 15,
															marginRight: 15,
															width: '100%',
															height: 50,
															alignSelf: 'center',
															marginBottom: 15,
													  }
													: {
															flex: 1,
															borderColor: '#FF3358',
															borderRadius: 15,
															borderWidth: 3,
															marginRight: 15,
															width: '100%',
															height: 50,
															alignSelf: 'center',
															marginBottom: 15,
															shadowColor: 'rgba(255, 51, 88, 0.6)',
															shadowOpacity: 0.8,
															shadowRadius: 15,
															shadowOffset: {
																height: -1,
																width: 0,
															},
													  }
											}
										>
											<TouchableOpacity
												style={{
													width: '100%',
													height: '100%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
												onPress={this._onShowUnderlay.bind(this)}
											>
												<Text style={{ color: '#FFFFFF', lineHeight: 16, fontWeight: 'bold' }}>
													Спонсировать
												</Text>
											</TouchableOpacity>
										</View>
										<View
											style={
												this.state.pressManual
													? {
															flex: 1,
															backgroundColor: '#000',
															borderRadius: 15,
															width: '100%',
															height: 50,
															alignSelf: 'center',
															marginBottom: 15,
													  }
													: {
															flex: 1,
															borderColor: '#FF3358',
															borderRadius: 15,
															borderWidth: 3,
															width: '100%',
															height: 50,
															alignSelf: 'center',
															marginBottom: 15,
															shadowColor: 'rgba(255, 51, 88, 0.6)',
															shadowOpacity: 0.8,
															shadowRadius: 15,
															shadowOffset: {
																height: -1,
																width: 0,
															},
													  }
											}
										>
											<TouchableOpacity
												style={{
													width: '100%',
													height: '100%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
												onPress={this._onShowInput.bind(this)}
											>
												<Text style={{ color: '#FFFFFF', lineHeight: 16, fontWeight: 'bold' }}>
													Запустить вручную
												</Text>
											</TouchableOpacity>
										</View>
									</View>
									{!this.state.pressManual ? (
										<View>
											<Input
												label="Минимальное количество участников"
												value={this.state.min}
												onChangeText={(text) => this.setState({ min: text })}
												placeholder="500 человек"
											/>
											<Input
												label="Максимальное время прохождения"
												value={this.state.minTime}
												onChangeText={(text) => this.setState({ minTime: text })}
												placeholder="50 минут"
											/>
										</View>
									) : null}
									<Button
										buttonTitle="Далее"
										onPress={() => this.props.navigation.navigate('CreateQuestion')}
									/>
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
