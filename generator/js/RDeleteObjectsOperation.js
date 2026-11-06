
      // auto generated
      //var self;

      // class constructor:
      function RDeleteObjectsOperation() {
        

        // should be RDeleteObjectsOperation_BaseJs.call(this, engine):
        //RDeleteObjectsOperation.prototype = new RDeleteObjectsOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteObjectsOperation.getIdStatic()))) {

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
            qWarning("RDeleteObjectsOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RDeleteObjectsOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RDeleteObjectsOperation);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDeleteObjectsOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RDeleteObjectsOperation);
  }

  
  else {
    
        print("RDeleteObjectsOperation(): wrong number / type of arguments");
      
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

      //RDeleteObjectsOperation.prototype = new RDeleteObjectsOperation_BaseJs(engine);
      //RDeleteObjectsOperation.prototype = new RDeleteObjectsOperation_Wrapper(engine);
      RDeleteObjectsOperation.prototype = new Object();


      RDeleteObjectsOperation.prototype.toString = function() {
          //return "RDeleteObjectsOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteObjectsOperation [JS]";
        };
      RDeleteObjectsOperation.getObjectType = function() {
        return RJSType_RDeleteObjectsOperation.getIdStatic();
      };

      RDeleteObjectsOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteObjectsOperation.getIdStatic();
      };

      RDeleteObjectsOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteObjectsOperation.getIdStatic()) {
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
        RDeleteObjectsOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
        
        // function 
        RDeleteObjectsOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RDeleteObjectsOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        

      // static functions:
      RDeleteObjectsOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RDeleteObjectsOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RDeleteObjectsOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDeleteObjectsOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteObjectsOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDeleteObjectsOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      