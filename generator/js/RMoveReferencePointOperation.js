
      // auto generated
      //var self;

      // class constructor:
      function RMoveReferencePointOperation() {
        

        // should be RMoveReferencePointOperation_BaseJs.call(this, engine):
        //RMoveReferencePointOperation.prototype = new RMoveReferencePointOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMoveReferencePointOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMoveReferencePointOperation);
            //}
          }
          else {
            qWarning("RMoveReferencePointOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RMoveReferencePointOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMoveReferencePointOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMoveReferencePointOperation);
  }

  
  else {
    
        print("RMoveReferencePointOperation(): wrong number / type of arguments");
      
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

      //RMoveReferencePointOperation.prototype = new RMoveReferencePointOperation_BaseJs(engine);
      //RMoveReferencePointOperation.prototype = new RMoveReferencePointOperation_Wrapper(engine);
      RMoveReferencePointOperation.prototype = new Object();

      RMoveReferencePointOperation.prototype.toString = function() {
          //return "RMoveReferencePointOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMoveReferencePointOperation [JS]";
        };
      RMoveReferencePointOperation.getObjectType = function() {
        return RJSType_RMoveReferencePointOperation.getIdStatic();
      };

      RMoveReferencePointOperation.prototype.getObjectType = function() {
        return RJSType_RMoveReferencePointOperation.getIdStatic();
      };

      RMoveReferencePointOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMoveReferencePointOperation.getIdStatic()) {
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
      //RMoveReferencePointOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMoveReferencePointOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    