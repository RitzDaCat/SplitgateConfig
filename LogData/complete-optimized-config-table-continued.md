| CVar | Current Value | Optimal Value | Notes |
|------|---------------|---------------|-------|
| r.SkyLight.RealTimeReflectionCapture | 0 | 0 | Keep disabled for best performance |
| fx.Niagara.QualityLevel | 0 | 0 | Keep at lowest for best CPU performance |
| foliage.DensityScale | 1.0 | 0.7-0.8 | Reduce to lower CPU load from foliage calculations |
| grass.DensityScale | 1.0 | 0.7-0.8 | Reduce to lower CPU load from grass calculations |
| r.HairStrands.SkyLighting.IntegrationType | 2 | 1 | Reduce for better performance if hair rendering is used |
| r.HairStrands.SkyAO.SampleCount | 4 | 2 | Reduce for better performance if hair rendering is used |
| r.HairStrands.Visibility.MSAA.SamplePerPixel | 4 | 2 | Reduce for better performance if hair rendering is used |
| CommonLoadingScreen.HoldLoadingScreenAdditionalSecs | 0.500000 | 0.0 | Reduce to 0 for faster level transitions |
| r.Streaming.FullyLoadUsedTextures | Not listed | 1 | Enable to reduce hitches from texture streaming |
| r.Streaming.HLODStrategy | Not listed | 2 | Set to 2 for aggressive HLOD streaming |
| r.Streaming.PoolSize | 800 | Depends on VRAM | Increase if VRAM allows, e.g., 2000 for 8GB VRAM |
| r.Streaming.MaxTempMemoryAllowed | Not listed | 50 | Limit temporary memory usage during streaming |
| r.Streaming.UseAllMips | Not listed | 1 | Enable to use all mip levels, can help with streaming |
| r.Streaming.NumStaticComponentsProcessedPerFrame | Not listed | 50 | Limit static components processed per frame |
| r.TemporalAA.Upsampling | Not listed | 0 | Disable temporal upsampling for lower latency |
| r.TemporalAA.Algorithm | Not listed | 1 | Use faster TAA algorithm |
| r.TemporalAA.Blur | Not listed | 0 | Disable TAA blur for sharper image |
| r.FXAA.Quality | Not listed | 0 | Disable FXAA for better performance |
| r.DefaultFeature.Bloom | Not listed | 0 | Disable bloom for better performance |
| r.BloomQuality | 4 | 1 | Reduce bloom quality for better performance |
| r.AOGlobalDFMultiplier | Not listed | 0 | Disable global distance field AO for performance |
| r.AOClearHistory | Not listed | 1 | Clear AO history for lower latency |
| r.OneFrameThreadLag | Not listed | 1 | Enable one frame thread lag for smoother frame pacing |
| r.RHICmdBypass | Not listed | 0 | Disable RHI command bypass for lower latency |
| r.RHICmdUseParallelAlgorithms | Not listed | 1 | Use parallel algorithms for RHI commands |
| r.RHICmdUseDeferredContexts | Not listed | 1 | Use deferred contexts for RHI commands |
| r.SceneRenderTargetResizeMethod | Not listed | 0 | Use faster resize method for scene render targets |
| r.Tonemapper.Sharpen | Not listed | 0 | Disable tonemapper sharpening for performance |
| r.DistanceFieldAO | 0 | 0 | Keep distance field AO disabled for performance |
| r.DistanceFieldGI | Not listed | 0 | Disable distance field global illumination |
| r.AllowStaticLighting | Not listed | 1 | Allow static lighting for better performance |
| r.AllowGlobalClipPlane | 0 | 0 | Keep global clip plane disabled for performance |
| r.PostProcessing.PropagateAlpha | 2 | 0 | Disable alpha propagation in post-processing |
| r.DOF.Gather.AccumulatorQuality | Not listed | 0 | Lower depth of field gather quality |
| r.DOF.Scatter.MaxSpriteRatio | Not listed | 0 | Disable depth of field scatter |
| r.MaxAnisotropy | 4 | 2 | Lower anisotropic filtering for better performance |
| r.LensFlareQuality | 0 | 0 | Keep lens flares disabled |
| r.SceneColorFringeQuality | 0 | 0 | Keep color fringe effect disabled |
| r.EyeAdaptation.EditorOnly | Not listed | 1 | Disable eye adaptation in non-editor builds |
| r.DefaultFeature.AutoExposure | Not listed | 0 | Disable auto exposure for consistent performance |
| r.DynamicRes.OperationMode | Not listed | 0 | Disable dynamic resolution for consistent performance |
| r.Mobile.TonemapperFilm | Not listed | 0 | Disable film-style tonemapper on mobile |
| r.MobileMSAA | Not listed | 1 | Disable MSAA on mobile for better performance |
| r.MobileContentScaleFactor | Not listed | 1 | Keep mobile content scale at 1 for performance |
| r.Mobile.ShadingPath | Not listed | 0 | Use fastest mobile shading path |
| r.Mobile.UseHWsRGBEncoding | Not listed | 1 | Use hardware sRGB encoding on mobile if available |
| r.EnableAsyncComputeTranslucency | Not listed | 0 | Disable async compute for translucency |

