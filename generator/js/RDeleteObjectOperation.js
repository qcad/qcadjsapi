
      // auto generated
      //var self;

      // class constructor:
      function RDeleteObjectOperation() {
        

        // should be RDeleteObjectOperation_BaseJs.call(this, engine):
        //RDeleteObjectOperation.prototype = new RDeleteObjectOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteObjectOperation.getIdStatic()))) {

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
            qWarning("RDeleteObjectOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RDeleteObjectOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RDeleteObjectOperation);
  }

  
  else {
    
        print("RDeleteObjectOperation(): wrong number / type of arguments");
      
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

      //RDeleteObjectOperation.prototype = new RDeleteObjectOperation_BaseJs(engine);
      //RDeleteObjectOperation.prototype = new RDeleteObjectOperation_Wrapper(engine);
      RDeleteObjectOperation.prototype = new Object();


      RDeleteObjectOperation.prototype.toString = function() {
          //return "RDeleteObjectOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteObjectOperation [JS]";
        };
      RDeleteObjectOperation.getObjectType = function() {
        return RJSType_RDeleteObjectOperation.getIdStatic();
      };

      RDeleteObjectOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteObjectOperation.getIdStatic();
      };

      RDeleteObjectOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteObjectOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDeleteObjectsOperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDeleteObjectOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RDeleteObjectOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RDeleteObjectOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    

      // static functions:
      RDeleteObjectOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RDeleteObjectOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RDeleteObjectOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDeleteObjectOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteObjectOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDeleteObjectOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      