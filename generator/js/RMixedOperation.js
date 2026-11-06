
      // auto generated
      //var self;

      // class constructor:
      function RMixedOperation() {
        

        // should be RMixedOperation_BaseJs.call(this, engine):
        //RMixedOperation.prototype = new RMixedOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMixedOperation.getIdStatic()))) {

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
            qWarning("RMixedOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMixedOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RMixedOperation);
  }

  
  else {
    
        print("RMixedOperation(): wrong number / type of arguments");
      
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

      //RMixedOperation.prototype = new RMixedOperation_BaseJs(engine);
      //RMixedOperation.prototype = new RMixedOperation_Wrapper(engine);
      RMixedOperation.prototype = new Object();


      RMixedOperation.prototype.toString = function() {
          //return "RMixedOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMixedOperation [JS]";
        };
      RMixedOperation.getObjectType = function() {
        return RJSType_RMixedOperation.getIdStatic();
      };

      RMixedOperation.prototype.getObjectType = function() {
        return RJSType_RMixedOperation.getIdStatic();
      };

      RMixedOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMixedOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Mode
RMixedOperation.NoMode = RMixedOperation_Wrapper.NoMode;
RMixedOperation.UseCurrentAttributes = RMixedOperation_Wrapper.UseCurrentAttributes;
RMixedOperation.Delete = RMixedOperation_Wrapper.Delete;
RMixedOperation.ForceNew = RMixedOperation_Wrapper.ForceNew;
RMixedOperation.EndCycle = RMixedOperation_Wrapper.EndCycle;


      // functions:
      
        // function 
        RMixedOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.addObject = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.addObject");
          
              return this.__PROXY__.addObject(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.endCycle = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.endCycle");
          
              return this.__PROXY__.endCycle(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.setMode = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.setMode");
          
              return this.__PROXY__.setMode(...args);
            
        };
    
        // function 
        RMixedOperation.prototype.getMode = function(...args) 
          
        {
          //print("JS: RMixedOperation.prototype.getMode");
          
              return this.__PROXY__.getMode(...args);
            
        };
    

      // static functions:
      RMixedOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMixedOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMixedOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMixedOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMixedOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMixedOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      