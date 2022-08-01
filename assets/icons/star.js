import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

const Star = props => (
  <Svg viewBox="0 0 48 48" width={props.width} height={props.height}>
    <Path
      fill="#FFCA28"
      d="m24 4 7 13 14 2-10 10 2 15-13-7-13 7 2-15L3 19l14-2z"
    />
    <G fill="#F9A825">
      <Path d="m24 25 7-8-7-13zM45 19l-21 6 11 4zM37 44 24 25v12zM13 29l-2 15 13-19zM3 19l21 6-7-8z" />
    </G>
  </Svg>
);

export default Star;
