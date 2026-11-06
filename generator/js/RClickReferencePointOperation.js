
      // auto generated
      //var self;

      // class constructor:
      function RClickReferencePointOperation() {
        

        // should be RClickReferencePointOperation_BaseJs.call(this, engine):
        //RClickReferencePointOperation.prototype = new RClickReferencePointOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RClickReferencePointOperation.getIdStatic()))) {

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
            qWarning("RClickReferencePointOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RClickReferencePointOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RClickReferencePointOperation);
  }

  
  else {
    
        print("RClickReferencePointOperation(): wrong number / type of arguments");
      
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

      //RClickReferencePointOperation.prototype = new RClickReferencePointOperation_BaseJs(engine);
      //RClickReferencePointOperation.prototype = new RClickReferencePointOperation_Wrapper(engine);
      RClickReferencePointOperation.prototype = new Object();


      RClickReferencePointOperation.prototype.toString = function() {
          //return "RClickReferencePointOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RClickReferencePointOperation [JS]";
        };
      RClickReferencePointOperation.getObjectType = function() {
        return RJSType_RClickReferencePointOperation.getIdStatic();
      };

      RClickReferencePointOperation.prototype.getObjectType = function() {
        return RJSType_RClickReferencePointOperation.getIdStatic();
      };

      RClickReferencePointOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RClickReferencePointOperation.getIdStatic()) {
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
        RClickReferencePointOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RClickReferencePointOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RClickReferencePointOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        

      // static functions:
      RClickReferencePointOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RClickReferencePointOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RClickReferencePointOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RClickReferencePointOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RClickReferencePointOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RClickReferencePointOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      