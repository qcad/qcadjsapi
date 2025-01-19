
      // auto generated
      //var self;

      // class constructor:
      function RPenListenerAdapter() {
        

        // should be RPenListenerAdapter_BaseJs.call(this, engine):
        //RPenListenerAdapter.prototype = new RPenListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPenListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPenListenerAdapter);
            //}
          }
          else {
            qWarning("RPenListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RPenListenerAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPenListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPenListenerAdapter);
  }

  
  else {
    
        print("RPenListenerAdapter(): wrong number / type of arguments");
      
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
            
    this["penUpdated(RDocumentInterface*)"] = Object.getPrototypeOf(this).penUpdated;
  
          }
        }
      }

      //RPenListenerAdapter.prototype = new RPenListenerAdapter_BaseJs(engine);
      //RPenListenerAdapter.prototype = new RPenListenerAdapter_Wrapper(engine);
      RPenListenerAdapter.prototype = new Object();

      RPenListenerAdapter.prototype.toString = function() {
          //return "RPenListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPenListenerAdapter [JS]";
        };
      RPenListenerAdapter.getObjectType = function() {
        return RJSType_RPenListenerAdapter.getIdStatic();
      };

      RPenListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPenListenerAdapter.getIdStatic();
      };

      RPenListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPenListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPenListener.getIdStatic()) {
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
      //RPenListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPenListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    