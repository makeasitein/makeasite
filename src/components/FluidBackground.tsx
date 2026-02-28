import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Color, Vector2, ShaderMaterial } from 'three';

const FluidShader = {
    uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new Vector2(0, 0) },
        uResolution: { value: new Vector2(1, 1) },
        uColor1: { value: new Color('#1E62FF') },
        uColor2: { value: new Color('#00E6FF') },
        uColor3: { value: new Color('#ffffff') }, // Lighter highlight
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    varying vec2 vUv;

    // Simplex noise function
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      float time = uTime * 0.2;

      // Mouse interaction
      vec2 mouse = uMouse * 0.5 + 0.5;
      float dist = distance(uv, mouse);
      float interaction = smoothstep(0.5, 0.0, dist) * 0.1;

      // Domain warping
      float n1 = snoise(uv * 3.0 + time + interaction);
      float n2 = snoise(uv * 6.0 - time * 0.5 + n1);
      float n3 = snoise(uv * 4.0 + time * 0.8 + n2);

      // Color mixing based on noise
      vec3 color = mix(uColor1, uColor2, n1 * 0.5 + 0.5);
      color = mix(color, uColor3, n2 * 0.3 + n3 * 0.3);

      // Softening and brightness adjustment
      color += 0.1; // Base brightness
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

function FluidPlane() {
    const mesh = useRef<any>();
    const { viewport, mouse } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new Vector2(0, 0) },
            uResolution: { value: new Vector2(1, 1) },
            uColor1: { value: new Color('#EEF2FF') }, // Very light blue/white base
            uColor2: { value: new Color('#1E62FF') }, // Brand blue
            uColor3: { value: new Color('#00E6FF') }, // Brand cyan
        }),
        []
    );

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();

            // Smooth mouse interpolation
            mesh.current.material.uniforms.uMouse.value.lerp(
                new Vector2(state.mouse.x, state.mouse.y),
                0.1
            );
        }
    });

    return (
        <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                vertexShader={FluidShader.vertexShader}
                fragmentShader={FluidShader.fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export function FluidBackground() {
    return (
        <div className="absolute inset-0 -z-10 bg-white">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]} // Optimize pixel ratio
                gl={{ alpha: true, antialias: true }}
            >
                <FluidPlane />
            </Canvas>
        </div>
    );
}
