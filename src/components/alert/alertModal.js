import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

//Style
import styles from './style';

//Component
import COLORS from '../../utils/colorUtils';
import {useLocal} from '../../hook/useLocal';
import LanguageData from '../../data/language';

const AlertModal = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.WHISPER, COLORS.WHISPER, COLORS.WHISPER]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.modalContainer}>
        <Text style={styles.headerTitle}>{local.language}</Text>

        {LanguageData.map((item, index) => (
          <View key={item.id}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => props.languageAction(item.value)}>
              <Text
                style={[
                  styles.title,
                  {
                    color:
                      props.selectedLang === item.value
                        ? COLORS.BLUE_VIOLET
                        : COLORS.SHARK,
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
            {LanguageData.length - 1 === index ? null : (
              <View style={styles.line} />
            )}
          </View>
        ))}
      </LinearGradient>
    </View>
  );
};

export default AlertModal;
