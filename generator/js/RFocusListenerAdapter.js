
      // auto generated
      //var self;

      // class constructor:
      function RFocusListenerAdapter() {
        

        // should be RFocusListenerAdapter_BaseJs.call(this, engine):
        //RFocusListenerAdapter.prototype = new RFocusListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFocusListenerAdapter.getIdStatic()))) {

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
            qWarning("RFocusListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFocusListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFocusListenerAdapter);
  }

  
  else {
    
        print("RFocusListenerAdapter(): wrong number / type of arguments");
      
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

      //RFocusListenerAdapter.prototype = new RFocusListenerAdapter_BaseJs(engine);
      //RFocusListenerAdapter.prototype = new RFocusListenerAdapter_Wrapper(engine);
      RFocusListenerAdapter.prototype = new Object();


      RFocusListenerAdapter.prototype.toString = function() {
          //return "RFocusListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFocusListenerAdapter [JS]";
        };
      RFocusListenerAdapter.getObjectType = function() {
        return RJSType_RFocusListenerAdapter.getIdStatic();
      };

      RFocusListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RFocusListenerAdapter.getIdStatic();
      };

      RFocusListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFocusListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RFocusListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFocusListenerAdapter.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        RFocusListenerAdapter.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        RFocusListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RFocusListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
      // function 
      RFocusListenerAdapter.prototype.updateFocus = function() 
        
      {
        //print("JS: RFocusListenerAdapter.prototype.updateFocus");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFocus(
                // call highest level JS implementation:
                //return this.updateFocusBase(
                
                    return this.__PROXY__.updateFocusSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFocusListenerAdapter);
  }

  
  else {
    
        print("RFocusListenerAdapter.updateFocus(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      
          Object.defineProperty(RFocusListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RFocusListenerAdapter.prototype, 'focusUpdated', {
            get: function() { return this.__PROXY__.focusUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RFocusListenerAdapter.prototype, 'focusUpdated(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.focusUpdated; },
              configurable: true
          });
        RFocusListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RFocusListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RFocusListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFocusListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFocusListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFocusListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      