
      // auto generated
      //var self;

      // class constructor:
      function RMoveSelectionOperation() {
        

        // should be RMoveSelectionOperation_BaseJs.call(this, engine):
        //RMoveSelectionOperation.prototype = new RMoveSelectionOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMoveSelectionOperation.getIdStatic()))) {

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
            qWarning("RMoveSelectionOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RMoveSelectionOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RMoveSelectionOperation);
  }

  
  else {
    
        print("RMoveSelectionOperation(): wrong number / type of arguments");
      
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

      //RMoveSelectionOperation.prototype = new RMoveSelectionOperation_BaseJs(engine);
      //RMoveSelectionOperation.prototype = new RMoveSelectionOperation_Wrapper(engine);
      RMoveSelectionOperation.prototype = new Object();


      RMoveSelectionOperation.prototype.toString = function() {
          //return "RMoveSelectionOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMoveSelectionOperation [JS]";
        };
      RMoveSelectionOperation.getObjectType = function() {
        return RJSType_RMoveSelectionOperation.getIdStatic();
      };

      RMoveSelectionOperation.prototype.getObjectType = function() {
        return RJSType_RMoveSelectionOperation.getIdStatic();
      };

      RMoveSelectionOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMoveSelectionOperation.getIdStatic()) {
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
        RMoveSelectionOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RMoveSelectionOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RMoveSelectionOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    

      // static functions:
      RMoveSelectionOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMoveSelectionOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMoveSelectionOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMoveSelectionOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMoveSelectionOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMoveSelectionOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      