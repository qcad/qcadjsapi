
      // auto generated
      //var self;

      // class constructor:
      function RWheelEvent() {
        

        // should be RWheelEvent_BaseJs.call(this, engine):
        //RWheelEvent.prototype = new RWheelEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWheelEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RWheelEvent);
            //}
          }
          else {
            qWarning("RWheelEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new RWheelEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RWheelEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWheelEvent);
  }

  
  else {
    
        print("RWheelEvent(): wrong number / type of arguments");
      
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

      //RWheelEvent.prototype = new RWheelEvent_BaseJs(engine);
      //RWheelEvent.prototype = new RWheelEvent_Wrapper(engine);
      RWheelEvent.prototype = new Object();

      RWheelEvent.prototype.toString = function() {
          //return "RWheelEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWheelEvent [JS]";
        };
      RWheelEvent.getObjectType = function() {
        return RJSType_RWheelEvent.getIdStatic();
      };

      RWheelEvent.prototype.getObjectType = function() {
        return RJSType_RWheelEvent.getIdStatic();
      };

      RWheelEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWheelEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QInputEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPointerEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QSinglePointEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWheelEvent.getIdStatic()) {
            return true;
          }
        
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
      //RWheelEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWheelEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    