
      // auto generated
      //var self;

      // class constructor:
      function RDeleteObjectsOperation() {
        

        // should be RDeleteObjectsOperation_BaseJs.call(this, engine):
        //RDeleteObjectsOperation.prototype = new RDeleteObjectsOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteObjectsOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDeleteObjectsOperation);
            //}
          }
          else {
            qWarning("RDeleteObjectsOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RDeleteObjectsOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDeleteObjectsOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDeleteObjectsOperation);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDeleteObjectsOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDeleteObjectsOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDeleteObjectsOperation);
  }

  
  else {
    
        print("RDeleteObjectsOperation(): wrong number / type of arguments");
      
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

      //RDeleteObjectsOperation.prototype = new RDeleteObjectsOperation_BaseJs(engine);
      //RDeleteObjectsOperation.prototype = new RDeleteObjectsOperation_Wrapper(engine);
      RDeleteObjectsOperation.prototype = new Object();

      RDeleteObjectsOperation.prototype.toString = function() {
          //return "RDeleteObjectsOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteObjectsOperation [JS]";
        };
      RDeleteObjectsOperation.getObjectType = function() {
        return RJSType_RDeleteObjectsOperation.getIdStatic();
      };

      RDeleteObjectsOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteObjectsOperation.getIdStatic();
      };

      RDeleteObjectsOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteObjectsOperation.getIdStatic()) {
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
      //RDeleteObjectsOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteObjectsOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    