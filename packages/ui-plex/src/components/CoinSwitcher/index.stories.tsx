import React from "react";
import { SequencePlayer } from "./SequencePlayer";
import { bnb2WayaImages, waya2BnbImages } from "./constant";

export default {
  title: "Components/CoinSwitcher",
  component: SequencePlayer,
  argTypes: {},
};

export const Bnb2Waya: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <SequencePlayer images={bnb2WayaImages()} />
    </div>
  );
};

export const Waya2Bnb: React.FC<React.PropsWithChildren> = () => {
  return (
    <div>
      <SequencePlayer images={waya2BnbImages()} />
    </div>
  );
};
