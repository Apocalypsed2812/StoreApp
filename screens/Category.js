import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ProductItem from '../components/ProductItem';

export default class Category extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('categoryName')
        };
    };

    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    id: 1, 
                    image: [
                        {
                            url: ''
                        }
                    ],
                    name: 'Dụng cụ trượt tuyết',
                    price: '50000'
                },
                {
                    id: 2, 
                    image: [
                        {
                            url: ''
                        }
                    ],
                    name: 'Quần áo trượt tuyết',
                    price: '30000'
                },
            ]
        };
    }

    render() {
        return (
            <FlatList 
                data={this.state.products}
                contentContainerStyle={styles.container}
                numColumns={2}
                renderItem={({item}) => 
                    <View style={styles.wrapper}>
                        <ProductItem product={item} />
                    </View>
                }
                keyExtractor={item => item.id}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16
  },
  wrapper:{
    flex: 1,
    paddingHorizontal: 8
  }
});
