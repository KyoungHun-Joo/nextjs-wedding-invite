// #region Global Imports
import React from "react";
import { useState } from "react";
import styled from "styled-components";
// #endregion Local Imports
// #endregion Global Imports

// #region Local Imports
interface imgPros {
  $imageUrl: string;

  width?: string;
}

const Container = styled.img<imgPros>`
    class='flower-leaf'

`;

export const FloatItem: React.FunctionComponent<imgPros> = (props) => {
  const [isServer, setIsServer] = useState(true);

  const fallDelay = Math.random() * 12;
  const shakeDelay = Math.random() * 3;

  const shakeDegree = Math.random() * 180;

  const leftPosition = Math.random() * 100;
  const translateX = Math.random() * (80 - 20) + 20;

  const fallDuration = Math.random() * (16 - 9) + 9;
  const shakeDuration = Math.random() * (3 - 2) + 2;

  const itemStyle: any = {};
  itemStyle["--fall-delay"] = `${fallDelay}s`;
  itemStyle["--shake-delay"] = `${shakeDelay}s`;
  itemStyle["--shake-degree"] = `${shakeDegree}deg`;
  itemStyle["--left-position"] = `${leftPosition}%`;
  itemStyle["--translate-x"] = `${translateX}px`;
  itemStyle["--fall-duration"] = `${fallDuration}s`;
  itemStyle["--shake-duration"] = `${shakeDuration}s`;
  if (props.width) {
    itemStyle.width = props.width;
  }

  return <Container className="flower-leaf" {...props} src={props.$imageUrl} style={itemStyle} />;
};
