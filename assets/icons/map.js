import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Map = props => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}
    stroke={props.colors}
    fill="none"
    // stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-map">
    <Path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
  </Svg>
);

export default Map;
