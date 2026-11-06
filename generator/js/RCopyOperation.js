
      // auto generated
      //var self;

      // class constructor:
      function RCopyOperation() {
        

        // should be RCopyOperation_BaseJs.call(this, engine):
        //RCopyOperation.prototype = new RCopyOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCopyOperation.getIdStatic()))) {

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
            qWarning("RCopyOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCopyOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCopyOperation);
  }

  
  else {
    
        print("RCopyOperation(): wrong number / type of arguments");
      
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

      //RCopyOperation.prototype = new RCopyOperation_BaseJs(engine);
      //RCopyOperation.prototype = new RCopyOperation_Wrapper(engine);
      RCopyOperation.prototype = new Object();


      RCopyOperation.prototype.toString = function() {
          //return "RCopyOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCopyOperation [JS]";
        };
      RCopyOperation.getObjectType = function() {
        return RJSType_RCopyOperation.getIdStatic();
      };

      RCopyOperation.prototype.getObjectType = function() {
        return RJSType_RCopyOperation.getIdStatic();
      };

      RCopyOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCopyOperation.getIdStatic()) {
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
        RCopyOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copy = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyEntity = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyEntity");
          
              return this.__PROXY__.copyEntity(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyEntityBlock = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyEntityBlock");
          
              return this.__PROXY__.copyEntityBlock(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyBlock = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyBlock");
          
              return this.__PROXY__.copyBlock(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyEntityLayer = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyEntityLayer");
          
              return this.__PROXY__.copyEntityLayer(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyLayer = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyLayer");
          
              return this.__PROXY__.copyLayer(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyEntityLinetype = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyEntityLinetype");
          
              return this.__PROXY__.copyEntityLinetype(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.copyLinetype = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.copyLinetype");
          
              return this.__PROXY__.copyLinetype(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setCopyEmptyBlocks = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setCopyEmptyBlocks");
          
              return this.__PROXY__.setCopyEmptyBlocks(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setCopyAllLayers = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setCopyAllLayers");
          
              return this.__PROXY__.setCopyAllLayers(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setKeepSelection = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setKeepSelection");
          
              return this.__PROXY__.setKeepSelection(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setBlockOwnership = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setBlockOwnership");
          
              return this.__PROXY__.setBlockOwnership(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setCustomEntityType = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setCustomEntityType");
          
              return this.__PROXY__.setCustomEntityType(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        RCopyOperation.prototype.setClear = function(...args) 
          
        {
          //print("JS: RCopyOperation.prototype.setClear");
          
              return this.__PROXY__.setClear(...args);
            
        };
    

      // static functions:
      RCopyOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RCopyOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RCopyOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCopyOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCopyOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCopyOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      