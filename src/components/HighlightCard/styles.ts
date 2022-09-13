import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
    
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
    border: 2px;
    padding: 4%;
    margin: 2%;
    margin-top: 5%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.bold};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.number};
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px;
    padding: 4%;
    margin: 2%;
    /* margin-top: 5%; */
`

export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.number};
`

export const LastTransaction = styled.Text`

`