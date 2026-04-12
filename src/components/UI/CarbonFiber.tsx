import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useLayoutEffect, useMemo, useRef } from 'react';
import { Color, Mesh, ShaderMaterial } from 'three';

type CarbonFiberProps = {
  speed?: number;
  scale?: number;
  color?: string;
  waveAmplitude?: number;
  rotation?: number;
};

type CarbonUniforms = {
  uSpeed: { value: number };
  uScale: { value: number };
  uWaveAmplitude: { value: number };
  uColor: { value: Color };
  uRotation: { value: number };
  uTime: { value: number };
};

const hexToNormalizedRGB = (hex: string): [number, number, number] => {
  const cleanHex = hex.replace('#', '');
  return [
    parseInt(cleanHex.slice(0, 2), 16) / 255,
    parseInt(cleanHex.slice(2, 4), 16) / 255,
    parseInt(cleanHex.slice(4, 6), 16) / 255,
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uWaveAmplitude;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  // Unidirectional wave distortion
  tex.y += uWaveAmplitude * sin(2.0 * tex.x - tOffset);

  // Fine parallel carbon fiber lines
  float lineFreq = 120.0;
  float lines = sin(lineFreq * tex.x) * sin(lineFreq * tex.y);
  
  // Carbon fiber pattern with silk-like waves
  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Combine pattern with fiber lines
  float carbonEffect = pattern * (0.7 + 0.3 * lines);
  
  // Add noise for texture
  float noisePattern = rnd * 0.15;

  // Black silk with carbon fiber line effect
  vec3 carbonColor = uColor * (0.3 + 0.7 * carbonEffect);
  vec4 col = vec4(carbonColor, 1.0) - noisePattern;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const CarbonPlane = forwardRef<Mesh, { uniforms: CarbonUniforms }>(function CarbonPlane({ uniforms }, ref) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport.height, viewport.width]);

  useFrame((_, delta) => {
    if (ref && 'current' in ref && ref.current) {
      const material = ref.current.material as ShaderMaterial;
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </mesh>
  );
});

CarbonPlane.displayName = 'CarbonPlane';

const CarbonFiber = ({
  speed = 8,
  scale = 2,
  color = '#1a1a1a',
  waveAmplitude = 0.2,
  rotation = 0.785,
}: CarbonFiberProps) => {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo<CarbonUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uWaveAmplitude: { value: waveAmplitude },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, waveAmplitude, color, rotation]
  );

  return (
    <Canvas dpr={[1, 2]} frameloop="always">
      <CarbonPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  );
};

export default CarbonFiber;
