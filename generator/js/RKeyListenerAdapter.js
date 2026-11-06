
      // auto generated
      //var self;

      // class constructor:
      function RKeyListenerAdapter() {
        

        // should be RKeyListenerAdapter_BaseJs.call(this, engine):
        //RKeyListenerAdapter.prototype = new RKeyListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RKeyListenerAdapter.getIdStatic()))) {

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
            qWarning("RKeyListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RKeyListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RKeyListenerAdapter);
  }

  
  else {
    
        print("RKeyListenerAdapter(): wrong number / type of arguments");
      
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

      //RKeyListenerAdapter.prototype = new RKeyListenerAdapter_BaseJs(engine);
      //RKeyListenerAdapter.prototype = new RKeyListenerAdapter_Wrapper(engine);
      RKeyListenerAdapter.prototype = new Object();


      RKeyListenerAdapter.prototype.toString = function() {
          //return "RKeyListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RKeyListenerAdapter [JS]";
        };
      RKeyListenerAdapter.getObjectType = function() {
        return RJSType_RKeyListenerAdapter.getIdStatic();
      };

      RKeyListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RKeyListenerAdapter.getIdStatic();
      };

      RKeyListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RKeyListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RKeyListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RKeyListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RKeyListenerAdapter.prototype.keyPressed = function(...args) 
          
        {
          //print("JS: RKeyListenerAdapter.prototype.keyPressed");
          
              return this.__PROXY__.keyPressed(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RKeyListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RKeyListenerAdapter.prototype, 'keyPressEvent', {
            get: function() { return this.__PROXY__.keyPressEvent; },
            configurable: true
        });
        
          Object.defineProperty(RKeyListenerAdapter.prototype, 'keyPressEvent(QKeyEvent*)', {
              get: function() { return this.__PROXY__.keyPressEvent; },
              configurable: true
          });
        RKeyListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RKeyListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RKeyListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RKeyListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RKeyListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RKeyListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      