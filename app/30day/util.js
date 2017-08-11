import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
	size:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
}

export default Util;