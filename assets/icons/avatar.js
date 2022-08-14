import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  ClipPath,
  Use,
  G,
  Circle,
} from 'react-native-svg';

const Avatar = props => (
  <Svg
    viewBox="0 0 64 64"
    width={props.width}
    height={props.height}
    fill={props.colors}
    stroke={props.color}>
    <Path
      fill="#5093FF"
      d="M32 0c17.7 0 32 14.3 32 32S49.7 64 32 64 0 49.7 0 32 14.3 0 32 0z"
    />
    <Defs>
      <Path
        id="a"
        d="M32 0c17.7 0 32 14.3 32 32S49.7 64 32 64 0 49.7 0 32 14.3 0 32 0z"
      />
    </Defs>
    <ClipPath id="b">
      <Use xlinkHref="#a" overflow="visible" />
    </ClipPath>
    <G clipPath="url(#b)">
      <Path fill="#316CFF" d="M13 64c0-9.3 8.5-17 19-17 10.4 0 19 7.7 19 17" />
    </G>
    <G clipPath="url(#b)">
      <Circle fill="#FFF" cx={32} cy={50} r={6} />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#F7BE8F"
        d="M36.1 45.3v4.6c0 2.3-1.9 4.1-4.1 4.1-1.1 0-2.2-.5-2.9-1.2-.7-.8-1.2-1.8-1.2-2.9v-4.6h8.2z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#FAD3A1"
        d="M36.3 48.3c-1.4.5-2.8.7-4.3.7s-2.9-.2-4.3-.7l-1.7-.8c-3.2-1.8-5.4-4.8-5.9-8.2-.1-.6-.1-1.1-.1-1.6V23h24V37.7c0 .5 0 1.1-.1 1.6-.2 1.5-.7 2.8-1.5 4.1-1 1.7-2.5 3.1-4.4 4.1-.6.3-1.1.5-1.7.8z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#262647"
        d="M26.5 32c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#262647"
        d="M36 33.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path fill="#F7BE8F" d="M33 39c0 .6-.4 1-1 1s-1-.4-1-1h2z" />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#F4B28E"
        d="M32 44.5c-1.6 0-3.1-.9-3.9-2.2-.1-.3-.1-.6.2-.7.2-.1.5-.1.7.2.6 1.1 1.8 1.8 3 1.8s2.4-.7 3-1.8c.1-.2.4-.3.7-.2.2.1.3.4.2.7-.8 1.3-2.3 2.2-3.9 2.2z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#262647"
        d="M46 26v7h-2v-5.4l-5.4-4.2c-1.5 4-5.9 6.8-10.3 6.8-3 0-6.4-1.3-8.3-3.4V33h-2v-8.5c0-3.1 1-5.6 2.7-7.5 2.6-3 6.5-5.1 10.3-5 3.1.1 5.4 1.1 9 0 .3.5.5 1.2.3 2.2-.1.8-.2 1-.3 1.5 3.5 2.6 6 5.5 6 10.3z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#F7BE8F"
        d="M20 37c-1.7 0-3-1.3-3-3 0-.8.3-1.6.9-2.1.5-.5 1.3-.9 2.1-.9v6z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#F7BE8F"
        d="M44 37c1.7 0 3-1.3 3-3 0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9v6z"
      />
    </G>
  </Svg>
);

export default Avatar;
