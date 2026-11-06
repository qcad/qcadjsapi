
      // auto generated
      //var self;

      // class constructor:
      function RExportListenerAdapter() {
        

        // should be RExportListenerAdapter_BaseJs.call(this, engine):
        //RExportListenerAdapter.prototype = new RExportListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RExportListenerAdapter.getIdStatic()))) {

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
            qWarning("RExportListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RExportListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RExportListenerAdapter);
  }

  
  else {
    
        print("RExportListenerAdapter(): wrong number / type of arguments");
      
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

      //RExportListenerAdapter.prototype = new RExportListenerAdapter_BaseJs(engine);
      //RExportListenerAdapter.prototype = new RExportListenerAdapter_Wrapper(engine);
      RExportListenerAdapter.prototype = new Object();


      RExportListenerAdapter.prototype.toString = function() {
          //return "RExportListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RExportListenerAdapter [JS]";
        };
      RExportListenerAdapter.getObjectType = function() {
        return RJSType_RExportListenerAdapter.getIdStatic();
      };

      RExportListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RExportListenerAdapter.getIdStatic();
      };

      RExportListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RExportListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExportListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RExportListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.preExportEvent = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.preExportEvent");
          
              return this.__PROXY__.preExportEvent(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.postExportEvent = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.postExportEvent");
          
              return this.__PROXY__.postExportEvent(...args);
            
        };
        
        // function 
        RExportListenerAdapter.prototype.endOfExportEvent = function(...args) 
          
        {
          //print("JS: RExportListenerAdapter.prototype.endOfExportEvent");
          
              return this.__PROXY__.endOfExportEvent(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RExportListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RExportListenerAdapter.prototype, 'preExport', {
            get: function() { return this.__PROXY__.preExport; },
            configurable: true
        });
        
          Object.defineProperty(RExportListenerAdapter.prototype, 'preExport(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.preExport; },
              configurable: true
          });
        
        Object.defineProperty(RExportListenerAdapter.prototype, 'postExport', {
            get: function() { return this.__PROXY__.postExport; },
            configurable: true
        });
        
          Object.defineProperty(RExportListenerAdapter.prototype, 'postExport(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.postExport; },
              configurable: true
          });
        
        Object.defineProperty(RExportListenerAdapter.prototype, 'endOfExport', {
            get: function() { return this.__PROXY__.endOfExport; },
            configurable: true
        });
        
          Object.defineProperty(RExportListenerAdapter.prototype, 'endOfExport(RExporter*)', {
              get: function() { return this.__PROXY__.endOfExport; },
              configurable: true
          });
        RExportListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RExportListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RExportListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RExportListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RExportListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RExportListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      