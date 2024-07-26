const settings = [
    { name: "bUseThreadedRendering", label: "Use Threaded Rendering", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enable for better performance on multi-core systems." },
    { name: "bUseMultiThreadedRendering", label: "Use Multi-Threaded Rendering", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables multi-threaded rendering for improved performance." },
    { name: "r.RHICmdUseDeferredContexts", label: "Use Deferred Contexts", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables deferred contexts for RHI commands." },
    { name: "r.RHICmdUseParallelAlgorithms", label: "Use Parallel Algorithms", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables parallel algorithms for RHI commands." },
    { name: "r.AllowThreadedRendering", label: "Allow Threaded Rendering", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Allows threaded rendering." },
    { name: "r.OneFrameThreadLag", label: "One Frame Thread Lag", type: "number", min: 0, max: 1, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the frame thread lag. 0 for minimum latency." },
    { name: "r.ParallelAnimationEvaluation", label: "Parallel Animation Evaluation", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables parallel animation evaluation." },
    { name: "fx.ParallelUpdateMultipleContexts", label: "Parallel Update Multiple Contexts", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables parallel updating of multiple contexts." },
    { name: "r.ParallelTranslucency", label: "Parallel Translucency", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables parallel processing of translucent objects." },
    { name: "bThreadedAnimationUpdate", label: "Threaded Animation Update", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables threaded animation updates." },
    { name: "r.ParallelGatherMLM", label: "Parallel Gather MLM", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables parallel gathering for MLM." },
    { name: "TaskGraph.UseSharedThreads", label: "Use Shared Threads", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables use of shared threads in the task graph." },
    { name: "AudioThread.EnableMultipleThreads", label: "Enable Multiple Audio Threads", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables multiple threads for audio processing." },
    { name: "r.Shaders.Optimize", label: "Optimize Shaders", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables shader optimization." },
    { name: "FX.BatchAsync", label: "Batch Async", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables asynchronous batching for effects." },
    { name: "s.AsyncLoadingThreadEnabled", label: "Async Loading Thread Enabled", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables asynchronous loading thread." },
    { name: "s.EventDrivenLoaderEnabled", label: "Event Driven Loader Enabled", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables event-driven loader." },
    { name: "s.MinBulkDataSizeForAsyncLoading", label: "Min Bulk Data Size for Async Loading", type: "number", min: 0, max: 1000000, defaultValue: 131072, recommendedValue: 131072, tooltip: "Sets the minimum bulk data size for async loading." },
    { name: "s.UseBackgroundLevelStreaming", label: "Use Background Level Streaming", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables background level streaming." },
    { name: "s.LevelStreamingActorsUpdateTimeLimit", label: "Level Streaming Actors Update Time Limit", type: "number", min: 0, max: 60, step: 0.1, defaultValue: 5.0, recommendedValue: 5.0, tooltip: "Sets the time limit for updating level streaming actors." },
    { name: "s.PriorityLevelStreamingActorsUpdateExtraTime", label: "Priority Level Streaming Actors Update Extra Time", type: "number", min: 0, max: 60, step: 0.1, defaultValue: 5.0, recommendedValue: 5.0, tooltip: "Sets extra time for updating priority level streaming actors." },
    { name: "s.LevelStreamingComponentsRegistrationGranularity", label: "Level Streaming Components Registration Granularity", type: "number", min: 1, max: 100, defaultValue: 10, recommendedValue: 10, tooltip: "Sets the granularity for registering level streaming components." },
    { name: "s.UnregisterComponentsTimeLimit", label: "Unregister Components Time Limit", type: "number", min: 0, max: 10, step: 0.1, defaultValue: 1.0, recommendedValue: 1.0, tooltip: "Sets the time limit for unregistering components." },
    { name: "s.LevelStreamingComponentsUnregistrationGranularity", label: "Level Streaming Components Unregistration Granularity", type: "number", min: 1, max: 100, defaultValue: 5, recommendedValue: 5, tooltip: "Sets the granularity for unregistering level streaming components." },
    { name: "s.FlushStreamingOnExit", label: "Flush Streaming on Exit", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables flushing of streaming on exit." },
    { name: "s.IoDispatcherCacheSizeMB", label: "IO Dispatcher Cache Size (MB)", type: "number", min: 0, max: 10000, defaultValue: 1024, recommendedValue: 1024, tooltip: "Sets the IO dispatcher cache size in megabytes." },
    { name: "r.TessellationAdaptivePixelsPerTriangle", label: "Tessellation Adaptive Pixels Per Triangle", type: "number", min: 1, max: 10000000, defaultValue: 9999999, recommendedValue: 9999999, tooltip: "Sets the adaptive pixels per triangle for tessellation." },
    { name: "r.ShaderPipelineCache.Enabled", label: "Shader Pipeline Cache Enabled", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables shader pipeline caching." },
    { name: "r.ProgramBinaryCache.Enable", label: "Program Binary Cache Enable", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables program binary caching." },
    { name: "r.DoLazyStaticMeshUpdate", label: "Do Lazy Static Mesh Update", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables lazy updating of static meshes." },
    { name: "r.ParticleLODBias", label: "Particle LOD Bias", type: "number", min: 0, max: 10, defaultValue: 4, recommendedValue: 4, tooltip: "Sets the LOD bias for particles." },
    { name: "r.SkeletalMeshLODBias", label: "Skeletal Mesh LOD Bias", type: "number", min: 0, max: 10, defaultValue: 4, recommendedValue: 4, tooltip: "Sets the LOD bias for skeletal meshes." },
    { name: "r.VertexFoggingForOpaque", label: "Vertex Fogging for Opaque", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables vertex fogging for opaque objects." },
    { name: "r.ForwardShading", label: "Forward Shading", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables forward shading." },
    { name: "r.StaticMeshLODDistanceScale", label: "Static Mesh LOD Distance Scale", type: "number", min: 0, max: 10, defaultValue: 4, recommendedValue: 4, tooltip: "Sets the LOD distance scale for static meshes." },
    { name: "r.Streaming.FramesForFullUpdate", label: "Streaming Frames for Full Update", type: "number", min: 1, max: 60, defaultValue: 7, recommendedValue: 7, tooltip: "Sets the number of frames for a full streaming update." },
    { name: "r.ViewDistanceScale", label: "View Distance Scale", type: "number", min: 0.000001, max: 1, step: 0.000001, defaultValue: 0.000001, recommendedValue: 0.000001, tooltip: "Sets the view distance scale." },
    { name: "r.DiscardUnusedQuality", label: "Discard Unused Quality", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables discarding of unused quality levels." },
    { name: "r.EarlyZPass", label: "Early Z-Pass", type: "number", min: 0, max: 2, defaultValue: 2, recommendedValue: 2, tooltip: "Sets the early Z-pass mode." },
    { name: "r.EarlyZPassOnlyMaterialMasking", label: "Early Z-Pass Only Material Masking", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables early Z-pass only for material masking." },
    { name: "r.SelectiveBasePassOutputs", label: "Selective Base Pass Outputs", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables selective base pass outputs." },
    { name: "fx.Niagara.QualityLevel", label: "Niagara Quality Level", type: "number", min: 0, max: 4, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality level for Niagara effects." },
    { name: "r.EmitterSpawnRateScale", label: "Emitter Spawn Rate Scale", type: "number", min: 0, max: 1, step: 0.01, defaultValue: 0.05, recommendedValue: 0.05, tooltip: "Sets the spawn rate scale for emitters." },
    { name: "net.UseAdaptiveNetUpdateFrequency", label: "Use Adaptive Net Update Frequency", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables adaptive net update frequency." },
    { name: "r.Streaming.MaxNumTexturesToStreamPerFrame", label: "Max Num Textures to Stream Per Frame", type: "number", min: 1, max: 100, defaultValue: 1, recommendedValue: 1, tooltip: "Sets the maximum number of textures to stream per frame." },
    { name: "r.DistanceFieldAO", label: "Distance Field AO", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables distance field ambient occlusion." },
    { name: "r.AOQuality", label: "AO Quality", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of ambient occlusion." },
    { name: "r.SkyLightingQuality", label: "Sky Lighting Quality", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of sky lighting." },
    { name: "r.Shaders.FastMath", label: "Shaders Fast Math", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables fast math for shaders." },
    { name: "r.DefaultFeature.AutoExposure.Bias", label: "Auto Exposure Bias", type: "number", min: -10, max: 10, step: 0.1, defaultValue: 1.0, recommendedValue: 1.0, tooltip: "Sets the auto exposure bias." },
    { name: "r.DefaultFeature.Bloom", label: "Bloom", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables bloom effect." },
    { name: "r.DefaultFeature.AmbientOcclusion", label: "Ambient Occlusion", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables ambient occlusion." },
    { name: "r.DefaultFeature.AmbientOcclusionStaticFraction", label: "Ambient Occlusion Static Fraction", type: "number", min: 0, max: 1, step: 0.1, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the static fraction for ambient occlusion." },
    { name: "r.fog", label: "Fog", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables fog effect." },
    { name: "r.MotionBlur.Amount", label: "Motion Blur Amount", type: "number", min: 0, max: 1, step: 0.1, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the amount of motion blur." },
    { name: "r.reflectionEnvironment", label: "Reflection Environment", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables reflection environment." },
    { name: "r.BloomQuality", label: "Bloom Quality", type: "number", min: 0, max: 5, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of the bloom effect." },
    { name: "r.TonemapperFilm", label: "Tonemapper Film", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables film-style tonemapping." },
    { name: "r.Tonemapper.Quality", label: "Tonemapper Quality", type: "number", min: 0, max: 5, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of the tonemapper." },
    { name: "r.SceneColorFringeQuality", label: "Scene Color Fringe Quality", type: "number", min: 0, max: 5, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of scene color fringe effect." },
    { name: "r.VolumetricFog", label: "Volumetric Fog", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables volumetric fog." },
    { name: "r.VolumetricCloud", label: "Volumetric Cloud", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables volumetric clouds." },
    { name: "r.TranslucencyLightingVolumeDim", label: "Translucency Lighting Volume Dim", type: "number", min: 0, max: 64, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the dimension of translucency lighting volume." },
	{ name: "r.SupportStationarySkylight", label: "Support Stationary Skylight", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables support for stationary skylight." },
    { name: "r.SupportSkyAtmosphere", label: "Support Sky Atmosphere", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables support for sky atmosphere." },
    { name: "r.SeparateTranslucency", label: "Separate Translucency", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables separate translucency pass." },
    { name: "r.SupportAtmosphericFog", label: "Support Atmospheric Fog", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables support for atmospheric fog." },
    { name: "r.DefaultFeature.LightUnits", label: "Light Units", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the default light units." },
    { name: "r.DefaultFeature.MotionBlur", label: "Motion Blur", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables motion blur effect." },
    { name: "r.LightFunctionQuality", label: "Light Function Quality", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of light functions." },
    { name: "r.EyeAdaptationQuality", label: "Eye Adaptation Quality", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of eye adaptation effect." },
    { name: "r.SSR.Quality", label: "Screen Space Reflections Quality", type: "number", min: 0, max: 4, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of screen space reflections." },
    { name: "r.SSS.Scale", label: "Subsurface Scattering Scale", type: "number", min: 0, max: 1, step: 0.1, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the scale of subsurface scattering effect." },
    { name: "r.SSS.SampleSet", label: "Subsurface Scattering Sample Set", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the sample set for subsurface scattering." },
    { name: "r.SSS.Quality", label: "Subsurface Scattering Quality", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of subsurface scattering." },
    { name: "r.SSGI.Quality", label: "Screen Space Global Illumination Quality", type: "number", min: 0, max: 4, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of screen space global illumination." },
    { name: "r.DetailMode", label: "Detail Mode", type: "number", min: 0, max: 2, defaultValue: 0, recommendedValue: 1, tooltip: "Sets the level of detail mode. 1 is recommended for a balance of performance and visual quality." },
    { name: "r.TranslucencyVolumeBlur", label: "Translucency Volume Blur", type: "number", min: 0, max: 1, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the amount of translucency volume blur." },
    { name: "r.MaterialQualityLevel", label: "Material Quality Level", type: "number", min: 0, max: 1, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality level for materials." },
    { name: "r.AnisotropicMaterials", label: "Anisotropic Materials", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables anisotropic materials." },
    { name: "r.SkyAtmosphere.AerialPerspectiveLUT.FastApplyOnOpaque", label: "Fast Apply Aerial Perspective LUT on Opaque", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables fast application of aerial perspective LUT on opaque objects." },
    { name: "r.SkyAtmosphere.AerialPerspectiveLUT.SampleCountMaxPerSlice", label: "Aerial Perspective LUT Max Samples Per Slice", type: "number", min: 1, max: 8, defaultValue: 1, recommendedValue: 1, tooltip: "Sets the maximum sample count per slice for aerial perspective LUT." },
    { name: "r.SkyAtmosphere.AerialPerspectiveLUT.DepthResolution", label: "Aerial Perspective LUT Depth Resolution", type: "number", min: 1, max: 32, step: 1, defaultValue: 4.0, recommendedValue: 4.0, tooltip: "Sets the depth resolution of aerial perspective LUT." },
    { name: "r.SkyAtmosphere.FastSkyLUT", label: "Fast Sky LUT", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables fast sky LUT computation." },
    { name: "r.SkyAtmosphere.FastSkyLUT.SampleCountMin", label: "Fast Sky LUT Min Sample Count", type: "number", min: 1, max: 8, step: 1, defaultValue: 1.0, recommendedValue: 1.0, tooltip: "Sets the minimum sample count for fast sky LUT." },
    { name: "r.SkyAtmosphere.FastSkyLUT.SampleCountMax", label: "Fast Sky LUT Max Sample Count", type: "number", min: 1, max: 16, step: 1, defaultValue: 2.0, recommendedValue: 2.0, tooltip: "Sets the maximum sample count for fast sky LUT." },
    { name: "r.SkyAtmosphere.SampleCountMin", label: "Sky Atmosphere Min Sample Count", type: "number", min: 1, max: 8, step: 1, defaultValue: 1.0, recommendedValue: 1.0, tooltip: "Sets the minimum sample count for sky atmosphere." },
    { name: "r.SkyAtmosphere.SampleCountMax", label: "Sky Atmosphere Max Sample Count", type: "number", min: 1, max: 16, step: 1, defaultValue: 2.0, recommendedValue: 2.0, tooltip: "Sets the maximum sample count for sky atmosphere." },
    { name: "r.SkyAtmosphere.TransmittanceLUT.UseSmallFormat", label: "Use Small Format for Transmittance LUT", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables the use of small format for transmittance LUT." },
    { name: "r.SkyAtmosphere.TransmittanceLUT.SampleCount", label: "Transmittance LUT Sample Count", type: "number", min: 1, max: 16, step: 1, defaultValue: 4.0, recommendedValue: 4.0, tooltip: "Sets the sample count for transmittance LUT." },
    { name: "r.SkyAtmosphere.MultiScatteringLUT.SampleCount", label: "Multi-Scattering LUT Sample Count", type: "number", min: 1, max: 16, step: 1, defaultValue: 4.0, recommendedValue: 4.0, tooltip: "Sets the sample count for multi-scattering LUT." },
    { name: "r.SkyLight.RealTimeReflectionCapture", label: "Real-Time Reflection Capture for Sky Light", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables real-time reflection capture for sky light." },
    { name: "r.Shadow.MaxResolution", label: "Shadow Max Resolution", type: "number", min: 32, max: 4096, step: 32, defaultValue: 64, recommendedValue: 1024, tooltip: "Sets the maximum resolution for shadows. 1024 balances quality and performance." },
    { name: "r.AllowLandscapeShadows", label: "Allow Landscape Shadows", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables shadows for landscape." },
    { name: "r.ShadowQuality", label: "Shadow Quality", type: "number", min: 0, max: 5, defaultValue: 0, recommendedValue: 3, tooltip: "Sets the quality of shadows. 3 offers a good balance for esports." },
    { name: "r.Shadow.CSM.MaxCascades", label: "Max Cascaded Shadow Map Cascades", type: "number", min: 0, max: 10, defaultValue: 0, recommendedValue: 2, tooltip: "Sets the maximum number of cascades for cascaded shadow maps." },
    { name: "r.Shadow.RadiusThreshold", label: "Shadow Radius Threshold", type: "number", min: 0, max: 0.1, step: 0.001, defaultValue: 0.01, recommendedValue: 0.01, tooltip: "Sets the radius threshold for shadows." },
    { name: "r.CapsuleShadows", label: "Capsule Shadows", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables capsule shadows." },
    { name: "r.Streaming.PoolSize", label: "Streaming Pool Size", type: "number", min: 0, max: 16384, step: 1024, defaultValue: 8192, recommendedValue: 8192, tooltip: "Sets the size of the streaming pool in MB." },
    { name: "r.Streaming.MaxTempMemoryAllowed", label: "Max Temp Memory Allowed for Streaming", type: "number", min: 0, max: 8192, step: 1024, defaultValue: 4096, recommendedValue: 6144, tooltip: "Sets the maximum temporary memory allowed for streaming in MB." },
    { name: "foliage.CullAll", label: "Cull All Foliage", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables culling of all foliage." },
    { name: "foliage.DensityScale", label: "Foliage Density Scale", type: "number", min: 0, max: 1, step: 0.1, defaultValue: 0, recommendedValue: 0.4, tooltip: "Sets the density scale for foliage." },
    { name: "grass.DensityScale", label: "Grass Density Scale", type: "number", min: 0, max: 1, step: 0.1, defaultValue: 0, recommendedValue: 0.5, tooltip: "Sets the density scale for grass." },
    { name: "r.MipMapLODBias", label: "Mip Map LOD Bias", type: "number", min: -2, max: 2, step: 0.1, defaultValue: 1, recommendedValue: 0, tooltip: "Sets the LOD bias for mip maps. 0 for sharper textures." },
    { name: "r.ReflectionCaptureResolution", label: "Reflection Capture Resolution", type: "number", min: 8, max: 1024, step: 8, defaultValue: 32, recommendedValue: 128, tooltip: "Sets the resolution for reflection captures." },
    { name: "r.Streaming.HLODStrategy", label: "HLOD Streaming Strategy", type: "number", min: 0, max: 2, defaultValue: 2, recommendedValue: 2, tooltip: "Sets the strategy for streaming HLODs." },
    { name: "r.Streaming.FullyLoadUsedTextures", label: "Fully Load Used Textures", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables fully loading of used textures." },
    { name: "r.Streaming.UseAllMips", label: "Use All Mips", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables the use of all mip levels." },
    { name: "r.Streaming.LimitPoolSizeToVRAM", label: "Limit Pool Size to VRAM", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Limits the streaming pool size to available VRAM." },
    { name: "r.Streaming.MaxEffectiveScreenSize", label: "Max Effective Screen Size", type: "number", min: 0, max: 8192, step: 8, defaultValue: 1080, recommendedValue: 1080, tooltip: "Sets the maximum effective screen size for streaming calculations." },
    { name: "r.MaxAnisotropy", label: "Max Anisotropy", type: "number", min: 0, max: 16, defaultValue: 16, recommendedValue: 8, tooltip: "Sets the maximum anisotropy for textures. 8 offers a good balance." },
    { name: "r.DefaultFeature.AntiAliasing", label: "Anti-Aliasing", type: "number", min: 0, max: 3, defaultValue: 0, recommendedValue: 2, tooltip: "Sets the default anti-aliasing method. 2 for Temporal AA." },
    { name: "r.PostProcessAAQuality", label: "Post Process AA Quality", type: "number", min: 0, max: 6, defaultValue: 0, recommendedValue: 2, tooltip: "Sets the quality of post-process anti-aliasing." },
    { name: "r.FXAA.Quality", label: "FXAA Quality", type: "number", min: 0, max: 4, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the quality of FXAA." },
    { name: "r.TemporalAA.Upsampling", label: "Temporal AA Upsampling", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables temporal AA upsampling." },
    { name: "r.TemporalAA.Algorithm", label: "Temporal AA Algorithm", type: "number", min: 0, max: 1, defaultValue: 1, recommendedValue: 1, tooltip: "Sets the algorithm for temporal anti-aliasing." },
    { name: "a.uro.disableinterpolation", label: "Disable URO Interpolation", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Disables URO interpolation for more responsive controls." },
    { name: "r.lut.size", label: "LUT Size", type: "number", min: 16, max: 64, step: 4, defaultValue: 36, recommendedValue: 36, tooltip: "Sets the size of the color lookup table." },
    { name: "r.color.mid", label: "Color Mid", type: "number", min: 0, max: 1, step: 0.1, defaultValue: 0.8, recommendedValue: 0.8, tooltip: "Sets the mid-point for color adjustment." },
    { name: "RHI.MaximumFrameLatency", label: "Maximum Frame Latency", type: "number", min: 1, max: 3, defaultValue: 1, recommendedValue: 1, tooltip: "Sets the maximum frame latency for RHI." },
	{ name: "RHI.MaxSyncCounter", label: "Max Sync Counter", type: "number", min: 0, max: 8, defaultValue: 4, recommendedValue: 4, tooltip: "Sets the maximum sync counter for RHI." },
    { name: "d3d12.MaximumFrameLatency", label: "D3D12 Maximum Frame Latency", type: "number", min: 1, max: 3, defaultValue: 1, recommendedValue: 1, tooltip: "Sets the maximum frame latency for DirectX 12. Lower values reduce input lag." },
    { name: "d3d12.ForceThirtyHz", label: "Force 30Hz in D3D12", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Forces 30Hz refresh rate in DirectX 12. Keep disabled for higher framerates." },
    { name: "d3d12.MaxCommandsPerCommandList", label: "Max Commands Per Command List", type: "number", min: 0, max: 1000000, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the maximum number of commands per command list in DirectX 12. 0 for automatic." },
    { name: "gc.MaxObjectsNotConsideredByGC", label: "Max Objects Not Considered by GC", type: "number", min: 1, max: 1000000, defaultValue: 1, recommendedValue: 1, tooltip: "Sets the maximum number of objects not considered by garbage collection." },
    { name: "gc.SizeOfPermanentObjectPool", label: "Size of Permanent Object Pool", type: "number", min: 0, max: 1000000, defaultValue: 0, recommendedValue: 0, tooltip: "Sets the size of the permanent object pool for garbage collection." },
    { name: "gc.FlushStreamingOnGC", label: "Flush Streaming on GC", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables flushing of streaming during garbage collection. Keep disabled for better performance." },
    { name: "gc.NumRetriesBeforeForcingGC", label: "Num Retries Before Forcing GC", type: "number", min: 0, max: 100, defaultValue: 15, recommendedValue: 15, tooltip: "Sets the number of retries before forcing garbage collection." },
    { name: "gc.AllowParallelGC", label: "Allow Parallel GC", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables parallel garbage collection for better performance." },
    { name: "gc.TimeBetweenPurgingPendingKillObjects", label: "Time Between Purging Pending Kill Objects", type: "number", min: 0, max: 1000, defaultValue: 120, recommendedValue: 120, tooltip: "Sets the time (in seconds) between purging pending kill objects." },
    { name: "gc.CreateGCClusters", label: "Create GC Clusters", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables creation of garbage collection clusters for better performance." },
    { name: "gc.MinGCClusterSize", label: "Min GC Cluster Size", type: "number", min: 1, max: 100, defaultValue: 5, recommendedValue: 5, tooltip: "Sets the minimum size for garbage collection clusters." },
    { name: "gc.ActorClusteringEnabled", label: "Actor Clustering Enabled", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables clustering of actors for garbage collection, improving performance." },
    { name: "gc.BlueprintClusteringEnabled", label: "Blueprint Clustering Enabled", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables clustering of blueprints for garbage collection, improving performance." },
    { name: "gc.UseDisregardForGCOnDedicatedServers", label: "Use Disregard for GC on Dedicated Servers", type: "checkbox", defaultValue: false, recommendedValue: false, tooltip: "Enables disregard for garbage collection on dedicated servers. Keep disabled for client performance." },
    { name: "gc.MultithreadedDestructionEnabled", label: "Multithreaded Destruction Enabled", type: "checkbox", defaultValue: true, recommendedValue: true, tooltip: "Enables multithreaded destruction during garbage collection for better performance." },
    { name: "a.URO.ForceAnimRate", label: "Force Animation Rate", type: "number", min: 1, max: 60, defaultValue: 10, recommendedValue: 10, tooltip: "Forces a specific animation rate. 10 is a good balance for responsiveness and smoothness." },
    { name: "r.Tonemapper.Sharpen", label: "Tonemapper Sharpen", type: "number", min: 0, max: 10, step: 0.1, defaultValue: 3, recommendedValue: 3, tooltip: "Sets the sharpening amount for the tonemapper. 3 provides a good balance of sharpness without oversharpening." }
];