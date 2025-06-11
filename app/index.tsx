import useLunar from "@/components/useCountLunar";
import useZodiacAge from "@/components/useZodiacAge";

import React from "react";
import { Text, View } from "react-native";

const DateTimeDisplay = () => {
  const { gregorian, lunar, zodiac } = useLunar();
  const { mouseAges } = useZodiacAge();

  return (
    <View>
      <Text>{gregorian}</Text>
      <Text>{lunar}</Text>
      <Text>{zodiac}</Text>
      <Text>{mouseAges} </Text>
    </View>
  );
};

export default DateTimeDisplay;
