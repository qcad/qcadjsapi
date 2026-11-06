
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsViewWorker() {
        

        // should be RGraphicsViewWorker_BaseJs.call(this, engine):
        //RGraphicsViewWorker.prototype = new RGraphicsViewWorker_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsViewWorker.getIdStatic()))) {

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
            qWarning("RGraphicsViewWorker.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGraphicsViewWorker.js: No constructor found for class RGraphicsViewWorker");
            
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

      //RGraphicsViewWorker.prototype = new RGraphicsViewWorker_BaseJs(engine);
      //RGraphicsViewWorker.prototype = new RGraphicsViewWorker_Wrapper(engine);
      RGraphicsViewWorker.prototype = new Object();


      RGraphicsViewWorker.prototype.toString = function() {
          //return "RGraphicsViewWorker [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsViewWorker [JS]";
        };
      RGraphicsViewWorker.getObjectType = function() {
        return RJSType_RGraphicsViewWorker.getIdStatic();
      };

      RGraphicsViewWorker.prototype.getObjectType = function() {
        return RJSType_RGraphicsViewWorker.getIdStatic();
      };

      RGraphicsViewWorker.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsViewWorker.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RGraphicsViewWorker.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.findChild = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.children = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.setParent = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.property = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.parent = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RGraphicsViewWorker.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RGraphicsViewWorker.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RGraphicsViewWorker.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        RGraphicsViewWorker.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RGraphicsViewWorker.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RGraphicsViewWorker.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RGraphicsViewWorker.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsViewWorker.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RGraphicsViewWorker.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      