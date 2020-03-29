import React from 'react';
import { View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import HeaderRedTitle from '../../components/HeaderRedTitle';
import BackButton from '../../components/BackButton';
import RadioList from '../../components/RadioList';
import Multislider from '../../components/Multislider';
import Slider from '../../components/Slider';
import Button from '../../components/Button';
import Input from '../../components/Input';

const { width } = Dimensions.get('window');

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
	};
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#09121C', alignItems: 'center' }}>
				<SafeAreaView
					style={{
						paddingTop: Platform.OS === 'android' ? 25 : 0,
					}}
				>
					<View style={{ textAlign: 'center', textAlign: 'center', backgroundColor: '#09121C' }}></View>
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
								center={<HeaderTitle title="Создание викторины" />}
								right={<HeaderRedTitle title="Очистить" />}
							/>
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
							<Input
								label="Дата и время проведения"
								value={this.state.title}
								onChangeText={text => this.setState({ title: text })}
								placeholder="22.02.2020 13:45"
							/>
							<Button
								buttonTitle="Далее"
								onPress={() => this.props.navigation.navigate('CreateQuestion')}
							/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}
