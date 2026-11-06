
      // auto generated
      //var self;

      // class constructor:
      function RModifyObjectsOperation() {
        

        // should be RModifyObjectsOperation_BaseJs.call(this, engine):
        //RModifyObjectsOperation.prototype = new RModifyObjectsOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RModifyObjectsOperation.getIdStatic()))) {

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
            qWarning("RModifyObjectsOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RModifyObjectsOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RModifyObjectsOperation);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RModifyObjectsOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RModifyObjectsOperation);
  }

  
  else {
    
        print("RModifyObjectsOperation(): wrong number / type of arguments");
      
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

      //RModifyObjectsOperation.prototype = new RModifyObjectsOperation_BaseJs(engine);
      //RModifyObjectsOperation.prototype = new RModifyObjectsOperation_Wrapper(engine);
      RModifyObjectsOperation.prototype = new Object();


      RModifyObjectsOperation.prototype.toString = function() {
          //return "RModifyObjectsOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RModifyObjectsOperation [JS]";
        };
      RModifyObjectsOperation.getObjectType = function() {
        return RJSType_RModifyObjectsOperation.getIdStatic();
      };

      RModifyObjectsOperation.prototype.getObjectType = function() {
        return RJSType_RModifyObjectsOperation.getIdStatic();
      };

      RModifyObjectsOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RModifyObjectsOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RAddObjectsOperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Flag
RModifyObjectsOperation.NoFlags = RModifyObjectsOperation_Wrapper.NoFlags;
RModifyObjectsOperation.UseAttributes = RModifyObjectsOperation_Wrapper.UseAttributes;
RModifyObjectsOperation.ForceNew = RModifyObjectsOperation_Wrapper.ForceNew;
RModifyObjectsOperation.GeometryOnly = RModifyObjectsOperation_Wrapper.GeometryOnly;
RModifyObjectsOperation.Delete = RModifyObjectsOperation_Wrapper.Delete;


      // functions:
      
        // function 
        RModifyObjectsOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.replaceObject = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.replaceObject");
          
              return this.__PROXY__.replaceObject(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.getObject = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getObject");
          
              return this.__PROXY__.getObject(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.endCycle = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.endCycle");
          
              return this.__PROXY__.endCycle(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.addObject = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.addObject");
          
              return this.__PROXY__.addObject(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.getPreviewCounter = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.getPreviewCounter");
          
              return this.__PROXY__.getPreviewCounter(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.setLimitPreview = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.setLimitPreview");
          
              return this.__PROXY__.setLimitPreview(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        RModifyObjectsOperation.prototype.transformSelection = function(...args) 
          
        {
          //print("JS: RModifyObjectsOperation.prototype.transformSelection");
          
              return this.__PROXY__.transformSelection(...args);
            
        };
    

      // static functions:
      RModifyObjectsOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RModifyObjectsOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RModifyObjectsOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RModifyObjectsOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RModifyObjectsOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RModifyObjectsOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      