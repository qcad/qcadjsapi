
      // auto generated
      //var self;

      // class constructor:
      function RModifyObjectOperation() {
        

        // should be RModifyObjectOperation_BaseJs.call(this, engine):
        //RModifyObjectOperation.prototype = new RModifyObjectOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RModifyObjectOperation.getIdStatic()))) {

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
            qWarning("RModifyObjectOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RModifyObjectOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RModifyObjectOperation);
  }

  
  else {
    
        print("RModifyObjectOperation(): wrong number / type of arguments");
      
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

      //RModifyObjectOperation.prototype = new RModifyObjectOperation_BaseJs(engine);
      //RModifyObjectOperation.prototype = new RModifyObjectOperation_Wrapper(engine);
      RModifyObjectOperation.prototype = new Object();


      RModifyObjectOperation.prototype.toString = function() {
          //return "RModifyObjectOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RModifyObjectOperation [JS]";
        };
      RModifyObjectOperation.getObjectType = function() {
        return RJSType_RModifyObjectOperation.getIdStatic();
      };

      RModifyObjectOperation.prototype.getObjectType = function() {
        return RJSType_RModifyObjectOperation.getIdStatic();
      };

      RModifyObjectOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RModifyObjectOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RAddObjectOperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RModifyObjectOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RModifyObjectOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RModifyObjectOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    

      // static functions:
      RModifyObjectOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RModifyObjectOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RModifyObjectOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RModifyObjectOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RModifyObjectOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RModifyObjectOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      