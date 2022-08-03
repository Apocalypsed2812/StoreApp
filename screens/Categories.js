import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import CategoryListItem from '../components/CategoryListItem';

export default class Categories extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };
    constructor(props){
        super(props);
        this.state = {
          categories: [
              {id: 1, name: 'Dụng cụ trượt tuyết'},
              {id: 2, name: 'Quần áo trượt tuyết'},
              {id: 3, name: 'Kính mũ'},
          ]
          //categories: []
        };
    }

    componentDidMount(){
      axios.get()
        .then(res => {
          this.setState({
            categories: res.data
          })
        })
        .catch(error => {
          console.error(error)
        })
    }

  render() {
    const {navigation} = this.props
    const {categories} = this.state
    return (
        <FlatList 
          data={categories}
          renderItem={({item}) => 
            <CategoryListItem 
                category={item}
                onPress={() => navigation.navigate('Category', {
                    categoryName: item.name
                })} />
            }
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
