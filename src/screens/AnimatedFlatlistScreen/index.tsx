import {range} from 'lodash';
import React, {useCallback} from 'react';
import {FlatList, Image, StyleSheet, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HStack, MainLayout, Pressable, VStack} from '~/components';

export const AnimatedFlatlistScreen = () => {
  const renderItem = useCallback(({item, index}) => {
    return (
      <Pressable onPress={item?.onPress}>
        <HStack style={styles.item}>
          <Image
            width={scale(100)}
            height={scale(100)}
            resizeMode="contain"
            source={{
              uri: 'https://cdn.pixabay.com/photo/2022/04/12/04/43/kiwi-7127148_1280.png',
            }}
          />
          <VStack style={{width: scale(10)}} />
          <VStack style={{flex: 1}}>
            <Text>{index}</Text>
          </VStack>
        </HStack>
      </Pressable>
    );
  }, []);

  return (
    <MainLayout>
      <FlatList
        data={range(0, 200)}
        keyExtractor={(_, index) => String(index)}
        renderItem={renderItem}
        onEndReachedThreshold={0.2}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: scale(16),
  },
});
