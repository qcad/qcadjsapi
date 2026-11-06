
      // auto generated
      //var self;

      // class constructor:
      function RLayerListenerAdapter() {
        

        // should be RLayerListenerAdapter_BaseJs.call(this, engine):
        //RLayerListenerAdapter.prototype = new RLayerListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayerListenerAdapter.getIdStatic()))) {

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
            qWarning("RLayerListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLayerListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RLayerListenerAdapter);
  }

  
  else {
    
        print("RLayerListenerAdapter(): wrong number / type of arguments");
      
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

      //RLayerListenerAdapter.prototype = new RLayerListenerAdapter_BaseJs(engine);
      //RLayerListenerAdapter.prototype = new RLayerListenerAdapter_Wrapper(engine);
      RLayerListenerAdapter.prototype = new Object();


      RLayerListenerAdapter.prototype.toString = function() {
          //return "RLayerListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayerListenerAdapter [JS]";
        };
      RLayerListenerAdapter.getObjectType = function() {
        return RJSType_RLayerListenerAdapter.getIdStatic();
      };

      RLayerListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RLayerListenerAdapter.getIdStatic();
      };

      RLayerListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayerListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RLayerListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RLayerListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.updateLayers = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.updateLayers");
          
              return this.__PROXY__.updateLayers(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.setCurrentLayer = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.setCurrentLayer");
          
              return this.__PROXY__.setCurrentLayer(...args);
            
        };
    
        // function 
        RLayerListenerAdapter.prototype.clearLayers = function(...args) 
          
        {
          //print("JS: RLayerListenerAdapter.prototype.clearLayers");
          
              return this.__PROXY__.clearLayers(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RLayerListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RLayerListenerAdapter.prototype, 'layersUpdated', {
            get: function() { return this.__PROXY__.layersUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RLayerListenerAdapter.prototype, 'layersUpdated(RDocumentInterface*,QList<int>)', {
              get: function() { return this.__PROXY__.layersUpdated; },
              configurable: true
          });
        
        Object.defineProperty(RLayerListenerAdapter.prototype, 'currentLayerSet', {
            get: function() { return this.__PROXY__.currentLayerSet; },
            configurable: true
        });
        
          Object.defineProperty(RLayerListenerAdapter.prototype, 'currentLayerSet(RDocumentInterface*,int)', {
              get: function() { return this.__PROXY__.currentLayerSet; },
              configurable: true
          });
        
        Object.defineProperty(RLayerListenerAdapter.prototype, 'layersCleared', {
            get: function() { return this.__PROXY__.layersCleared; },
            configurable: true
        });
        RLayerListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RLayerListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RLayerListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLayerListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayerListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLayerListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      