'use client'
import { useEffect, useRef } from 'react';
import '/public/webgl_build/TemplateData/style.css';

const BeeversePage = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const fullscreenButtonRef = useRef<HTMLDivElement>(null);
  
  let unityInstance : any = null;

  useEffect(() => {
    // Initialize loader script to run webgl build
    var buildUrl = "/webgl_build/Build";
    var config = {
      dataUrl: buildUrl + "/Beeverse.data",
      frameworkUrl: buildUrl + "/Beeverse.framework.js",
      codeUrl: buildUrl + "/Beeverse.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "Brittany Mueller",
      productName: "Beeverse",
      productVersion: "1.0",
    };

    const canvas = canvasRef.current;
    const loadingBar = loadingRef.current;
    const progressBar = progressRef.current;
    const fullscreenBtn = fullscreenButtonRef.current;

    if (!canvas || !loadingBar || !progressBar || !fullscreenBtn) {
      console.error('Failed to find required DOM elements.');
      return;
    }

    var loaderScript = document.createElement("script");
    loaderScript.src = buildUrl + "/Beeverse.loader.js";
    loaderScript.onload = () => {
      // @ts-ignore, function within loader script
      createUnityInstance(canvas, config, (progress: number) => {
        // Changes width of progress bar to show % complete
        progressBar.style.width = 100 * progress + "%";
      }).then((instance : any) => {
        unityInstance = instance;
        loadingBar.style.display = "none";
        fullscreenBtn.onclick = () => {
          unityInstance.SetFullscreen(1);
        };
      }).catch((message: string) => {
        alert(message);
      });
    };
    document.body.appendChild(loaderScript);

    return () => {
      // Remove loader script when component unmounts 
      document.body.removeChild(loaderScript);
      if (unityInstance) {
        unityInstance.Quit();
      }
    };
  }, []); // Empty dependency so only runs once 


  return (
    <div>
      <h2>Beeverse Unity WebGL Build</h2>
      <div id="unity-container">
        <canvas id="unity-canvas" ref={canvasRef} tabIndex={-1}></canvas>
        <div id="unity-loading-bar" ref={loadingRef}>
          <div id="unity-logo"></div>
          <div id="unity-progress-bar-empty">
            <div id="unity-progress-bar-full" ref={progressRef}></div>
          </div>
        </div>
        <div id="unity-warning"> </div>
        <div id="unity-footer">
          <div id="unity-webgl-logo"></div>
          <div id="unity-fullscreen-button" ref={fullscreenButtonRef}></div>
          <div id="unity-build-title">Beeverse</div>
        </div>
      </div>
    </div>
  )
}

export default BeeversePage;