
      // auto generated
      //var self;

      // class constructor:
      function RPropertyListenerAdapter() {
        

        // should be RPropertyListenerAdapter_BaseJs.call(this, engine):
        //RPropertyListenerAdapter.prototype = new RPropertyListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyListenerAdapter.getIdStatic()))) {

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
            qWarning("RPropertyListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPropertyListenerAdapter.js: No constructor found for class RPropertyListenerAdapter");
            
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

      //RPropertyListenerAdapter.prototype = new RPropertyListenerAdapter_BaseJs(engine);
      //RPropertyListenerAdapter.prototype = new RPropertyListenerAdapter_Wrapper(engine);
      RPropertyListenerAdapter.prototype = new Object();


      RPropertyListenerAdapter.prototype.toString = function() {
          //return "RPropertyListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyListenerAdapter [JS]";
        };
      RPropertyListenerAdapter.getObjectType = function() {
        return RJSType_RPropertyListenerAdapter.getIdStatic();
      };

      RPropertyListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPropertyListenerAdapter.getIdStatic();
      };

      RPropertyListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPropertyListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPropertyListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        RPropertyListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RPropertyListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
      // function 
      RPropertyListenerAdapter.prototype.updateFromDocument = function() 
        
      {
        //print("JS: RPropertyListenerAdapter.prototype.updateFromDocument");
        
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFromDocument(
                // call highest level JS implementation:
                //return this.updateFromDocumentBase(
                
                    return this.__PROXY__.updateFromDocumentSuper(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RPropertyListenerAdapter);
  }

  
  else {
    
        print("RPropertyListenerAdapter.updateFromDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RPropertyListenerAdapter.prototype.updateFromObject = function() 
        
      {
        //print("JS: RPropertyListenerAdapter.prototype.updateFromObject");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFromObject(
                // call highest level JS implementation:
                //return this.updateFromObjectBase(
                
                    return this.__PROXY__.updateFromObjectSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPropertyListenerAdapter);
  }

  
  else {
    
        print("RPropertyListenerAdapter.updateFromObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RPropertyListenerAdapter.prototype.clearEditor = function() 
        
      {
        //print("JS: RPropertyListenerAdapter.prototype.clearEditor");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.clearEditor(
                // call highest level JS implementation:
                //return this.clearEditorBase(
                
                    return this.__PROXY__.clearEditorSuper(
                  
                );
              

        //copyProperties(this, wrapper, RPropertyListenerAdapter);
  }

  
  else {
    
        print("RPropertyListenerAdapter.clearEditor(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      
          Object.defineProperty(RPropertyListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RPropertyListenerAdapter.prototype, 'updatedFromDocument', {
            get: function() { return this.__PROXY__.updatedFromDocument; },
            configurable: true
        });
        
          Object.defineProperty(RPropertyListenerAdapter.prototype, 'updatedFromDocument(RDocument*,bool,RS::EntityType,bool,bool)', {
              get: function() { return this.__PROXY__.updatedFromDocument; },
              configurable: true
          });
        
        Object.defineProperty(RPropertyListenerAdapter.prototype, 'updatedFromObject', {
            get: function() { return this.__PROXY__.updatedFromObject; },
            configurable: true
        });
        
          Object.defineProperty(RPropertyListenerAdapter.prototype, 'updatedFromObject(RObject*,RDocument*)', {
              get: function() { return this.__PROXY__.updatedFromObject; },
              configurable: true
          });
        
        Object.defineProperty(RPropertyListenerAdapter.prototype, 'clearedEditor', {
            get: function() { return this.__PROXY__.clearedEditor; },
            configurable: true
        });
        RPropertyListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RPropertyListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RPropertyListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPropertyListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      