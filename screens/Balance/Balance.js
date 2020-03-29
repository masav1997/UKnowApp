import React from 'react';
import { View, ScrollView, Dimensions, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import OperationsPlus from '../../components/OperationsPlus';
import OperationsMinus from '../../components/OperationsMinus';
import BackButton from '../../components/BackButton';
import Modal from 'react-native-modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AppConsumer } from '../../AppContextProvider';
import RadioButton from '../../components/RadioButton';

const { width } = Dimensions.get('window');

const options = [
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

export default class Balance extends React.Component {
	state = {
		isModalVisible: false,
		isModalVisible1: false,
		summa: '',
		summa1: '',
		num: '',
		pressInput: true,
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	toggleModal1 = () => {
		this.setState({ isModalVisible1: !this.state.isModalVisible1 });
	};

	_onShowInput() {
		if (!this.state.pressInput) {
			this.setState({ pressInput: false });
		} else {
			this.setState({ pressInput: false });
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
							<View style={{ width: width - 30, textAlign: 'center' }}>
								<ScrollView>
									<Header
										left={
											<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
												<View style={{ width: 60, height: 50, top: 10 }}>
													<BackButton />
												</View>
											</TouchableOpacity>
										}
										center={<HeaderTitle title="Баланс" />}
									/>
									<Text
										style={{
											fontStyle: 'normal',
											fontSize: 24,
											lineHeight: 29,
											fontWeight: 'bold',
											color: '#FFF',
											textAlign: 'center',
											marginBottom: 5,
											marginTop: 30,
										}}
									>
										1 550 руб.
									</Text>
									<Text
										style={{
											fontStyle: 'normal',
											fontSize: 16,
											lineHeight: 20,
											fontWeight: '500',
											color: '#898F97',
											textAlign: 'center',
											marginBottom: 30,
										}}
									>
										ваш баланс
									</Text>
									<Modal isVisible={this.state.isModalVisible}>
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
												Пополнение
											</Text>
											<Input label="Сумма" value={this.state.summa} />
											<Text style={{ fontSize: 16, color: '#898F97', marginBottom: 20 }}>
												Способ пополнения
											</Text>
											<RadioButton options={options} />
											<Button buttonTitle="Пополнить" onPress={this.toggleModal} />
										</View>
									</Modal>
									<View style={{ flexDirection: 'row' }}>
										<View
											style={{
												flex: 1,
												backgroundColor: '#FF3358',
												borderRadius: 15,
												width: width - 30,
												height: 50,
												alignSelf: 'center',
												marginBottom: 25,
												shadowColor: 'rgba(255, 51, 88, 0.6)',
												shadowOpacity: 0.8,
												shadowRadius: 15,
												shadowOffset: {
													height: -1,
													width: 0,
												},
											}}
										>
											<TouchableOpacity
												style={{
													width: '100%',
													height: '100%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
												onPress={this.toggleModal}
											>
												<Text
													style={{
														color: '#FFFFFF',
														lineHeight: 16,
														fontWeight: 'bold',
													}}
												>
													Попоплить
												</Text>
											</TouchableOpacity>
										</View>
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
													Вывести
												</Text>
												<Input label="Сумма" value={this.state.summa1} />
												<Text style={{ fontSize: 16, color: '#898F97', marginBottom: 20 }}>
													Способ вывода
												</Text>
												<RadioButton options={options} onPress={this._onShowInput.bind(this)} />
												{this.state.pressInput ? null : (
													<Input label="Номер счёта" value={this.state.num} />
												)}
												<Button buttonTitle="Пополнить" onPress={this.toggleModal1} />
											</View>
										</Modal>
										<View
											style={{
												flex: 1,
												backgroundColor: '#000',
												borderRadius: 15,
												width: width - 30,
												height: 50,
												alignSelf: 'center',
												marginBottom: 25,
												borderColor: '#FF3358',
												borderWidth: 5,
												marginLeft: 15,
												shadowColor: 'rgba(255, 51, 88, 0.6)',
												shadowOpacity: 0.8,
												shadowRadius: 15,
												shadowOffset: {
													height: -1,
													width: 0,
												},
											}}
										>
											<TouchableOpacity
												style={{
													width: '100%',
													height: '100%',
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
												}}
												onPress={this.toggleModal1}
											>
												<Text
													style={{
														color: '#FF3358',
														lineHeight: 16,
														fontWeight: 'bold',
													}}
												>
													Вывести
												</Text>
											</TouchableOpacity>
										</View>
									</View>
									<Text style={{ fontSize: 16, color: '#898F97', marginBottom: 20 }}>
										История операций
									</Text>
									<OperationsPlus data="21.08.2020" name="Яндекс касса" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Яндекс касса" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Яндекс касса" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Яндекс касса" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
									<OperationsPlus data="21.08.2020" name="Победа" sum="+ 1800 руб." />
									<OperationsMinus data="21.08.2020" name="BIP " sum="- 1800 руб." />
								</ScrollView>
							</View>
						</SafeAreaView>
					</View>
				)}
			</AppConsumer>
		);
	}
}
