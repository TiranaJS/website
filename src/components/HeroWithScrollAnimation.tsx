"use client";

import React from "react";
import dynamic from "next/dynamic";

// Create a client-only animated version
const AnimatedHero = dynamic(() => import("./AnimatedHero"), {
  ssr: false,
});

const HeroWithScrollAnimation: React.FC = () => {
  return <AnimatedHero />;
};

export default HeroWithScrollAnimation;
