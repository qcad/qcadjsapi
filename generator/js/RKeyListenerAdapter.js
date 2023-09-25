
      // auto generated
      //var self;

      // class constructor:
      function RKeyListenerAdapter() {
        

        // should be RKeyListenerAdapter_BaseJs.call(this, engine):
        //RKeyListenerAdapter.prototype = new RKeyListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RKeyListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RKeyListenerAdapter);
            //}
          }
          else {
            qWarning("RKeyListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RKeyListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RKeyListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RKeyListenerAdapter);
  }

  
  else {
    
        print("RKeyListenerAdapter(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["keyPressEvent(QKeyEvent*)"] = Object.getPrototypeOf(this).keyPressEvent;
  
          }
        }
      }

      //RKeyListenerAdapter.prototype = new RKeyListenerAdapter_BaseJs(engine);
      //RKeyListenerAdapter.prototype = new RKeyListenerAdapter_Wrapper(engine);
      RKeyListenerAdapter.prototype = new Object();

      RKeyListenerAdapter.prototype.toString = function() {
          //return "RKeyListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RKeyListenerAdapter [JS]";
        };
      RKeyListenerAdapter.getObjectType = function() {
        return RJSType_RKeyListenerAdapter.getIdStatic();
      };

      RKeyListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RKeyListenerAdapter.getIdStatic();
      };

      RKeyListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RKeyListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RKeyListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RKeyListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RKeyListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    