
      // auto generated
      //var self;

      // class constructor:
      function RClickReferencePointOperation() {
        

        // should be RClickReferencePointOperation_BaseJs.call(this, engine):
        //RClickReferencePointOperation.prototype = new RClickReferencePointOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RClickReferencePointOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RClickReferencePointOperation);
                
            //}
          }
          else {
            qWarning("RClickReferencePointOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RClickReferencePointOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RClickReferencePointOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RClickReferencePointOperation);
  }

  
  else {
    
        print("RClickReferencePointOperation(): wrong number / type of arguments");
      
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

      //RClickReferencePointOperation.prototype = new RClickReferencePointOperation_BaseJs(engine);
      //RClickReferencePointOperation.prototype = new RClickReferencePointOperation_Wrapper(engine);
      RClickReferencePointOperation.prototype = new Object();

      RClickReferencePointOperation.prototype.toString = function() {
          //return "RClickReferencePointOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RClickReferencePointOperation [JS]";
        };
      RClickReferencePointOperation.getObjectType = function() {
        return RJSType_RClickReferencePointOperation.getIdStatic();
      };

      RClickReferencePointOperation.prototype.getObjectType = function() {
        return RJSType_RClickReferencePointOperation.getIdStatic();
      };

      RClickReferencePointOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RClickReferencePointOperation.getIdStatic()) {
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
      //RClickReferencePointOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RClickReferencePointOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      