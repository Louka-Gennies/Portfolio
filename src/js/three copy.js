import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import fragment from '../shaders/fragment.glsl';
import vertex from '../shaders/vertex.glsl';

import { DotScreenShader } from './customShader';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

const device = {
  width: window.innerWidth,
  height: window.innerHeight,
  pixelRatio: window.devicePixelRatio
};

export default class Three {
  constructor(canvas) {
    this.canvas = canvas;
    this.time = 0;
    this.scene = new T.Scene();

    this.camera = new T.PerspectiveCamera(
      75,
      device.width / device.height,
      0.1,
      100
    );
    this.camera.position.set(0, 0, 1.3);
    this.scene.add(this.camera);

    this.renderer = new T.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(device.width, device.height);
    this.renderer.setPixelRatio(Math.min(device.pixelRatio, 2));

    // Set the background color to dark grey
    this.renderer.setClearColor(0x333333, 1); // Dark grey background

    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableZoom = false;
    this.controls.enableRotate = false;
    this.controls.enablePan = false;
    this.clock = new T.Clock();

    this.initPost();
    this.setLights();
    this.setGeometry();
    this.render();
    this.setResize();
  }

  initPost() {
    this.composer = new EffectComposer( this.renderer );
    this.composer.addPass( new RenderPass( this.scene, this.camera ) );

    const effect1 = new ShaderPass( DotScreenShader );
    effect1.uniforms[ 'scale' ].value = 4;
    this.composer.addPass( effect1 );
  }

  setLights() {
    this.ambientLight = new T.AmbientLight(0xffffff, 0.5);
    this.scene.add(this.ambientLight);
  }

  setGeometry() {
    // Create a sphere geometry
    this.planeGeometry = new T.SphereGeometry(1.5, 32, 32); 
    this.planeMaterial = new T.ShaderMaterial({
        side: T.DoubleSide,
        wireframe: false,
        fragmentShader: fragment,
        vertexShader: vertex,
        uniforms: {
            time: { value: 0 } // Initialize time uniform
        }
    });

    this.planeMesh = new T.Mesh(this.planeGeometry, this.planeMaterial);
    this.scene.add(this.planeMesh);
}

  render() {
    this.time += 0.001; // Slow down the animation
    this.planeMaterial.uniforms.time.value = this.time; // Update time uniform
    requestAnimationFrame(this.render.bind(this));
    // this.renderer.render(this.scene, this.camera);
    this.composer.render(this.scene, this.camera);
  }

  setResize() {
    window.addEventListener('resize', () => {
      device.width = window.innerWidth;
      device.height = window.innerHeight;

      this.camera.aspect = device.width / device.height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(device.width, device.height);
      this.renderer.setPixelRatio(Math.min(device.pixelRatio, 2));

      this.composer(this.width, this.height);
    });
  }
}