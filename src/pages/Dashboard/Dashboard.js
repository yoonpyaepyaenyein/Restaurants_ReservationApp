// import React, {useContext} from 'react';
// import {View, Text, ToastAndroid} from 'react-native';

// import DashboardHeader from '../../components/dashboard/dashboardHeader';
// import {appStorage} from '../../utils/appStorage';
// import {AuthContext} from '../../context/context';
// import auths from '@react-native-firebase/auth';

// const Dashboard = ({navigation}) => {
//   const {auth, getAuth, deviceToken} = useContext(AuthContext);

//   const signOutHandler = () => {
//     // appStorage.removeItem('@device.token');
//     // getAuth(false);
//     // ToastAndroid.show('Logout SuccessFul', ToastAndroid.SHORT);

//     // auths()
//     //   .signOut()
//     //   .then(() =>  appStorage.removeItem('@user.token')
//     //   getAuth(false);
//     //   ToastAndroid.show('Logout SuccessFul', ToastAndroid.SHORT));

//     auths()
//       .signOut()
//       .then(
//         () => ToastAndroid.show('Logout SuccessFul', ToastAndroid.SHORT),
//         getAuth(false),
//       )

//       .catch(error => {
//         console.log('error', error);
//       });
//   };

//   return <DashboardHeader signOut={signOutHandler} />;
// };

// export default Dashboard;
