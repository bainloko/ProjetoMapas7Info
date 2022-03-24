/*
 * @bainloko
 * DDM II
 * 15/03/2022
 */

import { React, useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  var [latLng, setLatLng] = useState([{x: -31.33, y: -54.07}]);
  var [titulo, setTitulo] = useState("Este é o título padrão do Marcador!");

  return (
    <View style={styles.container}>
      <View style={styles.bar}><Text>Uso de Mapas com React-Native e MapView</Text></View>
      <MapView
        style={styles.map}
        provider={'google'}
        mapType={'hybrid'}
        loadingEnabled={true}
        fitToMap={true}
        initialRegion={{
          latitude: latLng[x],
          longitude: latLng[y],
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
        onPress={(event) => {setLatLng({x: event.nativeEvent.coordinate, y: event.nativeEvent.coordinate}); console.log(event.nativeEvent.coordinate);}}
      >
        <MapView.Marker
          draggable
          coordinate={latLng}
          title={titulo}
          description={"Descrição do Marcador Padrão"}
          onDragEnd={(event) => {
            setLatLng({x: event.nativeEvent.coordinate, y: event.nativeEvent.coordinate});
          }}
          onPress={() => setTitulo("Você está na coordenada " + latLng + "!")}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    height: Dimensions.get("window").height * 0.15,
    backgroundColor: "#fff",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
