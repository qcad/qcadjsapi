
      // auto generated
      //var self;

      // class constructor:
      function RDocumentInterface() {
        

        // should be RDocumentInterface_BaseJs.call(this, engine):
        //RDocumentInterface.prototype = new RDocumentInterface_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDocumentInterface.getIdStatic()))) {

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
            qWarning("RDocumentInterface.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RDocumentInterface_Wrapper(
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

      

        //copyProperties(this, wrapper, RDocumentInterface);
  }

  
  else {
    
        print("RDocumentInterface(): wrong number / type of arguments");
      
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

      //RDocumentInterface.prototype = new RDocumentInterface_BaseJs(engine);
      //RDocumentInterface.prototype = new RDocumentInterface_Wrapper(engine);
      RDocumentInterface.prototype = new Object();

      RDocumentInterface.prototype.toString = function() {
          //return "RDocumentInterface [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDocumentInterface [JS]";
        };
      RDocumentInterface.getObjectType = function() {
        return RJSType_RDocumentInterface.getIdStatic();
      };

      RDocumentInterface.prototype.getObjectType = function() {
        return RJSType_RDocumentInterface.getIdStatic();
      };

      RDocumentInterface.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDocumentInterface.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: IoErrorCode
RDocumentInterface.IoErrorNoError = RDocumentInterface_Wrapper.IoErrorNoError;
RDocumentInterface.IoErrorNoImporterFound = RDocumentInterface_Wrapper.IoErrorNoImporterFound;
RDocumentInterface.IoErrorZeroSize = RDocumentInterface_Wrapper.IoErrorZeroSize;
RDocumentInterface.IoErrorNotFound = RDocumentInterface_Wrapper.IoErrorNotFound;
RDocumentInterface.IoErrorPermission = RDocumentInterface_Wrapper.IoErrorPermission;
RDocumentInterface.IoErrorGeneralImportError = RDocumentInterface_Wrapper.IoErrorGeneralImportError;
RDocumentInterface.IoErrorGeneralImportUrlError = RDocumentInterface_Wrapper.IoErrorGeneralImportUrlError;


      // functions:
      
        // function 
        RDocumentInterface.prototype.clearCaches = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.clearCaches");
          return this.__PROXY__.clearCaches(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getStorage = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getStorage");
          return this.__PROXY__.getStorage(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getGraphicsScenes = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getGraphicsScenes");
          return this.__PROXY__.getGraphicsScenes(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getGraphicsViewWithFocus = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getGraphicsViewWithFocus");
          return this.__PROXY__.getGraphicsViewWithFocus(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getGraphicsSceneWithFocus = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getGraphicsSceneWithFocus");
          return this.__PROXY__.getGraphicsSceneWithFocus(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addCoordinateListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addCoordinateListener");
          return this.__PROXY__.addCoordinateListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.removeCoordinateListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.removeCoordinateListener");
          return this.__PROXY__.removeCoordinateListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.notifyCoordinateListeners = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.notifyCoordinateListeners");
          return this.__PROXY__.notifyCoordinateListeners(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addLayerListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addLayerListener");
          return this.__PROXY__.addLayerListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.removeLayerListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.removeLayerListener");
          return this.__PROXY__.removeLayerListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.notifyLayerListeners = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.notifyLayerListeners");
          return this.__PROXY__.notifyLayerListeners(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addBlockListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addBlockListener");
          return this.__PROXY__.addBlockListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.removeBlockListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.removeBlockListener");
          return this.__PROXY__.removeBlockListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.notifyBlockListeners = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.notifyBlockListeners");
          return this.__PROXY__.notifyBlockListeners(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addTransactionListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addTransactionListener");
          return this.__PROXY__.addTransactionListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.removeTransactionListener = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.removeTransactionListener");
          return this.__PROXY__.removeTransactionListener(...args);
        };
    
        // function 
        RDocumentInterface.prototype.notifyTransactionListeners = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.notifyTransactionListeners");
          return this.__PROXY__.notifyTransactionListeners(...args);
        };
    
        // function 
        RDocumentInterface.prototype.clear = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isScriptRunning = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isScriptRunning");
          return this.__PROXY__.isScriptRunning(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setDefaultAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setDefaultAction");
          return this.__PROXY__.setDefaultAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getDefaultAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getDefaultAction");
          return this.__PROXY__.getDefaultAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentAction");
          return this.__PROXY__.setCurrentAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.terminateCurrentAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.terminateCurrentAction");
          return this.__PROXY__.terminateCurrentAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.queueAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.queueAction");
          return this.__PROXY__.queueAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.killAllActions = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.killAllActions");
          return this.__PROXY__.killAllActions(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentAction");
          return this.__PROXY__.getCurrentAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.hasCurrentAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.hasCurrentAction");
          return this.__PROXY__.hasCurrentAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentStatefulAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentStatefulAction");
          return this.__PROXY__.getCurrentStatefulAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.hasCurrentStatefulAction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.hasCurrentStatefulAction");
          return this.__PROXY__.hasCurrentStatefulAction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.suspend = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.suspend");
          return this.__PROXY__.suspend(...args);
        };
    
        // function 
        RDocumentInterface.prototype.resume = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.resume");
          return this.__PROXY__.resume(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setClickMode = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setClickMode");
          return this.__PROXY__.setClickMode(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getClickMode = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getClickMode");
          return this.__PROXY__.getClickMode(...args);
        };
    
        // function 
        RDocumentInterface.prototype.terminateEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.terminateEvent");
          return this.__PROXY__.terminateEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.keyPressEvent");
          return this.__PROXY__.keyPressEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.keyReleaseEvent");
          return this.__PROXY__.keyReleaseEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.mouseMoveEvent");
          return this.__PROXY__.mouseMoveEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.mousePressEvent");
          return this.__PROXY__.mousePressEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.mouseReleaseEvent");
          return this.__PROXY__.mouseReleaseEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.mouseDoubleClickEvent");
          return this.__PROXY__.mouseDoubleClickEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.coordinateEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.coordinateEvent");
          return this.__PROXY__.coordinateEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.coordinateEventPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.coordinateEventPreview");
          return this.__PROXY__.coordinateEventPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.commandEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.commandEvent");
          return this.__PROXY__.commandEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.commandEventPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.commandEventPreview");
          return this.__PROXY__.commandEventPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.wheelEvent");
          return this.__PROXY__.wheelEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.tabletEvent");
          return this.__PROXY__.tabletEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.swipeGestureEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.swipeGestureEvent");
          return this.__PROXY__.swipeGestureEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.panGestureEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.panGestureEvent");
          return this.__PROXY__.panGestureEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.pinchGestureEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.pinchGestureEvent");
          return this.__PROXY__.pinchGestureEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.propertyChangeEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.propertyChangeEvent");
          return this.__PROXY__.propertyChangeEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.ucsSetEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.ucsSetEvent");
          return this.__PROXY__.ucsSetEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.zoomChangeEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.zoomChangeEvent");
          return this.__PROXY__.zoomChangeEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.enableUpdates = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.enableUpdates");
          return this.__PROXY__.enableUpdates(...args);
        };
    
        // function 
        RDocumentInterface.prototype.disableUpdates = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.disableUpdates");
          return this.__PROXY__.disableUpdates(...args);
        };
    
        // function 
        RDocumentInterface.prototype.enableRegeneration = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.enableRegeneration");
          return this.__PROXY__.enableRegeneration(...args);
        };
    
        // function 
        RDocumentInterface.prototype.disableRegeneration = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.disableRegeneration");
          return this.__PROXY__.disableRegeneration(...args);
        };
    
        // function 
        RDocumentInterface.prototype.enableMouseTracking = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.enableMouseTracking");
          return this.__PROXY__.enableMouseTracking(...args);
        };
    
        // function 
        RDocumentInterface.prototype.disableMouseTracking = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.disableMouseTracking");
          return this.__PROXY__.disableMouseTracking(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setAllowSnapInterruption = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setAllowSnapInterruption");
          return this.__PROXY__.setAllowSnapInterruption(...args);
        };
    
        // function 
        RDocumentInterface.prototype.updateAllEntities = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.updateAllEntities");
          return this.__PROXY__.updateAllEntities(...args);
        };
    
        // function 
        RDocumentInterface.prototype.regenerateScenes = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.regenerateScenes");
          return this.__PROXY__.regenerateScenes(...args);
        };
    
        // function 
        RDocumentInterface.prototype.updateSelectionStatus = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.updateSelectionStatus");
          return this.__PROXY__.updateSelectionStatus(...args);
        };
    
        // function 
        RDocumentInterface.prototype.regenerateViews = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.regenerateViews");
          return this.__PROXY__.regenerateViews(...args);
        };
    
        // function 
        RDocumentInterface.prototype.repaintViews = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.repaintViews");
          return this.__PROXY__.repaintViews(...args);
        };
    
        // function 
        RDocumentInterface.prototype.registerScene = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.registerScene");
          return this.__PROXY__.registerScene(...args);
        };
    
        // function 
        RDocumentInterface.prototype.unregisterScene = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.unregisterScene");
          return this.__PROXY__.unregisterScene(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCursor = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCursor");
          return this.__PROXY__.setCursor(...args);
        };
    
        // function 
        RDocumentInterface.prototype.importUrl = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.importUrl");
          return this.__PROXY__.importUrl(...args);
        };
    
        // function 
        RDocumentInterface.prototype.importFile = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.importFile");
          return this.__PROXY__.importFile(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCorrectedFileName = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCorrectedFileName");
          return this.__PROXY__.getCorrectedFileName(...args);
        };
    
        // function 
        RDocumentInterface.prototype.exportFile = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.exportFile");
          return this.__PROXY__.exportFile(...args);
        };
    
        // function 
        RDocumentInterface.prototype.tagState = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.tagState");
          return this.__PROXY__.tagState(...args);
        };
    
        // function 
        RDocumentInterface.prototype.undoToTag = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.undoToTag");
          return this.__PROXY__.undoToTag(...args);
        };
    
        // function 
        RDocumentInterface.prototype.undo = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.undo");
          return this.__PROXY__.undo(...args);
        };
    
        // function 
        RDocumentInterface.prototype.redo = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.redo");
          return this.__PROXY__.redo(...args);
        };
    
        // function 
        RDocumentInterface.prototype.flushTransactions = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.flushTransactions");
          return this.__PROXY__.flushTransactions(...args);
        };
    
        // function 
        RDocumentInterface.prototype.flushRedo = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.flushRedo");
          return this.__PROXY__.flushRedo(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setSnap = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setSnap");
          return this.__PROXY__.setSnap(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getSnap = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getSnap");
          return this.__PROXY__.getSnap(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getSnapStatus = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getSnapStatus");
          return this.__PROXY__.getSnapStatus(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setSnapRestriction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setSnapRestriction");
          return this.__PROXY__.setSnapRestriction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getSnapRestriction = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getSnapRestriction");
          return this.__PROXY__.getSnapRestriction(...args);
        };
    
        // function 
        RDocumentInterface.prototype.snap = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.snap");
          return this.__PROXY__.snap(...args);
        };
    
        // function 
        RDocumentInterface.prototype.restrictOrtho = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.restrictOrtho");
          return this.__PROXY__.restrictOrtho(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getClosestEntity = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getClosestEntity");
          return this.__PROXY__.getClosestEntity(...args);
        };
    
        // function 
        RDocumentInterface.prototype.highlightEntity = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.highlightEntity");
          return this.__PROXY__.highlightEntity(...args);
        };
    
        // function 
        RDocumentInterface.prototype.highlightReferencePoint = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.highlightReferencePoint");
          return this.__PROXY__.highlightReferencePoint(...args);
        };
    
        // function 
        RDocumentInterface.prototype.selectEntities = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.selectEntities");
          return this.__PROXY__.selectEntities(...args);
        };
    
        // function 
        RDocumentInterface.prototype.selectEntity = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.selectEntity");
          return this.__PROXY__.selectEntity(...args);
        };
    
        // function 
        RDocumentInterface.prototype.deselectEntities = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.deselectEntities");
          return this.__PROXY__.deselectEntities(...args);
        };
    
        // function 
        RDocumentInterface.prototype.deselectEntity = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.deselectEntity");
          return this.__PROXY__.deselectEntity(...args);
        };
    
        // function 
        RDocumentInterface.prototype.selectBoxXY = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.selectBoxXY");
          return this.__PROXY__.selectBoxXY(...args);
        };
    
        // function 
        RDocumentInterface.prototype.selectAll = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.selectAll");
          return this.__PROXY__.selectAll(...args);
        };
    
        // function 
        RDocumentInterface.prototype.deselectAll = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.deselectAll");
          return this.__PROXY__.deselectAll(...args);
        };
    
        // function 
        RDocumentInterface.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.clearSelection");
          return this.__PROXY__.clearSelection(...args);
        };
    
        // function 
        RDocumentInterface.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.hasSelection");
          return this.__PROXY__.hasSelection(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addZoomBoxToPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addZoomBoxToPreview");
          return this.__PROXY__.addZoomBoxToPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addShapeToPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addShapeToPreview");
          return this.__PROXY__.addShapeToPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addAuxShapeToPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addAuxShapeToPreview");
          return this.__PROXY__.addAuxShapeToPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.addDrawableToPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.addDrawableToPreview");
          return this.__PROXY__.addDrawableToPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.beginPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.beginPreview");
          return this.__PROXY__.beginPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.endPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.endPreview");
          return this.__PROXY__.endPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.clearPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.clearPreview");
          return this.__PROXY__.clearPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isPreviewEmpty = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isPreviewEmpty");
          return this.__PROXY__.isPreviewEmpty(...args);
        };
    
        // function 
        RDocumentInterface.prototype.keepPreview = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.keepPreview");
          return this.__PROXY__.keepPreview(...args);
        };
    
        // function 
        RDocumentInterface.prototype.showPropertiesOf = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.showPropertiesOf");
          return this.__PROXY__.showPropertiesOf(...args);
        };
    
        // function 
        RDocumentInterface.prototype.clearProperties = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.clearProperties");
          return this.__PROXY__.clearProperties(...args);
        };
    
        // function 
        RDocumentInterface.prototype.zoomIn = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.zoomIn");
          return this.__PROXY__.zoomIn(...args);
        };
    
        // function 
        RDocumentInterface.prototype.zoomOut = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.zoomOut");
          return this.__PROXY__.zoomOut(...args);
        };
    
        // function 
        RDocumentInterface.prototype.autoZoom = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.autoZoom");
          return this.__PROXY__.autoZoom(...args);
        };
    
        // function 
        RDocumentInterface.prototype.zoomToSelection = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.zoomToSelection");
          return this.__PROXY__.zoomToSelection(...args);
        };
    
        // function 
        RDocumentInterface.prototype.zoomTo = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.zoomTo");
          return this.__PROXY__.zoomTo(...args);
        };
    
        // function 
        RDocumentInterface.prototype.zoomPrevious = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.zoomPrevious");
          return this.__PROXY__.zoomPrevious(...args);
        };
    
        // function 
        RDocumentInterface.prototype.previewOperation = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.previewOperation");
          return this.__PROXY__.previewOperation(...args);
        };
    
        // function 
        RDocumentInterface.prototype.applyOperation = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.applyOperation");
          return this.__PROXY__.applyOperation(...args);
        };
    
        // function 
        RDocumentInterface.prototype.objectChangeEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.objectChangeEvent");
          return this.__PROXY__.objectChangeEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getRelativeZero = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getRelativeZero");
          return this.__PROXY__.getRelativeZero(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getLastPosition = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getLastPosition");
          return this.__PROXY__.getLastPosition(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setRelativeZero = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setRelativeZero");
          return this.__PROXY__.setRelativeZero(...args);
        };
    
        // function 
        RDocumentInterface.prototype.lockRelativeZero = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.lockRelativeZero");
          return this.__PROXY__.lockRelativeZero(...args);
        };
    
        // function 
        RDocumentInterface.prototype.unlockRelativeZero = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.unlockRelativeZero");
          return this.__PROXY__.unlockRelativeZero(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isRelativeZeroLocked = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isRelativeZeroLocked");
          return this.__PROXY__.isRelativeZeroLocked(...args);
        };
    
        // function 
        RDocumentInterface.prototype.lockSnap = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.lockSnap");
          return this.__PROXY__.lockSnap(...args);
        };
    
        // function 
        RDocumentInterface.prototype.unlockSnap = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.unlockSnap");
          return this.__PROXY__.unlockSnap(...args);
        };
    
        // function 
        RDocumentInterface.prototype.toggleSnapLock = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.toggleSnapLock");
          return this.__PROXY__.toggleSnapLock(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isSnapLocked = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isSnapLocked");
          return this.__PROXY__.isSnapLocked(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCursorPosition = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCursorPosition");
          return this.__PROXY__.getCursorPosition(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCursorPosition = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCursorPosition");
          return this.__PROXY__.setCursorPosition(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCursorOverride = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCursorOverride");
          return this.__PROXY__.setCursorOverride(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCursorOverride = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCursorOverride");
          return this.__PROXY__.getCursorOverride(...args);
        };
    
        // function 
        RDocumentInterface.prototype.deleteTerminatedActions = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.deleteTerminatedActions");
          return this.__PROXY__.deleteTerminatedActions(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentColor = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentColor");
          return this.__PROXY__.setCurrentColor(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentColor = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentColor");
          return this.__PROXY__.getCurrentColor(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentLineweight = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentLineweight");
          return this.__PROXY__.setCurrentLineweight(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentLineweight = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentLineweight");
          return this.__PROXY__.getCurrentLineweight(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentLinetype = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentLinetype");
          return this.__PROXY__.setCurrentLinetype(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentLinetypePattern");
          return this.__PROXY__.setCurrentLinetypePattern(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentLinetypeId = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentLinetypeId");
          return this.__PROXY__.getCurrentLinetypeId(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentLinetypePattern");
          return this.__PROXY__.getCurrentLinetypePattern(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentLayer");
          return this.__PROXY__.setCurrentLayer(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentBlock");
          return this.__PROXY__.setCurrentBlock(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentViewport = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentViewport");
          return this.__PROXY__.setCurrentViewport(...args);
        };
    
        // function 
        RDocumentInterface.prototype.unsetCurrentViewport = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.unsetCurrentViewport");
          return this.__PROXY__.unsetCurrentViewport(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentView = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentView");
          return this.__PROXY__.setCurrentView(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setCurrentUcs = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setCurrentUcs");
          return this.__PROXY__.setCurrentUcs(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getCurrentUcsName = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getCurrentUcsName");
          return this.__PROXY__.getCurrentUcsName(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getLastKnownViewWithFocus = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getLastKnownViewWithFocus");
          return this.__PROXY__.getLastKnownViewWithFocus(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setLastKnownViewWithFocus = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setLastKnownViewWithFocus");
          return this.__PROXY__.setLastKnownViewWithFocus(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getClipboard = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getClipboard");
          return this.__PROXY__.getClipboard(...args);
        };
    
        // function 
        RDocumentInterface.prototype.deleteClipboard = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.deleteClipboard");
          return this.__PROXY__.deleteClipboard(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isClipboard = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isClipboard");
          return this.__PROXY__.isClipboard(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isSuspended = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isSuspended");
          return this.__PROXY__.isSuspended(...args);
        };
    
        // function 
        RDocumentInterface.prototype.setNotifyListeners = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.setNotifyListeners");
          return this.__PROXY__.setNotifyListeners(...args);
        };
    
        // function 
        RDocumentInterface.prototype.getNotifyListeners = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.getNotifyListeners");
          return this.__PROXY__.getNotifyListeners(...args);
        };
    
        // function 
        RDocumentInterface.prototype.isDeleting = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.isDeleting");
          return this.__PROXY__.isDeleting(...args);
        };
    
        // function 
        RDocumentInterface.prototype.eval = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.eval");
          return this.__PROXY__.eval(...args);
        };
    
        // function 
        RDocumentInterface.prototype.handleClickEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.handleClickEvent");
          return this.__PROXY__.handleClickEvent(...args);
        };
    
        // function 
        RDocumentInterface.prototype.previewClickEvent = function(...args) 
          
        {
          //print("JS: RDocumentInterface.prototype.previewClickEvent");
          return this.__PROXY__.previewClickEvent(...args);
        };
    

      // static functions:
      

        // static function 
        RDocumentInterface.getClipboard = function() 
          
        {
          //print("JS: RDocumentInterface.getClipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentInterface_WrapperSingletonInstance.getClipboard(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentInterface);
  }

  
  else {
    
        print("RDocumentInterface.getClipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDocumentInterface.deleteClipboard = function() 
          
        {
          //print("JS: RDocumentInterface.deleteClipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocumentInterface_WrapperSingletonInstance.deleteClipboard(
                  
                );
              

        //copyProperties(this, wrapper, RDocumentInterface);
  }

  
  else {
    
        print("RDocumentInterface.deleteClipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDocumentInterface.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDocumentInterface.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDocumentInterface.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      