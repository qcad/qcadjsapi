
      // auto generated
      //var self;

      // class constructor:
      function RChangePropertyOperation() {
        

        // should be RChangePropertyOperation_BaseJs.call(this, engine):
        //RChangePropertyOperation.prototype = new RChangePropertyOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RChangePropertyOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RChangePropertyOperation);
            //}
          }
          else {
            qWarning("RChangePropertyOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RChangePropertyOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RChangePropertyOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RChangePropertyOperation);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RChangePropertyOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RChangePropertyOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RChangePropertyOperation);
  }

  
  else {
    
        print("RChangePropertyOperation(): wrong number / type of arguments");
      
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

      //RChangePropertyOperation.prototype = new RChangePropertyOperation_BaseJs(engine);
      //RChangePropertyOperation.prototype = new RChangePropertyOperation_Wrapper(engine);
      RChangePropertyOperation.prototype = new Object();

      RChangePropertyOperation.prototype.toString = function() {
          //return "RChangePropertyOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RChangePropertyOperation [JS]";
        };
      RChangePropertyOperation.getObjectType = function() {
        return RJSType_RChangePropertyOperation.getIdStatic();
      };

      RChangePropertyOperation.prototype.getObjectType = function() {
        return RJSType_RChangePropertyOperation.getIdStatic();
      };

      RChangePropertyOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RChangePropertyOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
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
      //RChangePropertyOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RChangePropertyOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    