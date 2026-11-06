
      // auto generated
      //var self;

      // class constructor:
      function RImportListenerAdapter() {
        

        // should be RImportListenerAdapter_BaseJs.call(this, engine):
        //RImportListenerAdapter.prototype = new RImportListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImportListenerAdapter.getIdStatic()))) {

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
            qWarning("RImportListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RImportListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImportListenerAdapter);
  }

  
  else {
    
        print("RImportListenerAdapter(): wrong number / type of arguments");
      
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

      //RImportListenerAdapter.prototype = new RImportListenerAdapter_BaseJs(engine);
      //RImportListenerAdapter.prototype = new RImportListenerAdapter_Wrapper(engine);
      RImportListenerAdapter.prototype = new Object();


      RImportListenerAdapter.prototype.toString = function() {
          //return "RImportListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImportListenerAdapter [JS]";
        };
      RImportListenerAdapter.getObjectType = function() {
        return RJSType_RImportListenerAdapter.getIdStatic();
      };

      RImportListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RImportListenerAdapter.getIdStatic();
      };

      RImportListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImportListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RImportListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RImportListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.preImportEvent = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.preImportEvent");
          
              return this.__PROXY__.preImportEvent(...args);
            
        };
    
        // function 
        RImportListenerAdapter.prototype.postImportEvent = function(...args) 
          
        {
          //print("JS: RImportListenerAdapter.prototype.postImportEvent");
          
              return this.__PROXY__.postImportEvent(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RImportListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RImportListenerAdapter.prototype, 'preImport', {
            get: function() { return this.__PROXY__.preImport; },
            configurable: true
        });
        
          Object.defineProperty(RImportListenerAdapter.prototype, 'preImport(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.preImport; },
              configurable: true
          });
        
        Object.defineProperty(RImportListenerAdapter.prototype, 'postImport', {
            get: function() { return this.__PROXY__.postImport; },
            configurable: true
        });
        
          Object.defineProperty(RImportListenerAdapter.prototype, 'postImport(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.postImport; },
              configurable: true
          });
        RImportListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RImportListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RImportListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RImportListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImportListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RImportListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      