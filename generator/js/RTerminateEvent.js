
      // auto generated
      //var self;

      // class constructor:
      function RTerminateEvent() {
        

        // should be RTerminateEvent_BaseJs.call(this, engine):
        //RTerminateEvent.prototype = new RTerminateEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTerminateEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTerminateEvent);
            //}
          }
          else {
            qWarning("RTerminateEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTerminateEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTerminateEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTerminateEvent);
  }

  
  else {
    
        print("RTerminateEvent(): wrong number / type of arguments");
      
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

      //RTerminateEvent.prototype = new RTerminateEvent_BaseJs(engine);
      //RTerminateEvent.prototype = new RTerminateEvent_Wrapper(engine);
      RTerminateEvent.prototype = new Object();

      RTerminateEvent.prototype.toString = function() {
          //return "RTerminateEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTerminateEvent [JS]";
        };
      RTerminateEvent.getObjectType = function() {
        return RJSType_RTerminateEvent.getIdStatic();
      };

      RTerminateEvent.prototype.getObjectType = function() {
        return RJSType_RTerminateEvent.getIdStatic();
      };

      RTerminateEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTerminateEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
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
      //RTerminateEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTerminateEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    