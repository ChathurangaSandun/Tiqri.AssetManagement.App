
import React from 'react';
import { Picker, Text,  StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, FAB } from 'react-native-paper';

export default class BatchInspectionScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      
    <ScrollView>
        <Appbar.Header>
          <Appbar.Content
            title="Batch Inspection"
            color="#ffffff"
            titleStyle={{ textAlign: 'left' }}
            subtitleStyle={{ textAlign: 'left' }}
          />
        </Appbar.Header>

        <Text style={styles.assetCodeStyle}>Asset Code : 1001</Text>

        <Text style={styles.subTitleStyle}>Location</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.location}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ location: itemValue })
          }>
            <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Basement" value="Basement" />
          <Picker.Item label="First" value="1st Floor" />
          <Picker.Item label="Second" value="2nd Floor" />
          <Picker.Item label="Third" value="3rd Floor" />
          <Picker.Item label="Forth" value="4th Floor" />
          <Picker.Item label="City" value="City Building" />
        </Picker>


        <Text style={styles.subTitleStyle}>Asset Type</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.assetType}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ assetType: itemValue })
          }>
            <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Chair" value="Chair" />
          <Picker.Item label="Desk" value="Desk" />
          <Picker.Item label="Monitor" value="Monitor" />
        </Picker>

        <Text style={styles.subTitleStyle}>User</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.user}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ user: itemValue })
          }>
            <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Chathuranga" value="Chathuranga" />
          <Picker.Item label="Hiran" value="Hiran" />
          <Picker.Item label="Chanaka" value="Chanaka" />
        </Picker>

        <Text style={styles.subTitleStyle}>Project</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.project}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ project: itemValue })
          }>
            <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Amex" value="Amex" />
          <Picker.Item label="Capasa" value="Capasa" />
          <Picker.Item label="Ntf" value="NTF" />
        </Picker>

        <Text style={styles.subTitleStyle}>Condition</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.condition}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ condition: itemValue })
          }>
            <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Good" value="Good" />
          <Picker.Item label="Fair" value="Fair" />
          <Picker.Item label="Bad" value="Bad" />
          <Picker.Item label="NeedToRepair" value="Need To Repair" />
        </Picker>

        <FAB
          style={styles.fab}          
          icon='add'
          label='Save'
          onPress={() => console.log('Pressed')}
        >Save</FAB>
        

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  assetCodeStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginTop:10
  },

  subTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    alignContent: 'center',
    marginTop: 10,
    marginLeft: 10
  },
  fab: {    
    margin: 16,
    right: 0,
    bottom: 0,
    color: '#000000'
  },
  pickersStyle:{
    margin: 10
  }


});