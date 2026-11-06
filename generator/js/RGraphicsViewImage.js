
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsViewImage() {
        

        // should be RGraphicsViewImage_BaseJs.call(this, engine):
        //RGraphicsViewImage.prototype = new RGraphicsViewImage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsViewImage.getIdStatic()))) {

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
            qWarning("RGraphicsViewImage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RGraphicsViewImage_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RGraphicsViewImage);
  }

  
  else {
    
        print("RGraphicsViewImage(): wrong number / type of arguments");
      
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

      //RGraphicsViewImage.prototype = new RGraphicsViewImage_BaseJs(engine);
      //RGraphicsViewImage.prototype = new RGraphicsViewImage_Wrapper(engine);
      RGraphicsViewImage.prototype = new Object();


      RGraphicsViewImage.prototype.toString = function() {
          //return "RGraphicsViewImage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsViewImage [JS]";
        };
      RGraphicsViewImage.getObjectType = function() {
        return RJSType_RGraphicsViewImage.getIdStatic();
      };

      RGraphicsViewImage.prototype.getObjectType = function() {
        return RJSType_RGraphicsViewImage.getIdStatic();
      };

      RGraphicsViewImage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsViewImage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RGraphicsView.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ColorMode
RGraphicsViewImage.FullColor = RGraphicsViewImage_Wrapper.FullColor;
RGraphicsViewImage.GrayScale = RGraphicsViewImage_Wrapper.GrayScale;
RGraphicsViewImage.BlackWhite = RGraphicsViewImage_Wrapper.BlackWhite;


      // functions:
      
        // function 
        RGraphicsViewImage.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.findChild = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.children = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setParent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.property = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.parent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.clearCaches = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.clearCaches");
          
              return this.__PROXY__.clearCaches(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setDisplayOnlyCurrentUcs = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setDisplayOnlyCurrentUcs");
          
              return this.__PROXY__.setDisplayOnlyCurrentUcs(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.mapCornersFromView = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.mapCornersFromView");
          
              return this.__PROXY__.mapCornersFromView(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getMinimum = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getMinimum");
          
              return this.__PROXY__.getMinimum(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getMaximum = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getMaximum");
          
              return this.__PROXY__.getMaximum(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleTerminateEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleTerminateEvent");
          
              return this.__PROXY__.handleTerminateEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleKeyPressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleKeyPressEvent");
          
              return this.__PROXY__.handleKeyPressEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleKeyReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleKeyReleaseEvent");
          
              return this.__PROXY__.handleKeyReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleMouseMoveEvent");
          
              return this.__PROXY__.handleMouseMoveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleMousePressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleMousePressEvent");
          
              return this.__PROXY__.handleMousePressEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleMouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleMouseReleaseEvent");
          
              return this.__PROXY__.handleMouseReleaseEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleMouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleMouseDoubleClickEvent");
          
              return this.__PROXY__.handleMouseDoubleClickEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleWheelEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleWheelEvent");
          
              return this.__PROXY__.handleWheelEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleTabletEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleTabletEvent");
          
              return this.__PROXY__.handleTabletEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handleSwipeGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handleSwipeGestureEvent");
          
              return this.__PROXY__.handleSwipeGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handlePanGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handlePanGestureEvent");
          
              return this.__PROXY__.handlePanGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.handlePinchGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.handlePinchGestureEvent");
          
              return this.__PROXY__.handlePinchGestureEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.viewportChangeEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.viewportChangeEvent");
          
              return this.__PROXY__.viewportChangeEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoomIn");
          
              return this.__PROXY__.zoomIn(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoomOut");
          
              return this.__PROXY__.zoomOut(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoomPrevious = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoomPrevious");
          
              return this.__PROXY__.zoomPrevious(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoomToSelection = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoomToSelection");
          
              return this.__PROXY__.zoomToSelection(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoomToEntities = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoomToEntities");
          
              return this.__PROXY__.zoomToEntities(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.startPan = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.startPan");
          
              return this.__PROXY__.startPan(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isActive = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getSignalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getSignalsBlocked");
          
              return this.__PROXY__.getSignalsBlocked(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setSignalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setSignalsBlocked");
          
              return this.__PROXY__.setSignalsBlocked(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getCursor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getCursor");
          
              return this.__PROXY__.getCursor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getClosestReferencePoint = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getClosestReferencePoint");
          
              return this.__PROXY__.getClosestReferencePoint(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getClosestEntity = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getClosestEntity");
          
              return this.__PROXY__.getClosestEntity(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getMargin = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getMargin");
          
              return this.__PROXY__.getMargin(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getColorMode");
          
              return this.__PROXY__.getColorMode(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getTextLabels = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getTextLabels");
          
              return this.__PROXY__.getTextLabels(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.clearTextLabels = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.clearTextLabels");
          
              return this.__PROXY__.clearTextLabels(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.addTextLabel = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.addTextLabel");
          
              return this.__PROXY__.addTextLabel(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getLastKnownMousePosition = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getLastKnownMousePosition");
          
              return this.__PROXY__.getLastKnownMousePosition(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getCurrentStepScaleFactor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getCurrentStepScaleFactor");
          
              return this.__PROXY__.getCurrentStepScaleFactor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setCurrentStepScaleFactor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setCurrentStepScaleFactor");
          
              return this.__PROXY__.setCurrentStepScaleFactor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getCurrentStepOffset = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getCurrentStepOffset");
          
              return this.__PROXY__.getCurrentStepOffset(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setCurrentStepOffset = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setCurrentStepOffset");
          
              return this.__PROXY__.setCurrentStepOffset(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.updateTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.updateTextHeightThreshold");
          
              return this.__PROXY__.updateTextHeightThreshold(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setForceTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setForceTextHeightThreshold");
          
              return this.__PROXY__.setForceTextHeightThreshold(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getForceTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getForceTextHeightThreshold");
          
              return this.__PROXY__.getForceTextHeightThreshold(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isPathVisible = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isPathVisible");
          
              return this.__PROXY__.isPathVisible(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getDevicePixelRatio = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getDevicePixelRatio");
          
              return this.__PROXY__.getDevicePixelRatio(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isShared = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isShared");
          
              return this.__PROXY__.isShared(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.registerForFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.registerForFocus");
          
              return this.__PROXY__.registerForFocus(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getWidget = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getWidget");
          
              return this.__PROXY__.getWidget(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getNumThreads = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getNumThreads");
          
              return this.__PROXY__.getNumThreads(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setNumThreads = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setNumThreads");
          
              return this.__PROXY__.setNumThreads(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.clear = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setViewportNumber = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setViewportNumber");
          
              return this.__PROXY__.setViewportNumber(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getViewportNumber = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getViewportNumber");
          
              return this.__PROXY__.getViewportNumber(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setNavigationAction = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setNavigationAction");
          
              return this.__PROXY__.setNavigationAction(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getBox = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getBox");
          
              return this.__PROXY__.getBox(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.autoZoom = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.autoZoom");
          
              return this.__PROXY__.autoZoom(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoomTo = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoomTo");
          
              return this.__PROXY__.zoomTo(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.zoom = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.zoom");
          
              return this.__PROXY__.zoom(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.pan = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.pan");
          
              return this.__PROXY__.pan(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.centerToBox = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.centerToBox");
          
              return this.__PROXY__.centerToBox(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.centerToPoint = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.centerToPoint");
          
              return this.__PROXY__.centerToPoint(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setGrid = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setGrid");
          
              return this.__PROXY__.setGrid(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getGrid = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getGrid");
          
              return this.__PROXY__.getGrid(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getFactor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getFactor");
          
              return this.__PROXY__.getFactor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setFactor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setFactor");
          
              return this.__PROXY__.setFactor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getOffset = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getOffset");
          
              return this.__PROXY__.getOffset(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setOffset = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getBackgroundColor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getBackgroundColor");
          
              return this.__PROXY__.getBackgroundColor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setMargin = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setMargin");
          
              return this.__PROXY__.setMargin(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setColorMode");
          
              return this.__PROXY__.setColorMode(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setHairlineMode = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setHairlineMode");
          
              return this.__PROXY__.setHairlineMode(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getHairlineMode = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getHairlineMode");
          
              return this.__PROXY__.getHairlineMode(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setHairlineMinimumMode = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setHairlineMinimumMode");
          
              return this.__PROXY__.setHairlineMinimumMode(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getHairlineMinimumMode = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getHairlineMinimumMode");
          
              return this.__PROXY__.getHairlineMinimumMode(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setAntialiasing = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setAntialiasing");
          
              return this.__PROXY__.setAntialiasing(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getAntialiasing = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getAntialiasing");
          
              return this.__PROXY__.getAntialiasing(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getScene = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getScene");
          
              return this.__PROXY__.getScene(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setExporting = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setExporting");
          
              return this.__PROXY__.setExporting(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isExporting = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isExporting");
          
              return this.__PROXY__.isExporting(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isPrintingOrExporting = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isPrintingOrExporting");
          
              return this.__PROXY__.isPrintingOrExporting(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setPrinting = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setPrinting");
          
              return this.__PROXY__.setPrinting(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isPrinting = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isPrinting");
          
              return this.__PROXY__.isPrinting(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setPrintPreview = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setPrintPreview");
          
              return this.__PROXY__.setPrintPreview(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isPrintPreview = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isPrintPreview");
          
              return this.__PROXY__.isPrintPreview(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setPrintPointSize = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setPrintPointSize");
          
              return this.__PROXY__.setPrintPointSize(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.simulateMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.simulateMouseMoveEvent");
          
              return this.__PROXY__.simulateMouseMoveEvent(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setTextHeightThresholdOverride = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setTextHeightThresholdOverride");
          
              return this.__PROXY__.setTextHeightThresholdOverride(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getTextHeightThresholdOverride = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getTextHeightThresholdOverride");
          
              return this.__PROXY__.getTextHeightThresholdOverride(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isGridVisible = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isGridVisible");
          
              return this.__PROXY__.isGridVisible(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setGridVisible = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setGridVisible");
          
              return this.__PROXY__.setGridVisible(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setScene = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setScene");
          
              return this.__PROXY__.setScene(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setBackgroundColor = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setBackgroundColor");
          
              return this.__PROXY__.setBackgroundColor(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.regenerate = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.regenerate");
          
              return this.__PROXY__.regenerate(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.repaintView = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.repaintView");
          
              return this.__PROXY__.repaintView(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.updateImage = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.updateImage");
          
              return this.__PROXY__.updateImage(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.giveFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.giveFocus");
          
              return this.__PROXY__.giveFocus(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.removeFocus = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.removeFocus");
          
              return this.__PROXY__.removeFocus(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.saveViewport = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.saveViewport");
          
              return this.__PROXY__.saveViewport(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.restoreViewport = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.restoreViewport");
          
              return this.__PROXY__.restoreViewport(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.mapFromView = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.mapFromView");
          
              return this.__PROXY__.mapFromView(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.mapToView = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.mapToView");
          
              return this.__PROXY__.mapToView(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.mapDistanceFromView = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.mapDistanceFromView");
          
              return this.__PROXY__.mapDistanceFromView(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.mapDistanceToView = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.mapDistanceToView");
          
              return this.__PROXY__.mapDistanceToView(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getWidth");
          
              return this.__PROXY__.getWidth(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.resizeImage = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.resizeImage");
          
              return this.__PROXY__.resizeImage(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.paintGridPoint = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.paintGridPoint");
          
              return this.__PROXY__.paintGridPoint(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.paintGridLine = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.paintGridLine");
          
              return this.__PROXY__.paintGridLine(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setPaintOrigin = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setPaintOrigin");
          
              return this.__PROXY__.setPaintOrigin(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setPanOptimization = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setPanOptimization");
          
              return this.__PROXY__.setPanOptimization(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getPanOptimization = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getPanOptimization");
          
              return this.__PROXY__.getPanOptimization(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.paintEntities = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.paintEntities");
          
              return this.__PROXY__.paintEntities(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.paintOverlay = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.paintOverlay");
          
              return this.__PROXY__.paintOverlay(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getBuffer = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getBuffer");
          
              return this.__PROXY__.getBuffer(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getGraphicsBufferWithPreview = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getGraphicsBufferWithPreview");
          
              return this.__PROXY__.getGraphicsBufferWithPreview(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getTransform = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getTransform");
          
              return this.__PROXY__.getTransform(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.emitUpdateSnapInfo = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.emitUpdateSnapInfo");
          
              return this.__PROXY__.emitUpdateSnapInfo(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.emitUpdateTextLabel = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.emitUpdateTextLabel");
          
              return this.__PROXY__.emitUpdateTextLabel(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.clearBackground = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.clearBackground");
          
              return this.__PROXY__.clearBackground(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.addToBackground = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.addToBackground");
          
              return this.__PROXY__.addToBackground(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setBackgroundTransform = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setBackgroundTransform");
          
              return this.__PROXY__.setBackgroundTransform(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.clearOverlay = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.clearOverlay");
          
              return this.__PROXY__.clearOverlay(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.addToOverlay = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.addToOverlay");
          
              return this.__PROXY__.addToOverlay(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setColorCorrectionOverride = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setColorCorrectionOverride");
          
              return this.__PROXY__.setColorCorrectionOverride(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getColorCorrectionOverride = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getColorCorrectionOverride");
          
              return this.__PROXY__.getColorCorrectionOverride(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setMinimumLineweight = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setMinimumLineweight");
          
              return this.__PROXY__.setMinimumLineweight(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getMinimumLineweight = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getMinimumLineweight");
          
              return this.__PROXY__.getMinimumLineweight(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setMaximumLineweight = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setMaximumLineweight");
          
              return this.__PROXY__.setMaximumLineweight(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getMaximumLineweight = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getMaximumLineweight");
          
              return this.__PROXY__.getMaximumLineweight(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setPaintOffset = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setPaintOffset");
          
              return this.__PROXY__.setPaintOffset(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getPaintOffset = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getPaintOffset");
          
              return this.__PROXY__.getPaintOffset(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.isAlphaEnabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.isAlphaEnabled");
          
              return this.__PROXY__.isAlphaEnabled(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setAlphaEnabled = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setAlphaEnabled");
          
              return this.__PROXY__.setAlphaEnabled(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.getDrawingScale = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.getDrawingScale");
          
              return this.__PROXY__.getDrawingScale(...args);
            
        };
    
        // function 
        RGraphicsViewImage.prototype.setDrawingScale = function(...args) 
          
        {
          //print("JS: RGraphicsViewImage.prototype.setDrawingScale");
          
              return this.__PROXY__.setDrawingScale(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RGraphicsViewImage.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RGraphicsViewImage.prototype, 'viewportChanged', {
            get: function() { return this.__PROXY__.viewportChanged; },
            configurable: true
        });
        
        Object.defineProperty(RGraphicsViewImage.prototype, 'updateSnapInfo', {
            get: function() { return this.__PROXY__.updateSnapInfo; },
            configurable: true
        });
        
          Object.defineProperty(RGraphicsViewImage.prototype, 'updateSnapInfo(RGraphicsViewWorker*,RSnap*,RSnapRestriction*)', {
              get: function() { return this.__PROXY__.updateSnapInfo; },
              configurable: true
          });
        
        Object.defineProperty(RGraphicsViewImage.prototype, 'updateTextLabel', {
            get: function() { return this.__PROXY__.updateTextLabel; },
            configurable: true
        });
        
          Object.defineProperty(RGraphicsViewImage.prototype, 'updateTextLabel(RGraphicsViewWorker*,RTextLabel)', {
              get: function() { return this.__PROXY__.updateTextLabel; },
              configurable: true
          });
        RGraphicsViewImage.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsViewImage.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsViewImage.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsViewImage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsViewImage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsViewImage.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      