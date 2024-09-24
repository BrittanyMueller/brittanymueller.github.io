"use client"
import { useEffect } from "react"
import { Unity, useUnityContext } from "react-unity-webgl"
import styles from './Beeverse.module.css'

const BeeversePage = () => {

  const buildUrl = "/webgl_build/Build"
  const { unityProvider, loadingProgression, isLoaded, unload } = useUnityContext({
    loaderUrl: `${buildUrl}/Beeverse.loader.js`,
    dataUrl: `${buildUrl}/Beeverse.data`,
    frameworkUrl: `${buildUrl}/Beeverse.framework.js`,
    codeUrl: `${buildUrl}/Beeverse.wasm`,
    streamingAssetsUrl: "StreamingAssets",
    companyName: "Brittany Mueller",
    productName: "Beeverse",
    productVersion: "1.0",
  })

  useEffect(() => {
    return () => {
      // Clean up component during unmount, if fully loaded
      if (isLoaded) {
        unload().catch((error) => {
          console.error("Failed to unload Unity instance:", error)
        })
      }
    }
  }, [isLoaded])  // Loaded changes to false when navigating away

  return (
    <div className={styles.unityContainer}>
      { !isLoaded && (
        <div className={styles.loadingContainer}>
          <p>Loading... {Math.round(loadingProgression * 100)}%</p>
          <div className={styles.loadingBar}>
            <div
              className={styles.progress}
              style={{ width: `${loadingProgression * 100}%` }}
            />
          </div>
        </div>
      )}
      <div className={styles.canvasWrapper}>
        <Unity 
          unityProvider={unityProvider} 
          className={styles.unityCanvas}
          devicePixelRatio={1.5}  // Looks awful & blurry with default 1
          tabIndex={-1}
        />
      </div>
      {/* TODO need another outer container for more content, loading bar relative to unityContainer */}
      <p> 
        Beeverse is a bee colony survival city builder. Your objective is to collect and generate enough resources to keep the hive alive!
        Beeverse started as a final project in my game programming course but turned into a passion project of mine. 
        Check out the GitLab repository to learn the&nbsp;
        <a className={styles.link} href="https://gitlab.larrycloud.ca/cis4820/Beeverse#controls" target="_blank">controls.</a> 
      </p>
    </div>
  )

}

export default BeeversePage
