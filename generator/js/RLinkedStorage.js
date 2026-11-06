
      // auto generated
      //var self;

      // class constructor:
      function RLinkedStorage() {
        

        // should be RLinkedStorage_BaseJs.call(this, engine):
        //RLinkedStorage.prototype = new RLinkedStorage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinkedStorage.getIdStatic()))) {

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
            qWarning("RLinkedStorage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLinkedStorage_Wrapper(
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

      

        //copyProperties(this, wrapper, RLinkedStorage);
  }

  
  else {
    
        print("RLinkedStorage(): wrong number / type of arguments");
      
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

      //RLinkedStorage.prototype = new RLinkedStorage_BaseJs(engine);
      //RLinkedStorage.prototype = new RLinkedStorage_Wrapper(engine);
      RLinkedStorage.prototype = new Object();


      RLinkedStorage.prototype.toString = function() {
          //return "RLinkedStorage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinkedStorage [JS]";
        };
      RLinkedStorage.getObjectType = function() {
        return RJSType_RLinkedStorage.getIdStatic();
      };

      RLinkedStorage.prototype.getObjectType = function() {
        return RJSType_RLinkedStorage.getIdStatic();
      };

      RLinkedStorage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinkedStorage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RStorage.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RMemoryStorage.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RLinkedStorage.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.orderBackToFront = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.orderBackToFront");
          
              return this.__PROXY__.orderBackToFront(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.sortBlocks = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.sortBlocks");
          
              return this.__PROXY__.sortBlocks(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.sortLayers = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.sortLayers");
          
              return this.__PROXY__.sortLayers(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryCurrentLayer = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryCurrentLayer");
          
              return this.__PROXY__.queryCurrentLayer(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryCurrentView = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryCurrentView");
          
              return this.__PROXY__.queryCurrentView(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentLayer");
          
              return this.__PROXY__.setCurrentLayer(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentColor = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentColor");
          
              return this.__PROXY__.setCurrentColor(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentLineweight = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentLineweight");
          
              return this.__PROXY__.setCurrentLineweight(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentLinetype = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentLinetype");
          
              return this.__PROXY__.setCurrentLinetype(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentLinetypePattern");
          
              return this.__PROXY__.setCurrentLinetypePattern(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentLinetypePattern");
          
              return this.__PROXY__.getCurrentLinetypePattern(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryCurrentLinetype = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryCurrentLinetype");
          
              return this.__PROXY__.queryCurrentLinetype(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryCurrentBlock = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryCurrentBlock");
          
              return this.__PROXY__.queryCurrentBlock(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentViewport = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentViewport");
          
              return this.__PROXY__.setCurrentViewport(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.unsetCurrentViewport = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.unsetCurrentViewport");
          
              return this.__PROXY__.unsetCurrentViewport(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentViewportId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentViewportId");
          
              return this.__PROXY__.getCurrentViewportId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setModelSpaceBlockId");
          
              return this.__PROXY__.setModelSpaceBlockId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getModelSpaceBlockId");
          
              return this.__PROXY__.getModelSpaceBlockId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentView = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentView");
          
              return this.__PROXY__.setCurrentView(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setUnit = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setUnit");
          
              return this.__PROXY__.setUnit(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getUnit = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getUnit");
          
              return this.__PROXY__.getUnit(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setMeasurement = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setMeasurement");
          
              return this.__PROXY__.setMeasurement(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMeasurement");
          
              return this.__PROXY__.getMeasurement(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setDimensionFont = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setDimensionFont");
          
              return this.__PROXY__.setDimensionFont(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setLinetypeScale");
          
              return this.__PROXY__.setLinetypeScale(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypeScale");
          
              return this.__PROXY__.getLinetypeScale(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasBlock = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasBlock");
          
              return this.__PROXY__.hasBlock(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasView = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasView");
          
              return this.__PROXY__.hasView(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setLayer0Id = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setLayer0Id");
          
              return this.__PROXY__.setLayer0Id(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayer0Id = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayer0Id");
          
              return this.__PROXY__.getLayer0Id(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasLayer = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasLayer");
          
              return this.__PROXY__.hasLayer(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasLayerStates = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasLayerStates");
          
              return this.__PROXY__.hasLayerStates(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasLayerState = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasLayerState");
          
              return this.__PROXY__.hasLayerState(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasLayout = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasLayout");
          
              return this.__PROXY__.hasLayout(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasLinetype = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasLinetype");
          
              return this.__PROXY__.hasLinetype(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasVariable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasVariable");
          
              return this.__PROXY__.hasVariable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isEntity = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isEntity");
          
              return this.__PROXY__.isEntity(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayerLocked = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayerLocked");
          
              return this.__PROXY__.isLayerLocked(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isParentLayerLocked = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isParentLayerLocked");
          
              return this.__PROXY__.isParentLayerLocked(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayerOff = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayerOff");
          
              return this.__PROXY__.isLayerOff(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayerOffOrFrozen = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayerOffOrFrozen");
          
              return this.__PROXY__.isLayerOffOrFrozen(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayerFrozen = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayerFrozen");
          
              return this.__PROXY__.isLayerFrozen(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isParentLayerFrozen = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isParentLayerFrozen");
          
              return this.__PROXY__.isParentLayerFrozen(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayerSnappable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayerSnappable");
          
              return this.__PROXY__.isLayerSnappable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isParentLayerSnappable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isParentLayerSnappable");
          
              return this.__PROXY__.isParentLayerSnappable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayerPlottable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayerPlottable");
          
              return this.__PROXY__.isLayerPlottable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isParentLayerPlottable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isParentLayerPlottable");
          
              return this.__PROXY__.isParentLayerPlottable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isBlockFrozen = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isBlockFrozen");
          
              return this.__PROXY__.isBlockFrozen(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isLayoutBlock = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isLayoutBlock");
          
              return this.__PROXY__.isLayoutBlock(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setObjectId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setObjectId");
          
              return this.__PROXY__.setObjectId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLastTransactionId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLastTransactionId");
          
              return this.__PROXY__.getLastTransactionId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.startTransactionGroup = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.startTransactionGroup");
          
              return this.__PROXY__.startTransactionGroup(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMaxObjectId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMaxObjectId");
          
              return this.__PROXY__.getMaxObjectId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMaxObjectHandle = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMaxObjectHandle");
          
              return this.__PROXY__.getMaxObjectHandle(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setMaxDrawOrder = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setMaxDrawOrder");
          
              return this.__PROXY__.setMaxDrawOrder(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMaxDrawOrder = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMaxDrawOrder");
          
              return this.__PROXY__.getMaxDrawOrder(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMinDrawOrder = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMinDrawOrder");
          
              return this.__PROXY__.getMinDrawOrder(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setModified = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isModified = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLastModifiedDateTime = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLastModifiedDateTime");
          
              return this.__PROXY__.getLastModifiedDateTime(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLastModified = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLastModified");
          
              return this.__PROXY__.getLastModified(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.addModifiedListener = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.addModifiedListener");
          
              return this.__PROXY__.addModifiedListener(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setNotifyListeners = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setNotifyListeners");
          
              return this.__PROXY__.setNotifyListeners(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getNotifyListeners = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getNotifyListeners");
          
              return this.__PROXY__.getNotifyListeners(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setCurrentBlock");
          
              return this.__PROXY__.setCurrentBlock(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.beginTransaction = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.beginTransaction");
          
              return this.__PROXY__.beginTransaction(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryWorkingSetEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryWorkingSetEntities");
          
              return this.__PROXY__.queryWorkingSetEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryObjectByHandleDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryObjectByHandleDirect");
          
              return this.__PROXY__.queryObjectByHandleDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.clearVisibleCache = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.clearVisibleCache");
          
              return this.__PROXY__.clearVisibleCache(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.updateVisibleCache = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.updateVisibleCache");
          
              return this.__PROXY__.updateVisibleCache(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.clearSelectionCache = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.clearSelectionCache");
          
              return this.__PROXY__.clearSelectionCache(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.updateSelectedEntityMap = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.updateSelectedEntityMap");
          
              return this.__PROXY__.updateSelectedEntityMap(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.updateSelectedLayerMap = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.updateSelectedLayerMap");
          
              return this.__PROXY__.updateSelectedLayerMap(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.countSelectedEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.countSelectedEntities");
          
              return this.__PROXY__.countSelectedEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.clearEntitySelection = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.clearEntitySelection");
          
              return this.__PROXY__.clearEntitySelection(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.selectAllEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.selectAllEntities");
          
              return this.__PROXY__.selectAllEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.selectEntity = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.selectEntity");
          
              return this.__PROXY__.selectEntity(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.deselectEntity = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.deselectEntity");
          
              return this.__PROXY__.deselectEntity(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.selectEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.selectEntities");
          
              return this.__PROXY__.selectEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.deselectEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.deselectEntities");
          
              return this.__PROXY__.deselectEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setEntitySelected = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setEntitySelected");
          
              return this.__PROXY__.setEntitySelected(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isSelectedWorkingSet");
          
              return this.__PROXY__.isSelectedWorkingSet(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isEntityVisible = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isEntityVisible");
          
              return this.__PROXY__.isEntityVisible(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasSelection");
          
              return this.__PROXY__.hasSelection(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getSelectionBox = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getSelectionBox");
          
              return this.__PROXY__.getSelectionBox(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getEntitiesBox = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getEntitiesBox");
          
              return this.__PROXY__.getEntitiesBox(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.removeObject = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.removeObject");
          
              return this.__PROXY__.removeObject(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.saveObject = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.saveObject");
          
              return this.__PROXY__.saveObject(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.checkRecursion = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.checkRecursion");
          
              return this.__PROXY__.checkRecursion(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.saveTransaction = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.saveTransaction");
          
              return this.__PROXY__.saveTransaction(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.deleteTransactionsFrom = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.deleteTransactionsFrom");
          
              return this.__PROXY__.deleteTransactionsFrom(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getTransaction = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getTransaction");
          
              return this.__PROXY__.getTransaction(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.resetTransactionStack = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.resetTransactionStack");
          
              return this.__PROXY__.resetTransactionStack(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.toggleUndoStatus = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.toggleUndoStatus");
          
              return this.__PROXY__.toggleUndoStatus(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMaxTransactionId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMaxTransactionId");
          
              return this.__PROXY__.getMaxTransactionId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getVariables = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getVariables");
          
              return this.__PROXY__.getVariables(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setVariable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setVariable");
          
              return this.__PROXY__.setVariable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getVariable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getVariable");
          
              return this.__PROXY__.getVariable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.removeVariable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.removeVariable");
          
              return this.__PROXY__.removeVariable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setKnownVariable");
          
              return this.__PROXY__.setKnownVariable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayerStateName = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayerStateName");
          
              return this.__PROXY__.getLayerStateName(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayerStateNames = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayerStateNames");
          
              return this.__PROXY__.getLayerStateNames(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayerStateId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayerStateId");
          
              return this.__PROXY__.getLayerStateId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryVisibleEntityDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryVisibleEntityDirect");
          
              return this.__PROXY__.queryVisibleEntityDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setObjectHandle = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setObjectHandle");
          
              return this.__PROXY__.setObjectHandle(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setLastTransactionId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setLastTransactionId");
          
              return this.__PROXY__.setLastTransactionId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getMaxLineweight = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getMaxLineweight");
          
              return this.__PROXY__.getMaxLineweight(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.update = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setEntityParentId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setEntityParentId");
          
              return this.__PROXY__.setEntityParentId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.clear = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.clearLinked = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.clearLinked");
          
              return this.__PROXY__.clearLinked(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setLinkedEntityQueriesEnabled = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setLinkedEntityQueriesEnabled");
          
              return this.__PROXY__.setLinkedEntityQueriesEnabled(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinkedEntityQueriesEnabled = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinkedEntityQueriesEnabled");
          
              return this.__PROXY__.getLinkedEntityQueriesEnabled(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllObjects = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllObjects");
          
              return this.__PROXY__.queryAllObjects(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.querySelectedLayers = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.querySelectedLayers");
          
              return this.__PROXY__.querySelectedLayers(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllVisibleEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllVisibleEntities");
          
              return this.__PROXY__.queryAllVisibleEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllEntities");
          
              return this.__PROXY__.queryAllEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllUcs = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllUcs");
          
              return this.__PROXY__.queryAllUcs(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllLayers = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllLayers");
          
              return this.__PROXY__.queryAllLayers(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllLayerStates = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllLayerStates");
          
              return this.__PROXY__.queryAllLayerStates(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllBlocks = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllBlocks");
          
              return this.__PROXY__.queryAllBlocks(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllLayoutBlocks = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllLayoutBlocks");
          
              return this.__PROXY__.queryAllLayoutBlocks(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllLayouts = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllLayouts");
          
              return this.__PROXY__.queryAllLayouts(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllViews = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllViews");
          
              return this.__PROXY__.queryAllViews(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllLinetypes = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllLinetypes");
          
              return this.__PROXY__.queryAllLinetypes(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryInfiniteEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryInfiniteEntities");
          
              return this.__PROXY__.queryInfiniteEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.querySelectedEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.querySelectedEntities");
          
              return this.__PROXY__.querySelectedEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayerEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayerEntities");
          
              return this.__PROXY__.queryLayerEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.querySelectedLayerEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.querySelectedLayerEntities");
          
              return this.__PROXY__.querySelectedLayerEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasBlockEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasBlockEntities");
          
              return this.__PROXY__.hasBlockEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryBlockEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryBlockEntities");
          
              return this.__PROXY__.queryBlockEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayerBlockEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayerBlockEntities");
          
              return this.__PROXY__.queryLayerBlockEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryChildEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryChildEntities");
          
              return this.__PROXY__.queryChildEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.hasChildEntities = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.hasChildEntities");
          
              return this.__PROXY__.hasChildEntities(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryBlockReferences = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryBlockReferences");
          
              return this.__PROXY__.queryBlockReferences(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllBlockReferences = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllBlockReferences");
          
              return this.__PROXY__.queryAllBlockReferences(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryAllViewports = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryAllViewports");
          
              return this.__PROXY__.queryAllViewports(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryDocumentVariablesDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryDocumentVariablesDirect");
          
              return this.__PROXY__.queryDocumentVariablesDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryDocumentVariables = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryDocumentVariables");
          
              return this.__PROXY__.queryDocumentVariables(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryDimStyle = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryDimStyle");
          
              return this.__PROXY__.queryDimStyle(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryDimStyleDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryDimStyleDirect");
          
              return this.__PROXY__.queryDimStyleDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryObjectDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryObjectDirect");
          
              return this.__PROXY__.queryObjectDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryObjectCC = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryObjectCC");
          
              return this.__PROXY__.queryObjectCC(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryObject = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryObject");
          
              return this.__PROXY__.queryObject(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryObjectByHandle = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryObjectByHandle");
          
              return this.__PROXY__.queryObjectByHandle(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryEntityDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryEntityDirect");
          
              return this.__PROXY__.queryEntityDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryEntity = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryEntity");
          
              return this.__PROXY__.queryEntity(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayerDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayerDirect");
          
              return this.__PROXY__.queryLayerDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayer = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayer");
          
              return this.__PROXY__.queryLayer(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayerStateDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayerStateDirect");
          
              return this.__PROXY__.queryLayerStateDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayerState = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayerState");
          
              return this.__PROXY__.queryLayerState(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayoutDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayoutDirect");
          
              return this.__PROXY__.queryLayoutDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLayout = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLayout");
          
              return this.__PROXY__.queryLayout(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryBlockDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryBlockDirect");
          
              return this.__PROXY__.queryBlockDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryBlock = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryBlock");
          
              return this.__PROXY__.queryBlock(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryView = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryView");
          
              return this.__PROXY__.queryView(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryUcsDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryUcsDirect");
          
              return this.__PROXY__.queryUcsDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryUcs = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryUcs");
          
              return this.__PROXY__.queryUcs(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLinetypeDirect = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLinetypeDirect");
          
              return this.__PROXY__.queryLinetypeDirect(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.queryLinetype = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.queryLinetype");
          
              return this.__PROXY__.queryLinetype(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayerName");
          
              return this.__PROXY__.getLayerName(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayerNames = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayerNames");
          
              return this.__PROXY__.getLayerNames(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayerId");
          
              return this.__PROXY__.getLayerId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayoutName = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayoutName");
          
              return this.__PROXY__.getLayoutName(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayoutNames = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayoutNames");
          
              return this.__PROXY__.getLayoutNames(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLayoutId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLayoutId");
          
              return this.__PROXY__.getLayoutId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBlockName");
          
              return this.__PROXY__.getBlockName(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBlockNameFromHandle = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBlockNameFromHandle");
          
              return this.__PROXY__.getBlockNameFromHandle(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBlockNameFromLayout = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBlockNameFromLayout");
          
              return this.__PROXY__.getBlockNameFromLayout(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBlockNames = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBlockNames");
          
              return this.__PROXY__.getBlockNames(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBlockId");
          
              return this.__PROXY__.getBlockId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBlockIdAuto = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBlockIdAuto");
          
              return this.__PROXY__.getBlockIdAuto(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getViewName = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getViewName");
          
              return this.__PROXY__.getViewName(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getViewNames = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getViewNames");
          
              return this.__PROXY__.getViewNames(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getViewId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getViewId");
          
              return this.__PROXY__.getViewId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypeName = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypeName");
          
              return this.__PROXY__.getLinetypeName(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypeDescription = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypeDescription");
          
              return this.__PROXY__.getLinetypeDescription(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypeLabel = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypeLabel");
          
              return this.__PROXY__.getLinetypeLabel(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypeNames = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypeNames");
          
              return this.__PROXY__.getLinetypeNames(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypePatterns = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypePatterns");
          
              return this.__PROXY__.getLinetypePatterns(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getLinetypeId");
          
              return this.__PROXY__.getLinetypeId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getNewObjectId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getNewObjectId");
          
              return this.__PROXY__.getNewObjectId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getNewObjectHandle = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getNewObjectHandle");
          
              return this.__PROXY__.getNewObjectHandle(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentLayerId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentLayerId");
          
              return this.__PROXY__.getCurrentLayerId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentBlockId");
          
              return this.__PROXY__.getCurrentBlockId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentViewId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentViewId");
          
              return this.__PROXY__.getCurrentViewId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentColor = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentColor");
          
              return this.__PROXY__.getCurrentColor(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentLineweight = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentLineweight");
          
              return this.__PROXY__.getCurrentLineweight(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getCurrentLinetypeId = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getCurrentLinetypeId");
          
              return this.__PROXY__.getCurrentLinetypeId(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.setUndoStatus = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.setUndoStatus");
          
              return this.__PROXY__.setUndoStatus(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getDimensionFont = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getDimensionFont");
          
              return this.__PROXY__.getDimensionFont(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getKnownVariable = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getKnownVariable");
          
              return this.__PROXY__.getKnownVariable(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.isInBackStorage = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.isInBackStorage");
          
              return this.__PROXY__.isInBackStorage(...args);
            
        };
    
        // function 
        RLinkedStorage.prototype.getBackStorage = function(...args) 
          
        {
          //print("JS: RLinkedStorage.prototype.getBackStorage");
          
              return this.__PROXY__.getBackStorage(...args);
            
        };
    

      // static functions:
      RLinkedStorage.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RLinkedStorage.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RLinkedStorage.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLinkedStorage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinkedStorage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLinkedStorage.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      