import { FlatList, ImageBackground, View } from 'react-native';
import { IPage } from '../../../App';
import {
    ComponentButtonSlider, ComponentListMarker, ComponentTitleSlider
} from '../../components';
import { styles } from './styles';
export function Slider2({ setPageI }: IPage) {
    const slide1 = require("../../assets/slide1.png")
    const slide1Texts = [
        { id: '1', text: 'Converse com o motorista'},
        { id: '2', text: 'Compartilhe o trajeto com seus contatos disponíveis'},
        { id: '3', text: 'Planeje o trajeto que ele irá seguir pelo aplicativo'},
    ]
    return (
        <ImageBackground source={slide1} style={styles.container} >
            <View style={styles.panel}>
                <ComponentTitleSlider titleI='Para contato com o motorista' />
                <FlatList 
                    data={slide1Texts}
                    renderItem={({ item }) => 
                        <ComponentListMarker key={item.id} textMarker={item.text} />
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.buttonSlider}>
                <ComponentButtonSlider onPressI={() => setPageI(1)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(2)} page={true}/>
                <ComponentButtonSlider onPressI={() => setPageI(3)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(4)} page={false}/>
                <ComponentButtonSlider onPressI={() => setPageI(5)} page={false}/>
            </View>
        </ImageBackground>
    );
}