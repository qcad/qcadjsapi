
      // auto generated
      //var self;

      // class constructor:
      function ROperation() {
        

        // should be ROperation_BaseJs.call(this, engine):
        //ROperation.prototype = new ROperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_ROperation.getIdStatic()))) {

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
            qWarning("ROperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("ROperation.js: No constructor found for class ROperation");
            
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

      //ROperation.prototype = new ROperation_BaseJs(engine);
      //ROperation.prototype = new ROperation_Wrapper(engine);
      ROperation.prototype = new Object();


      ROperation.prototype.toString = function() {
          //return "ROperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "ROperation [JS]";
        };
      ROperation.getObjectType = function() {
        return RJSType_ROperation.getIdStatic();
      };

      ROperation.prototype.getObjectType = function() {
        return RJSType_ROperation.getIdStatic();
      };

      ROperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_ROperation.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        ROperation.prototype.apply = function(...args) 
          
        {
          //print("JS: ROperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        ROperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: ROperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        ROperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        ROperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        ROperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        ROperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        ROperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        ROperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        ROperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: ROperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        ROperation.prototype.setText = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        ROperation.prototype.getText = function(...args) 
          
        {
          //print("JS: ROperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        ROperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: ROperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        ROperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: ROperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        ROperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: ROperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    

      // static functions:
      ROperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      ROperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      ROperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //ROperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //ROperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      ROperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      