
      // auto generated
      //var self;

      // class constructor:
      function RBlockListenerAdapter() {
        

        // should be RBlockListenerAdapter_BaseJs.call(this, engine):
        //RBlockListenerAdapter.prototype = new RBlockListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockListenerAdapter.getIdStatic()))) {

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
            qWarning("RBlockListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RBlockListenerAdapter_Wrapper(
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

      

        //copyProperties(this, wrapper, RBlockListenerAdapter);
  }

  
  else {
    
        print("RBlockListenerAdapter(): wrong number / type of arguments");
      
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

      //RBlockListenerAdapter.prototype = new RBlockListenerAdapter_BaseJs(engine);
      //RBlockListenerAdapter.prototype = new RBlockListenerAdapter_Wrapper(engine);
      RBlockListenerAdapter.prototype = new Object();


      RBlockListenerAdapter.prototype.toString = function() {
          //return "RBlockListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockListenerAdapter [JS]";
        };
      RBlockListenerAdapter.getObjectType = function() {
        return RJSType_RBlockListenerAdapter.getIdStatic();
      };

      RBlockListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RBlockListenerAdapter.getIdStatic();
      };

      RBlockListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RBlockListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RBlockListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.updateBlocks = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.updateBlocks");
          
              return this.__PROXY__.updateBlocks(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.updateXRef = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.updateXRef");
          
              return this.__PROXY__.updateXRef(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.setCurrentBlock");
          
              return this.__PROXY__.setCurrentBlock(...args);
            
        };
    
        // function 
        RBlockListenerAdapter.prototype.clearBlocks = function(...args) 
          
        {
          //print("JS: RBlockListenerAdapter.prototype.clearBlocks");
          
              return this.__PROXY__.clearBlocks(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RBlockListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RBlockListenerAdapter.prototype, 'blocksUpdated', {
            get: function() { return this.__PROXY__.blocksUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RBlockListenerAdapter.prototype, 'blocksUpdated(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.blocksUpdated; },
              configurable: true
          });
        
        Object.defineProperty(RBlockListenerAdapter.prototype, 'xRefUpdated', {
            get: function() { return this.__PROXY__.xRefUpdated; },
            configurable: true
        });
        
        Object.defineProperty(RBlockListenerAdapter.prototype, 'currentBlockSet', {
            get: function() { return this.__PROXY__.currentBlockSet; },
            configurable: true
        });
        
          Object.defineProperty(RBlockListenerAdapter.prototype, 'currentBlockSet(RDocumentInterface*)', {
              get: function() { return this.__PROXY__.currentBlockSet; },
              configurable: true
          });
        
        Object.defineProperty(RBlockListenerAdapter.prototype, 'blocksCleared', {
            get: function() { return this.__PROXY__.blocksCleared; },
            configurable: true
        });
        RBlockListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RBlockListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RBlockListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RBlockListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RBlockListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      