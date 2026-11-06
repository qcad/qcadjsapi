
      // auto generated
      //var self;

      // class constructor:
      function RStorage() {
        

        // should be RStorage_BaseJs.call(this, engine):
        //RStorage.prototype = new RStorage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RStorage.getIdStatic()))) {

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
            qWarning("RStorage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RStorage.js: No constructor found for class RStorage");
            
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

      //RStorage.prototype = new RStorage_BaseJs(engine);
      //RStorage.prototype = new RStorage_Wrapper(engine);
      RStorage.prototype = new Object();


      RStorage.prototype.toString = function() {
          //return "RStorage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RStorage [JS]";
        };
      RStorage.getObjectType = function() {
        return RJSType_RStorage.getIdStatic();
      };

      RStorage.prototype.getObjectType = function() {
        return RJSType_RStorage.getIdStatic();
      };

      RStorage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RStorage.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RStorage.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setDocument");
          
              return this.__PROXY__.setDocument(...args);
            
        };
    
        // function 
        RStorage.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getDocument");
          
              return this.__PROXY__.getDocument(...args);
            
        };
    
        // function 
        RStorage.prototype.clear = function(...args) 
          
        {
          //print("JS: RStorage.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        RStorage.prototype.beginTransaction = function(...args) 
          
        {
          //print("JS: RStorage.prototype.beginTransaction");
          
              return this.__PROXY__.beginTransaction(...args);
            
        };
    
        // function 
        RStorage.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: RStorage.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        RStorage.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: RStorage.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        RStorage.prototype.orderBackToFront = function(...args) 
          
        {
          //print("JS: RStorage.prototype.orderBackToFront");
          
              return this.__PROXY__.orderBackToFront(...args);
            
        };
    
        // function 
        RStorage.prototype.sortBlocks = function(...args) 
          
        {
          //print("JS: RStorage.prototype.sortBlocks");
          
              return this.__PROXY__.sortBlocks(...args);
            
        };
    
        // function 
        RStorage.prototype.sortLayers = function(...args) 
          
        {
          //print("JS: RStorage.prototype.sortLayers");
          
              return this.__PROXY__.sortLayers(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllObjects = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllObjects");
          
              return this.__PROXY__.queryAllObjects(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllVisibleEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllVisibleEntities");
          
              return this.__PROXY__.queryAllVisibleEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllEntities");
          
              return this.__PROXY__.queryAllEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryWorkingSetEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryWorkingSetEntities");
          
              return this.__PROXY__.queryWorkingSetEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllUcs = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllUcs");
          
              return this.__PROXY__.queryAllUcs(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllLayers = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllLayers");
          
              return this.__PROXY__.queryAllLayers(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllLayerStates = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllLayerStates");
          
              return this.__PROXY__.queryAllLayerStates(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllBlocks = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllBlocks");
          
              return this.__PROXY__.queryAllBlocks(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllLayoutBlocks = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllLayoutBlocks");
          
              return this.__PROXY__.queryAllLayoutBlocks(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllLayouts = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllLayouts");
          
              return this.__PROXY__.queryAllLayouts(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllViews = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllViews");
          
              return this.__PROXY__.queryAllViews(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllLinetypes = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllLinetypes");
          
              return this.__PROXY__.queryAllLinetypes(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayerEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayerEntities");
          
              return this.__PROXY__.queryLayerEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.querySelectedLayerEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.querySelectedLayerEntities");
          
              return this.__PROXY__.querySelectedLayerEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.hasBlockEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasBlockEntities");
          
              return this.__PROXY__.hasBlockEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryBlockEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryBlockEntities");
          
              return this.__PROXY__.queryBlockEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayerBlockEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayerBlockEntities");
          
              return this.__PROXY__.queryLayerBlockEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryChildEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryChildEntities");
          
              return this.__PROXY__.queryChildEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.hasChildEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasChildEntities");
          
              return this.__PROXY__.hasChildEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryBlockReferences = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryBlockReferences");
          
              return this.__PROXY__.queryBlockReferences(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllBlockReferences = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllBlockReferences");
          
              return this.__PROXY__.queryAllBlockReferences(...args);
            
        };
    
        // function 
        RStorage.prototype.queryAllViewports = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryAllViewports");
          
              return this.__PROXY__.queryAllViewports(...args);
            
        };
    
        // function 
        RStorage.prototype.querySelectedEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.querySelectedEntities");
          
              return this.__PROXY__.querySelectedEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.querySelectedLayers = function(...args) 
          
        {
          //print("JS: RStorage.prototype.querySelectedLayers");
          
              return this.__PROXY__.querySelectedLayers(...args);
            
        };
    
        // function 
        RStorage.prototype.queryInfiniteEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryInfiniteEntities");
          
              return this.__PROXY__.queryInfiniteEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.queryDocumentVariables = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryDocumentVariables");
          
              return this.__PROXY__.queryDocumentVariables(...args);
            
        };
    
        // function 
        RStorage.prototype.queryDocumentVariablesDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryDocumentVariablesDirect");
          
              return this.__PROXY__.queryDocumentVariablesDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryDimStyle = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryDimStyle");
          
              return this.__PROXY__.queryDimStyle(...args);
            
        };
    
        // function 
        RStorage.prototype.queryDimStyleDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryDimStyleDirect");
          
              return this.__PROXY__.queryDimStyleDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryObject = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryObject");
          
              return this.__PROXY__.queryObject(...args);
            
        };
    
        // function 
        RStorage.prototype.queryObjectDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryObjectDirect");
          
              return this.__PROXY__.queryObjectDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryObjectCC = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryObjectCC");
          
              return this.__PROXY__.queryObjectCC(...args);
            
        };
    
        // function 
        RStorage.prototype.queryObjectByHandle = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryObjectByHandle");
          
              return this.__PROXY__.queryObjectByHandle(...args);
            
        };
    
        // function 
        RStorage.prototype.queryEntity = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryEntity");
          
              return this.__PROXY__.queryEntity(...args);
            
        };
    
        // function 
        RStorage.prototype.queryEntityDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryEntityDirect");
          
              return this.__PROXY__.queryEntityDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryVisibleEntityDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryVisibleEntityDirect");
          
              return this.__PROXY__.queryVisibleEntityDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryUcs = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryUcs");
          
              return this.__PROXY__.queryUcs(...args);
            
        };
    
        // function 
        RStorage.prototype.queryUcsDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryUcsDirect");
          
              return this.__PROXY__.queryUcsDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayer = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayer");
          
              return this.__PROXY__.queryLayer(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayerDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayerDirect");
          
              return this.__PROXY__.queryLayerDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryCurrentLayer = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryCurrentLayer");
          
              return this.__PROXY__.queryCurrentLayer(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayerState = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayerState");
          
              return this.__PROXY__.queryLayerState(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayerStateDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayerStateDirect");
          
              return this.__PROXY__.queryLayerStateDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayout = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayout");
          
              return this.__PROXY__.queryLayout(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLayoutDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLayoutDirect");
          
              return this.__PROXY__.queryLayoutDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryCurrentView = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryCurrentView");
          
              return this.__PROXY__.queryCurrentView(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLinetypeDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLinetypeDirect");
          
              return this.__PROXY__.queryLinetypeDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryLinetype = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryLinetype");
          
              return this.__PROXY__.queryLinetype(...args);
            
        };
    
        // function 
        RStorage.prototype.queryBlockDirect = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryBlockDirect");
          
              return this.__PROXY__.queryBlockDirect(...args);
            
        };
    
        // function 
        RStorage.prototype.queryBlock = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryBlock");
          
              return this.__PROXY__.queryBlock(...args);
            
        };
    
        // function 
        RStorage.prototype.queryView = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryView");
          
              return this.__PROXY__.queryView(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentLayer");
          
              return this.__PROXY__.setCurrentLayer(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentLayerId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentLayerId");
          
              return this.__PROXY__.getCurrentLayerId(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentViewId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentViewId");
          
              return this.__PROXY__.getCurrentViewId(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentColor = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentColor");
          
              return this.__PROXY__.setCurrentColor(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentColor = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentColor");
          
              return this.__PROXY__.getCurrentColor(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentLineweight = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentLineweight");
          
              return this.__PROXY__.setCurrentLineweight(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentLineweight = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentLineweight");
          
              return this.__PROXY__.getCurrentLineweight(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentLinetype = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentLinetype");
          
              return this.__PROXY__.setCurrentLinetype(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentLinetypePattern");
          
              return this.__PROXY__.setCurrentLinetypePattern(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentLinetypeId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentLinetypeId");
          
              return this.__PROXY__.getCurrentLinetypeId(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentLinetypePattern = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentLinetypePattern");
          
              return this.__PROXY__.getCurrentLinetypePattern(...args);
            
        };
    
        // function 
        RStorage.prototype.queryCurrentLinetype = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryCurrentLinetype");
          
              return this.__PROXY__.queryCurrentLinetype(...args);
            
        };
    
        // function 
        RStorage.prototype.queryCurrentBlock = function(...args) 
          
        {
          //print("JS: RStorage.prototype.queryCurrentBlock");
          
              return this.__PROXY__.queryCurrentBlock(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentBlock");
          
              return this.__PROXY__.setCurrentBlock(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentBlockId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentBlockId");
          
              return this.__PROXY__.getCurrentBlockId(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentViewport = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentViewport");
          
              return this.__PROXY__.setCurrentViewport(...args);
            
        };
    
        // function 
        RStorage.prototype.unsetCurrentViewport = function(...args) 
          
        {
          //print("JS: RStorage.prototype.unsetCurrentViewport");
          
              return this.__PROXY__.unsetCurrentViewport(...args);
            
        };
    
        // function 
        RStorage.prototype.getCurrentViewportId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getCurrentViewportId");
          
              return this.__PROXY__.getCurrentViewportId(...args);
            
        };
    
        // function 
        RStorage.prototype.setModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setModelSpaceBlockId");
          
              return this.__PROXY__.setModelSpaceBlockId(...args);
            
        };
    
        // function 
        RStorage.prototype.getModelSpaceBlockId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getModelSpaceBlockId");
          
              return this.__PROXY__.getModelSpaceBlockId(...args);
            
        };
    
        // function 
        RStorage.prototype.setCurrentView = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setCurrentView");
          
              return this.__PROXY__.setCurrentView(...args);
            
        };
    
        // function 
        RStorage.prototype.setUnit = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setUnit");
          
              return this.__PROXY__.setUnit(...args);
            
        };
    
        // function 
        RStorage.prototype.getUnit = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getUnit");
          
              return this.__PROXY__.getUnit(...args);
            
        };
    
        // function 
        RStorage.prototype.setMeasurement = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setMeasurement");
          
              return this.__PROXY__.setMeasurement(...args);
            
        };
    
        // function 
        RStorage.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMeasurement");
          
              return this.__PROXY__.getMeasurement(...args);
            
        };
    
        // function 
        RStorage.prototype.setDimensionFont = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setDimensionFont");
          
              return this.__PROXY__.setDimensionFont(...args);
            
        };
    
        // function 
        RStorage.prototype.getDimensionFont = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getDimensionFont");
          
              return this.__PROXY__.getDimensionFont(...args);
            
        };
    
        // function 
        RStorage.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setLinetypeScale");
          
              return this.__PROXY__.setLinetypeScale(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypeScale");
          
              return this.__PROXY__.getLinetypeScale(...args);
            
        };
    
        // function 
        RStorage.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBlockName");
          
              return this.__PROXY__.getBlockName(...args);
            
        };
    
        // function 
        RStorage.prototype.getBlockNameFromHandle = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBlockNameFromHandle");
          
              return this.__PROXY__.getBlockNameFromHandle(...args);
            
        };
    
        // function 
        RStorage.prototype.getBlockNameFromLayout = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBlockNameFromLayout");
          
              return this.__PROXY__.getBlockNameFromLayout(...args);
            
        };
    
        // function 
        RStorage.prototype.getBlockNames = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBlockNames");
          
              return this.__PROXY__.getBlockNames(...args);
            
        };
    
        // function 
        RStorage.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBlockId");
          
              return this.__PROXY__.getBlockId(...args);
            
        };
    
        // function 
        RStorage.prototype.getBlockIdAuto = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBlockIdAuto");
          
              return this.__PROXY__.getBlockIdAuto(...args);
            
        };
    
        // function 
        RStorage.prototype.hasBlock = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasBlock");
          
              return this.__PROXY__.hasBlock(...args);
            
        };
    
        // function 
        RStorage.prototype.getViewName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getViewName");
          
              return this.__PROXY__.getViewName(...args);
            
        };
    
        // function 
        RStorage.prototype.getViewNames = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getViewNames");
          
              return this.__PROXY__.getViewNames(...args);
            
        };
    
        // function 
        RStorage.prototype.getViewId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getViewId");
          
              return this.__PROXY__.getViewId(...args);
            
        };
    
        // function 
        RStorage.prototype.hasView = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasView");
          
              return this.__PROXY__.hasView(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayerName");
          
              return this.__PROXY__.getLayerName(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayerNames = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayerNames");
          
              return this.__PROXY__.getLayerNames(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayerId");
          
              return this.__PROXY__.getLayerId(...args);
            
        };
    
        // function 
        RStorage.prototype.setLayer0Id = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setLayer0Id");
          
              return this.__PROXY__.setLayer0Id(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayer0Id = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayer0Id");
          
              return this.__PROXY__.getLayer0Id(...args);
            
        };
    
        // function 
        RStorage.prototype.hasLayer = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasLayer");
          
              return this.__PROXY__.hasLayer(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayerStateName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayerStateName");
          
              return this.__PROXY__.getLayerStateName(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayerStateNames = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayerStateNames");
          
              return this.__PROXY__.getLayerStateNames(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayerStateId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayerStateId");
          
              return this.__PROXY__.getLayerStateId(...args);
            
        };
    
        // function 
        RStorage.prototype.hasLayerStates = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasLayerStates");
          
              return this.__PROXY__.hasLayerStates(...args);
            
        };
    
        // function 
        RStorage.prototype.hasLayerState = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasLayerState");
          
              return this.__PROXY__.hasLayerState(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayoutName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayoutName");
          
              return this.__PROXY__.getLayoutName(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayoutNames = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayoutNames");
          
              return this.__PROXY__.getLayoutNames(...args);
            
        };
    
        // function 
        RStorage.prototype.getLayoutId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLayoutId");
          
              return this.__PROXY__.getLayoutId(...args);
            
        };
    
        // function 
        RStorage.prototype.hasLayout = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasLayout");
          
              return this.__PROXY__.hasLayout(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypeName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypeName");
          
              return this.__PROXY__.getLinetypeName(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypeDescription = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypeDescription");
          
              return this.__PROXY__.getLinetypeDescription(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypeLabel = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypeLabel");
          
              return this.__PROXY__.getLinetypeLabel(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypeNames = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypeNames");
          
              return this.__PROXY__.getLinetypeNames(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypePatterns = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypePatterns");
          
              return this.__PROXY__.getLinetypePatterns(...args);
            
        };
    
        // function 
        RStorage.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLinetypeId");
          
              return this.__PROXY__.getLinetypeId(...args);
            
        };
    
        // function 
        RStorage.prototype.hasLinetype = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasLinetype");
          
              return this.__PROXY__.hasLinetype(...args);
            
        };
    
        // function 
        RStorage.prototype.getVariables = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getVariables");
          
              return this.__PROXY__.getVariables(...args);
            
        };
    
        // function 
        RStorage.prototype.setVariable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setVariable");
          
              return this.__PROXY__.setVariable(...args);
            
        };
    
        // function 
        RStorage.prototype.removeVariable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.removeVariable");
          
              return this.__PROXY__.removeVariable(...args);
            
        };
    
        // function 
        RStorage.prototype.getVariable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getVariable");
          
              return this.__PROXY__.getVariable(...args);
            
        };
    
        // function 
        RStorage.prototype.hasVariable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasVariable");
          
              return this.__PROXY__.hasVariable(...args);
            
        };
    
        // function 
        RStorage.prototype.setKnownVariable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setKnownVariable");
          
              return this.__PROXY__.setKnownVariable(...args);
            
        };
    
        // function 
        RStorage.prototype.getKnownVariable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getKnownVariable");
          
              return this.__PROXY__.getKnownVariable(...args);
            
        };
    
        // function 
        RStorage.prototype.countSelectedEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.countSelectedEntities");
          
              return this.__PROXY__.countSelectedEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.clearEntitySelection = function(...args) 
          
        {
          //print("JS: RStorage.prototype.clearEntitySelection");
          
              return this.__PROXY__.clearEntitySelection(...args);
            
        };
    
        // function 
        RStorage.prototype.selectAllEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.selectAllEntities");
          
              return this.__PROXY__.selectAllEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.selectEntity = function(...args) 
          
        {
          //print("JS: RStorage.prototype.selectEntity");
          
              return this.__PROXY__.selectEntity(...args);
            
        };
    
        // function 
        RStorage.prototype.selectEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.selectEntities");
          
              return this.__PROXY__.selectEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.deselectEntity = function(...args) 
          
        {
          //print("JS: RStorage.prototype.deselectEntity");
          
              return this.__PROXY__.deselectEntity(...args);
            
        };
    
        // function 
        RStorage.prototype.deselectEntities = function(...args) 
          
        {
          //print("JS: RStorage.prototype.deselectEntities");
          
              return this.__PROXY__.deselectEntities(...args);
            
        };
    
        // function 
        RStorage.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
    
        // function 
        RStorage.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isSelectedWorkingSet");
          
              return this.__PROXY__.isSelectedWorkingSet(...args);
            
        };
    
        // function 
        RStorage.prototype.isEntity = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isEntity");
          
              return this.__PROXY__.isEntity(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayerLocked = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayerLocked");
          
              return this.__PROXY__.isLayerLocked(...args);
            
        };
    
        // function 
        RStorage.prototype.isParentLayerLocked = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isParentLayerLocked");
          
              return this.__PROXY__.isParentLayerLocked(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayerOff = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayerOff");
          
              return this.__PROXY__.isLayerOff(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayerOffOrFrozen = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayerOffOrFrozen");
          
              return this.__PROXY__.isLayerOffOrFrozen(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayerFrozen = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayerFrozen");
          
              return this.__PROXY__.isLayerFrozen(...args);
            
        };
    
        // function 
        RStorage.prototype.isParentLayerFrozen = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isParentLayerFrozen");
          
              return this.__PROXY__.isParentLayerFrozen(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayerSnappable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayerSnappable");
          
              return this.__PROXY__.isLayerSnappable(...args);
            
        };
    
        // function 
        RStorage.prototype.isParentLayerSnappable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isParentLayerSnappable");
          
              return this.__PROXY__.isParentLayerSnappable(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayerPlottable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayerPlottable");
          
              return this.__PROXY__.isLayerPlottable(...args);
            
        };
    
        // function 
        RStorage.prototype.isParentLayerPlottable = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isParentLayerPlottable");
          
              return this.__PROXY__.isParentLayerPlottable(...args);
            
        };
    
        // function 
        RStorage.prototype.isEntityVisible = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isEntityVisible");
          
              return this.__PROXY__.isEntityVisible(...args);
            
        };
    
        // function 
        RStorage.prototype.isBlockFrozen = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isBlockFrozen");
          
              return this.__PROXY__.isBlockFrozen(...args);
            
        };
    
        // function 
        RStorage.prototype.isLayoutBlock = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isLayoutBlock");
          
              return this.__PROXY__.isLayoutBlock(...args);
            
        };
    
        // function 
        RStorage.prototype.setObjectId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setObjectId");
          
              return this.__PROXY__.setObjectId(...args);
            
        };
    
        // function 
        RStorage.prototype.setObjectHandle = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setObjectHandle");
          
              return this.__PROXY__.setObjectHandle(...args);
            
        };
    
        // function 
        RStorage.prototype.setEntityParentId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setEntityParentId");
          
              return this.__PROXY__.setEntityParentId(...args);
            
        };
    
        // function 
        RStorage.prototype.setUndoStatus = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setUndoStatus");
          
              return this.__PROXY__.setUndoStatus(...args);
            
        };
    
        // function 
        RStorage.prototype.hasSelection = function(...args) 
          
        {
          //print("JS: RStorage.prototype.hasSelection");
          
              return this.__PROXY__.hasSelection(...args);
            
        };
    
        // function 
        RStorage.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
    
        // function 
        RStorage.prototype.getSelectionBox = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getSelectionBox");
          
              return this.__PROXY__.getSelectionBox(...args);
            
        };
    
        // function 
        RStorage.prototype.getEntitiesBox = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getEntitiesBox");
          
              return this.__PROXY__.getEntitiesBox(...args);
            
        };
    
        // function 
        RStorage.prototype.removeObject = function(...args) 
          
        {
          //print("JS: RStorage.prototype.removeObject");
          
              return this.__PROXY__.removeObject(...args);
            
        };
    
        // function 
        RStorage.prototype.saveObject = function(...args) 
          
        {
          //print("JS: RStorage.prototype.saveObject");
          
              return this.__PROXY__.saveObject(...args);
            
        };
    
        // function 
        RStorage.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RStorage.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RStorage.prototype.getLastTransactionId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLastTransactionId");
          
              return this.__PROXY__.getLastTransactionId(...args);
            
        };
    
        // function 
        RStorage.prototype.setLastTransactionId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setLastTransactionId");
          
              return this.__PROXY__.setLastTransactionId(...args);
            
        };
    
        // function 
        RStorage.prototype.startTransactionGroup = function(...args) 
          
        {
          //print("JS: RStorage.prototype.startTransactionGroup");
          
              return this.__PROXY__.startTransactionGroup(...args);
            
        };
    
        // function 
        RStorage.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RStorage.prototype.saveTransaction = function(...args) 
          
        {
          //print("JS: RStorage.prototype.saveTransaction");
          
              return this.__PROXY__.saveTransaction(...args);
            
        };
    
        // function 
        RStorage.prototype.deleteTransactionsFrom = function(...args) 
          
        {
          //print("JS: RStorage.prototype.deleteTransactionsFrom");
          
              return this.__PROXY__.deleteTransactionsFrom(...args);
            
        };
    
        // function 
        RStorage.prototype.resetTransactionStack = function(...args) 
          
        {
          //print("JS: RStorage.prototype.resetTransactionStack");
          
              return this.__PROXY__.resetTransactionStack(...args);
            
        };
    
        // function 
        RStorage.prototype.getTransaction = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getTransaction");
          
              return this.__PROXY__.getTransaction(...args);
            
        };
    
        // function 
        RStorage.prototype.toggleUndoStatus = function(...args) 
          
        {
          //print("JS: RStorage.prototype.toggleUndoStatus");
          
              return this.__PROXY__.toggleUndoStatus(...args);
            
        };
    
        // function 
        RStorage.prototype.getMaxTransactionId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMaxTransactionId");
          
              return this.__PROXY__.getMaxTransactionId(...args);
            
        };
    
        // function 
        RStorage.prototype.getMaxLineweight = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMaxLineweight");
          
              return this.__PROXY__.getMaxLineweight(...args);
            
        };
    
        // function 
        RStorage.prototype.getNewObjectId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getNewObjectId");
          
              return this.__PROXY__.getNewObjectId(...args);
            
        };
    
        // function 
        RStorage.prototype.getMaxObjectId = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMaxObjectId");
          
              return this.__PROXY__.getMaxObjectId(...args);
            
        };
    
        // function 
        RStorage.prototype.getNewObjectHandle = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getNewObjectHandle");
          
              return this.__PROXY__.getNewObjectHandle(...args);
            
        };
    
        // function 
        RStorage.prototype.getMaxObjectHandle = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMaxObjectHandle");
          
              return this.__PROXY__.getMaxObjectHandle(...args);
            
        };
    
        // function 
        RStorage.prototype.setMaxDrawOrder = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setMaxDrawOrder");
          
              return this.__PROXY__.setMaxDrawOrder(...args);
            
        };
    
        // function 
        RStorage.prototype.getMaxDrawOrder = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMaxDrawOrder");
          
              return this.__PROXY__.getMaxDrawOrder(...args);
            
        };
    
        // function 
        RStorage.prototype.getMinDrawOrder = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getMinDrawOrder");
          
              return this.__PROXY__.getMinDrawOrder(...args);
            
        };
    
        // function 
        RStorage.prototype.isInBackStorage = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isInBackStorage");
          
              return this.__PROXY__.isInBackStorage(...args);
            
        };
    
        // function 
        RStorage.prototype.getKnownVariableName = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getKnownVariableName");
          
              return this.__PROXY__.getKnownVariableName(...args);
            
        };
    
        // function 
        RStorage.prototype.setModified = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        RStorage.prototype.isModified = function(...args) 
          
        {
          //print("JS: RStorage.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        RStorage.prototype.getLastModifiedDateTime = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLastModifiedDateTime");
          
              return this.__PROXY__.getLastModifiedDateTime(...args);
            
        };
    
        // function 
        RStorage.prototype.getLastModified = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getLastModified");
          
              return this.__PROXY__.getLastModified(...args);
            
        };
    
        // function 
        RStorage.prototype.addModifiedListener = function(...args) 
          
        {
          //print("JS: RStorage.prototype.addModifiedListener");
          
              return this.__PROXY__.addModifiedListener(...args);
            
        };
    
        // function 
        RStorage.prototype.update = function(...args) 
          
        {
          //print("JS: RStorage.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        RStorage.prototype.setNotifyListeners = function(...args) 
          
        {
          //print("JS: RStorage.prototype.setNotifyListeners");
          
              return this.__PROXY__.setNotifyListeners(...args);
            
        };
    
        // function 
        RStorage.prototype.getNotifyListeners = function(...args) 
          
        {
          //print("JS: RStorage.prototype.getNotifyListeners");
          
              return this.__PROXY__.getNotifyListeners(...args);
            
        };
    

      // static functions:
      

        // static function 
        RStorage.getKnownVariableName = function() 
          
        {
          //print("JS: RStorage.getKnownVariableName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RStorage_WrapperSingletonInstance.getKnownVariableName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RStorage);
  }

  
  else {
    
        print("RStorage.getKnownVariableName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RStorage.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RStorage.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RStorage.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RStorage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RStorage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RStorage.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      