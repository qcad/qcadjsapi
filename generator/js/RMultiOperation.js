
      // auto generated
      //var self;

      // class constructor:
      function RMultiOperation() {
        

        // should be RMultiOperation_BaseJs.call(this, engine):
        //RMultiOperation.prototype = new RMultiOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMultiOperation.getIdStatic()))) {

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
            qWarning("RMultiOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMultiOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RMultiOperation);
  }

  
  else {
    
        print("RMultiOperation(): wrong number / type of arguments");
      
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

      //RMultiOperation.prototype = new RMultiOperation_BaseJs(engine);
      //RMultiOperation.prototype = new RMultiOperation_Wrapper(engine);
      RMultiOperation.prototype = new Object();


      RMultiOperation.prototype.toString = function() {
          //return "RMultiOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMultiOperation [JS]";
        };
      RMultiOperation.getObjectType = function() {
        return RJSType_RMultiOperation.getIdStatic();
      };

      RMultiOperation.prototype.getObjectType = function() {
        return RJSType_RMultiOperation.getIdStatic();
      };

      RMultiOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMultiOperation.getIdStatic()) {
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
        RMultiOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.addOperation = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.addOperation");
          
              return this.__PROXY__.addOperation(...args);
            
        };
    
        // function 
        RMultiOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RMultiOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    

      // static functions:
      RMultiOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMultiOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMultiOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMultiOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMultiOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMultiOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      