import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectDestination, selectFair, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import tw from 'twrnc';




const RideScreen = () => {
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const fair = useSelector(selectFair);   
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);

    var RandomNumber = Math.floor(Math.random() * 1000) + 1 ;

    const state = {
        tableHead: ['Ride ID', 'Type', 'Travel Time'],
        tableData: [
          ['FATR'+RandomNumber, fair.type, travelTimeInformation.duration.text],
        ],
        fairCol:[
            ['Total Fair', fair.amount],
        ],
        fairAmount:[
            [fair.amount]
        ],
        travelHead:[
            'From', 'To', 'Distance'
        ],
        travelInfo:[
            [origin.description, destination.description, travelTimeInformation.distance.text]
        ]
      }

  return (
    <SafeAreaView style={tw`flex-col py-45 px-3`}>
      <Text style={tw`text-8 font-semibold  text-center`}>Your Trip Information</Text>

      <View style={styles.container}>

        <Table borderStyle={{borderWidth: 2, borderColor: 'white'}}>
          <Row data={state.travelHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.travelInfo} textStyle={styles.bodyText}/>
        </Table>

        <Table borderStyle={{borderWidth: 2, borderColor: 'white'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.bodyText}/>
        </Table>

        <Table>
          <Rows data={state.fairCol} style={styles.tail} textStyle={styles.fairText}/>
          
        </Table>
      </View>
      
    </SafeAreaView>
    
  )
}

export default RideScreen

const styles = StyleSheet.create({
    container: { padding: 2, marginVertical: 10},
    head: { height: 80, backgroundColor: 'black' },
    text: { fontSize: 15 ,margin: 12, color: 'white', fontWeight:'bold' },
    bodyText: { fontSize: 15,margin: 15, color: 'black' },
    tail: { height: 70, backgroundColor: 'green' },
    fairText: { fontSize: 30 ,margin: 10, color: 'white', fontWeight:'bold', paddingLeft: 40},
})