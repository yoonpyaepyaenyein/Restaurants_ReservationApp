import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';

const DashboardHeader = props => {
  return (
    <View>
      <Text style={{color: '#000'}}>DashboardHeader</Text>
      <TouchableOpacity onPress={props.signOut}>
        <Text style={{color: '#000'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardHeader;
