
      // auto generated
      //var self;

      // class constructor:
      function RModifyObjectOperation() {
        

        // should be RModifyObjectOperation_BaseJs.call(this, engine):
        //RModifyObjectOperation.prototype = new RModifyObjectOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RModifyObjectOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RModifyObjectOperation);
                
            //}
          }
          else {
            qWarning("RModifyObjectOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RModifyObjectOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RModifyObjectOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RModifyObjectOperation);
  }

  
  else {
    
        print("RModifyObjectOperation(): wrong number / type of arguments");
      
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

      //RModifyObjectOperation.prototype = new RModifyObjectOperation_BaseJs(engine);
      //RModifyObjectOperation.prototype = new RModifyObjectOperation_Wrapper(engine);
      RModifyObjectOperation.prototype = new Object();

      RModifyObjectOperation.prototype.toString = function() {
          //return "RModifyObjectOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RModifyObjectOperation [JS]";
        };
      RModifyObjectOperation.getObjectType = function() {
        return RJSType_RModifyObjectOperation.getIdStatic();
      };

      RModifyObjectOperation.prototype.getObjectType = function() {
        return RJSType_RModifyObjectOperation.getIdStatic();
      };

      RModifyObjectOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RModifyObjectOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RAddObjectOperation.getIdStatic()) {
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
      //RModifyObjectOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RModifyObjectOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      