import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Restaurant = props => (
  <Svg
    viewBox="0 0 32 32"
    width={props.width}
    height={props.height}
    stroke={props.colors}>
    <Path
      className="st0"
      d="M6.5 13.5c-2.6-2.6-2.6-6.7 0-9.3l11.1 11.1 3.7 3.7 5.7 5.7c1 1 1 2.5 0 3.5h0c-1 1-2.8 1-3.7-.2l-4.1-5.1c-1-1.3-2.8-1.7-4.4-1.1h0l-8.3-8.3zM21.3 12.1l5.4-5.4"
    />
    <Path
      className="st0"
      d="M19.1 16.8c.4-.1.7-.1 1.1-.2 1.3-.1 2.8-.8 4.3-2.3l4.9-4.9M12.3 19.3l-7 5.7c-1.1.8-1.2 2.4-.2 3.3 1 1 2.5.8 3.3-.2l5.7-7.1M24 4l-5 4.9c-1.5 1.5-2.3 3-2.3 4.3 0 .4-.1.7-.2 1.1"
    />
  </Svg>
);

export default Restaurant;
