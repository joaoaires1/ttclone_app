import React from 'react';
import { Image } from 'react-native'
import { IMAGE } from '../utils/constants'

export default function LogoTitle() {
    return (
      <Image
        style={{ width: 30, height: 30 }}
        source={IMAGE.LOGO}
      />
    );
  }