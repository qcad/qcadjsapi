
      // auto generated
      //var self;

      // class constructor:
      function RScaleSelectionOperation() {
        

        // should be RScaleSelectionOperation_BaseJs.call(this, engine):
        //RScaleSelectionOperation.prototype = new RScaleSelectionOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RScaleSelectionOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RScaleSelectionOperation);
                
            //}
          }
          else {
            qWarning("RScaleSelectionOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RScaleSelectionOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RScaleSelectionOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RScaleSelectionOperation);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RScaleSelectionOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RScaleSelectionOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RScaleSelectionOperation);
  }

  
  else {
    
        print("RScaleSelectionOperation(): wrong number / type of arguments");
      
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

      //RScaleSelectionOperation.prototype = new RScaleSelectionOperation_BaseJs(engine);
      //RScaleSelectionOperation.prototype = new RScaleSelectionOperation_Wrapper(engine);
      RScaleSelectionOperation.prototype = new Object();

      RScaleSelectionOperation.prototype.toString = function() {
          //return "RScaleSelectionOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RScaleSelectionOperation [JS]";
        };
      RScaleSelectionOperation.getObjectType = function() {
        return RJSType_RScaleSelectionOperation.getIdStatic();
      };

      RScaleSelectionOperation.prototype.getObjectType = function() {
        return RJSType_RScaleSelectionOperation.getIdStatic();
      };

      RScaleSelectionOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RScaleSelectionOperation.getIdStatic()) {
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
      //RScaleSelectionOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RScaleSelectionOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      