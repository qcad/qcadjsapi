
      // auto generated
      //var self;

      // class constructor:
      function RInterTransactionListenerAdapter() {
        

        // should be RInterTransactionListenerAdapter_BaseJs.call(this, engine):
        //RInterTransactionListenerAdapter.prototype = new RInterTransactionListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RInterTransactionListenerAdapter.getIdStatic()))) {

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
            qWarning("RInterTransactionListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RInterTransactionListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RInterTransactionListenerAdapter);
  }

  
  else {
    
        print("RInterTransactionListenerAdapter(): wrong number / type of arguments");
      
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

      //RInterTransactionListenerAdapter.prototype = new RInterTransactionListenerAdapter_BaseJs(engine);
      //RInterTransactionListenerAdapter.prototype = new RInterTransactionListenerAdapter_Wrapper(engine);
      RInterTransactionListenerAdapter.prototype = new Object();


      RInterTransactionListenerAdapter.prototype.toString = function() {
          //return "RInterTransactionListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RInterTransactionListenerAdapter [JS]";
        };
      RInterTransactionListenerAdapter.getObjectType = function() {
        return RJSType_RInterTransactionListenerAdapter.getIdStatic();
      };

      RInterTransactionListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RInterTransactionListenerAdapter.getIdStatic();
      };

      RInterTransactionListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RInterTransactionListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RInterTransactionListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RInterTransactionListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RInterTransactionListenerAdapter.prototype.updateInterTransactionListener = function(...args) 
          
        {
          //print("JS: RInterTransactionListenerAdapter.prototype.updateInterTransactionListener");
          
              return this.__PROXY__.updateInterTransactionListener(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RInterTransactionListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RInterTransactionListenerAdapter.prototype, 'transactionInProgress', {
            get: function() { return this.__PROXY__.transactionInProgress; },
            configurable: true
        });
        
          Object.defineProperty(RInterTransactionListenerAdapter.prototype, 'transactionInProgress(RDocument*,RTransaction*)', {
              get: function() { return this.__PROXY__.transactionInProgress; },
              configurable: true
          });
        RInterTransactionListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RInterTransactionListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RInterTransactionListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RInterTransactionListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RInterTransactionListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RInterTransactionListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      