
      // auto generated
      //var self;

      // class constructor:
      function RCoordinateEvent() {
        

        // should be RCoordinateEvent_BaseJs.call(this, engine):
        //RCoordinateEvent.prototype = new RCoordinateEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCoordinateEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCoordinateEvent);
            //}
          }
          else {
            qWarning("RCoordinateEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RCoordinateEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCoordinateEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCoordinateEvent);
  }

  
  else {
    
        print("RCoordinateEvent(): wrong number / type of arguments");
      
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

      //RCoordinateEvent.prototype = new RCoordinateEvent_BaseJs(engine);
      //RCoordinateEvent.prototype = new RCoordinateEvent_Wrapper(engine);
      RCoordinateEvent.prototype = new Object();

      RCoordinateEvent.prototype.toString = function() {
          //return "RCoordinateEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCoordinateEvent [JS]";
        };
      RCoordinateEvent.getObjectType = function() {
        return RJSType_RCoordinateEvent.getIdStatic();
      };

      RCoordinateEvent.prototype.getObjectType = function() {
        return RJSType_RCoordinateEvent.getIdStatic();
      };

      RCoordinateEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCoordinateEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
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
      //RCoordinateEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCoordinateEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    