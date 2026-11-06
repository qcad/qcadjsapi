
      // auto generated
      //var self;

      // class constructor:
      function RSettings() {
        

        // should be RSettings_BaseJs.call(this, engine):
        //RSettings.prototype = new RSettings_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSettings.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RSettings.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSettings_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

        }


      }

      //RSettings.prototype = new RSettings_BaseJs(engine);
      //RSettings.prototype = new RSettings_Wrapper(engine);
      RSettings.prototype = new Object();


      RSettings.prototype.toString = function() {
          //return "RSettings [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSettings [JS]";
        };
      RSettings.getObjectType = function() {
        return RJSType_RSettings.getIdStatic();
      };

      RSettings.prototype.getObjectType = function() {
        return RJSType_RSettings.getIdStatic();
      };

      RSettings.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSettings.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RSettings.prototype.uninit = function(...args) 
          
        {
          //print("JS: RSettings.prototype.uninit");
          
              return this.__PROXY__.uninit(...args);
            
        };
        
        // function 
        RSettings.prototype.setNoWrite = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setNoWrite");
          
              return this.__PROXY__.setNoWrite(...args);
            
        };
        
        // function 
        RSettings.prototype.getAppId = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAppId");
          
              return this.__PROXY__.getAppId(...args);
            
        };
        
        // function 
        RSettings.prototype.getDevicePixelRatio = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDevicePixelRatio");
          
              return this.__PROXY__.getDevicePixelRatio(...args);
            
        };
        
        // function 
        RSettings.prototype.getLocale = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getLocale");
          
              return this.__PROXY__.getLocale(...args);
            
        };
        
        // function 
        RSettings.prototype.loadTranslations = function(...args) 
          
        {
          //print("JS: RSettings.prototype.loadTranslations");
          
              return this.__PROXY__.loadTranslations(...args);
            
        };
        
        // function 
        RSettings.prototype.translate = function(...args) 
          
        {
          //print("JS: RSettings.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
        
        // function 
        RSettings.prototype.getOriginalArguments = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getOriginalArguments");
          
              return this.__PROXY__.getOriginalArguments(...args);
            
        };
        
        // function 
        RSettings.prototype.setOriginalArguments = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setOriginalArguments");
          
              return this.__PROXY__.setOriginalArguments(...args);
            
        };
        
        // function 
        RSettings.prototype.getArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getArgument");
          
              return this.__PROXY__.getArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.getArguments = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getArguments");
          
              return this.__PROXY__.getArguments(...args);
            
        };
        
        // function 
        RSettings.prototype.getIntArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getIntArgument");
          
              return this.__PROXY__.getIntArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.getIntListArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getIntListArgument");
          
              return this.__PROXY__.getIntListArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.getFloatArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getFloatArgument");
          
              return this.__PROXY__.getFloatArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.getColorArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getColorArgument");
          
              return this.__PROXY__.getColorArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.getVectorArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getVectorArgument");
          
              return this.__PROXY__.getVectorArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.getBoxArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getBoxArgument");
          
              return this.__PROXY__.getBoxArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.testArgument = function(...args) 
          
        {
          //print("JS: RSettings.prototype.testArgument");
          
              return this.__PROXY__.testArgument(...args);
            
        };
        
        // function 
        RSettings.prototype.isDeployed = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isDeployed");
          
              return this.__PROXY__.isDeployed(...args);
            
        };
        
        // function 
        RSettings.prototype.getApplicationPath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getApplicationPath");
          
              return this.__PROXY__.getApplicationPath(...args);
            
        };
        
        // function 
        RSettings.prototype.getPluginPaths = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPluginPaths");
          
              return this.__PROXY__.getPluginPaths(...args);
            
        };
        
        // function 
        RSettings.prototype.getPluginPath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPluginPath");
          
              return this.__PROXY__.getPluginPath(...args);
            
        };
        
        // function 
        RSettings.prototype.getThemePath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getThemePath");
          
              return this.__PROXY__.getThemePath(...args);
            
        };
        
        // function 
        RSettings.prototype.getStandardLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getStandardLocation");
          
              return this.__PROXY__.getStandardLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getCacheLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getCacheLocation");
          
              return this.__PROXY__.getCacheLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getDataLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDataLocation");
          
              return this.__PROXY__.getDataLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getTempLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getTempLocation");
          
              return this.__PROXY__.getTempLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getDesktopLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDesktopLocation");
          
              return this.__PROXY__.getDesktopLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getDocumentsLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDocumentsLocation");
          
              return this.__PROXY__.getDocumentsLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getHomeLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getHomeLocation");
          
              return this.__PROXY__.getHomeLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.getPluginsLocation = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPluginsLocation");
          
              return this.__PROXY__.getPluginsLocation(...args);
            
        };
        
        // function 
        RSettings.prototype.isGuiEnabled = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isGuiEnabled");
          
              return this.__PROXY__.isGuiEnabled(...args);
            
        };
        
        // function 
        RSettings.prototype.isDebuggerEnabled = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isDebuggerEnabled");
          
              return this.__PROXY__.isDebuggerEnabled(...args);
            
        };
        
        // function 
        RSettings.prototype.hasQuitFlag = function(...args) 
          
        {
          //print("JS: RSettings.prototype.hasQuitFlag");
          
              return this.__PROXY__.hasQuitFlag(...args);
            
        };
        
        // function 
        RSettings.prototype.setQuitFlag = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setQuitFlag");
          
              return this.__PROXY__.setQuitFlag(...args);
            
        };
        
        // function 
        RSettings.prototype.getFileName = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getFileName");
          
              return this.__PROXY__.getFileName(...args);
            
        };
        
        // function 
        RSettings.prototype.getPath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPath");
          
              return this.__PROXY__.getPath(...args);
            
        };
        
        // function 
        RSettings.prototype.getLaunchPath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getLaunchPath");
          
              return this.__PROXY__.getLaunchPath(...args);
            
        };
        
        // function 
        RSettings.prototype.setLaunchPath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setLaunchPath");
          
              return this.__PROXY__.setLaunchPath(...args);
            
        };
        
        // function 
        RSettings.prototype.setRulerFont = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setRulerFont");
          
              return this.__PROXY__.setRulerFont(...args);
            
        };
        
        // function 
        RSettings.prototype.getRulerFont = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getRulerFont");
          
              return this.__PROXY__.getRulerFont(...args);
            
        };
        
        // function 
        RSettings.prototype.setSnapLabelFont = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setSnapLabelFont");
          
              return this.__PROXY__.setSnapLabelFont(...args);
            
        };
        
        // function 
        RSettings.prototype.getSnapLabelFont = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getSnapLabelFont");
          
              return this.__PROXY__.getSnapLabelFont(...args);
            
        };
        
        // function 
        RSettings.prototype.getInfoLabelFont = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getInfoLabelFont");
          
              return this.__PROXY__.getInfoLabelFont(...args);
            
        };
        
        // function 
        RSettings.prototype.getStatusBarFont = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getStatusBarFont");
          
              return this.__PROXY__.getStatusBarFont(...args);
            
        };
        
        // function 
        RSettings.prototype.getSelectionColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getSelectionColor");
          
              return this.__PROXY__.getSelectionColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getReferencePointColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getReferencePointColor");
          
              return this.__PROXY__.getReferencePointColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getStartReferencePointColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getStartReferencePointColor");
          
              return this.__PROXY__.getStartReferencePointColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getEndReferencePointColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getEndReferencePointColor");
          
              return this.__PROXY__.getEndReferencePointColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getSecondaryReferencePointColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getSecondaryReferencePointColor");
          
              return this.__PROXY__.getSecondaryReferencePointColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getTertiaryReferencePointColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getTertiaryReferencePointColor");
          
              return this.__PROXY__.getTertiaryReferencePointColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getHighResolutionGraphicsView = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getHighResolutionGraphicsView");
          
              return this.__PROXY__.getHighResolutionGraphicsView(...args);
            
        };
        
        // function 
        RSettings.prototype.getAutoScaleGrid = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAutoScaleGrid");
          
              return this.__PROXY__.getAutoScaleGrid(...args);
            
        };
        
        // function 
        RSettings.prototype.getAutoScaleMetaGrid = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAutoScaleMetaGrid");
          
              return this.__PROXY__.getAutoScaleMetaGrid(...args);
            
        };
        
        // function 
        RSettings.prototype.getAutoScalePatterns = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAutoScalePatterns");
          
              return this.__PROXY__.getAutoScalePatterns(...args);
            
        };
        
        // function 
        RSettings.prototype.getAutoZoomOnLoad = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAutoZoomOnLoad");
          
              return this.__PROXY__.getAutoZoomOnLoad(...args);
            
        };
        
        // function 
        RSettings.prototype.getColorCorrection = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getColorCorrection");
          
              return this.__PROXY__.getColorCorrection(...args);
            
        };
        
        // function 
        RSettings.prototype.getColorCorrectionDisableForPrinting = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getColorCorrectionDisableForPrinting");
          
              return this.__PROXY__.getColorCorrectionDisableForPrinting(...args);
            
        };
        
        // function 
        RSettings.prototype.getColorThreshold = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getColorThreshold");
          
              return this.__PROXY__.getColorThreshold(...args);
            
        };
        
        // function 
        RSettings.prototype.getFadingFactor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getFadingFactor");
          
              return this.__PROXY__.getFadingFactor(...args);
            
        };
        
        // function 
        RSettings.prototype.getTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getTextHeightThreshold");
          
              return this.__PROXY__.getTextHeightThreshold(...args);
            
        };
        
        // function 
        RSettings.prototype.getArcAngleLengthThreshold = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getArcAngleLengthThreshold");
          
              return this.__PROXY__.getArcAngleLengthThreshold(...args);
            
        };
        
        // function 
        RSettings.prototype.getMinArcAngleStep = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getMinArcAngleStep");
          
              return this.__PROXY__.getMinArcAngleStep(...args);
            
        };
        
        // function 
        RSettings.prototype.getDashThreshold = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDashThreshold");
          
              return this.__PROXY__.getDashThreshold(...args);
            
        };
        
        // function 
        RSettings.prototype.getQtVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getQtVersion");
          
              return this.__PROXY__.getQtVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getQtVersionString = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getQtVersionString");
          
              return this.__PROXY__.getQtVersionString(...args);
            
        };
        
        // function 
        RSettings.prototype.isQt = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isQt");
          
              return this.__PROXY__.isQt(...args);
            
        };
        
        // function 
        RSettings.prototype.getCompilerVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getCompilerVersion");
          
              return this.__PROXY__.getCompilerVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getOSVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getOSVersion");
          
              return this.__PROXY__.getOSVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getReleaseDate = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getReleaseDate");
          
              return this.__PROXY__.getReleaseDate(...args);
            
        };
        
        // function 
        RSettings.prototype.getVersionString = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getVersionString");
          
              return this.__PROXY__.getVersionString(...args);
            
        };
        
        // function 
        RSettings.prototype.getNumericalVersionString = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getNumericalVersionString");
          
              return this.__PROXY__.getNumericalVersionString(...args);
            
        };
        
        // function 
        RSettings.prototype.getMajorVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getMajorVersion");
          
              return this.__PROXY__.getMajorVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getMinorVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getMinorVersion");
          
              return this.__PROXY__.getMinorVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getRevisionVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getRevisionVersion");
          
              return this.__PROXY__.getRevisionVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getBuildVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getBuildVersion");
          
              return this.__PROXY__.getBuildVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getRevisionString = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getRevisionString");
          
              return this.__PROXY__.getRevisionString(...args);
            
        };
        
        // function 
        RSettings.prototype.setFirstStart = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setFirstStart");
          
              return this.__PROXY__.setFirstStart(...args);
            
        };
        
        // function 
        RSettings.prototype.isFirstStart = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isFirstStart");
          
              return this.__PROXY__.isFirstStart(...args);
            
        };
        
        // function 
        RSettings.prototype.setNewVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setNewVersion");
          
              return this.__PROXY__.setNewVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.isNewVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isNewVersion");
          
              return this.__PROXY__.isNewVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.setPreviousVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setPreviousVersion");
          
              return this.__PROXY__.setPreviousVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getCurrentVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getCurrentVersion");
          
              return this.__PROXY__.getCurrentVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.getPreviousVersion = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPreviousVersion");
          
              return this.__PROXY__.getPreviousVersion(...args);
            
        };
        
        // function 
        RSettings.prototype.isUpdated = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isUpdated");
          
              return this.__PROXY__.isUpdated(...args);
            
        };
        
        // function 
        RSettings.prototype.getSnapRange = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getSnapRange");
          
              return this.__PROXY__.getSnapRange(...args);
            
        };
        
        // function 
        RSettings.prototype.getPickRange = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPickRange");
          
              return this.__PROXY__.getPickRange(...args);
            
        };
        
        // function 
        RSettings.prototype.getZeroWeightWeight = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getZeroWeightWeight");
          
              return this.__PROXY__.getZeroWeightWeight(...args);
            
        };
        
        // function 
        RSettings.prototype.getPreviewEntities = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPreviewEntities");
          
              return this.__PROXY__.getPreviewEntities(...args);
            
        };
        
        // function 
        RSettings.prototype.getLimitZoomAndScroll = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getLimitZoomAndScroll");
          
              return this.__PROXY__.getLimitZoomAndScroll(...args);
            
        };
        
        // function 
        RSettings.prototype.getShowCrosshair = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getShowCrosshair");
          
              return this.__PROXY__.getShowCrosshair(...args);
            
        };
        
        // function 
        RSettings.prototype.setShowCrosshair = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setShowCrosshair");
          
              return this.__PROXY__.setShowCrosshair(...args);
            
        };
        
        // function 
        RSettings.prototype.getShowLargeCrosshair = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getShowLargeCrosshair");
          
              return this.__PROXY__.getShowLargeCrosshair(...args);
            
        };
        
        // function 
        RSettings.prototype.setShowLargeCrosshair = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setShowLargeCrosshair");
          
              return this.__PROXY__.setShowLargeCrosshair(...args);
            
        };
        
        // function 
        RSettings.prototype.getShowLargeOriginAxis = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getShowLargeOriginAxis");
          
              return this.__PROXY__.getShowLargeOriginAxis(...args);
            
        };
        
        // function 
        RSettings.prototype.setShowLargeOriginAxis = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setShowLargeOriginAxis");
          
              return this.__PROXY__.setShowLargeOriginAxis(...args);
            
        };
        
        // function 
        RSettings.prototype.getConcurrentDrawing = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getConcurrentDrawing");
          
              return this.__PROXY__.getConcurrentDrawing(...args);
            
        };
        
        // function 
        RSettings.prototype.setConcurrentDrawing = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setConcurrentDrawing");
          
              return this.__PROXY__.setConcurrentDrawing(...args);
            
        };
        
        // function 
        RSettings.prototype.getNumberLocale = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getNumberLocale");
          
              return this.__PROXY__.getNumberLocale(...args);
            
        };
        
        // function 
        RSettings.prototype.initRecentFiles = function(...args) 
          
        {
          //print("JS: RSettings.prototype.initRecentFiles");
          
              return this.__PROXY__.initRecentFiles(...args);
            
        };
        
        // function 
        RSettings.prototype.addRecentFile = function(...args) 
          
        {
          //print("JS: RSettings.prototype.addRecentFile");
          
              return this.__PROXY__.addRecentFile(...args);
            
        };
        
        // function 
        RSettings.prototype.removeRecentFile = function(...args) 
          
        {
          //print("JS: RSettings.prototype.removeRecentFile");
          
              return this.__PROXY__.removeRecentFile(...args);
            
        };
        
        // function 
        RSettings.prototype.getRecentFiles = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getRecentFiles");
          
              return this.__PROXY__.getRecentFiles(...args);
            
        };
        
        // function 
        RSettings.prototype.clearRecentFiles = function(...args) 
          
        {
          //print("JS: RSettings.prototype.clearRecentFiles");
          
              return this.__PROXY__.clearRecentFiles(...args);
            
        };
        
        // function 
        RSettings.prototype.getThumbnailFilePath = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getThumbnailFilePath");
          
              return this.__PROXY__.getThumbnailFilePath(...args);
            
        };
        
        // function 
        RSettings.prototype.getColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getColor");
          
              return this.__PROXY__.getColor(...args);
            
        };
        
        // function 
        RSettings.prototype.hasValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.hasValue");
          
              return this.__PROXY__.hasValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getValue");
          
              return this.__PROXY__.getValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getColorValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getColorValue");
          
              return this.__PROXY__.getColorValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getBoolValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getBoolValue");
          
              return this.__PROXY__.getBoolValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getDoubleValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDoubleValue");
          
              return this.__PROXY__.getDoubleValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getIntValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getIntValue");
          
              return this.__PROXY__.getIntValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getStringValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getStringValue");
          
              return this.__PROXY__.getStringValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getStringListValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getStringListValue");
          
              return this.__PROXY__.getStringListValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getCharValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getCharValue");
          
              return this.__PROXY__.getCharValue(...args);
            
        };
        
        // function 
        RSettings.prototype.setValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
        
        // function 
        RSettings.prototype.removeValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.removeValue");
          
              return this.__PROXY__.removeValue(...args);
            
        };
        
        // function 
        RSettings.prototype.setDefaultValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setDefaultValue");
          
              return this.__PROXY__.setDefaultValue(...args);
            
        };
        
        // function 
        RSettings.prototype.getDefaultValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDefaultValue");
          
              return this.__PROXY__.getDefaultValue(...args);
            
        };
        
        // function 
        RSettings.prototype.hasDefaultValue = function(...args) 
          
        {
          //print("JS: RSettings.prototype.hasDefaultValue");
          
              return this.__PROXY__.hasDefaultValue(...args);
            
        };
        
        // function 
        RSettings.prototype.setApplicationNameOverride = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setApplicationNameOverride");
          
              return this.__PROXY__.setApplicationNameOverride(...args);
            
        };
        
        // function 
        RSettings.prototype.getApplicationNameOverride = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getApplicationNameOverride");
          
              return this.__PROXY__.getApplicationNameOverride(...args);
            
        };
        
        // function 
        RSettings.prototype.hasApplicationNameOverride = function(...args) 
          
        {
          //print("JS: RSettings.prototype.hasApplicationNameOverride");
          
              return this.__PROXY__.hasApplicationNameOverride(...args);
            
        };
        
        // function 
        RSettings.prototype.getAllKeys = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAllKeys");
          
              return this.__PROXY__.getAllKeys(...args);
            
        };
        
        // function 
        RSettings.prototype.getQSettings = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getQSettings");
          
              return this.__PROXY__.getQSettings(...args);
            
        };
        
        // function 
        RSettings.prototype.resetCache = function(...args) 
          
        {
          //print("JS: RSettings.prototype.resetCache");
          
              return this.__PROXY__.resetCache(...args);
            
        };
        
        // function 
        RSettings.prototype.setXDataEnabled = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setXDataEnabled");
          
              return this.__PROXY__.setXDataEnabled(...args);
            
        };
        
        // function 
        RSettings.prototype.isXDataEnabled = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isXDataEnabled");
          
              return this.__PROXY__.isXDataEnabled(...args);
            
        };
        
        // function 
        RSettings.prototype.setNextVersionEnabled = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setNextVersionEnabled");
          
              return this.__PROXY__.setNextVersionEnabled(...args);
            
        };
        
        // function 
        RSettings.prototype.isNextVersionEnabled = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isNextVersionEnabled");
          
              return this.__PROXY__.isNextVersionEnabled(...args);
            
        };
        
        // function 
        RSettings.prototype.getAutoScaleLinetypePatterns = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAutoScaleLinetypePatterns");
          
              return this.__PROXY__.getAutoScaleLinetypePatterns(...args);
            
        };
        
        // function 
        RSettings.prototype.getApplyLineweightToPoints = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getApplyLineweightToPoints");
          
              return this.__PROXY__.getApplyLineweightToPoints(...args);
            
        };
        
        // function 
        RSettings.prototype.getScreenBasedLineweightScaleFactor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getScreenBasedLineweightScaleFactor");
          
              return this.__PROXY__.getScreenBasedLineweightScaleFactor(...args);
            
        };
        
        // function 
        RSettings.prototype.getUseSecondarySelectionColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getUseSecondarySelectionColor");
          
              return this.__PROXY__.getUseSecondarySelectionColor(...args);
            
        };
        
        // function 
        RSettings.prototype.getUseSolidLineSelection = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getUseSolidLineSelection");
          
              return this.__PROXY__.getUseSolidLineSelection(...args);
            
        };
        
        // function 
        RSettings.prototype.getMouseThreshold = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getMouseThreshold");
          
              return this.__PROXY__.getMouseThreshold(...args);
            
        };
        
        // function 
        RSettings.prototype.getPositionByMousePress = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPositionByMousePress");
          
              return this.__PROXY__.getPositionByMousePress(...args);
            
        };
        
        // function 
        RSettings.prototype.setAllowMouseMoveInterruptionsOverride = function(...args) 
          
        {
          //print("JS: RSettings.prototype.setAllowMouseMoveInterruptionsOverride");
          
              return this.__PROXY__.setAllowMouseMoveInterruptionsOverride(...args);
            
        };
        
        // function 
        RSettings.prototype.getAllowMouseMoveInterruptions = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAllowMouseMoveInterruptions");
          
              return this.__PROXY__.getAllowMouseMoveInterruptions(...args);
            
        };
        
        // function 
        RSettings.prototype.isTextRenderedAsText = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isTextRenderedAsText");
          
              return this.__PROXY__.isTextRenderedAsText(...args);
            
        };
        
        // function 
        RSettings.prototype.isLayer0CompatibilityOn = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isLayer0CompatibilityOn");
          
              return this.__PROXY__.isLayer0CompatibilityOn(...args);
            
        };
        
        // function 
        RSettings.prototype.getSelectBlockWithAttribute = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getSelectBlockWithAttribute");
          
              return this.__PROXY__.getSelectBlockWithAttribute(...args);
            
        };
        
        // function 
        RSettings.prototype.getHideAttributeWithBlock = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getHideAttributeWithBlock");
          
              return this.__PROXY__.getHideAttributeWithBlock(...args);
            
        };
        
        // function 
        RSettings.prototype.getImportRecomputedDimBlocks = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getImportRecomputedDimBlocks");
          
              return this.__PROXY__.getImportRecomputedDimBlocks(...args);
            
        };
        
        // function 
        RSettings.prototype.getIgnoreBlockReferencePoint = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getIgnoreBlockReferencePoint");
          
              return this.__PROXY__.getIgnoreBlockReferencePoint(...args);
            
        };
        
        // function 
        RSettings.prototype.getIgnoreAllReferencePoints = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getIgnoreAllReferencePoints");
          
              return this.__PROXY__.getIgnoreAllReferencePoints(...args);
            
        };
        
        // function 
        RSettings.prototype.getReferencePointSize = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getReferencePointSize");
          
              return this.__PROXY__.getReferencePointSize(...args);
            
        };
        
        // function 
        RSettings.prototype.getReferencePointShape = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getReferencePointShape");
          
              return this.__PROXY__.getReferencePointShape(...args);
            
        };
        
        // function 
        RSettings.prototype.getMaxReferencePointEntities = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getMaxReferencePointEntities");
          
              return this.__PROXY__.getMaxReferencePointEntities(...args);
            
        };
        
        // function 
        RSettings.prototype.getMaxReferencePointEntitiesDisplay = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getMaxReferencePointEntitiesDisplay");
          
              return this.__PROXY__.getMaxReferencePointEntitiesDisplay(...args);
            
        };
        
        // function 
        RSettings.prototype.getPropertyEditorShowOnRequest = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPropertyEditorShowOnRequest");
          
              return this.__PROXY__.getPropertyEditorShowOnRequest(...args);
            
        };
        
        // function 
        RSettings.prototype.getSimpleTextAlignLeft = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getSimpleTextAlignLeft");
          
              return this.__PROXY__.getSimpleTextAlignLeft(...args);
            
        };
        
        // function 
        RSettings.prototype.getPolarCoordinateSeparator = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPolarCoordinateSeparator");
          
              return this.__PROXY__.getPolarCoordinateSeparator(...args);
            
        };
        
        // function 
        RSettings.prototype.getCartesianCoordinateSeparator = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getCartesianCoordinateSeparator");
          
              return this.__PROXY__.getCartesianCoordinateSeparator(...args);
            
        };
        
        // function 
        RSettings.prototype.getRelativeCoordinatePrefix = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getRelativeCoordinatePrefix");
          
              return this.__PROXY__.getRelativeCoordinatePrefix(...args);
            
        };
        
        // function 
        RSettings.prototype.isDarkMode = function(...args) 
          
        {
          //print("JS: RSettings.prototype.isDarkMode");
          
              return this.__PROXY__.isDarkMode(...args);
            
        };
        
        // function 
        RSettings.prototype.hasDarkGuiBackground = function(...args) 
          
        {
          //print("JS: RSettings.prototype.hasDarkGuiBackground");
          
              return this.__PROXY__.hasDarkGuiBackground(...args);
            
        };
        
        // function 
        RSettings.prototype.getAppearance = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getAppearance");
          
              return this.__PROXY__.getAppearance(...args);
            
        };
        
        // function 
        RSettings.prototype.applyAppearance = function(...args) 
          
        {
          //print("JS: RSettings.prototype.applyAppearance");
          
              return this.__PROXY__.applyAppearance(...args);
            
        };
        
        // function 
        RSettings.prototype.hasCustomStyleSheet = function(...args) 
          
        {
          //print("JS: RSettings.prototype.hasCustomStyleSheet");
          
              return this.__PROXY__.hasCustomStyleSheet(...args);
            
        };
        
        // function 
        RSettings.prototype.getPrinterNames = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getPrinterNames");
          
              return this.__PROXY__.getPrinterNames(...args);
            
        };
        
        // function 
        RSettings.prototype.getDefaultPrinterName = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getDefaultPrinterName");
          
              return this.__PROXY__.getDefaultPrinterName(...args);
            
        };
        
        // function 
        RSettings.prototype.appendOpenGLMessage = function(...args) 
          
        {
          //print("JS: RSettings.prototype.appendOpenGLMessage");
          
              return this.__PROXY__.appendOpenGLMessage(...args);
            
        };
        
        // function 
        RSettings.prototype.getOpenGLMessages = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getOpenGLMessages");
          
              return this.__PROXY__.getOpenGLMessages(...args);
            
        };
        
        // function 
        RSettings.prototype.useQml = function(...args) 
          
        {
          //print("JS: RSettings.prototype.useQml");
          
              return this.__PROXY__.useQml(...args);
            
        };
        
        // function 
        RSettings.prototype.getWidgetSelectionColor = function(...args) 
          
        {
          //print("JS: RSettings.prototype.getWidgetSelectionColor");
          
              return this.__PROXY__.getWidgetSelectionColor(...args);
            
        };
        

      // static functions:
      

        // static function 
        RSettings.uninit = function() 
          
        {
          //print("JS: RSettings.uninit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.uninit(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.uninit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setNoWrite = function() 
          
        {
          //print("JS: RSettings.setNoWrite");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setNoWrite(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setNoWrite(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAppId = function() 
          
        {
          //print("JS: RSettings.getAppId");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAppId(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAppId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDevicePixelRatio = function() 
          
        {
          //print("JS: RSettings.getDevicePixelRatio");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDevicePixelRatio(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDevicePixelRatio(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getLocale = function() 
          
        {
          //print("JS: RSettings.getLocale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getLocale(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getLocale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.loadTranslations = function() 
          
        {
          //print("JS: RSettings.loadTranslations");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.loadTranslations(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.loadTranslations(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.translate = function() 
          
        {
          //print("JS: RSettings.translate");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.translate(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.translate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getOriginalArguments = function() 
          
        {
          //print("JS: RSettings.getOriginalArguments");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getOriginalArguments(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getOriginalArguments(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setOriginalArguments = function() 
          
        {
          //print("JS: RSettings.setOriginalArguments");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setOriginalArguments(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setOriginalArguments(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getArgument = function() 
          
        {
          //print("JS: RSettings.getArgument");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getArguments = function() 
          
        {
          //print("JS: RSettings.getArguments");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getArguments(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getArguments(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getIntArgument = function() 
          
        {
          //print("JS: RSettings.getIntArgument");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getIntArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getIntArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getIntListArgument = function() 
          
        {
          //print("JS: RSettings.getIntListArgument");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getIntListArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getIntListArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getFloatArgument = function() 
          
        {
          //print("JS: RSettings.getFloatArgument");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getFloatArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getFloatArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getColorArgument = function() 
          
        {
          //print("JS: RSettings.getColorArgument");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getColorArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getColorArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getVectorArgument = function() 
          
        {
          //print("JS: RSettings.getVectorArgument");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getVectorArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getVectorArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getBoxArgument = function() 
          
        {
          //print("JS: RSettings.getBoxArgument");
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getBoxArgument(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getBoxArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.testArgument = function() 
          
        {
          //print("JS: RSettings.testArgument");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.testArgument(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.testArgument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isDeployed = function() 
          
        {
          //print("JS: RSettings.isDeployed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isDeployed(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isDeployed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getApplicationPath = function() 
          
        {
          //print("JS: RSettings.getApplicationPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getApplicationPath(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getApplicationPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPluginPaths = function() 
          
        {
          //print("JS: RSettings.getPluginPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPluginPaths(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPluginPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPluginPath = function() 
          
        {
          //print("JS: RSettings.getPluginPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPluginPath(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPluginPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getThemePath = function() 
          
        {
          //print("JS: RSettings.getThemePath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getThemePath(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getThemePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getStandardLocation = function() 
          
        {
          //print("JS: RSettings.getStandardLocation");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getStandardLocation(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getStandardLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getCacheLocation = function() 
          
        {
          //print("JS: RSettings.getCacheLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getCacheLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getCacheLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDataLocation = function() 
          
        {
          //print("JS: RSettings.getDataLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDataLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDataLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getTempLocation = function() 
          
        {
          //print("JS: RSettings.getTempLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getTempLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getTempLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDesktopLocation = function() 
          
        {
          //print("JS: RSettings.getDesktopLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDesktopLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDesktopLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDocumentsLocation = function() 
          
        {
          //print("JS: RSettings.getDocumentsLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDocumentsLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDocumentsLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getHomeLocation = function() 
          
        {
          //print("JS: RSettings.getHomeLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getHomeLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getHomeLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPluginsLocation = function() 
          
        {
          //print("JS: RSettings.getPluginsLocation");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPluginsLocation(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPluginsLocation(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isGuiEnabled = function() 
          
        {
          //print("JS: RSettings.isGuiEnabled");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isGuiEnabled(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isGuiEnabled(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isDebuggerEnabled = function() 
          
        {
          //print("JS: RSettings.isDebuggerEnabled");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isDebuggerEnabled(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isDebuggerEnabled(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.hasQuitFlag = function() 
          
        {
          //print("JS: RSettings.hasQuitFlag");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.hasQuitFlag(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.hasQuitFlag(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setQuitFlag = function() 
          
        {
          //print("JS: RSettings.setQuitFlag");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setQuitFlag(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setQuitFlag(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getFileName = function() 
          
        {
          //print("JS: RSettings.getFileName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getFileName(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPath = function() 
          
        {
          //print("JS: RSettings.getPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPath(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getLaunchPath = function() 
          
        {
          //print("JS: RSettings.getLaunchPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getLaunchPath(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getLaunchPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setLaunchPath = function() 
          
        {
          //print("JS: RSettings.setLaunchPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setLaunchPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setLaunchPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setRulerFont = function() 
          
        {
          //print("JS: RSettings.setRulerFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setRulerFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setRulerFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getRulerFont = function() 
          
        {
          //print("JS: RSettings.getRulerFont");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getRulerFont(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getRulerFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setSnapLabelFont = function() 
          
        {
          //print("JS: RSettings.setSnapLabelFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setSnapLabelFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setSnapLabelFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getSnapLabelFont = function() 
          
        {
          //print("JS: RSettings.getSnapLabelFont");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getSnapLabelFont(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getSnapLabelFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getInfoLabelFont = function() 
          
        {
          //print("JS: RSettings.getInfoLabelFont");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getInfoLabelFont(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getInfoLabelFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getStatusBarFont = function() 
          
        {
          //print("JS: RSettings.getStatusBarFont");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getStatusBarFont(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getStatusBarFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getSelectionColor = function() 
          
        {
          //print("JS: RSettings.getSelectionColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getSelectionColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getSelectionColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getReferencePointColor = function() 
          
        {
          //print("JS: RSettings.getReferencePointColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getReferencePointColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getReferencePointColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getStartReferencePointColor = function() 
          
        {
          //print("JS: RSettings.getStartReferencePointColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getStartReferencePointColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getStartReferencePointColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getEndReferencePointColor = function() 
          
        {
          //print("JS: RSettings.getEndReferencePointColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getEndReferencePointColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getEndReferencePointColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getSecondaryReferencePointColor = function() 
          
        {
          //print("JS: RSettings.getSecondaryReferencePointColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getSecondaryReferencePointColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getSecondaryReferencePointColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getTertiaryReferencePointColor = function() 
          
        {
          //print("JS: RSettings.getTertiaryReferencePointColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getTertiaryReferencePointColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getTertiaryReferencePointColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getHighResolutionGraphicsView = function() 
          
        {
          //print("JS: RSettings.getHighResolutionGraphicsView");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getHighResolutionGraphicsView(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getHighResolutionGraphicsView(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAutoScaleGrid = function() 
          
        {
          //print("JS: RSettings.getAutoScaleGrid");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAutoScaleGrid(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAutoScaleGrid(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAutoScaleMetaGrid = function() 
          
        {
          //print("JS: RSettings.getAutoScaleMetaGrid");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAutoScaleMetaGrid(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAutoScaleMetaGrid(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAutoScalePatterns = function() 
          
        {
          //print("JS: RSettings.getAutoScalePatterns");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAutoScalePatterns(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAutoScalePatterns(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAutoZoomOnLoad = function() 
          
        {
          //print("JS: RSettings.getAutoZoomOnLoad");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAutoZoomOnLoad(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAutoZoomOnLoad(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getColorCorrection = function() 
          
        {
          //print("JS: RSettings.getColorCorrection");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getColorCorrection(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getColorCorrection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getColorCorrectionDisableForPrinting = function() 
          
        {
          //print("JS: RSettings.getColorCorrectionDisableForPrinting");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getColorCorrectionDisableForPrinting(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getColorCorrectionDisableForPrinting(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getColorThreshold = function() 
          
        {
          //print("JS: RSettings.getColorThreshold");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getColorThreshold(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getColorThreshold(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getFadingFactor = function() 
          
        {
          //print("JS: RSettings.getFadingFactor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getFadingFactor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getFadingFactor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getTextHeightThreshold = function() 
          
        {
          //print("JS: RSettings.getTextHeightThreshold");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getTextHeightThreshold(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getTextHeightThreshold(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getArcAngleLengthThreshold = function() 
          
        {
          //print("JS: RSettings.getArcAngleLengthThreshold");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getArcAngleLengthThreshold(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getArcAngleLengthThreshold(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getMinArcAngleStep = function() 
          
        {
          //print("JS: RSettings.getMinArcAngleStep");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getMinArcAngleStep(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getMinArcAngleStep(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDashThreshold = function() 
          
        {
          //print("JS: RSettings.getDashThreshold");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDashThreshold(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDashThreshold(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getQtVersion = function() 
          
        {
          //print("JS: RSettings.getQtVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getQtVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getQtVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getQtVersionString = function() 
          
        {
          //print("JS: RSettings.getQtVersionString");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getQtVersionString(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getQtVersionString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isQt = function() 
          
        {
          //print("JS: RSettings.isQt");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isQt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isQt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getCompilerVersion = function() 
          
        {
          //print("JS: RSettings.getCompilerVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getCompilerVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getCompilerVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getOSVersion = function() 
          
        {
          //print("JS: RSettings.getOSVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getOSVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getOSVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getReleaseDate = function() 
          
        {
          //print("JS: RSettings.getReleaseDate");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getReleaseDate(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getReleaseDate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getVersionString = function() 
          
        {
          //print("JS: RSettings.getVersionString");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getVersionString(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getVersionString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getNumericalVersionString = function() 
          
        {
          //print("JS: RSettings.getNumericalVersionString");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getNumericalVersionString(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getNumericalVersionString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getMajorVersion = function() 
          
        {
          //print("JS: RSettings.getMajorVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getMajorVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getMajorVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getMinorVersion = function() 
          
        {
          //print("JS: RSettings.getMinorVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getMinorVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getMinorVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getRevisionVersion = function() 
          
        {
          //print("JS: RSettings.getRevisionVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getRevisionVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getRevisionVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getBuildVersion = function() 
          
        {
          //print("JS: RSettings.getBuildVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getBuildVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getBuildVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getRevisionString = function() 
          
        {
          //print("JS: RSettings.getRevisionString");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getRevisionString(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getRevisionString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setFirstStart = function() 
          
        {
          //print("JS: RSettings.setFirstStart");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setFirstStart(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setFirstStart(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isFirstStart = function() 
          
        {
          //print("JS: RSettings.isFirstStart");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isFirstStart(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isFirstStart(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setNewVersion = function() 
          
        {
          //print("JS: RSettings.setNewVersion");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setNewVersion(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setNewVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isNewVersion = function() 
          
        {
          //print("JS: RSettings.isNewVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isNewVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isNewVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setPreviousVersion = function() 
          
        {
          //print("JS: RSettings.setPreviousVersion");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setPreviousVersion(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setPreviousVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getCurrentVersion = function() 
          
        {
          //print("JS: RSettings.getCurrentVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getCurrentVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getCurrentVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPreviousVersion = function() 
          
        {
          //print("JS: RSettings.getPreviousVersion");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPreviousVersion(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPreviousVersion(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isUpdated = function() 
          
        {
          //print("JS: RSettings.isUpdated");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isUpdated(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isUpdated(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getSnapRange = function() 
          
        {
          //print("JS: RSettings.getSnapRange");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getSnapRange(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getSnapRange(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPickRange = function() 
          
        {
          //print("JS: RSettings.getPickRange");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPickRange(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPickRange(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getZeroWeightWeight = function() 
          
        {
          //print("JS: RSettings.getZeroWeightWeight");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getZeroWeightWeight(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getZeroWeightWeight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPreviewEntities = function() 
          
        {
          //print("JS: RSettings.getPreviewEntities");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPreviewEntities(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPreviewEntities(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getLimitZoomAndScroll = function() 
          
        {
          //print("JS: RSettings.getLimitZoomAndScroll");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getLimitZoomAndScroll(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getLimitZoomAndScroll(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getShowCrosshair = function() 
          
        {
          //print("JS: RSettings.getShowCrosshair");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getShowCrosshair(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getShowCrosshair(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setShowCrosshair = function() 
          
        {
          //print("JS: RSettings.setShowCrosshair");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setShowCrosshair(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setShowCrosshair(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getShowLargeCrosshair = function() 
          
        {
          //print("JS: RSettings.getShowLargeCrosshair");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getShowLargeCrosshair(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getShowLargeCrosshair(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setShowLargeCrosshair = function() 
          
        {
          //print("JS: RSettings.setShowLargeCrosshair");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setShowLargeCrosshair(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setShowLargeCrosshair(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getShowLargeOriginAxis = function() 
          
        {
          //print("JS: RSettings.getShowLargeOriginAxis");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getShowLargeOriginAxis(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getShowLargeOriginAxis(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setShowLargeOriginAxis = function() 
          
        {
          //print("JS: RSettings.setShowLargeOriginAxis");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setShowLargeOriginAxis(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setShowLargeOriginAxis(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getConcurrentDrawing = function() 
          
        {
          //print("JS: RSettings.getConcurrentDrawing");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getConcurrentDrawing(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getConcurrentDrawing(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setConcurrentDrawing = function() 
          
        {
          //print("JS: RSettings.setConcurrentDrawing");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setConcurrentDrawing(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setConcurrentDrawing(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getNumberLocale = function() 
          
        {
          //print("JS: RSettings.getNumberLocale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getNumberLocale(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getNumberLocale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.initRecentFiles = function() 
          
        {
          //print("JS: RSettings.initRecentFiles");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.initRecentFiles(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.initRecentFiles(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.addRecentFile = function() 
          
        {
          //print("JS: RSettings.addRecentFile");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.addRecentFile(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.addRecentFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.removeRecentFile = function() 
          
        {
          //print("JS: RSettings.removeRecentFile");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.removeRecentFile(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.removeRecentFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getRecentFiles = function() 
          
        {
          //print("JS: RSettings.getRecentFiles");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getRecentFiles(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getRecentFiles(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.clearRecentFiles = function() 
          
        {
          //print("JS: RSettings.clearRecentFiles");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.clearRecentFiles(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.clearRecentFiles(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getThumbnailFilePath = function() 
          
        {
          //print("JS: RSettings.getThumbnailFilePath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getThumbnailFilePath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getThumbnailFilePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getColor = function() 
          
        {
          //print("JS: RSettings.getColor");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getColor(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.hasValue = function() 
          
        {
          //print("JS: RSettings.hasValue");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.hasValue(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.hasValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getValue = function() 
          
        {
          //print("JS: RSettings.getValue");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getColorValue = function() 
          
        {
          //print("JS: RSettings.getColorValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getColorValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getColorValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getBoolValue = function() 
          
        {
          //print("JS: RSettings.getBoolValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getBoolValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getBoolValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDoubleValue = function() 
          
        {
          //print("JS: RSettings.getDoubleValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDoubleValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDoubleValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getIntValue = function() 
          
        {
          //print("JS: RSettings.getIntValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getIntValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getIntValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getStringValue = function() 
          
        {
          //print("JS: RSettings.getStringValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getStringValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getStringValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getStringListValue = function() 
          
        {
          //print("JS: RSettings.getStringListValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getStringListValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getStringListValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getCharValue = function() 
          
        {
          //print("JS: RSettings.getCharValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getCharValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getCharValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setValue = function() 
          
        {
          //print("JS: RSettings.setValue");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setValue(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.removeValue = function() 
          
        {
          //print("JS: RSettings.removeValue");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.removeValue(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.removeValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setDefaultValue = function() 
          
        {
          //print("JS: RSettings.setDefaultValue");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setDefaultValue(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setDefaultValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDefaultValue = function() 
          
        {
          //print("JS: RSettings.getDefaultValue");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDefaultValue(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDefaultValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.hasDefaultValue = function() 
          
        {
          //print("JS: RSettings.hasDefaultValue");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.hasDefaultValue(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.hasDefaultValue(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setApplicationNameOverride = function() 
          
        {
          //print("JS: RSettings.setApplicationNameOverride");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setApplicationNameOverride(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setApplicationNameOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getApplicationNameOverride = function() 
          
        {
          //print("JS: RSettings.getApplicationNameOverride");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getApplicationNameOverride(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getApplicationNameOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.hasApplicationNameOverride = function() 
          
        {
          //print("JS: RSettings.hasApplicationNameOverride");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.hasApplicationNameOverride(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.hasApplicationNameOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAllKeys = function() 
          
        {
          //print("JS: RSettings.getAllKeys");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAllKeys(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAllKeys(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getQSettings = function() 
          
        {
          //print("JS: RSettings.getQSettings");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getQSettings(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getQSettings(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.resetCache = function() 
          
        {
          //print("JS: RSettings.resetCache");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.resetCache(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.resetCache(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setXDataEnabled = function() 
          
        {
          //print("JS: RSettings.setXDataEnabled");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setXDataEnabled(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setXDataEnabled(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isXDataEnabled = function() 
          
        {
          //print("JS: RSettings.isXDataEnabled");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isXDataEnabled(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isXDataEnabled(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setNextVersionEnabled = function() 
          
        {
          //print("JS: RSettings.setNextVersionEnabled");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setNextVersionEnabled(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setNextVersionEnabled(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isNextVersionEnabled = function() 
          
        {
          //print("JS: RSettings.isNextVersionEnabled");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isNextVersionEnabled(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isNextVersionEnabled(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAutoScaleLinetypePatterns = function() 
          
        {
          //print("JS: RSettings.getAutoScaleLinetypePatterns");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAutoScaleLinetypePatterns(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAutoScaleLinetypePatterns(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getApplyLineweightToPoints = function() 
          
        {
          //print("JS: RSettings.getApplyLineweightToPoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getApplyLineweightToPoints(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getApplyLineweightToPoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getScreenBasedLineweightScaleFactor = function() 
          
        {
          //print("JS: RSettings.getScreenBasedLineweightScaleFactor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getScreenBasedLineweightScaleFactor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getScreenBasedLineweightScaleFactor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getUseSecondarySelectionColor = function() 
          
        {
          //print("JS: RSettings.getUseSecondarySelectionColor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getUseSecondarySelectionColor(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getUseSecondarySelectionColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getUseSolidLineSelection = function() 
          
        {
          //print("JS: RSettings.getUseSolidLineSelection");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getUseSolidLineSelection(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getUseSolidLineSelection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getMouseThreshold = function() 
          
        {
          //print("JS: RSettings.getMouseThreshold");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getMouseThreshold(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getMouseThreshold(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPositionByMousePress = function() 
          
        {
          //print("JS: RSettings.getPositionByMousePress");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPositionByMousePress(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPositionByMousePress(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.setAllowMouseMoveInterruptionsOverride = function() 
          
        {
          //print("JS: RSettings.setAllowMouseMoveInterruptionsOverride");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.setAllowMouseMoveInterruptionsOverride(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.setAllowMouseMoveInterruptionsOverride(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAllowMouseMoveInterruptions = function() 
          
        {
          //print("JS: RSettings.getAllowMouseMoveInterruptions");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAllowMouseMoveInterruptions(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAllowMouseMoveInterruptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isTextRenderedAsText = function() 
          
        {
          //print("JS: RSettings.isTextRenderedAsText");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isTextRenderedAsText(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isTextRenderedAsText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isLayer0CompatibilityOn = function() 
          
        {
          //print("JS: RSettings.isLayer0CompatibilityOn");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isLayer0CompatibilityOn(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isLayer0CompatibilityOn(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getSelectBlockWithAttribute = function() 
          
        {
          //print("JS: RSettings.getSelectBlockWithAttribute");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getSelectBlockWithAttribute(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getSelectBlockWithAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getHideAttributeWithBlock = function() 
          
        {
          //print("JS: RSettings.getHideAttributeWithBlock");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getHideAttributeWithBlock(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getHideAttributeWithBlock(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getImportRecomputedDimBlocks = function() 
          
        {
          //print("JS: RSettings.getImportRecomputedDimBlocks");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getImportRecomputedDimBlocks(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getImportRecomputedDimBlocks(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getIgnoreBlockReferencePoint = function() 
          
        {
          //print("JS: RSettings.getIgnoreBlockReferencePoint");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getIgnoreBlockReferencePoint(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getIgnoreBlockReferencePoint(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getIgnoreAllReferencePoints = function() 
          
        {
          //print("JS: RSettings.getIgnoreAllReferencePoints");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getIgnoreAllReferencePoints(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getIgnoreAllReferencePoints(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getReferencePointSize = function() 
          
        {
          //print("JS: RSettings.getReferencePointSize");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getReferencePointSize(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getReferencePointSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getReferencePointShape = function() 
          
        {
          //print("JS: RSettings.getReferencePointShape");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getReferencePointShape(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getReferencePointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getMaxReferencePointEntities = function() 
          
        {
          //print("JS: RSettings.getMaxReferencePointEntities");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getMaxReferencePointEntities(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getMaxReferencePointEntities(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getMaxReferencePointEntitiesDisplay = function() 
          
        {
          //print("JS: RSettings.getMaxReferencePointEntitiesDisplay");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getMaxReferencePointEntitiesDisplay(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getMaxReferencePointEntitiesDisplay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPropertyEditorShowOnRequest = function() 
          
        {
          //print("JS: RSettings.getPropertyEditorShowOnRequest");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPropertyEditorShowOnRequest(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPropertyEditorShowOnRequest(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getSimpleTextAlignLeft = function() 
          
        {
          //print("JS: RSettings.getSimpleTextAlignLeft");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getSimpleTextAlignLeft(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getSimpleTextAlignLeft(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPolarCoordinateSeparator = function() 
          
        {
          //print("JS: RSettings.getPolarCoordinateSeparator");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPolarCoordinateSeparator(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPolarCoordinateSeparator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getCartesianCoordinateSeparator = function() 
          
        {
          //print("JS: RSettings.getCartesianCoordinateSeparator");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getCartesianCoordinateSeparator(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getCartesianCoordinateSeparator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getRelativeCoordinatePrefix = function() 
          
        {
          //print("JS: RSettings.getRelativeCoordinatePrefix");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getRelativeCoordinatePrefix(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getRelativeCoordinatePrefix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.isDarkMode = function() 
          
        {
          //print("JS: RSettings.isDarkMode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.isDarkMode(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.isDarkMode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.hasDarkGuiBackground = function() 
          
        {
          //print("JS: RSettings.hasDarkGuiBackground");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.hasDarkGuiBackground(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.hasDarkGuiBackground(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getAppearance = function() 
          
        {
          //print("JS: RSettings.getAppearance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getAppearance(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getAppearance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.applyAppearance = function() 
          
        {
          //print("JS: RSettings.applyAppearance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.applyAppearance(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.applyAppearance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.hasCustomStyleSheet = function() 
          
        {
          //print("JS: RSettings.hasCustomStyleSheet");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.hasCustomStyleSheet(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.hasCustomStyleSheet(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getPrinterNames = function() 
          
        {
          //print("JS: RSettings.getPrinterNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getPrinterNames(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getPrinterNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getDefaultPrinterName = function() 
          
        {
          //print("JS: RSettings.getDefaultPrinterName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getDefaultPrinterName(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getDefaultPrinterName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.appendOpenGLMessage = function() 
          
        {
          //print("JS: RSettings.appendOpenGLMessage");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.appendOpenGLMessage(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.appendOpenGLMessage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getOpenGLMessages = function() 
          
        {
          //print("JS: RSettings.getOpenGLMessages");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getOpenGLMessages(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getOpenGLMessages(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.useQml = function() 
          
        {
          //print("JS: RSettings.useQml");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.useQml(
                  
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.useQml(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSettings.getWidgetSelectionColor = function() 
          
        {
          //print("JS: RSettings.getWidgetSelectionColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSettings_WrapperSingletonInstance.getWidgetSelectionColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSettings);
  }

  
  else {
    
        print("RSettings.getWidgetSelectionColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RSettings.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RSettings.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RSettings.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSettings.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSettings.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSettings.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      