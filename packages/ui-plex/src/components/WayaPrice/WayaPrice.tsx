import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  wayaPriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const WayaPrice: React.FC<React.PropsWithChildren<Props>> = ({
  wayaPriceUsd,
  color = "textSubtle",
  showSkeleton = true,
}) => {
  return wayaPriceUsd ? (
    <PriceLink
      href="https://swap.plexfinance.us/swap?outputCurrency=0x0581c0dae41F19Fb4602E7ba0A803B7AE50f02E8&chainId=56"
      target="_blank"
    >
      <LogoRound width="24px" mr="8px" />
      <Text color={color} bold>{`$${wayaPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(WayaPrice);
