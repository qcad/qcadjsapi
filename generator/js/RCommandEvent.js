
      // auto generated
      //var self;

      // class constructor:
      function RCommandEvent() {
        

        // should be RCommandEvent_BaseJs.call(this, engine):
        //RCommandEvent.prototype = new RCommandEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCommandEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RCommandEvent);
            //}
          }
          else {
            qWarning("RCommandEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RCommandEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RCommandEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCommandEvent);
  }

  
  else {
    
        print("RCommandEvent(): wrong number / type of arguments");
      
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

      //RCommandEvent.prototype = new RCommandEvent_BaseJs(engine);
      //RCommandEvent.prototype = new RCommandEvent_Wrapper(engine);
      RCommandEvent.prototype = new Object();

      RCommandEvent.prototype.toString = function() {
          //return "RCommandEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCommandEvent [JS]";
        };
      RCommandEvent.getObjectType = function() {
        return RJSType_RCommandEvent.getIdStatic();
      };

      RCommandEvent.prototype.getObjectType = function() {
        return RJSType_RCommandEvent.getIdStatic();
      };

      RCommandEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCommandEvent.getIdStatic()) {
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
      //RCommandEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCommandEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    