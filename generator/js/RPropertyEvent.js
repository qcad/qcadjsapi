
      // auto generated
      //var self;

      // class constructor:
      function RPropertyEvent() {
        

        // should be RPropertyEvent_BaseJs.call(this, engine):
        //RPropertyEvent.prototype = new RPropertyEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPropertyEvent);
            //}
          }
          else {
            qWarning("RPropertyEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RPropertyEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyEvent);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPropertyEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPropertyEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyEvent);
  }

  
  else {
    
        print("RPropertyEvent(): wrong number / type of arguments");
      
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

      //RPropertyEvent.prototype = new RPropertyEvent_BaseJs(engine);
      //RPropertyEvent.prototype = new RPropertyEvent_Wrapper(engine);
      RPropertyEvent.prototype = new Object();

      RPropertyEvent.prototype.toString = function() {
          //return "RPropertyEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyEvent [JS]";
        };
      RPropertyEvent.getObjectType = function() {
        return RJSType_RPropertyEvent.getIdStatic();
      };

      RPropertyEvent.prototype.getObjectType = function() {
        return RJSType_RPropertyEvent.getIdStatic();
      };

      RPropertyEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyEvent.getIdStatic()) {
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
      //RPropertyEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    