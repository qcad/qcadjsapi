
      // auto generated
      //var self;

      // class constructor:
      function RCloseCurrentEvent() {
        

        // should be RCloseCurrentEvent_BaseJs.call(this, engine):
        //RCloseCurrentEvent.prototype = new RCloseCurrentEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCloseCurrentEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCloseCurrentEvent);
            //}
          }
          else {
            qWarning("RCloseCurrentEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCloseCurrentEvent_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCloseCurrentEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCloseCurrentEvent);
  }

  
  else {
    
        print("RCloseCurrentEvent(): wrong number / type of arguments");
      
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

      //RCloseCurrentEvent.prototype = new RCloseCurrentEvent_BaseJs(engine);
      //RCloseCurrentEvent.prototype = new RCloseCurrentEvent_Wrapper(engine);
      RCloseCurrentEvent.prototype = new Object();

      RCloseCurrentEvent.prototype.toString = function() {
          //return "RCloseCurrentEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCloseCurrentEvent [JS]";
        };
      RCloseCurrentEvent.getObjectType = function() {
        return RJSType_RCloseCurrentEvent.getIdStatic();
      };

      RCloseCurrentEvent.prototype.getObjectType = function() {
        return RJSType_RCloseCurrentEvent.getIdStatic();
      };

      RCloseCurrentEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCloseCurrentEvent.getIdStatic()) {
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
      //RCloseCurrentEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCloseCurrentEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    