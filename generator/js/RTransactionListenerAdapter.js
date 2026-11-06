
      // auto generated
      //var self;

      // class constructor:
      function RTransactionListenerAdapter() {
        

        // should be RTransactionListenerAdapter_BaseJs.call(this, engine):
        //RTransactionListenerAdapter.prototype = new RTransactionListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransactionListenerAdapter.getIdStatic()))) {

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
            qWarning("RTransactionListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransactionListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransactionListenerAdapter);
  }

  
  else {
    
        print("RTransactionListenerAdapter(): wrong number / type of arguments");
      
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

      //RTransactionListenerAdapter.prototype = new RTransactionListenerAdapter_BaseJs(engine);
      //RTransactionListenerAdapter.prototype = new RTransactionListenerAdapter_Wrapper(engine);
      RTransactionListenerAdapter.prototype = new Object();


      RTransactionListenerAdapter.prototype.toString = function() {
          //return "RTransactionListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransactionListenerAdapter [JS]";
        };
      RTransactionListenerAdapter.getObjectType = function() {
        return RJSType_RTransactionListenerAdapter.getIdStatic();
      };

      RTransactionListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RTransactionListenerAdapter.getIdStatic();
      };

      RTransactionListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransactionListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTransactionListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RTransactionListenerAdapter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.findChild = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.children = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.setParent = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.property = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.parent = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.updateTransactionListener = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.updateTransactionListener");
          
              return this.__PROXY__.updateTransactionListener(...args);
            
        };
        
        // function 
        RTransactionListenerAdapter.prototype.setCurrentBlock = function(...args) 
          
        {
          //print("JS: RTransactionListenerAdapter.prototype.setCurrentBlock");
          
              return this.__PROXY__.setCurrentBlock(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(RTransactionListenerAdapter.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(RTransactionListenerAdapter.prototype, 'transactionUpdated', {
            get: function() { return this.__PROXY__.transactionUpdated; },
            configurable: true
        });
        
          Object.defineProperty(RTransactionListenerAdapter.prototype, 'transactionUpdated(RDocument*,RTransaction*)', {
              get: function() { return this.__PROXY__.transactionUpdated; },
              configurable: true
          });
        
        Object.defineProperty(RTransactionListenerAdapter.prototype, 'currentBlockSet', {
            get: function() { return this.__PROXY__.currentBlockSet; },
            configurable: true
        });
        
          Object.defineProperty(RTransactionListenerAdapter.prototype, 'currentBlockSet(RDocument*)', {
              get: function() { return this.__PROXY__.currentBlockSet; },
              configurable: true
          });
        RTransactionListenerAdapter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTransactionListenerAdapter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTransactionListenerAdapter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTransactionListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransactionListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTransactionListenerAdapter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      