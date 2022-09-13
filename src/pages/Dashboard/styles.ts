import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background}
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(12)}px;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
`
export const UserWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
  align-items: center;
`

export const UserInfo = styled.View`
  flex-direction: row;
`
export const User = styled.View`
  flex-direction: row;
`

export const Photo = styled.Image`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  /* margin-right: 100px; */
`

export const UserGreetings = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.name};
`

export const Icon = styled(Feather)`
  color: '#0000';
  font-size: ${RFValue(24)}px;
`
