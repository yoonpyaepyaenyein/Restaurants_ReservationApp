import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const Location = props => (
  <Svg
    id="Icons"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    width={props.width}
    height={props.height}
    fill={props.colors}
    stroke={props.color}>
    <Path
      className="st1"
      d="M25 13c0 8-9 15-9 15s-9-7-9-15c0-5 4-9 9-9s9 4 9 9z"
    />
    <Circle className="st1" cx={16} cy={13} r={3} />
  </Svg>
);

export default Location;
