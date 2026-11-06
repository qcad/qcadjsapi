
      // auto generated
      //var self;

      // class constructor:
      function RPaletteListenerAdapter() {
        

        // should be RPaletteListenerAdapter_BaseJs.call(this, engine):
        //RPaletteListenerAdapter.prototype = new RPaletteListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPaletteListenerAdapter.getIdStatic()))) {

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
            qWarning("RPaletteListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RPaletteListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RPaletteListenerAdapter);
  }

  
  else {
    
        print("RPaletteListenerAdapter(): wrong number / type of arguments");
      
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

      //RPaletteListenerAdapter.prototype = new RPaletteListenerAdapter_BaseJs(engine);
      //RPaletteListenerAdapter.prototype = new RPaletteListenerAdapter_Wrapper(engine);
      RPaletteListenerAdapter.prototype = new Object();


      RPaletteListenerAdapter.prototype.toString = function() {
          //return "RPaletteListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPaletteListenerAdapter [JS]";
        };
      RPaletteListenerAdapter.getObjectType = function() {
        return RJSType_RPaletteListenerAdapter.getIdStatic();
      };

      RPaletteListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPaletteListenerAdapter.getIdStatic();
      };

      RPaletteListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPaletteListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPaletteListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPaletteListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RPaletteListenerAdapter.prototype.updatePalette = function(...args) 
          
        {
          //print("JS: RPaletteListenerAdapter.prototype.updatePalette");
          
              return this.__PROXY__.updatePalette(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RPaletteListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RPaletteListenerAdapter.prototype, 'paletteChanged', {
            get: function() { return this.__PROXY__.paletteChanged; },
            configurable: true
        });
        RPaletteListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPaletteListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPaletteListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPaletteListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPaletteListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPaletteListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      