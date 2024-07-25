| CVar | Current Value | Optimal Value | Notes |
|------|---------------|---------------|-------|
| r.setres | 1280x720 | Game-dependent | Set to your preferred resolution |
| fx.NiagaraAllowRuntimeScalabilityChanges | 1 | 0 | Disable for more consistent performance |
| r.GPUCrashDebugging | 0 | 0 | Keep disabled for best performance |
| r.AllowGlobalClipPlane | 0 | 0 | Keep disabled unless specifically needed |
| r.CustomDepth | 3 | 0 | Disable if not used by the game |
| r.DefaultFeature.MotionBlur | 0 | 0 | Keep disabled for best performance |
| r.ForwardShading | 1 | 1 | Keep enabled for potentially better performance |
| r.DefaultFeature.AmbientOcclusion | 0 | 0 | Keep disabled for best performance |
| r.EarlyZPass | 2 | 2 | Keep at current value for good depth testing |
| r.ReflectionCaptureResolution | 128 | 64 | Reduce for better performance |
| r.SeparateTranslucency | 0 | 0 | Keep disabled for best performance |
| r.SelectiveBasePassOutputs | 1 | 1 | Keep enabled for optimized rendering |
| r.DefaultFeature.AntiAliasing | 2 | 0 or 1 | Reduce for better performance |
| r.EnableDebugSpam_GetObjectPositionAndScale | 0 | 0 | Keep disabled |
| r.PostProcessing.PropagateAlpha | 2 | 1 | Reduce for better performance |
| r.EarlyZPassOnlyMaterialMasking | 1 | 1 | Keep enabled for optimized depth testing |
| r.DefaultFeature.AutoExposure.Bias | 1.000000 | 1.000000 | Keep as is unless visual issues occur |
| r.SupportSkyAtmosphereAffectsHeightFog | 0 | 0 | Keep disabled for best performance |
| r.SupportStationarySkylight | 0 | 0 | Keep disabled for best performance |
| r.SupportSkyAtmosphere | 0 | 0 | Keep disabled for best performance |
| r.SupportAtmosphericFog | 1 | 0 | Disable for better performance if not crucial |
| r.SupportPointLightWholeSceneShadows | 1 | 0 | Disable for better performance |
| r.SupportLowQualityLightmaps | 0 | 0 | Keep disabled |
| r.Mobile.AllowMovableDirectionalLights | 0 | 0 | Keep disabled for non-mobile platforms |
| r.Mobile.EnableStaticAndCSMShadowReceivers | 0 | 0 | Keep disabled for non-mobile platforms |
| r.Mobile.AllowDistanceFieldShadows | 0 | 0 | Keep disabled for non-mobile platforms |
| r.MobileNumDynamicPointLights | 0 | 0 | Keep at 0 for non-mobile platforms |
| r.DiscardUnusedQuality | 0 | 1 | Enable to potentially save memory |
| r.DefaultFeature.LightUnits | 2 | 2 | Keep as is unless visual issues occur |
| s.MinBulkDataSizeForAsyncLoading | 131072 | 131072 | Keep as is for balanced async loading |
| s.AsyncLoadingThreadEnabled | 1 | 1 | Keep enabled for better loading performance |
| s.EventDrivenLoaderEnabled | 1 | 1 | Keep enabled for optimized loading |
| s.WarnIfTimeLimitExceeded | 0 | 0 | Keep disabled to avoid unnecessary logs |
| s.TimeLimitExceededMultiplier | 1.5 | 1.5 | Keep as is |
| s.TimeLimitExceededMinTime | 0.005 | 0.005 | Keep as is |
| s.UseBackgroundLevelStreaming | 1 | 1 | Keep enabled for better streaming performance |
| s.PriorityAsyncLoadingExtraTime | 15.0 | 15.0 | Keep as is unless loading issues occur |
| s.LevelStreamingActorsUpdateTimeLimit | 5.0 | 5.0 | Keep as is unless streaming issues occur |
| s.PriorityLevelStreamingActorsUpdateExtraTime | 5.0 | 5.0 | Keep as is unless streaming issues occur |
| s.LevelStreamingComponentsRegistrationGranularity | 10 | 10 | Keep as is unless streaming issues occur |
| s.UnregisterComponentsTimeLimit | 1.0 | 1.0 | Keep as is unless streaming issues occur |
| s.LevelStreamingComponentsUnregistrationGranularity | 5 | 5 | Keep as is unless streaming issues occur |
| s.FlushStreamingOnExit | 1 | 0 | Disable to potentially speed up exit times |
| gc.MaxObjectsNotConsideredByGC | 1 | 1 | Keep as is for proper garbage collection |
| gc.SizeOfPermanentObjectPool | 0 | 0 | Keep as is unless memory issues occur |
| gc.FlushStreamingOnGC | 0 | 0 | Keep disabled for better GC performance |
| gc.NumRetriesBeforeForcingGC | 10 | 10 | Keep as is unless GC issues occur |
| gc.AllowParallelGC | 1 | 1 | Keep enabled for better GC performance |
| gc.TimeBetweenPurgingPendingKillObjects | 61.1 | 61.1 | Keep as is unless memory issues occur |
| gc.MaxObjectsInEditor | 25165824 | N/A | Not applicable for runtime performance |
| gc.IncrementalBeginDestroyEnabled | 1 | 1 | Keep enabled for smoother GC |
| gc.CreateGCClusters | 1 | 1 | Keep enabled for efficient GC |
| gc.MinGCClusterSize | 5 | 5 | Keep as is unless GC issues occur |
| gc.ActorClusteringEnabled | 0 | 1 | Enable to potentially reduce GC CPU usage |
| gc.BlueprintClusteringEnabled | 0 | 1 | Enable to potentially reduce GC CPU usage |
| gc.UseDisregardForGCOnDedicatedServers | 0 | 0 | Keep disabled for non-server builds |
| gc.MultithreadedDestructionEnabled | 1 | 1 | Keep enabled for better performance |
| r.SkeletalMeshLODBias | 0 | 1 or 2 | Increase to reduce CPU load from skeletal meshes |
| r.ViewDistanceScale | 0.8 | 0.6-0.7 | Reduce to lower CPU load from rendering distant objects |
| r.StaticMeshLODDistanceScale | 1.25 | 1.5-2.0 | Increase to reduce CPU load from static meshes |
| r.PostProcessAAQuality | 0 | 0 or 1 | Keep low for reduced post-processing load |
| r.LightFunctionQuality | 0 | 0 | Keep disabled for best performance |
| r.ShadowQuality | 0 | 0 or 1 | Keep low for best CPU performance |
| r.Shadow.CSM.MaxCascades | 1 | 1 | Keep at lowest for best performance |
| r.Shadow.MaxResolution | 512 | 512 or lower | Keep low for best performance |
| r.Shadow.MaxCSMResolution | 512 | 512 or lower | Keep low for reduced CPU overhead in shadow calculations |
| r.Shadow.RadiusThreshold | 0.06 | 0.1 | Increase to reduce small shadow draw calls |
| r.Shadow.DistanceScale | 0.6 | 0.5 | Reduce to lower shadow draw distance |
| r.Shadow.CSM.TransitionScale | 0 | 0 | Keep at 0 for best performance |
| r.Shadow.PreShadowResolutionFactor | 0.5 | 0.5 | Keep as is for balanced shadow performance |
| r.DistanceFieldShadowing | 0 | 0 | Keep disabled for best performance |
| r.DistanceFieldAO | 0 | 0 | Keep disabled for best performance |
| r.VolumetricFog | 0 | 0 | Keep disabled for best performance |
| r.LightMaxDrawDistanceScale | 0 | 0 | Keep at 0 to use default light draw distances |
| r.CapsuleShadows | 0 | 0 | Keep disabled for best performance |
| r.MotionBlurQuality | 0 | 0 | Keep disabled for best performance |
| r.AmbientOcclusionMipLevelFactor | 1.0 | 2.0 | Increase to reduce AO quality but improve performance |
| r.AmbientOcclusionMaxQuality | 0 | 0 | Keep at lowest for best performance |
| r.AmbientOcclusionLevels | 0 | 0 | Keep disabled for best performance |
| r.AmbientOcclusionRadiusScale | 1.2 | 1.0 | Reduce to improve performance |
| r.DepthOfFieldQuality | 0 | 0 | Keep disabled for best performance |
| r.RenderTargetPoolMin | 300 | 300 | Keep as is unless memory issues occur |
| r.LensFlareQuality | 0 | 0 | Keep disabled for best performance |
| r.SceneColorFringeQuality | 0 | 0 | Keep disabled for best performance |
| r.EyeAdaptationQuality | 2 | 1 | Reduce for better performance |
| r.BloomQuality | 4 | 2 | Reduce for better performance |
| r.FastBlurThreshold | 0 | 0 | Keep as is |
| r.Upscale.Quality | 1 | 0 | Reduce for better performance if not using resolution scaling |
| r.Tonemapper.GrainQuantization | 0 | 0 | Keep disabled for best performance |
| r.LightShaftQuality | 0 | 0 | Keep disabled for best performance |
| r.Filter.SizeScale | 0.6 | 0.6 | Keep as is for balanced filtering |
| r.Tonemapper.Quality | 2 | 1 | Reduce for slightly better performance |
| r.Streaming.MipBias | 0 | 1 or 2 | Increase to reduce texture memory and streaming load |
| r.Streaming.AmortizeCPUToGPUCopy | 0 | 1 | Enable to spread out CPU to GPU copies |
| r.Streaming.MaxNumTexturesToStreamPerFrame | 0 | 1 or 2 | Limit texture streaming for more consistent frame times |
| r.Streaming.Boost | 1 | 1 | Keep at 1 for balanced streaming performance |
| r.MaxAnisotropy | 4 | 4 or 2 | Lower values reduce texture sampling load |
| r.VT.MaxAnisotropy | 8 | 4 | Reduce to lower virtual texture sampling load |
| r.Streaming.LimitPoolSizeToVRAM | 1 | 1 | Keep enabled to prevent over-allocation |
| r.Streaming.PoolSize | 800 | Depends on VRAM | Higher values can reduce CPU load if VRAM allows |
| r.Streaming.MaxEffectiveScreenSize | 0 | 1080 or 1440 | Set to your target resolution to optimize streaming |
| r.TranslucencyLightingVolumeDim | 24 | 16 | Reduce for lower memory usage and potential CPU savings |
| r.RefractionQuality | 0 | 0 | Keep disabled for best performance |
| r.SSR.Quality | 0 | 0 | Keep disabled for best performance |
| r.SSR.HalfResSceneColor | 1 | 1 | Keep enabled for reduced memory bandwidth |
| r.SceneColorFormat | 3 | 3 | Keep at current value for good balance |
| r.DetailMode | 0 | 0 | Keep at lowest for reduced CPU load |
| r.TranslucencyVolumeBlur | 0 | 0 | Keep disabled for best performance |
| r.MaterialQualityLevel | 0 | 0 | Keep at lowest for best CPU performance |
| r.AnisotropicMaterials | 0 | 0 | Keep disabled for best performance |
| r.SSS.Scale | 0 | 0 | Keep disabled for best performance |
| r.SSS.SampleSet | 0 | 0 | Keep disabled for best performance |
| r.SSS.Quality | 0 | 0 | Keep disabled for best performance |
| r.SSS.HalfRes | 1 | 1 | Keep enabled for better performance |
| r.SSGI.Quality | 0 | 0 | Keep disabled for best performance |
| r.EmitterSpawnRateScale | 0.125 | 0.1 | Further reduce particle emission for CPU savings |
| r.ParticleLightQuality | 0 | 0 | Keep at lowest for best performance |
| r.SkyAtmosphere.AerialPerspectiveLUT.FastApplyOnOpaque | 1 | 1 | Keep enabled for better performance |
| r.SkyAtmosphere.AerialPerspectiveLUT.SampleCountMaxPerSlice | 1 | 1 | Keep at lowest for best performance |
| r.SkyAtmosphere.AerialPerspectiveLUT.DepthResolution | 8.0 | 4.0 | Reduce for better performance |
| r.SkyAtmosphere.FastSkyLUT | 1 | 1 | Keep enabled for better performance |
| r.SkyAtmosphere.FastSkyLUT.SampleCountMin | 2.0 | 2.0 | Keep as is for balance |
| r.SkyAtmosphere.FastSkyLUT.SampleCountMax | 16.0 | 8.0 | Reduce for better performance |
| r.SkyAtmosphere.SampleCountMin | 2.0 | 2.0 | Keep as is for balance |
| r.SkyAtmosphere.SampleCountMax | 16.0 | 8.0 | Reduce for better performance |
| r.SkyAtmosphere.TransmittanceLUT.UseSmallFormat | 1 | 1 | Keep enabled for lower memory usage |
| r.SkyAtmosphere.TransmittanceLUT.SampleCount | 10.0 | 8.0 | Slightly reduce for better performance |
| r.SkyAtmosphere.MultiScatteringLUT.SampleCount | 15.0 | 8.0 | Reduce for better performance |
| r.SkyLight.RealTimeReflection