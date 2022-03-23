/*
* @bainloko
* DDM II
* 15/03/2022
*/

import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
    var latitude = -31.33, longitude = -54.07;

    return (
        <View style={styles.container}>
            <MapView
                provider={"google"}
                initialRegion={{latitude: latitude, longitude: longitude, latitudeDelta: 0.0, latitudeDelta: 0.0}}
                mapType="hybrid"
                loadingEnabled={true}
                style={styles.map}>

                <MapView.Marker
                    coordinate={{latitude: latitude, longitude: longitude}}
                    title={"Este é um Marcador!"}
                    description={"Esta é a descrição padrão deste Marcador."}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    height: Dimensions.get('window').height * .05,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});