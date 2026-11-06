
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsView() {
        

        // should be RGraphicsView_BaseJs.call(this, engine):
        //RGraphicsView.prototype = new RGraphicsView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsView.getIdStatic()))) {

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
            qWarning("RGraphicsView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGraphicsView.js: No constructor found for class RGraphicsView");
            
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

      //RGraphicsView.prototype = new RGraphicsView_BaseJs(engine);
      //RGraphicsView.prototype = new RGraphicsView_Wrapper(engine);
      RGraphicsView.prototype = new Object();


      RGraphicsView.prototype.toString = function() {
          //return "RGraphicsView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsView [JS]";
        };
      RGraphicsView.getObjectType = function() {
        return RJSType_RGraphicsView.getIdStatic();
      };

      RGraphicsView.prototype.getObjectType = function() {
        return RJSType_RGraphicsView.getIdStatic();
      };

      RGraphicsView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsView.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ColorMode
RGraphicsView.FullColor = RGraphicsView_Wrapper.FullColor;
RGraphicsView.GrayScale = RGraphicsView_Wrapper.GrayScale;
RGraphicsView.BlackWhite = RGraphicsView_Wrapper.BlackWhite;


      // functions:
      
        // function 
        RGraphicsView.prototype.setViewportNumber = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setViewportNumber");
          
              return this.__PROXY__.setViewportNumber(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getViewportNumber = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getViewportNumber");
          
              return this.__PROXY__.getViewportNumber(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.clear = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.clearCaches = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.clearCaches");
          
              return this.__PROXY__.clearCaches(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setDisplayOnlyCurrentUcs = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setDisplayOnlyCurrentUcs");
          
              return this.__PROXY__.setDisplayOnlyCurrentUcs(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setScene = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setScene");
          
              return this.__PROXY__.setScene(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getScene = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getScene");
          
              return this.__PROXY__.getScene(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getDocumentInterface = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getDocumentInterface");
          
              return this.__PROXY__.getDocumentInterface(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.mapFromView = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.mapFromView");
          
              return this.__PROXY__.mapFromView(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.mapToView = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.mapToView");
          
              return this.__PROXY__.mapToView(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.mapDistanceFromView = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.mapDistanceFromView");
          
              return this.__PROXY__.mapDistanceFromView(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.mapDistanceToView = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.mapDistanceToView");
          
              return this.__PROXY__.mapDistanceToView(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.mapCornersFromView = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.mapCornersFromView");
          
              return this.__PROXY__.mapCornersFromView(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getBox = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getBox");
          
              return this.__PROXY__.getBox(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getMinimum = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getMinimum");
          
              return this.__PROXY__.getMinimum(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getMaximum = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getMaximum");
          
              return this.__PROXY__.getMaximum(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleTerminateEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleTerminateEvent");
          
              return this.__PROXY__.handleTerminateEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleKeyPressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleKeyPressEvent");
          
              return this.__PROXY__.handleKeyPressEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleKeyReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleKeyReleaseEvent");
          
              return this.__PROXY__.handleKeyReleaseEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.simulateMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.simulateMouseMoveEvent");
          
              return this.__PROXY__.simulateMouseMoveEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleMouseMoveEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleMouseMoveEvent");
          
              return this.__PROXY__.handleMouseMoveEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleMousePressEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleMousePressEvent");
          
              return this.__PROXY__.handleMousePressEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleMouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleMouseReleaseEvent");
          
              return this.__PROXY__.handleMouseReleaseEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleMouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleMouseDoubleClickEvent");
          
              return this.__PROXY__.handleMouseDoubleClickEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleWheelEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleWheelEvent");
          
              return this.__PROXY__.handleWheelEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleTabletEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleTabletEvent");
          
              return this.__PROXY__.handleTabletEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handleSwipeGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handleSwipeGestureEvent");
          
              return this.__PROXY__.handleSwipeGestureEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handlePanGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handlePanGestureEvent");
          
              return this.__PROXY__.handlePanGestureEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.handlePinchGestureEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.handlePinchGestureEvent");
          
              return this.__PROXY__.handlePinchGestureEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.giveFocus = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.giveFocus");
          
              return this.__PROXY__.giveFocus(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.removeFocus = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.removeFocus");
          
              return this.__PROXY__.removeFocus(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.viewportChangeEvent = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.viewportChangeEvent");
          
              return this.__PROXY__.viewportChangeEvent(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.saveViewport = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.saveViewport");
          
              return this.__PROXY__.saveViewport(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.restoreViewport = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.restoreViewport");
          
              return this.__PROXY__.restoreViewport(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoomIn");
          
              return this.__PROXY__.zoomIn(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoomOut");
          
              return this.__PROXY__.zoomOut(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoom = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoom");
          
              return this.__PROXY__.zoom(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoomTo = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoomTo");
          
              return this.__PROXY__.zoomTo(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoomPrevious = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoomPrevious");
          
              return this.__PROXY__.zoomPrevious(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.autoZoom = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.autoZoom");
          
              return this.__PROXY__.autoZoom(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoomToSelection = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoomToSelection");
          
              return this.__PROXY__.zoomToSelection(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.zoomToEntities = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.zoomToEntities");
          
              return this.__PROXY__.zoomToEntities(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.centerToPoint = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.centerToPoint");
          
              return this.__PROXY__.centerToPoint(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.centerToBox = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.centerToBox");
          
              return this.__PROXY__.centerToBox(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.pan = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.pan");
          
              return this.__PROXY__.pan(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.startPan = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.startPan");
          
              return this.__PROXY__.startPan(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getFactor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getFactor");
          
              return this.__PROXY__.getFactor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setFactor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setFactor");
          
              return this.__PROXY__.setFactor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getOffset = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getOffset");
          
              return this.__PROXY__.getOffset(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setOffset = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.regenerate = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.regenerate");
          
              return this.__PROXY__.regenerate(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.repaintView = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.repaintView");
          
              return this.__PROXY__.repaintView(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getWidth");
          
              return this.__PROXY__.getWidth(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isActive = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getSignalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getSignalsBlocked");
          
              return this.__PROXY__.getSignalsBlocked(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setSignalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setSignalsBlocked");
          
              return this.__PROXY__.setSignalsBlocked(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setNavigationAction = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setNavigationAction");
          
              return this.__PROXY__.setNavigationAction(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getGrid = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getGrid");
          
              return this.__PROXY__.getGrid(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setGrid = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setGrid");
          
              return this.__PROXY__.setGrid(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setGridVisible = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setGridVisible");
          
              return this.__PROXY__.setGridVisible(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isGridVisible = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isGridVisible");
          
              return this.__PROXY__.isGridVisible(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.paintGridPoint = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.paintGridPoint");
          
              return this.__PROXY__.paintGridPoint(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.paintGridLine = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.paintGridLine");
          
              return this.__PROXY__.paintGridLine(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getCursor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getCursor");
          
              return this.__PROXY__.getCursor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getClosestReferencePoint = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getClosestReferencePoint");
          
              return this.__PROXY__.getClosestReferencePoint(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getClosestEntity = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getClosestEntity");
          
              return this.__PROXY__.getClosestEntity(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setBackgroundColor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setBackgroundColor");
          
              return this.__PROXY__.setBackgroundColor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getBackgroundColor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getBackgroundColor");
          
              return this.__PROXY__.getBackgroundColor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getMargin = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getMargin");
          
              return this.__PROXY__.getMargin(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setMargin = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setMargin");
          
              return this.__PROXY__.setMargin(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setExporting = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setExporting");
          
              return this.__PROXY__.setExporting(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isExporting = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isExporting");
          
              return this.__PROXY__.isExporting(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isPrintingOrExporting = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isPrintingOrExporting");
          
              return this.__PROXY__.isPrintingOrExporting(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setPrinting = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setPrinting");
          
              return this.__PROXY__.setPrinting(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isPrinting = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isPrinting");
          
              return this.__PROXY__.isPrinting(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setPrintPreview = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setPrintPreview");
          
              return this.__PROXY__.setPrintPreview(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isPrintPreview = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isPrintPreview");
          
              return this.__PROXY__.isPrintPreview(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setPrintPointSize = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setPrintPointSize");
          
              return this.__PROXY__.setPrintPointSize(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setColorMode");
          
              return this.__PROXY__.setColorMode(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getColorMode = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getColorMode");
          
              return this.__PROXY__.getColorMode(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setHairlineMode = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setHairlineMode");
          
              return this.__PROXY__.setHairlineMode(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getHairlineMode = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getHairlineMode");
          
              return this.__PROXY__.getHairlineMode(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setHairlineMinimumMode = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setHairlineMinimumMode");
          
              return this.__PROXY__.setHairlineMinimumMode(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getHairlineMinimumMode = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getHairlineMinimumMode");
          
              return this.__PROXY__.getHairlineMinimumMode(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getTextLabels = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getTextLabels");
          
              return this.__PROXY__.getTextLabels(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.clearTextLabels = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.clearTextLabels");
          
              return this.__PROXY__.clearTextLabels(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.addTextLabel = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.addTextLabel");
          
              return this.__PROXY__.addTextLabel(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getLastKnownMousePosition = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getLastKnownMousePosition");
          
              return this.__PROXY__.getLastKnownMousePosition(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getCurrentStepScaleFactor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getCurrentStepScaleFactor");
          
              return this.__PROXY__.getCurrentStepScaleFactor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setCurrentStepScaleFactor = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setCurrentStepScaleFactor");
          
              return this.__PROXY__.setCurrentStepScaleFactor(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getCurrentStepOffset = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getCurrentStepOffset");
          
              return this.__PROXY__.getCurrentStepOffset(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setCurrentStepOffset = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setCurrentStepOffset");
          
              return this.__PROXY__.setCurrentStepOffset(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setTextHeightThresholdOverride = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setTextHeightThresholdOverride");
          
              return this.__PROXY__.setTextHeightThresholdOverride(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getTextHeightThresholdOverride = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getTextHeightThresholdOverride");
          
              return this.__PROXY__.getTextHeightThresholdOverride(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.updateTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.updateTextHeightThreshold");
          
              return this.__PROXY__.updateTextHeightThreshold(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setForceTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setForceTextHeightThreshold");
          
              return this.__PROXY__.setForceTextHeightThreshold(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getForceTextHeightThreshold = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getForceTextHeightThreshold");
          
              return this.__PROXY__.getForceTextHeightThreshold(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isPathVisible = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isPathVisible");
          
              return this.__PROXY__.isPathVisible(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setAntialiasing = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setAntialiasing");
          
              return this.__PROXY__.setAntialiasing(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getAntialiasing = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getAntialiasing");
          
              return this.__PROXY__.getAntialiasing(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getDevicePixelRatio = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getDevicePixelRatio");
          
              return this.__PROXY__.getDevicePixelRatio(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.isShared = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.isShared");
          
              return this.__PROXY__.isShared(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.registerForFocus = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.registerForFocus");
          
              return this.__PROXY__.registerForFocus(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.setWidget = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
        
        // function 
        RGraphicsView.prototype.getWidget = function(...args) 
          
        {
          //print("JS: RGraphicsView.prototype.getWidget");
          
              return this.__PROXY__.getWidget(...args);
            
        };
        

      // static functions:
      RGraphicsView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      