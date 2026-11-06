
      // auto generated
      //var self;

      // class constructor:
      function RNewDocumentListenerAdapter() {
        

        // should be RNewDocumentListenerAdapter_BaseJs.call(this, engine):
        //RNewDocumentListenerAdapter.prototype = new RNewDocumentListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RNewDocumentListenerAdapter.getIdStatic()))) {

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
            qWarning("RNewDocumentListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RNewDocumentListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RNewDocumentListenerAdapter);
  }

  
  else {
    
        print("RNewDocumentListenerAdapter(): wrong number / type of arguments");
      
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

      //RNewDocumentListenerAdapter.prototype = new RNewDocumentListenerAdapter_BaseJs(engine);
      //RNewDocumentListenerAdapter.prototype = new RNewDocumentListenerAdapter_Wrapper(engine);
      RNewDocumentListenerAdapter.prototype = new Object();


      RNewDocumentListenerAdapter.prototype.toString = function() {
          //return "RNewDocumentListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RNewDocumentListenerAdapter [JS]";
        };
      RNewDocumentListenerAdapter.getObjectType = function() {
        return RJSType_RNewDocumentListenerAdapter.getIdStatic();
      };

      RNewDocumentListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RNewDocumentListenerAdapter.getIdStatic();
      };

      RNewDocumentListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RNewDocumentListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RNewDocumentListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RNewDocumentListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        RNewDocumentListenerAdapter.prototype.updateNewDocumentListener = function(...args) 
          
        {
          //print("JS: RNewDocumentListenerAdapter.prototype.updateNewDocumentListener");
          
              return this.__PROXY__.updateNewDocumentListener(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(RNewDocumentListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RNewDocumentListenerAdapter.prototype, 'newDocument', {
            get: function() { return this.__PROXY__.newDocument; },
            configurable: true
        });
        
          Object.defineProperty(RNewDocumentListenerAdapter.prototype, 'newDocument(RDocument*,RTransaction*,bool)', {
              get: function() { return this.__PROXY__.newDocument; },
              configurable: true
          });
        RNewDocumentListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RNewDocumentListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RNewDocumentListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RNewDocumentListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RNewDocumentListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RNewDocumentListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      