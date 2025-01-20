
      // auto generated
      //var self;

      // class constructor:
      function RDocument() {
        

        // should be RDocument_BaseJs.call(this, engine):
        //RDocument.prototype = new RDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDocument.getIdStatic()))) {

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
            qWarning("RDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDocument);
  }

  
  else {
    
        print("RDocument(): wrong number / type of arguments");
      
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

      //RDocument.prototype = new RDocument_BaseJs(engine);
      //RDocument.prototype = new RDocument_Wrapper(engine);
      RDocument.prototype = new Object();

      RDocument.prototype.toString = function() {
          //return "RDocument [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDocument [JS]";
        };
      RDocument.getObjectType = function() {
        return RJSType_RDocument.getIdStatic();
      };

      RDocument.prototype.getObjectType = function() {
        return RJSType_RDocument.getIdStatic();
      };

      RDocument.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDocument.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDocument.prototype.init = function(...args) 
          
        {
          //print("JS: RDocument.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDocument.prototype.initLinetypes = function(...args) 
          
        {
          //print("JS: RDocument.prototype.initLinetypes");
          return this.__PROXY__.initLinetypes(...args);
        };
    
        // function 
        RDocument.prototype.getDefaultLinetypes = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getDefaultLinetypes");
          return this.__PROXY__.getDefaultLinetypes(...args);
        };
    
        // function 
        RDocument.prototype.getStorage = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getStorage");
          return this.__PROXY__.getStorage(...args);
        };
    
        // function 
        RDocument.prototype.getSpatialIndex = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getSpatialIndex");
          return this.__PROXY__.getSpatialIndex(...args);
        };
    
        // function 
        RDocument.prototype.getSpatialIndexForBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getSpatialIndexForBlock");
          return this.__PROXY__.getSpatialIndexForBlock(...args);
        };
    
        // function 
        RDocument.prototype.getSpatialIndexForCurrentBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getSpatialIndexForCurrentBlock");
          return this.__PROXY__.getSpatialIndexForCurrentBlock(...args);
        };
    
        // function 
        RDocument.prototype.getTransactionStack = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getTransactionStack");
          return this.__PROXY__.getTransactionStack(...args);
        };
    
        // function 
        RDocument.prototype.clear = function(...args) 
          
        {
          //print("JS: RDocument.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RDocument.prototype.queryClosestXY = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryClosestXY");
          return this.__PROXY__.queryClosestXY(...args);
        };
    
        // function 
        RDocument.prototype.queryAllObjects = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllObjects");
          return this.__PROXY__.queryAllObjects(...args);
        };
    
        // function 
        RDocument.prototype.querySelectedLayers = function(...args) 
          
        {
          //print("JS: RDocument.prototype.querySelectedLayers");
          return this.__PROXY__.querySelectedLayers(...args);
        };
    
        // function 
        RDocument.prototype.queryAllVisibleEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllVisibleEntities");
          return this.__PROXY__.queryAllVisibleEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryAllEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllEntities");
          return this.__PROXY__.queryAllEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryWorkingSetEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryWorkingSetEntities");
          return this.__PROXY__.queryWorkingSetEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryAllUcs = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllUcs");
          return this.__PROXY__.queryAllUcs(...args);
        };
    
        // function 
        RDocument.prototype.queryAllLayers = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllLayers");
          return this.__PROXY__.queryAllLayers(...args);
        };
    
        // function 
        RDocument.prototype.queryAllLayerStates = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllLayerStates");
          return this.__PROXY__.queryAllLayerStates(...args);
        };
    
        // function 
        RDocument.prototype.queryAllBlocks = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllBlocks");
          return this.__PROXY__.queryAllBlocks(...args);
        };
    
        // function 
        RDocument.prototype.queryAllLayoutBlocks = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllLayoutBlocks");
          return this.__PROXY__.queryAllLayoutBlocks(...args);
        };
    
        // function 
        RDocument.prototype.queryAllLayouts = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllLayouts");
          return this.__PROXY__.queryAllLayouts(...args);
        };
    
        // function 
        RDocument.prototype.queryAllViews = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllViews");
          return this.__PROXY__.queryAllViews(...args);
        };
    
        // function 
        RDocument.prototype.queryAllLinetypes = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllLinetypes");
          return this.__PROXY__.queryAllLinetypes(...args);
        };
    
        // function 
        RDocument.prototype.queryLayerEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayerEntities");
          return this.__PROXY__.queryLayerEntities(...args);
        };
    
        // function 
        RDocument.prototype.querySelectedLayerEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.querySelectedLayerEntities");
          return this.__PROXY__.querySelectedLayerEntities(...args);
        };
    
        // function 
        RDocument.prototype.hasBlockEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasBlockEntities");
          return this.__PROXY__.hasBlockEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryBlockEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryBlockEntities");
          return this.__PROXY__.queryBlockEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryLayerBlockEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayerBlockEntities");
          return this.__PROXY__.queryLayerBlockEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryChildEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryChildEntities");
          return this.__PROXY__.queryChildEntities(...args);
        };
    
        // function 
        RDocument.prototype.hasChildEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasChildEntities");
          return this.__PROXY__.hasChildEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryBlockReferences = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryBlockReferences");
          return this.__PROXY__.queryBlockReferences(...args);
        };
    
        // function 
        RDocument.prototype.queryAllBlockReferences = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllBlockReferences");
          return this.__PROXY__.queryAllBlockReferences(...args);
        };
    
        // function 
        RDocument.prototype.queryAllViewports = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryAllViewports");
          return this.__PROXY__.queryAllViewports(...args);
        };
    
        // function 
        RDocument.prototype.queryContainedEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryContainedEntities");
          return this.__PROXY__.queryContainedEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryInfiniteEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryInfiniteEntities");
          return this.__PROXY__.queryInfiniteEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryIntersectedEntitiesXYFast = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryIntersectedEntitiesXYFast");
          return this.__PROXY__.queryIntersectedEntitiesXYFast(...args);
        };
    
        // function 
        RDocument.prototype.queryIntersectedShapesXYFast = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryIntersectedShapesXYFast");
          return this.__PROXY__.queryIntersectedShapesXYFast(...args);
        };
    
        // function 
        RDocument.prototype.queryIntersectedEntitiesXY = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryIntersectedEntitiesXY");
          return this.__PROXY__.queryIntersectedEntitiesXY(...args);
        };
    
        // function 
        RDocument.prototype.queryContainedEntitiesXY = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryContainedEntitiesXY");
          return this.__PROXY__.queryContainedEntitiesXY(...args);
        };
    
        // function 
        RDocument.prototype.querySelectedEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.querySelectedEntities");
          return this.__PROXY__.querySelectedEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryConnectedEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryConnectedEntities");
          return this.__PROXY__.queryConnectedEntities(...args);
        };
    
        // function 
        RDocument.prototype.queryPropertyEditorObjects = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryPropertyEditorObjects");
          return this.__PROXY__.queryPropertyEditorObjects(...args);
        };
    
        // function 
        RDocument.prototype.queryDocumentVariables = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryDocumentVariables");
          return this.__PROXY__.queryDocumentVariables(...args);
        };
    
        // function 
        RDocument.prototype.queryDocumentVariablesDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryDocumentVariablesDirect");
          return this.__PROXY__.queryDocumentVariablesDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryDimStyle = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryDimStyle");
          return this.__PROXY__.queryDimStyle(...args);
        };
    
        // function 
        RDocument.prototype.queryDimStyleDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryDimStyleDirect");
          return this.__PROXY__.queryDimStyleDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryObject = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryObject");
          return this.__PROXY__.queryObject(...args);
        };
    
        // function 
        RDocument.prototype.queryObjectDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryObjectDirect");
          return this.__PROXY__.queryObjectDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryObjectCC = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryObjectCC");
          return this.__PROXY__.queryObjectCC(...args);
        };
    
        // function 
        RDocument.prototype.queryObjectByHandle = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryObjectByHandle");
          return this.__PROXY__.queryObjectByHandle(...args);
        };
    
        // function 
        RDocument.prototype.queryEntity = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryEntity");
          return this.__PROXY__.queryEntity(...args);
        };
    
        // function 
        RDocument.prototype.queryEntityDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryEntityDirect");
          return this.__PROXY__.queryEntityDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryVisibleEntityDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryVisibleEntityDirect");
          return this.__PROXY__.queryVisibleEntityDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryUcs = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryUcs");
          return this.__PROXY__.queryUcs(...args);
        };
    
        // function 
        RDocument.prototype.queryLayer = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayer");
          return this.__PROXY__.queryLayer(...args);
        };
    
        // function 
        RDocument.prototype.queryLayerDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayerDirect");
          return this.__PROXY__.queryLayerDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryLayerState = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayerState");
          return this.__PROXY__.queryLayerState(...args);
        };
    
        // function 
        RDocument.prototype.queryLayerStateDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayerStateDirect");
          return this.__PROXY__.queryLayerStateDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryLayout = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayout");
          return this.__PROXY__.queryLayout(...args);
        };
    
        // function 
        RDocument.prototype.queryLayoutDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLayoutDirect");
          return this.__PROXY__.queryLayoutDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryBlock");
          return this.__PROXY__.queryBlock(...args);
        };
    
        // function 
        RDocument.prototype.queryBlockDirect = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryBlockDirect");
          return this.__PROXY__.queryBlockDirect(...args);
        };
    
        // function 
        RDocument.prototype.queryView = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryView");
          return this.__PROXY__.queryView(...args);
        };
    
        // function 
        RDocument.prototype.queryLinetype = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryLinetype");
          return this.__PROXY__.queryLinetype(...args);
        };
    
        // function 
        RDocument.prototype.countSelectedEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.countSelectedEntities");
          return this.__PROXY__.countSelectedEntities(...args);
        };
    
        // function 
        RDocument.prototype.clearSelection = function(...args) 
          
        {
          //print("JS: RDocument.prototype.clearSelection");
          return this.__PROXY__.clearSelection(...args);
        };
    
        // function 
        RDocument.prototype.selectAllEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.selectAllEntities");
          return this.__PROXY__.selectAllEntities(...args);
        };
    
        // function 
        RDocument.prototype.selectEntity = function(...args) 
          
        {
          //print("JS: RDocument.prototype.selectEntity");
          return this.__PROXY__.selectEntity(...args);
        };
    
        // function 
        RDocument.prototype.deselectEntity = function(...args) 
          
        {
          //print("JS: RDocument.prototype.deselectEntity");
          return this.__PROXY__.deselectEntity(...args);
        };
    
        // function 
        RDocument.prototype.selectEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.selectEntities");
          return this.__PROXY__.selectEntities(...args);
        };
    
        // function 
        RDocument.prototype.deselectEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.deselectEntities");
          return this.__PROXY__.deselectEntities(...args);
        };
    
        // function 
        RDocument.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDocument.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDocument.prototype.isLayerLocked = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayerLocked");
          return this.__PROXY__.isLayerLocked(...args);
        };
    
        // function 
        RDocument.prototype.isParentLayerLocked = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isParentLayerLocked");
          return this.__PROXY__.isParentLayerLocked(...args);
        };
    
        // function 
        RDocument.prototype.isEntity = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isEntity");
          return this.__PROXY__.isEntity(...args);
        };
    
        // function 
        RDocument.prototype.isEntityEditable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isEntityEditable");
          return this.__PROXY__.isEntityEditable(...args);
        };
    
        // function 
        RDocument.prototype.isLayerOff = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayerOff");
          return this.__PROXY__.isLayerOff(...args);
        };
    
        // function 
        RDocument.prototype.isLayerOffOrFrozen = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayerOffOrFrozen");
          return this.__PROXY__.isLayerOffOrFrozen(...args);
        };
    
        // function 
        RDocument.prototype.isLayerFrozen = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayerFrozen");
          return this.__PROXY__.isLayerFrozen(...args);
        };
    
        // function 
        RDocument.prototype.isLayerPlottable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayerPlottable");
          return this.__PROXY__.isLayerPlottable(...args);
        };
    
        // function 
        RDocument.prototype.isLayerSnappable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayerSnappable");
          return this.__PROXY__.isLayerSnappable(...args);
        };
    
        // function 
        RDocument.prototype.isParentLayerFrozen = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isParentLayerFrozen");
          return this.__PROXY__.isParentLayerFrozen(...args);
        };
    
        // function 
        RDocument.prototype.isBlockFrozen = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isBlockFrozen");
          return this.__PROXY__.isBlockFrozen(...args);
        };
    
        // function 
        RDocument.prototype.isLayoutBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isLayoutBlock");
          return this.__PROXY__.isLayoutBlock(...args);
        };
    
        // function 
        RDocument.prototype.isEntityLayerFrozen = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isEntityLayerFrozen");
          return this.__PROXY__.isEntityLayerFrozen(...args);
        };
    
        // function 
        RDocument.prototype.isEntityVisible = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isEntityVisible");
          return this.__PROXY__.isEntityVisible(...args);
        };
    
        // function 
        RDocument.prototype.isParentLayerSnappable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isParentLayerSnappable");
          return this.__PROXY__.isParentLayerSnappable(...args);
        };
    
        // function 
        RDocument.prototype.isParentLayerPlottable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isParentLayerPlottable");
          return this.__PROXY__.isParentLayerPlottable(...args);
        };
    
        // function 
        RDocument.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasSelection");
          return this.__PROXY__.hasSelection(...args);
        };
    
        // function 
        RDocument.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDocument.prototype.getSelectionBox = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getSelectionBox");
          return this.__PROXY__.getSelectionBox(...args);
        };
    
        // function 
        RDocument.prototype.getEntitiesBox = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getEntitiesBox");
          return this.__PROXY__.getEntitiesBox(...args);
        };
    
        // function 
        RDocument.prototype.clearSpatialIndices = function(...args) 
          
        {
          //print("JS: RDocument.prototype.clearSpatialIndices");
          return this.__PROXY__.clearSpatialIndices(...args);
        };
    
        // function 
        RDocument.prototype.rebuildSpatialIndex = function(...args) 
          
        {
          //print("JS: RDocument.prototype.rebuildSpatialIndex");
          return this.__PROXY__.rebuildSpatialIndex(...args);
        };
    
        // function 
        RDocument.prototype.addToSpatialIndex = function(...args) 
          
        {
          //print("JS: RDocument.prototype.addToSpatialIndex");
          return this.__PROXY__.addToSpatialIndex(...args);
        };
    
        // function 
        RDocument.prototype.blockContainsReferences = function(...args) 
          
        {
          //print("JS: RDocument.prototype.blockContainsReferences");
          return this.__PROXY__.blockContainsReferences(...args);
        };
    
        // function 
        RDocument.prototype.removeBlockFromSpatialIndex = function(...args) 
          
        {
          //print("JS: RDocument.prototype.removeBlockFromSpatialIndex");
          return this.__PROXY__.removeBlockFromSpatialIndex(...args);
        };
    
        // function 
        RDocument.prototype.addBlockToSpatialIndex = function(...args) 
          
        {
          //print("JS: RDocument.prototype.addBlockToSpatialIndex");
          return this.__PROXY__.addBlockToSpatialIndex(...args);
        };
    
        // function 
        RDocument.prototype.removeFromSpatialIndex = function(...args) 
          
        {
          //print("JS: RDocument.prototype.removeFromSpatialIndex");
          return this.__PROXY__.removeFromSpatialIndex(...args);
        };
    
        // function 
        RDocument.prototype.updateAllEntities = function(...args) 
          
        {
          //print("JS: RDocument.prototype.updateAllEntities");
          return this.__PROXY__.updateAllEntities(...args);
        };
    
        // function 
        RDocument.prototype.undo = function(...args) 
          
        {
          //print("JS: RDocument.prototype.undo");
          return this.__PROXY__.undo(...args);
        };
    
        // function 
        RDocument.prototype.redo = function(...args) 
          
        {
          //print("JS: RDocument.prototype.redo");
          return this.__PROXY__.redo(...args);
        };
    
        // function 
        RDocument.prototype.isUndoAvailable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isUndoAvailable");
          return this.__PROXY__.isUndoAvailable(...args);
        };
    
        // function 
        RDocument.prototype.isRedoAvailable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isRedoAvailable");
          return this.__PROXY__.isRedoAvailable(...args);
        };
    
        // function 
        RDocument.prototype.startTransactionGroup = function(...args) 
          
        {
          //print("JS: RDocument.prototype.startTransactionGroup");
          return this.__PROXY__.startTransactionGroup(...args);
        };
    
        // function 
        RDocument.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getTransactionGroup");
          return this.__PROXY__.getTransactionGroup(...args);
        };
    
        // function 
        RDocument.prototype.setAutoTransactionGroup = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setAutoTransactionGroup");
          return this.__PROXY__.setAutoTransactionGroup(...args);
        };
    
        // function 
        RDocument.prototype.getAutoTransactionGroup = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getAutoTransactionGroup");
          return this.__PROXY__.getAutoTransactionGroup(...args);
        };
    
        // function 
        RDocument.prototype.resetTransactionStack = function(...args) 
          
        {
          //print("JS: RDocument.prototype.resetTransactionStack");
          return this.__PROXY__.resetTransactionStack(...args);
        };
    
        // function 
        RDocument.prototype.setFileName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setFileName");
          return this.__PROXY__.setFileName(...args);
        };
    
        // function 
        RDocument.prototype.getFileName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getFileName");
          return this.__PROXY__.getFileName(...args);
        };
    
        // function 
        RDocument.prototype.setFileVersion = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setFileVersion");
          return this.__PROXY__.setFileVersion(...args);
        };
    
        // function 
        RDocument.prototype.getFileVersion = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getFileVersion");
          return this.__PROXY__.getFileVersion(...args);
        };
    
        // function 
        RDocument.prototype.queryCurrentLayer = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryCurrentLayer");
          return this.__PROXY__.queryCurrentLayer(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentLayer");
          return this.__PROXY__.setCurrentLayer(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentLayerId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentLayerId");
          return this.__PROXY__.getCurrentLayerId(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentLayerName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentLayerName");
          return this.__PROXY__.getCurrentLayerName(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentColor = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentColor");
          return this.__PROXY__.setCurrentColor(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentColor = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentColor");
          return this.__PROXY__.getCurrentColor(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentLineweight = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentLineweight");
          return this.__PROXY__.setCurrentLineweight(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentLineweight = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentLineweight");
          return this.__PROXY__.getCurrentLineweight(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentLinetype = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentLinetype");
          return this.__PROXY__.setCurrentLinetype(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentLinetypePattern");
          return this.__PROXY__.setCurrentLinetypePattern(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentLinetypeId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentLinetypeId");
          return this.__PROXY__.getCurrentLinetypeId(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentLinetypePattern");
          return this.__PROXY__.getCurrentLinetypePattern(...args);
        };
    
        // function 
        RDocument.prototype.queryCurrentBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryCurrentBlock");
          return this.__PROXY__.queryCurrentBlock(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentBlock");
          return this.__PROXY__.setCurrentBlock(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentBlockId");
          return this.__PROXY__.getCurrentBlockId(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentBlockName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentBlockName");
          return this.__PROXY__.getCurrentBlockName(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentViewport = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentViewport");
          return this.__PROXY__.setCurrentViewport(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentViewportId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentViewportId");
          return this.__PROXY__.getCurrentViewportId(...args);
        };
    
        // function 
        RDocument.prototype.hasCurrentViewport = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasCurrentViewport");
          return this.__PROXY__.hasCurrentViewport(...args);
        };
    
        // function 
        RDocument.prototype.unsetCurrentViewport = function(...args) 
          
        {
          //print("JS: RDocument.prototype.unsetCurrentViewport");
          return this.__PROXY__.unsetCurrentViewport(...args);
        };
    
        // function 
        RDocument.prototype.queryCurrentView = function(...args) 
          
        {
          //print("JS: RDocument.prototype.queryCurrentView");
          return this.__PROXY__.queryCurrentView(...args);
        };
    
        // function 
        RDocument.prototype.setCurrentView = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setCurrentView");
          return this.__PROXY__.setCurrentView(...args);
        };
    
        // function 
        RDocument.prototype.getCurrentViewId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getCurrentViewId");
          return this.__PROXY__.getCurrentViewId(...args);
        };
    
        // function 
        RDocument.prototype.getTempBlockName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getTempBlockName");
          return this.__PROXY__.getTempBlockName(...args);
        };
    
        // function 
        RDocument.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDocument.prototype.getBlockNameFromHandle = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBlockNameFromHandle");
          return this.__PROXY__.getBlockNameFromHandle(...args);
        };
    
        // function 
        RDocument.prototype.getBlockNameFromLayout = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBlockNameFromLayout");
          return this.__PROXY__.getBlockNameFromLayout(...args);
        };
    
        // function 
        RDocument.prototype.getBlockNames = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBlockNames");
          return this.__PROXY__.getBlockNames(...args);
        };
    
        // function 
        RDocument.prototype.sortBlocks = function(...args) 
          
        {
          //print("JS: RDocument.prototype.sortBlocks");
          return this.__PROXY__.sortBlocks(...args);
        };
    
        // function 
        RDocument.prototype.sortLayers = function(...args) 
          
        {
          //print("JS: RDocument.prototype.sortLayers");
          return this.__PROXY__.sortLayers(...args);
        };
    
        // function 
        RDocument.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDocument.prototype.getLayerNames = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayerNames");
          return this.__PROXY__.getLayerNames(...args);
        };
    
        // function 
        RDocument.prototype.getLayerStateName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayerStateName");
          return this.__PROXY__.getLayerStateName(...args);
        };
    
        // function 
        RDocument.prototype.getLayerStateNames = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayerStateNames");
          return this.__PROXY__.getLayerStateNames(...args);
        };
    
        // function 
        RDocument.prototype.getLayoutName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayoutName");
          return this.__PROXY__.getLayoutName(...args);
        };
    
        // function 
        RDocument.prototype.getViewNames = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getViewNames");
          return this.__PROXY__.getViewNames(...args);
        };
    
        // function 
        RDocument.prototype.hasLayer = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasLayer");
          return this.__PROXY__.hasLayer(...args);
        };
    
        // function 
        RDocument.prototype.hasLayerStates = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasLayerStates");
          return this.__PROXY__.hasLayerStates(...args);
        };
    
        // function 
        RDocument.prototype.hasLayerState = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasLayerState");
          return this.__PROXY__.hasLayerState(...args);
        };
    
        // function 
        RDocument.prototype.hasBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasBlock");
          return this.__PROXY__.hasBlock(...args);
        };
    
        // function 
        RDocument.prototype.hasLayout = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasLayout");
          return this.__PROXY__.hasLayout(...args);
        };
    
        // function 
        RDocument.prototype.hasView = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasView");
          return this.__PROXY__.hasView(...args);
        };
    
        // function 
        RDocument.prototype.hasLinetype = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasLinetype");
          return this.__PROXY__.hasLinetype(...args);
        };
    
        // function 
        RDocument.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDocument.prototype.getLayer0Id = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayer0Id");
          return this.__PROXY__.getLayer0Id(...args);
        };
    
        // function 
        RDocument.prototype.getLayerStateId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLayerStateId");
          return this.__PROXY__.getLayerStateId(...args);
        };
    
        // function 
        RDocument.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDocument.prototype.getBlockIdAuto = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getBlockIdAuto");
          return this.__PROXY__.getBlockIdAuto(...args);
        };
    
        // function 
        RDocument.prototype.getModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getModelSpaceBlockId");
          return this.__PROXY__.getModelSpaceBlockId(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeByLayerId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeByLayerId");
          return this.__PROXY__.getLinetypeByLayerId(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeByBlockId = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeByBlockId");
          return this.__PROXY__.getLinetypeByBlockId(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeName = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeName");
          return this.__PROXY__.getLinetypeName(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeDescription = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeDescription");
          return this.__PROXY__.getLinetypeDescription(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeLabel = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeLabel");
          return this.__PROXY__.getLinetypeLabel(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeNames = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeNames");
          return this.__PROXY__.getLinetypeNames(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypePatterns = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypePatterns");
          return this.__PROXY__.getLinetypePatterns(...args);
        };
    
        // function 
        RDocument.prototype.isByLayer = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isByLayer");
          return this.__PROXY__.isByLayer(...args);
        };
    
        // function 
        RDocument.prototype.isByBlock = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isByBlock");
          return this.__PROXY__.isByBlock(...args);
        };
    
        // function 
        RDocument.prototype.getMaxLineweight = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getMaxLineweight");
          return this.__PROXY__.getMaxLineweight(...args);
        };
    
        // function 
        RDocument.prototype.getVariables = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getVariables");
          return this.__PROXY__.getVariables(...args);
        };
    
        // function 
        RDocument.prototype.setVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setVariable");
          return this.__PROXY__.setVariable(...args);
        };
    
        // function 
        RDocument.prototype.getVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getVariable");
          return this.__PROXY__.getVariable(...args);
        };
    
        // function 
        RDocument.prototype.hasVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.hasVariable");
          return this.__PROXY__.hasVariable(...args);
        };
    
        // function 
        RDocument.prototype.removeVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.removeVariable");
          return this.__PROXY__.removeVariable(...args);
        };
    
        // function 
        RDocument.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setKnownVariable");
          return this.__PROXY__.setKnownVariable(...args);
        };
    
        // function 
        RDocument.prototype.getKnownVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getKnownVariable");
          return this.__PROXY__.getKnownVariable(...args);
        };
    
        // function 
        RDocument.prototype.setUnit = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setUnit");
          return this.__PROXY__.setUnit(...args);
        };
    
        // function 
        RDocument.prototype.getUnit = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getUnit");
          return this.__PROXY__.getUnit(...args);
        };
    
        // function 
        RDocument.prototype.setMeasurement = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setMeasurement");
          return this.__PROXY__.setMeasurement(...args);
        };
    
        // function 
        RDocument.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDocument.prototype.isMetric = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isMetric");
          return this.__PROXY__.isMetric(...args);
        };
    
        // function 
        RDocument.prototype.setDimensionFont = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setDimensionFont");
          return this.__PROXY__.setDimensionFont(...args);
        };
    
        // function 
        RDocument.prototype.getDimensionFont = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getDimensionFont");
          return this.__PROXY__.getDimensionFont(...args);
        };
    
        // function 
        RDocument.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDocument.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDocument.prototype.formatLinear = function(...args) 
          
        {
          //print("JS: RDocument.prototype.formatLinear");
          return this.__PROXY__.formatLinear(...args);
        };
    
        // function 
        RDocument.prototype.formatAngle = function(...args) 
          
        {
          //print("JS: RDocument.prototype.formatAngle");
          return this.__PROXY__.formatAngle(...args);
        };
    
        // function 
        RDocument.prototype.setLinearFormat = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setLinearFormat");
          return this.__PROXY__.setLinearFormat(...args);
        };
    
        // function 
        RDocument.prototype.getLinearFormat = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinearFormat");
          return this.__PROXY__.getLinearFormat(...args);
        };
    
        // function 
        RDocument.prototype.getLinearPrecision = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLinearPrecision");
          return this.__PROXY__.getLinearPrecision(...args);
        };
    
        // function 
        RDocument.prototype.showLeadingZeroes = function(...args) 
          
        {
          //print("JS: RDocument.prototype.showLeadingZeroes");
          return this.__PROXY__.showLeadingZeroes(...args);
        };
    
        // function 
        RDocument.prototype.showTrailingZeroes = function(...args) 
          
        {
          //print("JS: RDocument.prototype.showTrailingZeroes");
          return this.__PROXY__.showTrailingZeroes(...args);
        };
    
        // function 
        RDocument.prototype.showLeadingZeroesAngle = function(...args) 
          
        {
          //print("JS: RDocument.prototype.showLeadingZeroesAngle");
          return this.__PROXY__.showLeadingZeroesAngle(...args);
        };
    
        // function 
        RDocument.prototype.showTrailingZeroesAngle = function(...args) 
          
        {
          //print("JS: RDocument.prototype.showTrailingZeroesAngle");
          return this.__PROXY__.showTrailingZeroesAngle(...args);
        };
    
        // function 
        RDocument.prototype.getAngleFormat = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getAngleFormat");
          return this.__PROXY__.getAngleFormat(...args);
        };
    
        // function 
        RDocument.prototype.getAnglePrecision = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getAnglePrecision");
          return this.__PROXY__.getAnglePrecision(...args);
        };
    
        // function 
        RDocument.prototype.getDecimalSeparator = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getDecimalSeparator");
          return this.__PROXY__.getDecimalSeparator(...args);
        };
    
        // function 
        RDocument.prototype.isModified = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isModified");
          return this.__PROXY__.isModified(...args);
        };
    
        // function 
        RDocument.prototype.getLastModifiedDateTime = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLastModifiedDateTime");
          return this.__PROXY__.getLastModifiedDateTime(...args);
        };
    
        // function 
        RDocument.prototype.getLastModified = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getLastModified");
          return this.__PROXY__.getLastModified(...args);
        };
    
        // function 
        RDocument.prototype.setModified = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setModified");
          return this.__PROXY__.setModified(...args);
        };
    
        // function 
        RDocument.prototype.copyVariablesFrom = function(...args) 
          
        {
          //print("JS: RDocument.prototype.copyVariablesFrom");
          return this.__PROXY__.copyVariablesFrom(...args);
        };
    
        // function 
        RDocument.prototype.addAutoVariable = function(...args) 
          
        {
          //print("JS: RDocument.prototype.addAutoVariable");
          return this.__PROXY__.addAutoVariable(...args);
        };
    
        // function 
        RDocument.prototype.getAutoVariables = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getAutoVariables");
          return this.__PROXY__.getAutoVariables(...args);
        };
    
        // function 
        RDocument.prototype.substituteAutoVariables = function(...args) 
          
        {
          //print("JS: RDocument.prototype.substituteAutoVariables");
          return this.__PROXY__.substituteAutoVariables(...args);
        };
    
        // function 
        RDocument.prototype.eval = function(...args) 
          
        {
          //print("JS: RDocument.prototype.eval");
          return this.__PROXY__.eval(...args);
        };
    
        // function 
        RDocument.prototype.isEditingWorkingSet = function(...args) 
          
        {
          //print("JS: RDocument.prototype.isEditingWorkingSet");
          return this.__PROXY__.isEditingWorkingSet(...args);
        };
    
        // function 
        RDocument.prototype.setIgnoreWorkingSet = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setIgnoreWorkingSet");
          return this.__PROXY__.setIgnoreWorkingSet(...args);
        };
    
        // function 
        RDocument.prototype.setNotifyListeners = function(...args) 
          
        {
          //print("JS: RDocument.prototype.setNotifyListeners");
          return this.__PROXY__.setNotifyListeners(...args);
        };
    
        // function 
        RDocument.prototype.getNotifyListeners = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getNotifyListeners");
          return this.__PROXY__.getNotifyListeners(...args);
        };
    
        // function 
        RDocument.prototype.getClipboard = function(...args) 
          
        {
          //print("JS: RDocument.prototype.getClipboard");
          return this.__PROXY__.getClipboard(...args);
        };
    
        // function 
        RDocument.prototype.dump = function(...args) 
          
        {
          //print("JS: RDocument.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    

      // static functions:
      

        // static function 
        RDocument.getClipboard = function() 
          
        {
          //print("JS: RDocument.getClipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDocument_WrapperSingletonInstance.getClipboard(
                  
                );
              

        //copyProperties(this, wrapper, RDocument);
  }

  
  else {
    
        print("RDocument.getClipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDocument.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      