
      // auto generated
      //var self;

      // class constructor:
      function RPasteOperation() {
        

        // should be RPasteOperation_BaseJs.call(this, engine):
        //RPasteOperation.prototype = new RPasteOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPasteOperation.getIdStatic()))) {

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
            qWarning("RPasteOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPasteOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RPasteOperation);
  }

  
  else {
    
        print("RPasteOperation(): wrong number / type of arguments");
      
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

      //RPasteOperation.prototype = new RPasteOperation_BaseJs(engine);
      //RPasteOperation.prototype = new RPasteOperation_Wrapper(engine);
      RPasteOperation.prototype = new Object();


      RPasteOperation.prototype.toString = function() {
          //return "RPasteOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPasteOperation [JS]";
        };
      RPasteOperation.getObjectType = function() {
        return RJSType_RPasteOperation.getIdStatic();
      };

      RPasteOperation.prototype.getObjectType = function() {
        return RJSType_RPasteOperation.getIdStatic();
      };

      RPasteOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPasteOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RClipboardOperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPasteOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copy = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyEntity = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyEntity");
          
              return this.__PROXY__.copyEntity(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyEntityBlock = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyEntityBlock");
          
              return this.__PROXY__.copyEntityBlock(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyBlock = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyBlock");
          
              return this.__PROXY__.copyBlock(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyEntityLayer = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyEntityLayer");
          
              return this.__PROXY__.copyEntityLayer(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyLayer = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyLayer");
          
              return this.__PROXY__.copyLayer(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyEntityLinetype = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyEntityLinetype");
          
              return this.__PROXY__.copyEntityLinetype(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.copyLinetype = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.copyLinetype");
          
              return this.__PROXY__.copyLinetype(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setCopyEmptyBlocks = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setCopyEmptyBlocks");
          
              return this.__PROXY__.setCopyEmptyBlocks(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setCopyAllLayers = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setCopyAllLayers");
          
              return this.__PROXY__.setCopyAllLayers(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setKeepSelection = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setKeepSelection");
          
              return this.__PROXY__.setKeepSelection(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setBlockOwnership = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setBlockOwnership");
          
              return this.__PROXY__.setBlockOwnership(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setCustomEntityType = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setCustomEntityType");
          
              return this.__PROXY__.setCustomEntityType(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setOffsets = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setOffsets");
          
              return this.__PROXY__.setOffsets(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setRotations = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setRotations");
          
              return this.__PROXY__.setRotations(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setCenters = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setCenters");
          
              return this.__PROXY__.setCenters(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setOffset = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getOffset = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getOffset");
          
              return this.__PROXY__.getOffset(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setScale = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setScale");
          
              return this.__PROXY__.setScale(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getScale = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getScale");
          
              return this.__PROXY__.getScale(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setRotation");
          
              return this.__PROXY__.setRotation(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getRotation");
          
              return this.__PROXY__.getRotation(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setCenter");
          
              return this.__PROXY__.setCenter(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getCenter");
          
              return this.__PROXY__.getCenter(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setFlipHorizontal = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setFlipHorizontal");
          
              return this.__PROXY__.setFlipHorizontal(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getFlipHorizontal = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getFlipHorizontal");
          
              return this.__PROXY__.getFlipHorizontal(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setFlipVertical = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setFlipVertical");
          
              return this.__PROXY__.setFlipVertical(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getFlipVertical = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getFlipVertical");
          
              return this.__PROXY__.getFlipVertical(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setToCurrentLayer = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setToCurrentLayer");
          
              return this.__PROXY__.setToCurrentLayer(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getToCurrentLayer = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getToCurrentLayer");
          
              return this.__PROXY__.getToCurrentLayer(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setOverwriteLayers = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setOverwriteLayers");
          
              return this.__PROXY__.setOverwriteLayers(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getOverwriteLayers = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getOverwriteLayers");
          
              return this.__PROXY__.getOverwriteLayers(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setOverwriteBlocks = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setOverwriteBlocks");
          
              return this.__PROXY__.setOverwriteBlocks(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getOverwriteBlocks = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getOverwriteBlocks");
          
              return this.__PROXY__.getOverwriteBlocks(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setBlockName = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setBlockName");
          
              return this.__PROXY__.setBlockName(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getBlockName");
          
              return this.__PROXY__.getBlockName(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setLayerName");
          
              return this.__PROXY__.setLayerName(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getLayerName");
          
              return this.__PROXY__.getLayerName(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.setBlockProperty = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.setBlockProperty");
          
              return this.__PROXY__.setBlockProperty(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        
        // function 
        RPasteOperation.prototype.getBoundary = function(...args) 
          
        {
          //print("JS: RPasteOperation.prototype.getBoundary");
          
              return this.__PROXY__.getBoundary(...args);
            
        };
        

      // static functions:
      RPasteOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPasteOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPasteOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPasteOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPasteOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPasteOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      