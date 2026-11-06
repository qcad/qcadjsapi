
      // auto generated
      //var self;

      // class constructor:
      function RDeleteAllEntitiesOperation() {
        

        // should be RDeleteAllEntitiesOperation_BaseJs.call(this, engine):
        //RDeleteAllEntitiesOperation.prototype = new RDeleteAllEntitiesOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteAllEntitiesOperation.getIdStatic()))) {

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
            qWarning("RDeleteAllEntitiesOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDeleteAllEntitiesOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RDeleteAllEntitiesOperation);
  }

  
  else {
    
        print("RDeleteAllEntitiesOperation(): wrong number / type of arguments");
      
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

      //RDeleteAllEntitiesOperation.prototype = new RDeleteAllEntitiesOperation_BaseJs(engine);
      //RDeleteAllEntitiesOperation.prototype = new RDeleteAllEntitiesOperation_Wrapper(engine);
      RDeleteAllEntitiesOperation.prototype = new Object();


      RDeleteAllEntitiesOperation.prototype.toString = function() {
          //return "RDeleteAllEntitiesOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteAllEntitiesOperation [JS]";
        };
      RDeleteAllEntitiesOperation.getObjectType = function() {
        return RJSType_RDeleteAllEntitiesOperation.getIdStatic();
      };

      RDeleteAllEntitiesOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteAllEntitiesOperation.getIdStatic();
      };

      RDeleteAllEntitiesOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteAllEntitiesOperation.getIdStatic()) {
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
        RDeleteAllEntitiesOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RDeleteAllEntitiesOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RDeleteAllEntitiesOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    

      // static functions:
      RDeleteAllEntitiesOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RDeleteAllEntitiesOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RDeleteAllEntitiesOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDeleteAllEntitiesOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteAllEntitiesOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDeleteAllEntitiesOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      