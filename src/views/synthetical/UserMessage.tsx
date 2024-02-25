import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

const UserMessage = () => {
  const data = {
    // labels: ['文本生成Token', '文生图Token', 'xxx3'], // optional
    data: [0.4, 0.6, 0.6],
  };
  const chartConfig = {
    backgroundColor: '#edcb51',
    backgroundGradientFrom: '#e1c04a',
    backgroundGradientTo: '#e1c04a',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(70, 168, 117, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('./img/userBg.png')}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        style={styles.user}>
        <Image style={styles.userAvatar} source={require('./img/avatar.png')} />
        <Text style={styles.userName}>Hugo</Text>
        <View style={styles.progressChartMain}>
          <ProgressChart
            data={data}
            width={
              Dimensions.get('window').width -
              Dimensions.get('window').width * 0.6
            }
            height={150}
            strokeWidth={10}
            radius={20}
            chartConfig={chartConfig}
            hideLegend={true}
            style={styles.progressChart}
          />
          <View style={styles.progressChartTake}>
            <ImageBackground
              source={require('./img/balance.png')}
              borderRadius={8}
              style={styles.takeBalanceBackground}>
              <Text style={styles.takeBalanceTit}>Account Balacnce</Text>
              <Text style={styles.takeBalance}>$3.33</Text>
            </ImageBackground>
            <ImageBackground
              source={require('./img/text.png')}
              borderRadius={8}
              style={styles.takeTextBackground}>
              <Text style={styles.takeTextTit}>Tokens Used</Text>
              <Text style={styles.takeText}>1253</Text>
            </ImageBackground>
            <ImageBackground
              source={require('./img/pic.png')}
              borderRadius={8}
              style={styles.takePicBackground}>
              <Text style={styles.takePictureTit}>Picture Used</Text>
              <Text style={styles.takePicture}>103</Text>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.appList}>
          <View style={styles.appListText}>
            <Text style={styles.appListTextModel}>GPT-4 Turbo</Text>
            <Text style={styles.appListTextModelDescribe}>
              A large multimodal model
            </Text>
            <View style={styles.appListTextModelGo}>
              <Image
                style={styles.appListTextModelGoPic}
                source={require('./img/next.png')}
              />
            </View>
          </View>
          <View style={styles.appListText}>
            <Text style={styles.appListTextModel}>DALL·E 3</Text>
            <Text style={styles.appListTextModelDescribe}>
              A description in natural language
            </Text>
            <View style={styles.appListTextModelGo}>
              <Image
                style={styles.appListTextModelGoPic}
                source={require('./img/next.png')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f393b',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  user: {
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  userAvatar: {
    width: 69,
    height: 69,
    borderRadius: 6,
    marginTop: 15,
  },
  userName: {
    color: 'white',
    marginTop: 5,
  },
  progressChartMain: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  progressChart: {
    borderRadius: 15,
  },
  progressChartTake: {
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.5,
    height: 150,
    // backgroundColor: '#875cff',
    borderRadius: 15,
    justifyContent: 'space-between',
    // paddingLeft: 10,
  },
  takeText: {
    width: 150,
    color: '#0f393b',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 55,
  },
  takeTextTit: {
    width: 150,
    color: '#7c9394',
    fontSize: 12,
    marginLeft: 55,
  },
  takeTextBackground: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },

  takeBalance: {
    width: 150,
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 55,
  },
  takeBalanceTit: {
    width: 150,
    color: '#c2e0d1',
    fontSize: 12,
    marginLeft: 55,
  },
  takeBalanceBackground: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    // paddingBottom: 8,
  },

  takePicture: {
    width: 150,
    color: '#0f393b',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 55,
  },
  takePictureTit: {
    width: 150,
    color: '#7c9394',
    fontSize: 12,
    marginLeft: 55,
  },
  takePicBackground: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    // paddingBottom: 8,
  },

  appList: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  appListText: {
    width: 140,
    height: 80,
    borderRadius: 15,
    marginLeft: 5,
    backgroundColor: '#22494b',
  },
  appListTextModel: {
    fontSize: 18,
    color: 'white',
    marginTop: 5,
    marginLeft: 10,
  },
  appListTextModelDescribe: {
    fontSize: 12,
    color: '#7c9394',
    marginTop: 0,
    marginLeft: 10,
  },
  appListTextModelGo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  appListTextModelGoPic: {
    marginTop: -10,
    marginRight: 8,
  },
});

export default UserMessage;
