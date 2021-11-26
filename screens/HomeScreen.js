import { Button, Input } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import ContainerList from "../components/ContainerList.js";
import { getImages } from "../api/pexels.js";
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({ openSearch }) => {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState((''));

  const navigation = useNavigation();
  
  const imgFake = [
    {
      id: '1',
      name: 'atun',
      src: 'https://ardiaprod.vteximg.com.br/arquivos/ids/214406-1000-1000',
      price: 170
    },
    {
      id: '2',
      name: 'choclo',
      src: 'https://ardiaprod.vteximg.com.br/arquivos/ids/214378-1000-1000/Granos-de-Choclo-Amarillo-DIA-300-Gr-_1.jpg?v=637713681758870000',
      price: 88
    },
    {
      id: '3',
      name: 'pure-tomate',
      src: 'https://ardiaprod.vteximg.com.br/arquivos/ids/184713-1000-1000/Pure-de-Tomate-Arcor-520-Gr-_1.jpg?v=637427549279270000',
      price: 58
    },
    {
      id: '4',
      name: 'arbejas',
      src: 'https://ardiaprod.vteximg.com.br/arquivos/ids/199855-1000-1000/Arvejas-secas-Remojadas-DIA-440-Gr-_1.jpg?v=637559864350830000',
      price: 57
    }
  ]

  const loadImages = async (searchTerm) => {
    const res = await getImages(searchTerm);
    setPhotos(imgFake);
  };

  console.log(photos)

  useEffect(() => {
    loadImages();
  }, []);

  const handleSearch = async () => {
    await loadImages(searchTerm)
  }

  return (
    <>
      {openSearch && (
        <View style={style.searchInputContainer}>
          <Input 
          leftIcon={{ type: 'feather', name:'search', color:'white' }}
          placeholder="Search a brand"
          style={style.input} 
          leftIconContainerStyle={style.searchIcon}
          inputContainerStyle={style.searchInput} 
          onChangeText={(val) => setSearchTerm(val)}
          />
          <Button 
          title="search"
          buttonStyle={style.searchButton} 
          onPress={() => handleSearch()}
          />
        </View>
      )}
      <View style={style.container}>
        {/* <ContainerList photos={photos} /> */}
        <Text 
        style={style.input}
        onPress={ () => navigation.navigate('ContainerList', {photos: photos})} 
        >
          CATEGORIAS
        </Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInputContainer: {
    backgroundColor: "#d52b1e",
    width: "100%",
    flex: 1/12,
    flexDirection: "row",
    paddingRight: 80,
    alignItems: "center"
  },
  searchInput: {
    backgroundColor: "#122912",
    marginTop: 25,
    borderBottomWidth: 0,
    paddingHorizontal: 4,
    borderRadius: 10
  },
  input: {
    color: "white"
  },
  searchIcon: {
    paddingStart: 10,
    marginRight: 7
  },
  searchButton: {
    backgroundColor: '#303030',
    borderRadius: 5
  }
});

export default HomeScreen;
