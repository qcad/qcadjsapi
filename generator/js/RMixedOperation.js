
      // auto generated
      //var self;

      // class constructor:
      function RMixedOperation() {
        

        // should be RMixedOperation_BaseJs.call(this, engine):
        //RMixedOperation.prototype = new RMixedOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMixedOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMixedOperation);
            //}
          }
          else {
            qWarning("RMixedOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMixedOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMixedOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMixedOperation);
  }

  
  else {
    
        print("RMixedOperation(): wrong number / type of arguments");
      
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

      //RMixedOperation.prototype = new RMixedOperation_BaseJs(engine);
      //RMixedOperation.prototype = new RMixedOperation_Wrapper(engine);
      RMixedOperation.prototype = new Object();

      RMixedOperation.prototype.toString = function() {
          //return "RMixedOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMixedOperation [JS]";
        };
      RMixedOperation.getObjectType = function() {
        return RJSType_RMixedOperation.getIdStatic();
      };

      RMixedOperation.prototype.getObjectType = function() {
        return RJSType_RMixedOperation.getIdStatic();
      };

      RMixedOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMixedOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Mode
RMixedOperation.NoMode = RMixedOperation_Wrapper.NoMode;
RMixedOperation.UseCurrentAttributes = RMixedOperation_Wrapper.UseCurrentAttributes;
RMixedOperation.Delete = RMixedOperation_Wrapper.Delete;
RMixedOperation.ForceNew = RMixedOperation_Wrapper.ForceNew;
RMixedOperation.EndCycle = RMixedOperation_Wrapper.EndCycle;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMixedOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMixedOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    