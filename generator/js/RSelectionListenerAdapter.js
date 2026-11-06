
      // auto generated
      //var self;

      // class constructor:
      function RSelectionListenerAdapter() {
        

        // should be RSelectionListenerAdapter_BaseJs.call(this, engine):
        //RSelectionListenerAdapter.prototype = new RSelectionListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSelectionListenerAdapter.getIdStatic()))) {

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
            qWarning("RSelectionListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RSelectionListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RSelectionListenerAdapter);
  }

  
  else {
    
        print("RSelectionListenerAdapter(): wrong number / type of arguments");
      
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

      //RSelectionListenerAdapter.prototype = new RSelectionListenerAdapter_BaseJs(engine);
      //RSelectionListenerAdapter.prototype = new RSelectionListenerAdapter_Wrapper(engine);
      RSelectionListenerAdapter.prototype = new Object();


      RSelectionListenerAdapter.prototype.toString = function() {
          //return "RSelectionListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSelectionListenerAdapter [JS]";
        };
      RSelectionListenerAdapter.getObjectType = function() {
        return RJSType_RSelectionListenerAdapter.getIdStatic();
      };

      RSelectionListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RSelectionListenerAdapter.getIdStatic();
      };

      RSelectionListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSelectionListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSelectionListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RSelectionListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RSelectionListenerAdapter.prototype.updateSelectionListener = function(...args) 
          
        {
          //print("JS: RSelectionListenerAdapter.prototype.updateSelectionListener");
          
              return this.__PROXY__.updateSelectionListener(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RSelectionListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RSelectionListenerAdapter.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
          Object.defineProperty(RSelectionListenerAdapter.prototype, 'selectionChanged(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.selectionChanged; },
              configurable: true
          });
        RSelectionListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RSelectionListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RSelectionListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSelectionListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSelectionListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSelectionListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      