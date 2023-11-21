import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import IonIcons from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import {FormInput, Header, MainLayout, VStack} from '~/components';

export const LoginScreen = () => {
  const {t} = useTranslation();

  const validationSignIn = yup
    .object()
    .shape({
      username: yup.string().trim().required(t('errors.required')),
      password: yup.string().trim().required(t('errors.required')),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'all',
    resolver: yupResolver(validationSignIn as any),
  });

  return (
    <MainLayout>
      <Header title="Login" />
      <ScrollView contentContainerStyle={{padding: 16}}>
        <FormInput
          control={control}
          renderLeftElement={() => (
            <VStack
              justifyContent="center"
              alignItems="center"
              paddingLeft={scale(16)}>
              <IonIcons name="person" size={20} color="gray" />
            </VStack>
          )}
          _props={{placeholder: t('common.emptyData')}}
          name="username"
          errorMessage={errors.username?.message}
        />
        <VStack height={scale(16)} />
        <FormInput isPassword />
      </ScrollView>
    </MainLayout>
  );
};
