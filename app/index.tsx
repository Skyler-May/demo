import useLunar from "@/components/useCountLunar";
import useZodiacAge from "@/components/useZodiacAge";

import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  const { gregorian, lunar, zodiac } = useLunar();
  const { zodiacList } = useZodiacAge();

  return (
    <View>
      <Text>当前日期：{gregorian}</Text>
      <Text>当前农历日期：{lunar}</Text>
      <Text>当前农历生肖：{zodiac}</Text>
      <Text>{zodiacList} </Text>
    </View>
  );
};

export default Index;
