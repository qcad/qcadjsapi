
      // auto generated
      //var self;

      // class constructor:
      function RDeleteSelectionOperation() {
        

        // should be RDeleteSelectionOperation_BaseJs.call(this, engine):
        //RDeleteSelectionOperation.prototype = new RDeleteSelectionOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDeleteSelectionOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RDeleteSelectionOperation);
                
            //}
          }
          else {
            qWarning("RDeleteSelectionOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDeleteSelectionOperation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RDeleteSelectionOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDeleteSelectionOperation);
  }

  
  else {
    
        print("RDeleteSelectionOperation(): wrong number / type of arguments");
      
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

      //RDeleteSelectionOperation.prototype = new RDeleteSelectionOperation_BaseJs(engine);
      //RDeleteSelectionOperation.prototype = new RDeleteSelectionOperation_Wrapper(engine);
      RDeleteSelectionOperation.prototype = new Object();

      RDeleteSelectionOperation.prototype.toString = function() {
          //return "RDeleteSelectionOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDeleteSelectionOperation [JS]";
        };
      RDeleteSelectionOperation.getObjectType = function() {
        return RJSType_RDeleteSelectionOperation.getIdStatic();
      };

      RDeleteSelectionOperation.prototype.getObjectType = function() {
        return RJSType_RDeleteSelectionOperation.getIdStatic();
      };

      RDeleteSelectionOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDeleteSelectionOperation.getIdStatic()) {
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
      //RDeleteSelectionOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDeleteSelectionOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      