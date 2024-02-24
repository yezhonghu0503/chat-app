import React from 'react';
import {Image, StyleSheet, View, Text, Dimensions} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

const UserMessage = () => {
  const data = {
    labels: ['文本生成Token', '文生图Token', 'xxx3'], // optional
    data: [0.4, 0.6, 0.8],
  };
  const chartConfig = {
    backgroundColor: '#875cff',
    backgroundGradientFrom: '#875cff',
    backgroundGradientTo: '#875cff',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };
  return (
    <View style={styles.main}>
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
          <Text>123</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  userAvatar: {
    width: 69,
    height: 80,
    borderRadius: 4,
  },
  userName: {
    color: 'white',
    marginTop: 5,
  },
  progressChartMain: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
  },
  progressChart: {
    borderRadius: 15,
  },
  progressChartTake: {
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.5,
    height: 150,
    backgroundColor: '#875cff',
    borderRadius: 15,
  },
});

export default UserMessage;
