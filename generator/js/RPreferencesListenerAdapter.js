
      // auto generated
      //var self;

      // class constructor:
      function RPreferencesListenerAdapter() {
        

        // should be RPreferencesListenerAdapter_BaseJs.call(this, engine):
        //RPreferencesListenerAdapter.prototype = new RPreferencesListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPreferencesListenerAdapter.getIdStatic()))) {

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
            qWarning("RPreferencesListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPreferencesListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPreferencesListenerAdapter);
  }

  
  else {
    
        print("RPreferencesListenerAdapter(): wrong number / type of arguments");
      
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

      //RPreferencesListenerAdapter.prototype = new RPreferencesListenerAdapter_BaseJs(engine);
      //RPreferencesListenerAdapter.prototype = new RPreferencesListenerAdapter_Wrapper(engine);
      RPreferencesListenerAdapter.prototype = new Object();


      RPreferencesListenerAdapter.prototype.toString = function() {
          //return "RPreferencesListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPreferencesListenerAdapter [JS]";
        };
      RPreferencesListenerAdapter.getObjectType = function() {
        return RJSType_RPreferencesListenerAdapter.getIdStatic();
      };

      RPreferencesListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPreferencesListenerAdapter.getIdStatic();
      };

      RPreferencesListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPreferencesListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPreferencesListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPreferencesListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RPreferencesListenerAdapter.prototype.updatePreferences = function(...args) 
          
        {
          //print("JS: RPreferencesListenerAdapter.prototype.updatePreferences");
          
              return this.__PROXY__.updatePreferences(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RPreferencesListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RPreferencesListenerAdapter.prototype, 'preferencesUpdated', {
            get: function() { return this.__PROXY__.preferencesUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RPreferencesListenerAdapter.prototype, 'preferencesUpdated(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.preferencesUpdated; },
              configurable: true
          });
        RPreferencesListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPreferencesListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPreferencesListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPreferencesListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPreferencesListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPreferencesListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      