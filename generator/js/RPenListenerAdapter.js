
      // auto generated
      //var self;

      // class constructor:
      function RPenListenerAdapter() {
        

        // should be RPenListenerAdapter_BaseJs.call(this, engine):
        //RPenListenerAdapter.prototype = new RPenListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPenListenerAdapter.getIdStatic()))) {

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
            qWarning("RPenListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RPenListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RPenListenerAdapter);
  }

  
  else {
    
        print("RPenListenerAdapter(): wrong number / type of arguments");
      
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

      //RPenListenerAdapter.prototype = new RPenListenerAdapter_BaseJs(engine);
      //RPenListenerAdapter.prototype = new RPenListenerAdapter_Wrapper(engine);
      RPenListenerAdapter.prototype = new Object();


      RPenListenerAdapter.prototype.toString = function() {
          //return "RPenListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPenListenerAdapter [JS]";
        };
      RPenListenerAdapter.getObjectType = function() {
        return RJSType_RPenListenerAdapter.getIdStatic();
      };

      RPenListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPenListenerAdapter.getIdStatic();
      };

      RPenListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPenListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPenListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPenListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.updatePen = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.updatePen");
          
              return this.__PROXY__.updatePen(...args);
            
        };
    
        // function 
        RPenListenerAdapter.prototype.clearPen = function(...args) 
          
        {
          //print("JS: RPenListenerAdapter.prototype.clearPen");
          
              return this.__PROXY__.clearPen(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RPenListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RPenListenerAdapter.prototype, 'penUpdated', {
            get: function() { return this.__PROXY__.penUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RPenListenerAdapter.prototype, 'penUpdated(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.penUpdated; },
              configurable: true
          });
        
        Object.defineProperty(RPenListenerAdapter.prototype, 'penCleared', {
            get: function() { return this.__PROXY__.penCleared; },
            configurable: true
        });
        RPenListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPenListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPenListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPenListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPenListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPenListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      