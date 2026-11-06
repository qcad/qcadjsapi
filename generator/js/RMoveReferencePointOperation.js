
      // auto generated
      //var self;

      // class constructor:
      function RMoveReferencePointOperation() {
        

        // should be RMoveReferencePointOperation_BaseJs.call(this, engine):
        //RMoveReferencePointOperation.prototype = new RMoveReferencePointOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMoveReferencePointOperation.getIdStatic()))) {

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
            qWarning("RMoveReferencePointOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RMoveReferencePointOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMoveReferencePointOperation);
  }

  
  else {
    
        print("RMoveReferencePointOperation(): wrong number / type of arguments");
      
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

      //RMoveReferencePointOperation.prototype = new RMoveReferencePointOperation_BaseJs(engine);
      //RMoveReferencePointOperation.prototype = new RMoveReferencePointOperation_Wrapper(engine);
      RMoveReferencePointOperation.prototype = new Object();


      RMoveReferencePointOperation.prototype.toString = function() {
          //return "RMoveReferencePointOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMoveReferencePointOperation [JS]";
        };
      RMoveReferencePointOperation.getObjectType = function() {
        return RJSType_RMoveReferencePointOperation.getIdStatic();
      };

      RMoveReferencePointOperation.prototype.getObjectType = function() {
        return RJSType_RMoveReferencePointOperation.getIdStatic();
      };

      RMoveReferencePointOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMoveReferencePointOperation.getIdStatic()) {
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
        RMoveReferencePointOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        RMoveReferencePointOperation.prototype.setGraphicsScene = function(...args) 
          
        {
          //print("JS: RMoveReferencePointOperation.prototype.setGraphicsScene");
          
              return this.__PROXY__.setGraphicsScene(...args);
            
        };
    

      // static functions:
      RMoveReferencePointOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RMoveReferencePointOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RMoveReferencePointOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMoveReferencePointOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMoveReferencePointOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RMoveReferencePointOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      