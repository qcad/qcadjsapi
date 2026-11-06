
      // auto generated
      //var self;

      // class constructor:
      function RClipboardOperation() {
        

        // should be RClipboardOperation_BaseJs.call(this, engine):
        //RClipboardOperation.prototype = new RClipboardOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RClipboardOperation.getIdStatic()))) {

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
            qWarning("RClipboardOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RClipboardOperation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RClipboardOperation);
  }

  
  else {
    
        print("RClipboardOperation(): wrong number / type of arguments");
      
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

      //RClipboardOperation.prototype = new RClipboardOperation_BaseJs(engine);
      //RClipboardOperation.prototype = new RClipboardOperation_Wrapper(engine);
      RClipboardOperation.prototype = new Object();


      RClipboardOperation.prototype.toString = function() {
          //return "RClipboardOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RClipboardOperation [JS]";
        };
      RClipboardOperation.getObjectType = function() {
        return RJSType_RClipboardOperation.getIdStatic();
      };

      RClipboardOperation.prototype.getObjectType = function() {
        return RJSType_RClipboardOperation.getIdStatic();
      };

      RClipboardOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RClipboardOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RClipboardOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copy = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyEntity = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyEntity");
          
              return this.__PROXY__.copyEntity(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyEntityBlock = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyEntityBlock");
          
              return this.__PROXY__.copyEntityBlock(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyBlock = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyBlock");
          
              return this.__PROXY__.copyBlock(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyEntityLayer = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyEntityLayer");
          
              return this.__PROXY__.copyEntityLayer(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyLayer = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyLayer");
          
              return this.__PROXY__.copyLayer(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyEntityLinetype = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyEntityLinetype");
          
              return this.__PROXY__.copyEntityLinetype(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.copyLinetype = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.copyLinetype");
          
              return this.__PROXY__.copyLinetype(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setCopyEmptyBlocks = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setCopyEmptyBlocks");
          
              return this.__PROXY__.setCopyEmptyBlocks(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setCopyAllLayers = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setCopyAllLayers");
          
              return this.__PROXY__.setCopyAllLayers(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setKeepSelection = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setKeepSelection");
          
              return this.__PROXY__.setKeepSelection(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setBlockOwnership = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setBlockOwnership");
          
              return this.__PROXY__.setBlockOwnership(...args);
            
        };
        
        // function 
        RClipboardOperation.prototype.setCustomEntityType = function(...args) 
          
        {
          //print("JS: RClipboardOperation.prototype.setCustomEntityType");
          
              return this.__PROXY__.setCustomEntityType(...args);
            
        };
        

      // static functions:
      RClipboardOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RClipboardOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RClipboardOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RClipboardOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RClipboardOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RClipboardOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      