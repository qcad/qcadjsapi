
      // auto generated
      //var self;

      // class constructor:
      function RAddObjectOperation() {
        

        // should be RAddObjectOperation_BaseJs.call(this, engine):
        //RAddObjectOperation.prototype = new RAddObjectOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAddObjectOperation.getIdStatic()))) {

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
            qWarning("RAddObjectOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RAddObjectOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectOperation);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RAddObjectOperation_Wrapper(
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

      

        //copyProperties(this, wrapper, RAddObjectOperation);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAddObjectOperation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectOperation);
  }

  
  else {
    
        print("RAddObjectOperation(): wrong number / type of arguments");
      
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

      //RAddObjectOperation.prototype = new RAddObjectOperation_BaseJs(engine);
      //RAddObjectOperation.prototype = new RAddObjectOperation_Wrapper(engine);
      RAddObjectOperation.prototype = new Object();


      RAddObjectOperation.prototype.toString = function() {
          //return "RAddObjectOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAddObjectOperation [JS]";
        };
      RAddObjectOperation.getObjectType = function() {
        return RJSType_RAddObjectOperation.getIdStatic();
      };

      RAddObjectOperation.prototype.getObjectType = function() {
        return RJSType_RAddObjectOperation.getIdStatic();
      };

      RAddObjectOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAddObjectOperation.getIdStatic()) {
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
RAddObjectOperation.NoFlags = RAddObjectOperation_Wrapper.NoFlags;
RAddObjectOperation.UseAttributes = RAddObjectOperation_Wrapper.UseAttributes;
RAddObjectOperation.ForceNew = RAddObjectOperation_Wrapper.ForceNew;
RAddObjectOperation.GeometryOnly = RAddObjectOperation_Wrapper.GeometryOnly;
RAddObjectOperation.Delete = RAddObjectOperation_Wrapper.Delete;


      // functions:
      
        // function 
        RAddObjectOperation.prototype.getEntityTypeFilter = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getEntityTypeFilter");
          
              return this.__PROXY__.getEntityTypeFilter(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setRecordAffectedObjects = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setRecordAffectedObjects");
          
              return this.__PROXY__.setRecordAffectedObjects(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setSpatialIndexDisabled = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setSpatialIndexDisabled");
          
              return this.__PROXY__.setSpatialIndexDisabled(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setAllowInvisible = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setAllowInvisible");
          
              return this.__PROXY__.setAllowInvisible(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setAllowAll = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setAllowAll");
          
              return this.__PROXY__.setAllowAll(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setKeepChildren = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setKeepChildren");
          
              return this.__PROXY__.setKeepChildren(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setTransactionGroup = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setTransactionGroup");
          
              return this.__PROXY__.setTransactionGroup(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.getTransactionGroup = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getTransactionGroup");
          
              return this.__PROXY__.getTransactionGroup(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setText = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.getText = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getText");
          
              return this.__PROXY__.getText(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.getTransactionTypes = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getTransactionTypes");
          
              return this.__PROXY__.getTransactionTypes(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setTransactionType = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setTransactionType");
          
              return this.__PROXY__.setTransactionType(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.getTransactionType = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getTransactionType");
          
              return this.__PROXY__.getTransactionType(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.replaceObject = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.replaceObject");
          
              return this.__PROXY__.replaceObject(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.getObject = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getObject");
          
              return this.__PROXY__.getObject(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.endCycle = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.endCycle");
          
              return this.__PROXY__.endCycle(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.addObject = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.addObject");
          
              return this.__PROXY__.addObject(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.deleteObject = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.deleteObject");
          
              return this.__PROXY__.deleteObject(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.apply = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.apply");
          
              return this.__PROXY__.apply(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.getPreviewCounter = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.getPreviewCounter");
          
              return this.__PROXY__.getPreviewCounter(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.setLimitPreview = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.setLimitPreview");
          
              return this.__PROXY__.setLimitPreview(...args);
            
        };
    
        // function 
        RAddObjectOperation.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RAddObjectOperation.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    

      // static functions:
      RAddObjectOperation.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RAddObjectOperation.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RAddObjectOperation.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAddObjectOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAddObjectOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAddObjectOperation.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      