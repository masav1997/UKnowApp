import React from 'react';
import { View, ScrollView, Dimensions, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import PenIcon from '../../components/PenIcon';
import NavBar from '../../components/NavBar';
import Modal from 'react-native-modal';
import Input from '../../components/Input';
import Button from '../../components/Button';

const { width } = Dimensions.get('window');

export default class Profile extends React.Component {
	state = {
		isModalVisible: false,
		name: '',
		lastname: '',
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	render() {
		return (
			<View style={{ textAlign: 'center', backgroundColor: '#09121C' }}>
				<ScrollView>
					<ImageBackground
						blurRadius={10}
						resizeMode={'cover'}
						style={{
							height: 231,
							width: width,
							marginBottom: 35,
							paddingLeft: 15,
							paddingRight: 15,
						}}
						imageStyle={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}
						source={require('../../assets/icons/bg.png')}
					>
						<View style={{ marginBottom: 30 }}>
							<Header
								center={<Logo />}
								right={
									<TouchableOpacity onPress={this.toggleModal}>
										<PenIcon />
									</TouchableOpacity>
								}
							/>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1 }}>
								<Image
									source={require('../../assets/icons/avatar6.png')}
									style={{ width: 70, height: 70, bottom: 5 }}
								/>
							</View>
							<View style={{ flex: 3 }}>
								<View style={{ flexDirection: 'row', marginBottom: 5 }}>
									<Text
										style={{
											fontSize: 24,
											lineHeight: 29,
											color: '#fff',
											fontWeight: 'bold',
										}}
									>
										Ronald Black
									</Text>
								</View>
								<View style={{ flexDirection: 'row' }}>
									<View style={{ flex: 1 }}>
										<Text
											style={{
												fontSize: 16,
												lineHeight: 20,
												color: '#fff',
												fontWeight: '600',
											}}
										>
											350 руб.
										</Text>
									</View>
									<View style={{ flex: 1 }}>
										<Text
											style={{
												fontSize: 16,
												lineHeight: 20,
												color: '#fff',
												fontWeight: '600',
											}}
										>
											34
										</Text>
									</View>
								</View>
								<View style={{ flexDirection: 'row' }}>
									<View style={{ flex: 1 }}>
										<Text
											style={{
												fontSize: 13,
												lineHeight: 16,
												color: '#DADADA',
												fontWeight: '500',
											}}
										>
											баланс
										</Text>
									</View>
									<View style={{ flex: 1 }}>
										<Text
											style={{
												fontSize: 13,
												lineHeight: 16,
												color: '#DADADA',
												fontWeight: '500',
											}}
										>
											побед
										</Text>
									</View>
								</View>
							</View>
						</View>
					</ImageBackground>
					<Modal isVisible={this.state.isModalVisible}>
						<View
							style={{
								width: width - 30,
								height: 'auto',
								backgroundColor: '#19232F',
								borderTopLeftRadius: 16,
								borderTopRightRadius: 16,
								borderBottomLeftRadius: 16,
								paddingRight: 15,
								paddingLeft: 15,
								paddingTop: 15,
								textAlign: 'left',
							}}
						>
							<Text style={{ fontSize: 16, color: '#898F97', marginBottom: 20 }}>Ваши данные</Text>
							<Image
								source={require('../../assets/icons/avatar6.png')}
								style={{ width: 90, height: 90, bottom: 5, alignSelf: 'center' }}
							/>
							<Input
								label="Имя"
								value={this.state.name}
								onChangeText={text => this.setState({ name: text })}
							/>
							<Input
								label="Фамилия"
								value={this.state.lastname}
								onChangeText={text => this.setState({ lastname: text })}
							/>
							<Button buttonTitle="Сохранить" onPress={this.toggleModal} />
						</View>
					</Modal>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
						<View style={{ flex: 1 }}>
							<Image source={require('../../assets/icons/time.png')} style={{ width: 20, height: 20 }} />
						</View>
						<View style={{ flex: 17 }}>
							<Text
								style={{
									fontSize: 18,
									color: '#fff',
									marginBottom: 20,
									marginLeft: 15,
									textAlign: 'left',
									lineHeight: 22,
									fontWeight: 'bold',
								}}
							>
								История игр
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
						<View style={{ flex: 1 }}>
							<Image source={require('../../assets/icons/cash.png')} style={{ width: 20, height: 20 }} />
						</View>
						<View style={{ flex: 17 }}>
							<Text
								style={{
									fontSize: 18,
									color: '#fff',
									marginBottom: 20,
									marginLeft: 15,
									textAlign: 'left',
									lineHeight: 22,
									fontWeight: 'bold',
								}}
							>
								Баланс
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
						<View style={{ flex: 1 }}>
							<Image
								source={require('../../assets/icons/settings.png')}
								style={{ width: 20, height: 20 }}
							/>
						</View>
						<View style={{ flex: 17 }}>
							<Text
								style={{
									fontSize: 18,
									color: '#fff',
									marginBottom: 20,
									marginLeft: 15,
									textAlign: 'left',
									lineHeight: 22,
									fontWeight: 'bold',
								}}
							>
								Настройки
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
						<View style={{ flex: 1 }}>
							<Image source={require('../../assets/icons/help.png')} style={{ width: 20, height: 20 }} />
						</View>
						<View style={{ flex: 17 }}>
							<Text
								style={{
									fontSize: 18,
									color: '#fff',
									marginBottom: 20,
									marginLeft: 15,
									textAlign: 'left',
									lineHeight: 22,
									fontWeight: 'bold',
								}}
							>
								Помощь
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
						<View style={{ flex: 1 }}></View>
						<View style={{ flex: 17 }}>
							<Text
								style={{
									fontSize: 18,
									color: '#FF3358',
									marginBottom: 20,
									marginLeft: 15,
									textAlign: 'left',
									lineHeight: 22,
									fontWeight: 'bold',
								}}
							>
								Выйти
							</Text>
						</View>
					</View>
				</ScrollView>
				<NavBar />
			</View>
		);
	}
}