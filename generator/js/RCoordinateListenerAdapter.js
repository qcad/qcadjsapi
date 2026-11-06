
      // auto generated
      //var self;

      // class constructor:
      function RCoordinateListenerAdapter() {
        

        // should be RCoordinateListenerAdapter_BaseJs.call(this, engine):
        //RCoordinateListenerAdapter.prototype = new RCoordinateListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCoordinateListenerAdapter.getIdStatic()))) {

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
            qWarning("RCoordinateListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RCoordinateListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RCoordinateListenerAdapter);
  }

  
  else {
    
        print("RCoordinateListenerAdapter(): wrong number / type of arguments");
      
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

      //RCoordinateListenerAdapter.prototype = new RCoordinateListenerAdapter_BaseJs(engine);
      //RCoordinateListenerAdapter.prototype = new RCoordinateListenerAdapter_Wrapper(engine);
      RCoordinateListenerAdapter.prototype = new Object();


      RCoordinateListenerAdapter.prototype.toString = function() {
          //return "RCoordinateListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCoordinateListenerAdapter [JS]";
        };
      RCoordinateListenerAdapter.getObjectType = function() {
        return RJSType_RCoordinateListenerAdapter.getIdStatic();
      };

      RCoordinateListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RCoordinateListenerAdapter.getIdStatic();
      };

      RCoordinateListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCoordinateListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RCoordinateListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RCoordinateListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RCoordinateListenerAdapter.prototype.updateCoordinate = function(...args) 
          
        {
          //print("JS: RCoordinateListenerAdapter.prototype.updateCoordinate");
          
              return this.__PROXY__.updateCoordinate(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RCoordinateListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RCoordinateListenerAdapter.prototype, 'coordinateUpdated', {
            get: function() { return this.__PROXY__.coordinateUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RCoordinateListenerAdapter.prototype, 'coordinateUpdated(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.coordinateUpdated; },
              configurable: true
          });
        RCoordinateListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RCoordinateListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RCoordinateListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCoordinateListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCoordinateListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCoordinateListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      