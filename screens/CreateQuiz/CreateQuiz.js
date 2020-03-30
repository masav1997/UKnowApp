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
import DatePicker from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';

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
		date: '30-03-2020',
		time: '16:00',
		month: '',
		isModalVisible: false,
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	render() {
		return (
			<AppConsumer>
				{appConsumer1 => (
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
													<BackButton onPress={() => this.props.navigation.goBack()}/>
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
										onChangeText={text => this.setState({ title: text })}
										placeholder="Название викторины тут"
									/>
									<Input
										label="Описание викторины"
										value={this.state.title}
										onChangeText={text => this.setState({ title: text })}
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
												current="2020-07-13"
												selected="2020-07-23"
												mode="datepicker"
												minuteInterval={30}
												style={{ borderRadius: 10 }}
												onTimeChange={date => this.setState({ time: date })}
												onDateChange={date => this.setState({ date: date })}
												onMonthYearChange={date => this.setState({ month: date })}
												minuteInterval={1}
											/>
											<View style={{ width: width - 60, alignSelf: 'center', top: -15 }}>
												<Button buttonTitle="Сохранить" onPress={this.toggleModal} />
											</View>
										</View>
									</Modal>
									<Input
										label="Количество участников"
										value={this.state.people}
										onChangeText={text => this.setState({ people: text })}
										placeholder="500 человек"
									/>
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
