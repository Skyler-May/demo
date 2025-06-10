import useLunar from "@/components/useCountLunar";
import React from "react";
import { Text, View } from "react-native";

const DateTimeDisplay = () => {
  const { gregorian, lunar, zodiac } = useLunar();

  const zodiacAgeMap = {
    鼠: [1, 13, 25, 37, 49],
    牛: [2, 14, 26, 38],
    虎: [3, 15, 27, 39],
    兔: [4, 16, 28, 40],
    龙: [5, 17, 29, 41],
    蛇: [6, 18, 30, 42],
    马: [7, 19, 31, 43],
    羊: [8, 20, 32, 44],
    猴: [9, 21, 33, 45],
    鸡: [10, 22, 34, 46],
    狗: [11, 23, 35, 47],
    猪: [12, 24, 36, 48],
  };

  do () {
while (zodiacAgeMap === zodiac)
  }

  return (
    <View>
      <Text>{gregorian}</Text>
      <Text>{lunar}</Text>
      <Text>{zodiac}</Text>
    </View>
  );
};

export default DateTimeDisplay;
