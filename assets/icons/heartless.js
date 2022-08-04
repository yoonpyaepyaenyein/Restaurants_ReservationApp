import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Heartless = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    width={props.width}
    height={props.height}
    fill={props.colors}
    stroke={props.colors}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-heart">
    <Path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </Svg>
);

export default Heartless;
