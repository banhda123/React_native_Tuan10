import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks } from './Redux_Toolkit/taskSlice';

export default function List(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.tasks.data);
  
  const [filteredData, setFilteredData] = useState([]);
  const [typeBike, setTypeBike] = useState([
    { id: 1, name: 'All', isSelected: true },
    { id: 2, name: 'Roadbike', isSelected: false },
    { id: 3, name: 'Mountain', isSelected: false },
  ]);

  useEffect(() => {
    const initialData = [
      {
        id: 1,
        name: 'Pinarello',
        price: '$1800',
        type: 'Roadbike',
        image: require('./assets/bifour_-removebg-preview.png'),
      },
      {
        id: 2,
        name: 'Pina Mountain',
        price: '$1700',
        type: 'Mountain',
        image: require('./assets/bione-removebg-preview.png'),
      },
      {
        id: 3,
        name: 'Pina Bike',
        price: '$1800',
        type: 'Roadbike',
        image: require('./assets/bithree_removebg-preview.png'),
      },
      {
        id: 4,
        name: 'Pinarello',
        price: '$1900',
        type: 'Roadbike',
        image: require('./assets/bitwo-removebg-preview.png'),
      },
      {
        id: 5,
        name: 'Pinarello',
        price: '$1500',
        type: 'Roadbike',
        image: require('./assets/bithree_removebg-preview.png'),
      },
      {
        id: 6,
        name: 'Pinarello',
        price: '$1500',
        type: 'Mountain',
        image: require('./assets/bione-removebg-preview.png'),
      },
    ];
    dispatch(setTasks(initialData));
    setFilteredData(initialData); 
  }, [dispatch]);

  const filterBikes = (type) => {
    if (type === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(bike => bike.type === type));
    }

    setTypeBike(typeBike.map(bikeType => ({
      ...bikeType,
      isSelected: bikeType.name === type,
    })));
  };

  const Item = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      onPress={() => navigation.navigate('Details', { product: item })} >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleHeader}>The world’s Best Bike</Text>

      <View style={styles.filter}>
        {typeBike.map((bikeType) => (
          <TouchableOpacity
            key={bikeType.id}
            style={[styles.filterButton, bikeType.isSelected && styles.selectedButton]}
            onPress={() => filterBikes(bikeType.name)}
          >
            <Text style={[styles.filterText, bikeType.isSelected && styles.selectedFilterText]}>
              {bikeType.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        numColumns={2}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginVertical: 50,
  },
  titleHeader: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 28.73,
    color: '#BEB6B6',
    marginBottom: 20,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E94141',
  },
  selectedButton: {
    opacity: 0.7,
    backgroundColor: '#E94141',
  },
  filterText: {
    color: 'gray',
  },
  selectedFilterText: {
    color: '#FFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 24.91,
    marginVertical: 10,
    maxWidth: 200,
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: '#F7BA8326',
    opacity: 0.8,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: 180,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: 18,
    color: '#333',
    marginTop: 5,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
