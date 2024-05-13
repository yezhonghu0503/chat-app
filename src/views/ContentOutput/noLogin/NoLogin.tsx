import React, {ReactElement} from 'react';
import {Image, View} from 'react-native';
import {noLoginStyles as styles} from './noLoginStyles';

export const NoLogin = (): ReactElement => {
  // const {menuStatus} = useSelector((state: any) => state.mutual);
  return (
    <View style={styles.main}>
      <Image
        source={require('./assets/bg.png')}
        style={styles.loginBackground}
      />
    </View>
  );
};
