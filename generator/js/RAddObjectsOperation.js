
      // auto generated
      //var self;

      // class constructor:
      function RAddObjectsOperation() {
        

        // should be RAddObjectsOperation_BaseJs.call(this, engine):
        //RAddObjectsOperation.prototype = new RAddObjectsOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAddObjectsOperation.getIdStatic()))) {

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
            qWarning("RAddObjectsOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RAddObjectsOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RAddObjectsOperation);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RAddObjectsOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RAddObjectsOperation);
  }

  
  else {
    
        print("RAddObjectsOperation(): wrong number / type of arguments");
      
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

      //RAddObjectsOperation.prototype = new RAddObjectsOperation_BaseJs(engine);
      //RAddObjectsOperation.prototype = new RAddObjectsOperation_Wrapper(engine);
      RAddObjectsOperation.prototype = new Object();


      RAddObjectsOperation.prototype.toString = function() {
          //return "RAddObjectsOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAddObjectsOperation [JS]";
        };
      RAddObjectsOperation.getObjectType = function() {
        return RJSType_RAddObjectsOperation.getIdStatic();
      };

      RAddObjectsOperation.prototype.getObjectType = function() {
        return RJSType_RAddObjectsOperation.getIdStatic();
      };

      RAddObjectsOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAddObjectsOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Flag
RAddObjectsOperation.NoFlags = RAddObjectsOperation_Wrapper.NoFlags;
RAddObjectsOperation.UseAttributes = RAddObjectsOperation_Wrapper.UseAttributes;
RAddObjectsOperation.ForceNew = RAddObjectsOperation_Wrapper.ForceNew;
RAddObjectsOperation.GeometryOnly = RAddObjectsOperation_Wrapper.GeometryOnly;
RAddObjectsOperation.Delete = RAddObjectsOperation_Wrapper.Delete;


      // functions:
      
        // function 
        RAddObjectsOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.replaceObject = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.replaceObject");
          
              return this.__PROXY__.replaceObject(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.getObject = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getObject");
          
              return this.__PROXY__.getObject(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.endCycle = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.endCycle");
          
              return this.__PROXY__.endCycle(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.addObject = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.addObject");
          
              return this.__PROXY__.addObject(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.getPreviewCounter = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.getPreviewCounter");
          
              return this.__PROXY__.getPreviewCounter(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.setLimitPreview = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.setLimitPreview");
          
              return this.__PROXY__.setLimitPreview(...args);
            
        };
        
        // function 
        RAddObjectsOperation.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RAddObjectsOperation.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        

      // static functions:
      RAddObjectsOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RAddObjectsOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RAddObjectsOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAddObjectsOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAddObjectsOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAddObjectsOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      