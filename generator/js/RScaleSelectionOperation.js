
      // auto generated
      //var self;

      // class constructor:
      function RScaleSelectionOperation() {
        

        // should be RScaleSelectionOperation_BaseJs.call(this, engine):
        //RScaleSelectionOperation.prototype = new RScaleSelectionOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RScaleSelectionOperation.getIdStatic()))) {

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
            qWarning("RScaleSelectionOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RScaleSelectionOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RScaleSelectionOperation);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RScaleSelectionOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RScaleSelectionOperation);
  }

  
  else {
    
        print("RScaleSelectionOperation(): wrong number / type of arguments");
      
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

      //RScaleSelectionOperation.prototype = new RScaleSelectionOperation_BaseJs(engine);
      //RScaleSelectionOperation.prototype = new RScaleSelectionOperation_Wrapper(engine);
      RScaleSelectionOperation.prototype = new Object();


      RScaleSelectionOperation.prototype.toString = function() {
          //return "RScaleSelectionOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RScaleSelectionOperation [JS]";
        };
      RScaleSelectionOperation.getObjectType = function() {
        return RJSType_RScaleSelectionOperation.getIdStatic();
      };

      RScaleSelectionOperation.prototype.getObjectType = function() {
        return RJSType_RScaleSelectionOperation.getIdStatic();
      };

      RScaleSelectionOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RScaleSelectionOperation.getIdStatic()) {
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
        RScaleSelectionOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RScaleSelectionOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RScaleSelectionOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        

      // static functions:
      RScaleSelectionOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RScaleSelectionOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RScaleSelectionOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RScaleSelectionOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RScaleSelectionOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RScaleSelectionOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      