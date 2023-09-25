
      // auto generated
      //var self;

      // class constructor:
      function RInputEvent() {
        

        // should be RInputEvent_BaseJs.call(this, engine):
        //RInputEvent.prototype = new RInputEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RInputEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RInputEvent);
            //}
          }
          else {
            qWarning("RInputEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RInputEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RInputEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RInputEvent);
  }

  
  else {
    
        print("RInputEvent(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //RInputEvent.prototype = new RInputEvent_BaseJs(engine);
      //RInputEvent.prototype = new RInputEvent_Wrapper(engine);
      RInputEvent.prototype = new Object();

      RInputEvent.prototype.toString = function() {
          //return "RInputEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RInputEvent [JS]";
        };
      RInputEvent.getObjectType = function() {
        return RJSType_RInputEvent.getIdStatic();
      };

      RInputEvent.prototype.getObjectType = function() {
        return RJSType_RInputEvent.getIdStatic();
      };

      RInputEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RInputEvent.getIdStatic()) {
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
      //RInputEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RInputEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    