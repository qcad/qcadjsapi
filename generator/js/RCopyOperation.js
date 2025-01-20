
      // auto generated
      //var self;

      // class constructor:
      function RCopyOperation() {
        

        // should be RCopyOperation_BaseJs.call(this, engine):
        //RCopyOperation.prototype = new RCopyOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCopyOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RCopyOperation);
                
            //}
          }
          else {
            qWarning("RCopyOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCopyOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RCopyOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCopyOperation);
  }

  
  else {
    
        print("RCopyOperation(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //RCopyOperation.prototype = new RCopyOperation_BaseJs(engine);
      //RCopyOperation.prototype = new RCopyOperation_Wrapper(engine);
      RCopyOperation.prototype = new Object();

      RCopyOperation.prototype.toString = function() {
          //return "RCopyOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCopyOperation [JS]";
        };
      RCopyOperation.getObjectType = function() {
        return RJSType_RCopyOperation.getIdStatic();
      };

      RCopyOperation.prototype.getObjectType = function() {
        return RJSType_RCopyOperation.getIdStatic();
      };

      RCopyOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCopyOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RClipboardOperation.getIdStatic()) {
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
      //RCopyOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCopyOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      