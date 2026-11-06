
      // auto generated
      //var self;

      // class constructor:
      function RMemoryStorage() {
        

        // should be RMemoryStorage_BaseJs.call(this, engine):
        //RMemoryStorage.prototype = new RMemoryStorage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMemoryStorage.getIdStatic()))) {

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
            qWarning("RMemoryStorage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RMemoryStorage_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMemoryStorage);
  }

  
  else {
    
        print("RMemoryStorage(): wrong number / type of arguments");
      
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

      //RMemoryStorage.prototype = new RMemoryStorage_BaseJs(engine);
      //RMemoryStorage.prototype = new RMemoryStorage_Wrapper(engine);
      RMemoryStorage.prototype = new Object();


      RMemoryStorage.prototype.toString = function() {
          //return "RMemoryStorage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMemoryStorage [JS]";
        };
      RMemoryStorage.getObjectType = function() {
        return RJSType_RMemoryStorage.getIdStatic();
      };

      RMemoryStorage.prototype.getObjectType = function() {
        return RJSType_RMemoryStorage.getIdStatic();
      };

      RMemoryStorage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMemoryStorage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RStorage.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RMemoryStorage.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.orderBackToFront = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.orderBackToFront");
          
              return this.__PROXY__.orderBackToFront(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.sortBlocks = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.sortBlocks");
          
              return this.__PROXY__.sortBlocks(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.sortLayers = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.sortLayers");
          
              return this.__PROXY__.sortLayers(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryCurrentLayer = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryCurrentLayer");
          
              return this.__PROXY__.queryCurrentLayer(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryCurrentView = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryCurrentView");
          
              return this.__PROXY__.queryCurrentView(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentLayer");
          
              return this.__PROXY__.setCurrentLayer(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentLayerId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentLayerId");
          
              return this.__PROXY__.getCurrentLayerId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentViewId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentViewId");
          
              return this.__PROXY__.getCurrentViewId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentColor = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentColor");
          
              return this.__PROXY__.setCurrentColor(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentColor = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentColor");
          
              return this.__PROXY__.getCurrentColor(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentLineweight = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentLineweight");
          
              return this.__PROXY__.setCurrentLineweight(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentLineweight = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentLineweight");
          
              return this.__PROXY__.getCurrentLineweight(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentLinetype = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentLinetype");
          
              return this.__PROXY__.setCurrentLinetype(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentLinetypePattern");
          
              return this.__PROXY__.setCurrentLinetypePattern(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentLinetypeId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentLinetypeId");
          
              return this.__PROXY__.getCurrentLinetypeId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentLinetypePattern");
          
              return this.__PROXY__.getCurrentLinetypePattern(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryCurrentLinetype = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryCurrentLinetype");
          
              return this.__PROXY__.queryCurrentLinetype(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryCurrentBlock = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryCurrentBlock");
          
              return this.__PROXY__.queryCurrentBlock(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentBlockId");
          
              return this.__PROXY__.getCurrentBlockId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentViewport = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentViewport");
          
              return this.__PROXY__.setCurrentViewport(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.unsetCurrentViewport = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.unsetCurrentViewport");
          
              return this.__PROXY__.unsetCurrentViewport(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getCurrentViewportId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getCurrentViewportId");
          
              return this.__PROXY__.getCurrentViewportId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setModelSpaceBlockId");
          
              return this.__PROXY__.setModelSpaceBlockId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getModelSpaceBlockId");
          
              return this.__PROXY__.getModelSpaceBlockId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentView = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentView");
          
              return this.__PROXY__.setCurrentView(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setUnit = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setUnit");
          
              return this.__PROXY__.setUnit(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getUnit = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getUnit");
          
              return this.__PROXY__.getUnit(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setMeasurement = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setMeasurement");
          
              return this.__PROXY__.setMeasurement(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMeasurement");
          
              return this.__PROXY__.getMeasurement(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setDimensionFont = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setDimensionFont");
          
              return this.__PROXY__.setDimensionFont(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getDimensionFont = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getDimensionFont");
          
              return this.__PROXY__.getDimensionFont(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setLinetypeScale");
          
              return this.__PROXY__.setLinetypeScale(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypeScale");
          
              return this.__PROXY__.getLinetypeScale(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasBlock = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasBlock");
          
              return this.__PROXY__.hasBlock(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasView = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasView");
          
              return this.__PROXY__.hasView(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setLayer0Id = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setLayer0Id");
          
              return this.__PROXY__.setLayer0Id(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayer0Id = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayer0Id");
          
              return this.__PROXY__.getLayer0Id(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasLayer = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasLayer");
          
              return this.__PROXY__.hasLayer(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasLayerStates = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasLayerStates");
          
              return this.__PROXY__.hasLayerStates(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasLayerState = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasLayerState");
          
              return this.__PROXY__.hasLayerState(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasLayout = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasLayout");
          
              return this.__PROXY__.hasLayout(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasLinetype = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasLinetype");
          
              return this.__PROXY__.hasLinetype(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasVariable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasVariable");
          
              return this.__PROXY__.hasVariable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isEntity = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isEntity");
          
              return this.__PROXY__.isEntity(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayerLocked = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayerLocked");
          
              return this.__PROXY__.isLayerLocked(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isParentLayerLocked = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isParentLayerLocked");
          
              return this.__PROXY__.isParentLayerLocked(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayerOff = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayerOff");
          
              return this.__PROXY__.isLayerOff(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayerOffOrFrozen = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayerOffOrFrozen");
          
              return this.__PROXY__.isLayerOffOrFrozen(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayerFrozen = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayerFrozen");
          
              return this.__PROXY__.isLayerFrozen(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isParentLayerFrozen = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isParentLayerFrozen");
          
              return this.__PROXY__.isParentLayerFrozen(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayerSnappable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayerSnappable");
          
              return this.__PROXY__.isLayerSnappable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isParentLayerSnappable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isParentLayerSnappable");
          
              return this.__PROXY__.isParentLayerSnappable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayerPlottable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayerPlottable");
          
              return this.__PROXY__.isLayerPlottable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isParentLayerPlottable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isParentLayerPlottable");
          
              return this.__PROXY__.isParentLayerPlottable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isBlockFrozen = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isBlockFrozen");
          
              return this.__PROXY__.isBlockFrozen(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isLayoutBlock = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isLayoutBlock");
          
              return this.__PROXY__.isLayoutBlock(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setObjectId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setObjectId");
          
              return this.__PROXY__.setObjectId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLastTransactionId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLastTransactionId");
          
              return this.__PROXY__.getLastTransactionId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.startTransactionGroup = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.startTransactionGroup");
          
              return this.__PROXY__.startTransactionGroup(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getNewObjectId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getNewObjectId");
          
              return this.__PROXY__.getNewObjectId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMaxObjectId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMaxObjectId");
          
              return this.__PROXY__.getMaxObjectId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMaxObjectHandle = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMaxObjectHandle");
          
              return this.__PROXY__.getMaxObjectHandle(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setMaxDrawOrder = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setMaxDrawOrder");
          
              return this.__PROXY__.setMaxDrawOrder(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMaxDrawOrder = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMaxDrawOrder");
          
              return this.__PROXY__.getMaxDrawOrder(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMinDrawOrder = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMinDrawOrder");
          
              return this.__PROXY__.getMinDrawOrder(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isInBackStorage = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isInBackStorage");
          
              return this.__PROXY__.isInBackStorage(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setModified = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isModified = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLastModifiedDateTime = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLastModifiedDateTime");
          
              return this.__PROXY__.getLastModifiedDateTime(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLastModified = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLastModified");
          
              return this.__PROXY__.getLastModified(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.addModifiedListener = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.addModifiedListener");
          
              return this.__PROXY__.addModifiedListener(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setNotifyListeners = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setNotifyListeners");
          
              return this.__PROXY__.setNotifyListeners(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getNotifyListeners = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getNotifyListeners");
          
              return this.__PROXY__.getNotifyListeners(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.clear = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setCurrentBlock");
          
              return this.__PROXY__.setCurrentBlock(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.beginTransaction = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.beginTransaction");
          
              return this.__PROXY__.beginTransaction(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllObjects = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllObjects");
          
              return this.__PROXY__.queryAllObjects(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.querySelectedLayers = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.querySelectedLayers");
          
              return this.__PROXY__.querySelectedLayers(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllVisibleEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllVisibleEntities");
          
              return this.__PROXY__.queryAllVisibleEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllEntities");
          
              return this.__PROXY__.queryAllEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryWorkingSetEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryWorkingSetEntities");
          
              return this.__PROXY__.queryWorkingSetEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllUcs = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllUcs");
          
              return this.__PROXY__.queryAllUcs(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllLayers = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllLayers");
          
              return this.__PROXY__.queryAllLayers(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllLayerStates = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllLayerStates");
          
              return this.__PROXY__.queryAllLayerStates(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllBlocks = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllBlocks");
          
              return this.__PROXY__.queryAllBlocks(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllLayoutBlocks = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllLayoutBlocks");
          
              return this.__PROXY__.queryAllLayoutBlocks(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllLayouts = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllLayouts");
          
              return this.__PROXY__.queryAllLayouts(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllViews = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllViews");
          
              return this.__PROXY__.queryAllViews(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllLinetypes = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllLinetypes");
          
              return this.__PROXY__.queryAllLinetypes(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryInfiniteEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryInfiniteEntities");
          
              return this.__PROXY__.queryInfiniteEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.querySelectedEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.querySelectedEntities");
          
              return this.__PROXY__.querySelectedEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayerEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayerEntities");
          
              return this.__PROXY__.queryLayerEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.querySelectedLayerEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.querySelectedLayerEntities");
          
              return this.__PROXY__.querySelectedLayerEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasBlockEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasBlockEntities");
          
              return this.__PROXY__.hasBlockEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryBlockEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryBlockEntities");
          
              return this.__PROXY__.queryBlockEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayerBlockEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayerBlockEntities");
          
              return this.__PROXY__.queryLayerBlockEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryChildEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryChildEntities");
          
              return this.__PROXY__.queryChildEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasChildEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasChildEntities");
          
              return this.__PROXY__.hasChildEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryBlockReferences = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryBlockReferences");
          
              return this.__PROXY__.queryBlockReferences(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllBlockReferences = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllBlockReferences");
          
              return this.__PROXY__.queryAllBlockReferences(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryAllViewports = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryAllViewports");
          
              return this.__PROXY__.queryAllViewports(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryDocumentVariables = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryDocumentVariables");
          
              return this.__PROXY__.queryDocumentVariables(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryDocumentVariablesDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryDocumentVariablesDirect");
          
              return this.__PROXY__.queryDocumentVariablesDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryDimStyle = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryDimStyle");
          
              return this.__PROXY__.queryDimStyle(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryDimStyleDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryDimStyleDirect");
          
              return this.__PROXY__.queryDimStyleDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryObject = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryObject");
          
              return this.__PROXY__.queryObject(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryObjectByHandle = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryObjectByHandle");
          
              return this.__PROXY__.queryObjectByHandle(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryObjectByHandleDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryObjectByHandleDirect");
          
              return this.__PROXY__.queryObjectByHandleDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryEntity = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryEntity");
          
              return this.__PROXY__.queryEntity(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayer = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayer");
          
              return this.__PROXY__.queryLayer(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayerState = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayerState");
          
              return this.__PROXY__.queryLayerState(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayout = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayout");
          
              return this.__PROXY__.queryLayout(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryBlock = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryBlock");
          
              return this.__PROXY__.queryBlock(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryBlockDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryBlockDirect");
          
              return this.__PROXY__.queryBlockDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryView = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryView");
          
              return this.__PROXY__.queryView(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryUcs = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryUcs");
          
              return this.__PROXY__.queryUcs(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLinetypeDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLinetypeDirect");
          
              return this.__PROXY__.queryLinetypeDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLinetype = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLinetype");
          
              return this.__PROXY__.queryLinetype(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.clearVisibleCache = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.clearVisibleCache");
          
              return this.__PROXY__.clearVisibleCache(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.updateVisibleCache = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.updateVisibleCache");
          
              return this.__PROXY__.updateVisibleCache(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.clearSelectionCache = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.clearSelectionCache");
          
              return this.__PROXY__.clearSelectionCache(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.updateSelectedEntityMap = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.updateSelectedEntityMap");
          
              return this.__PROXY__.updateSelectedEntityMap(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.updateSelectedLayerMap = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.updateSelectedLayerMap");
          
              return this.__PROXY__.updateSelectedLayerMap(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.countSelectedEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.countSelectedEntities");
          
              return this.__PROXY__.countSelectedEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.clearEntitySelection = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.clearEntitySelection");
          
              return this.__PROXY__.clearEntitySelection(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.selectAllEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.selectAllEntities");
          
              return this.__PROXY__.selectAllEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.selectEntity = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.selectEntity");
          
              return this.__PROXY__.selectEntity(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.deselectEntity = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.deselectEntity");
          
              return this.__PROXY__.deselectEntity(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.selectEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.selectEntities");
          
              return this.__PROXY__.selectEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.deselectEntities = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.deselectEntities");
          
              return this.__PROXY__.deselectEntities(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setEntitySelected = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setEntitySelected");
          
              return this.__PROXY__.setEntitySelected(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isSelectedWorkingSet");
          
              return this.__PROXY__.isSelectedWorkingSet(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.isEntityVisible = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.isEntityVisible");
          
              return this.__PROXY__.isEntityVisible(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.hasSelection");
          
              return this.__PROXY__.hasSelection(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getSelectionBox = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getSelectionBox");
          
              return this.__PROXY__.getSelectionBox(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getEntitiesBox = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getEntitiesBox");
          
              return this.__PROXY__.getEntitiesBox(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.removeObject = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.removeObject");
          
              return this.__PROXY__.removeObject(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.saveObject = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.saveObject");
          
              return this.__PROXY__.saveObject(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.checkRecursion = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.checkRecursion");
          
              return this.__PROXY__.checkRecursion(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.saveTransaction = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.saveTransaction");
          
              return this.__PROXY__.saveTransaction(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.deleteTransactionsFrom = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.deleteTransactionsFrom");
          
              return this.__PROXY__.deleteTransactionsFrom(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getTransaction = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getTransaction");
          
              return this.__PROXY__.getTransaction(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.resetTransactionStack = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.resetTransactionStack");
          
              return this.__PROXY__.resetTransactionStack(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.toggleUndoStatus = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.toggleUndoStatus");
          
              return this.__PROXY__.toggleUndoStatus(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setUndoStatus = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setUndoStatus");
          
              return this.__PROXY__.setUndoStatus(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMaxTransactionId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMaxTransactionId");
          
              return this.__PROXY__.getMaxTransactionId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getVariables = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getVariables");
          
              return this.__PROXY__.getVariables(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setVariable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setVariable");
          
              return this.__PROXY__.setVariable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getVariable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getVariable");
          
              return this.__PROXY__.getVariable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.removeVariable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.removeVariable");
          
              return this.__PROXY__.removeVariable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setKnownVariable");
          
              return this.__PROXY__.setKnownVariable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getKnownVariable = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getKnownVariable");
          
              return this.__PROXY__.getKnownVariable(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayerName");
          
              return this.__PROXY__.getLayerName(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayerNames = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayerNames");
          
              return this.__PROXY__.getLayerNames(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayerId");
          
              return this.__PROXY__.getLayerId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayerStateName = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayerStateName");
          
              return this.__PROXY__.getLayerStateName(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayerStateNames = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayerStateNames");
          
              return this.__PROXY__.getLayerStateNames(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayerStateId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayerStateId");
          
              return this.__PROXY__.getLayerStateId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayoutName = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayoutName");
          
              return this.__PROXY__.getLayoutName(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayoutNames = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayoutNames");
          
              return this.__PROXY__.getLayoutNames(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLayoutId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLayoutId");
          
              return this.__PROXY__.getLayoutId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBlockName");
          
              return this.__PROXY__.getBlockName(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBlockNameFromHandle = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBlockNameFromHandle");
          
              return this.__PROXY__.getBlockNameFromHandle(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBlockNameFromLayout = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBlockNameFromLayout");
          
              return this.__PROXY__.getBlockNameFromLayout(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBlockNames = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBlockNames");
          
              return this.__PROXY__.getBlockNames(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBlockId");
          
              return this.__PROXY__.getBlockId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getBlockIdAuto = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getBlockIdAuto");
          
              return this.__PROXY__.getBlockIdAuto(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getViewName = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getViewName");
          
              return this.__PROXY__.getViewName(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getViewNames = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getViewNames");
          
              return this.__PROXY__.getViewNames(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getViewId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getViewId");
          
              return this.__PROXY__.getViewId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypeName = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypeName");
          
              return this.__PROXY__.getLinetypeName(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypeDescription = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypeDescription");
          
              return this.__PROXY__.getLinetypeDescription(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypeLabel = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypeLabel");
          
              return this.__PROXY__.getLinetypeLabel(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypeNames = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypeNames");
          
              return this.__PROXY__.getLinetypeNames(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypePatterns = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypePatterns");
          
              return this.__PROXY__.getLinetypePatterns(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getLinetypeId");
          
              return this.__PROXY__.getLinetypeId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryObjectDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryObjectDirect");
          
              return this.__PROXY__.queryObjectDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryObjectCC = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryObjectCC");
          
              return this.__PROXY__.queryObjectCC(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryEntityDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryEntityDirect");
          
              return this.__PROXY__.queryEntityDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryVisibleEntityDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryVisibleEntityDirect");
          
              return this.__PROXY__.queryVisibleEntityDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryUcsDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryUcsDirect");
          
              return this.__PROXY__.queryUcsDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayerDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayerDirect");
          
              return this.__PROXY__.queryLayerDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayerStateDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayerStateDirect");
          
              return this.__PROXY__.queryLayerStateDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.queryLayoutDirect = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.queryLayoutDirect");
          
              return this.__PROXY__.queryLayoutDirect(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setObjectHandle = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setObjectHandle");
          
              return this.__PROXY__.setObjectHandle(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getNewObjectHandle = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getNewObjectHandle");
          
              return this.__PROXY__.getNewObjectHandle(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setLastTransactionId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setLastTransactionId");
          
              return this.__PROXY__.setLastTransactionId(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.getMaxLineweight = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.getMaxLineweight");
          
              return this.__PROXY__.getMaxLineweight(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.update = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RMemoryStorage.prototype.setEntityParentId = function(...args) 
          
        {
          //print("JS: RMemoryStorage.prototype.setEntityParentId");
          
              return this.__PROXY__.setEntityParentId(...args);
            
        };
    

      // static functions:
      RMemoryStorage.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMemoryStorage.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMemoryStorage.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMemoryStorage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMemoryStorage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMemoryStorage.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      