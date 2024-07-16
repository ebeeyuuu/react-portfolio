"use client"
import React, { useEffect, useRef } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

const HeroCloudBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      "colors": [
        { "color": "#182361", "enabled": true },
        { "color": "#F05522", "enabled": true },
        { "color": "#FF6633", "enabled": true },
        { "color": "#7987E2", "enabled": true },
        { "color": "#334ACB", "enabled": true }
      ],
      "speed": 0.5, // Reduced speed for better performance
      "horizontalPressure": 2, // Reduced pressure for better performance
      "verticalPressure": 2, // Reduced pressure for better performance
      "waveFrequencyX": 2, // Reduced wave frequency
      "waveFrequencyY": 3, // Reduced wave frequency
      "waveAmplitude": 2, // Reduced wave amplitude
      "shadows": 6, // Reduced shadows for better performance
      "highlights": 3, // Reduced highlights for better performance
      "colorBrightness": 1.2,
      "colorSaturation": -2,
      "wireframe": false,
      "colorBlending": 5, // Reduced color blending for better performance
      "backgroundColor": "#0b3954",
      "backgroundAlpha": 1,
      "resolution": 1 // Reduced resolution for better performance on low-end devices
    });

    return gradientRef.current.destroy;
  }, []);

  return (
    <canvas
      className="h-[calc(100vh-5rem)] w-full absolute top-0 -z-10"
      ref={canvasRef}
      style={{
        clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 0% 100%, 0.501% 100.051%, 1.886% 100.176%, 3.98% 100.328%, 6.608% 100.464%, 9.594% 100.538%, 12.762% 100.507%, 15.939% 100.324%, 18.947% 99.945%, 21.613% 99.326%, 23.759% 98.422%, 23.759% 98.422%, 25.264% 97.306%, 26.236% 96.103%, 26.854% 94.846%, 27.293% 93.565%, 27.731% 92.291%, 28.343% 91.056%, 29.306% 89.891%, 30.797% 88.828%, 32.992% 87.897%, 36.069% 87.13%, 36.069% 87.13%, 39.536% 86.586%, 42.791% 86.266%, 45.843% 86.113%, 48.701% 86.069%, 51.373% 86.077%, 53.868% 86.079%, 56.194% 86.018%, 58.361% 85.836%, 60.377% 85.476%, 62.251% 84.881%, 62.251% 84.881%, 63.779% 84.104%, 64.848% 83.25%, 65.603% 82.336%, 66.187% 81.378%, 66.745% 80.395%, 67.419% 79.403%, 68.355% 78.42%, 69.696% 77.463%, 71.586% 76.548%, 74.17% 75.694%, 74.17% 75.694%, 77.305% 74.976%, 80.667% 74.443%, 84.126% 74.068%, 87.55% 73.825%, 90.807% 73.69%, 93.766% 73.637%, 96.297% 73.641%, 98.267% 73.675%, 99.545% 73.714%, 100% 73.732%, 100% 0%)'
      }}
    />
);
};

export default HeroCloudBackground;