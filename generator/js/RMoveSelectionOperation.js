
      // auto generated
      //var self;

      // class constructor:
      function RMoveSelectionOperation() {
        

        // should be RMoveSelectionOperation_BaseJs.call(this, engine):
        //RMoveSelectionOperation.prototype = new RMoveSelectionOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMoveSelectionOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RMoveSelectionOperation);
                
            //}
          }
          else {
            qWarning("RMoveSelectionOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RMoveSelectionOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RMoveSelectionOperation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMoveSelectionOperation);
  }

  
  else {
    
        print("RMoveSelectionOperation(): wrong number / type of arguments");
      
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

      //RMoveSelectionOperation.prototype = new RMoveSelectionOperation_BaseJs(engine);
      //RMoveSelectionOperation.prototype = new RMoveSelectionOperation_Wrapper(engine);
      RMoveSelectionOperation.prototype = new Object();

      RMoveSelectionOperation.prototype.toString = function() {
          //return "RMoveSelectionOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMoveSelectionOperation [JS]";
        };
      RMoveSelectionOperation.getObjectType = function() {
        return RJSType_RMoveSelectionOperation.getIdStatic();
      };

      RMoveSelectionOperation.prototype.getObjectType = function() {
        return RJSType_RMoveSelectionOperation.getIdStatic();
      };

      RMoveSelectionOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMoveSelectionOperation.getIdStatic()) {
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
      //RMoveSelectionOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMoveSelectionOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      