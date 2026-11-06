
      // auto generated
      //var self;

      // class constructor:
      function RDeleteSelectionOperation() {
        

        // should be RDeleteSelectionOperation_BaseJs.call(this, engine):
        //RDeleteSelectionOperation.prototype = new RDeleteSelectionOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteSelectionOperation.getIdStatic()))) {

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
            qWarning("RDeleteSelectionOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDeleteSelectionOperation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDeleteSelectionOperation);
  }

  
  else {
    
        print("RDeleteSelectionOperation(): wrong number / type of arguments");
      
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

      //RDeleteSelectionOperation.prototype = new RDeleteSelectionOperation_BaseJs(engine);
      //RDeleteSelectionOperation.prototype = new RDeleteSelectionOperation_Wrapper(engine);
      RDeleteSelectionOperation.prototype = new Object();


      RDeleteSelectionOperation.prototype.toString = function() {
          //return "RDeleteSelectionOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteSelectionOperation [JS]";
        };
      RDeleteSelectionOperation.getObjectType = function() {
        return RJSType_RDeleteSelectionOperation.getIdStatic();
      };

      RDeleteSelectionOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteSelectionOperation.getIdStatic();
      };

      RDeleteSelectionOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteSelectionOperation.getIdStatic()) {
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
        RDeleteSelectionOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copy = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyEntity = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyEntity");
          
              return this.__PROXY__.copyEntity(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyEntityBlock = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyEntityBlock");
          
              return this.__PROXY__.copyEntityBlock(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyBlock = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyBlock");
          
              return this.__PROXY__.copyBlock(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyEntityLayer = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyEntityLayer");
          
              return this.__PROXY__.copyEntityLayer(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyLayer = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyLayer");
          
              return this.__PROXY__.copyLayer(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyEntityLinetype = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyEntityLinetype");
          
              return this.__PROXY__.copyEntityLinetype(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.copyLinetype = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.copyLinetype");
          
              return this.__PROXY__.copyLinetype(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setCopyEmptyBlocks = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setCopyEmptyBlocks");
          
              return this.__PROXY__.setCopyEmptyBlocks(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setCopyAllLayers = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setCopyAllLayers");
          
              return this.__PROXY__.setCopyAllLayers(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setKeepSelection = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setKeepSelection");
          
              return this.__PROXY__.setKeepSelection(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setBlockOwnership = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setBlockOwnership");
          
              return this.__PROXY__.setBlockOwnership(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.setCustomEntityType = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.setCustomEntityType");
          
              return this.__PROXY__.setCustomEntityType(...args);
            
        };
        
        // function 
        RDeleteSelectionOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RDeleteSelectionOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        

      // static functions:
      RDeleteSelectionOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RDeleteSelectionOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RDeleteSelectionOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDeleteSelectionOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteSelectionOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDeleteSelectionOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      