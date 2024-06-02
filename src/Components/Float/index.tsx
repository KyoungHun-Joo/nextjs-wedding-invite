// #region Global Imports
import React from "react";
import { useState } from "react";
import styled from "styled-components";
// #endregion Global Imports
// $imageUrl='/static/images/floral-leaf/floral-leaf-1.png'
import { FloatItem } from "./Item";

// #region Local Imports
// #endregion Local Imports

const Container = styled.img<any>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Float: React.FunctionComponent<any> = ({ mode }) => {
  const [isServer, setIsServer] = useState(true);

  return (
    <>
      {mode === 1 ? (
        <>
          <FloatItem $imageUrl="/static/images/floral-leaf/floral-leaf-1.png" />
          <FloatItem $imageUrl="/static/images/floral-leaf/floral-leaf-2.png" />
          <FloatItem $imageUrl="/static/images/floral-leaf/floral-leaf-3.png" />
          <FloatItem $imageUrl="/static/images/floral-leaf/floral-leaf-4.png" />
          <FloatItem $imageUrl="/static/images/floral-leaf/floral-leaf-5.png" />
          <FloatItem $imageUrl="/static/images/floral-leaf/floral-leaf-6.png" />
        </>
      ) : (
        <>
          <FloatItem $imageUrl="/static/images/party/bora1.png" width="15%" />
          <FloatItem $imageUrl="/static/images/party/bora2.png" width="25%" />
          <FloatItem $imageUrl="/static/images/party/joo1.png" width="15%" />
          <FloatItem $imageUrl="/static/images/party/together1.png" width="25%" />
          <FloatItem $imageUrl="/static/images/party/together2.png" width="25%" />
        </>
      )}
    </>
  );
};
