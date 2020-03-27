import React from 'react';
import { View, ScrollView, Dimensions, Text, Image } from 'react-native';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import Logo from '../../components/Logo';
import FindIcon from '../../components/FindIcon';
import NameBlock from '../../components/NameBlock';
import WinBlock from '../../components/WinBlock';
import DescriptionBlock from '../../components/DescriptionBlock';

const { width } = Dimensions.get('window');

export default class AboutQuiz extends React.Component {
	render() {
		return (
			<View style={{ textAlign: 'center', backgroundColor: '#09121C' }}>
				<ScrollView>
					<View
						style={{
							backgroundColor: '#19232f',
							height: 'auto',
							width: width,
							borderBottomLeftRadius: 35,
							borderBottomRightRadius: 35,
							marginBottom: 35,
							paddingLeft: 15,
							paddingRight: 15,
						}}
					>
						<View>
							<Header left={<BackButton />} center={<Logo />} right={<FindIcon />} />
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, height: 28 }}>
								<Image
									source={require('../../assets/icons/price.png')}
									style={{ width: 20, height: 20, alignSelf: 'center', top: 3 }}
								/>
							</View>
							<View style={{ flex: 9, height: 28 }}>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 23,
										lineHeight: 28,
										fontWeight: 'bold',
										color: '#FF3358',
										textAlign: 'left',
									}}
								>
									250 руб.
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, height: 'auto' }}>
								<Text
									style={{
										fontSize: 20,
										fontWeight: 'bold',
										color: '#FFFFFF',
										textAlign: 'left',
										marginBottom: 10,
									}}
								>
									Викторина на знание истории отечетсвенного автопрома
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, height: 28, marginBottom: 20 }}>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 13,
										lineHeight: 16,
										fontWeight: '500',
										color: '#898F97',
										textAlign: 'left',
									}}
								>
									Призовой фонд:
								</Text>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 13,
										lineHeight: 16,
										fontWeight: '700',
										color: '#FEAC5E',
										textAlign: 'left',
									}}
								>
									1 500 000 руб.
								</Text>
							</View>
							<View style={{ flex: 1, height: 28 }}>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 13,
										lineHeight: 16,
										fontWeight: '500',
										color: '#898F97',
										textAlign: 'left',
									}}
								>
									Участников:
								</Text>
								<Text
									style={{
										fontStyle: 'normal',
										fontSize: 13,
										lineHeight: 16,
										fontWeight: '700',
										color: '#FFF',
										textAlign: 'left',
									}}
								>
									200 из 250
								</Text>
							</View>
						</View>
					</View>
					<Text
						style={{
							fontSize: 16,
							color: '#898F97',
							marginBottom: 20,
							marginLeft: 15,
						}}
					>
						Описание
					</Text>
					<DescriptionBlock description="Mollit qui laboris occaecat duis sunt consectetur aliqua nostrud Lorem exercitation. Commodo cillum quis culpa laborum sunt sint eiusmod elit nulla aute ullamco irure et. Sit officia non consectetur culpa velit esse. Nisi labore consequat tempor esse amet" />
					<View style={{ flexDirection: 'row', width: width }}>
						<View style={{ flex: 5 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#898F97',
									marginLeft: 15,
								}}
							>
								Список участников
							</Text>
						</View>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#FF3358',
									marginLeft: 15,
									textAlign: 'right',
								}}
							>
								Все
							</Text>
						</View>
						<View style={{ flex: 0.8 }}>
							<Image
								source={require('../../assets/icons/right.png')}
								style={{ width: 32, height: 32, bottom: 5 }}
							/>
						</View>
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginBottom: 15,
							width: width,
							paddingLeft: 15,
							paddingRight: 15,
						}}
					>
						<NameBlock name="Imam Farrhouk" image={require('../../assets/icons/avatar.png')} />
						<NameBlock name="Will Jackson" image={require('../../assets/icons/avatar1.png')} />
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginBottom: 15,
							width: width,
							marginLeft: 15,
							marginRight: 15,
						}}
					>
						<NameBlock name="Greg Warren" image={require('../../assets/icons/avatar2.png')} />
						<NameBlock name="Bessie Simmmons" image={require('../../assets/icons/avatar3.png')} />
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginBottom: 35,
							width: width,
							paddingLeft: 15,
							paddingRight: 15,
						}}
					>
						<NameBlock name="Angel Henry" image={require('../../assets/icons/avatar4.png')} />
						<NameBlock name="Soham Fisher" image={require('../../assets/icons/avatar5.png')} />
					</View>
					<Text
						style={{
							fontSize: 16,
							color: '#898F97',
							marginBottom: 20,
							marginLeft: 15,
						}}
					>
						Прошлые победители
					</Text>
					<ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
						<WinBlock
							image={require('../../assets/icons/avatar5.png')}
							name="Theresa Wilson"
							data="15 окт. 2020"
						/>
						<WinBlock
							image={require('../../assets/icons/avatar3.png')}
							name="Bessie Simm..."
							data="15 окт. 2020"
						/>
						<WinBlock
							image={require('../../assets/icons/avatar.png')}
							name="Imam Farrhouk"
							data="15 окт. 2020"
						/>
					</ScrollView>
					<View style={{ flexDirection: 'row', flex:1, alignSelf: 'center' }}>
						<Image
							source={require('../../assets/icons/delete.png')}
							style={{ width: 20, height: 20, alignSelf: 'center', bottom:13, marginRight:5 }}
						/>
						<Text
							style={{
								fontSize: 16,
								fontWeight: '500',
								lineHeight: 20,
								marginBottom: 25,
								textAlign: 'left',
								color: '#FF3358',
							}}
						>
							Удалить викторину
						</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}
