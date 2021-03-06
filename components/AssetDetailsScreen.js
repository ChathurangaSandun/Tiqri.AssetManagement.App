import React from 'react';
import { Picker, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, FAB } from 'react-native-paper';
import { stringify } from 'qs';

export default class AssetDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: {}
    };
  }


  async getAsset() {

    await fetch('https://tiqriassetmanagement20190826101850.azurewebsites.net/api/assets?assetId=' + this.props.navigation.state.params.assetId)
      .then((res) => {
        res.json().then((data) => {
          console.log(data)
          this.setState({
            asset: data
          });

          console.log(this.state)

        }).catch(function (error) {
          console.log('Data failed', error)
        });
      }).catch(function (error) {
        console.log('request failed', error)
      })
  }

  saveUpdateAsset() {
    console.log('bbbbbb')
    console.log(JSON.stringify({
      location: this.state.location
    }));

    let data = {
      method: 'POST',
      body: JSON.stringify({
        assetId: this.props.navigation.state.params.assetId,
        location: this.state.asset.location,
        condition: this.state.asset.condition,
        project: this.state.asset.project,
        user: this.state.asset.user,
        assetType: this.state.asset.assetType
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }



    fetch('https://tiqriassetmanagement20190826101850.azurewebsites.net/api/assets', data)
      .then((result) => {
        result.json()
        alert('Asset Added');
        this.props.navigation.navigate('ScanScreen');
      }).then(result => {
        console.log(result)
      })
      .catch((error) => {
        console.log("api error" + error);
        alert(error.message);
      }
      );

  }

  async componentDidMount() {
    console.log('did mount')
    await this.getAsset();
  }


  render() {
    console.log(this.props.navigation.state.params);
    const assetId = this.props.navigation.state.params.assetId;


    return (
      <ScrollView>
        <Text style={styles.assetCodeStyle}>Asset Code : {assetId}</Text>

        <Text style={styles.subTitleStyle}>Location</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.asset.location}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({
              asset: {
                ...this.state.asset,
                location: itemValue
              }
            })
          }
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
          selectedValue={this.state.asset.assetType}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              asset: {
                ...this.state.asset,
                assetType: itemValue
              }
            })
          }>
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Chair" value="Chair" />
          <Picker.Item label="Desk" value="Desk" />
          <Picker.Item label="Monitor" value="Monitor" />
        </Picker>

        <Text style={styles.subTitleStyle}>User</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.asset.user}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              asset: {
                ...this.state.asset,
                user: itemValue
              }
            })
          }>
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Chathuranga" value="Chathuranga" />
          <Picker.Item label="Hiran" value="Hiran" />
          <Picker.Item label="Chanaka" value="Chanaka" />
        </Picker>

        <Text style={styles.subTitleStyle}>Project</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.asset.project}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              asset: {
                ...this.state.asset,
                project: itemValue
              }
            })
          }>
          <Picker.Item label="Select" value="Select" />
          <Picker.Item label="Amex" value="Amex" />
          <Picker.Item label="Capasa" value="Capasa" />
          <Picker.Item label="Ntf" value="NTF" />
        </Picker>

        <Text style={styles.subTitleStyle}>Condition</Text>
        <Picker style={styles.pickersStyle}
          selectedValue={this.state.asset.condition}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({
              asset: {
                ...this.state.asset,
                condition: itemValue
              }
            })
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
          onPress={() => this.saveUpdateAsset()}
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
    marginTop: 10
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
  pickersStyle: {
    margin: 10
  }
});
