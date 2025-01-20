
      // auto generated
      //var self;

      // class constructor:
      function RTransactionStack() {
        

        // should be RTransactionStack_BaseJs.call(this, engine):
        //RTransactionStack.prototype = new RTransactionStack_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransactionStack.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RTransactionStack);
                
            //}
          }
          else {
            qWarning("RTransactionStack.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTransactionStack_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RTransactionStack);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransactionStack);
  }

  
  else {
    
        print("RTransactionStack(): wrong number / type of arguments");
      
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

      //RTransactionStack.prototype = new RTransactionStack_BaseJs(engine);
      //RTransactionStack.prototype = new RTransactionStack_Wrapper(engine);
      RTransactionStack.prototype = new Object();

      RTransactionStack.prototype.toString = function() {
          //return "RTransactionStack [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransactionStack [JS]";
        };
      RTransactionStack.getObjectType = function() {
        return RJSType_RTransactionStack.getIdStatic();
      };

      RTransactionStack.prototype.getObjectType = function() {
        return RJSType_RTransactionStack.getIdStatic();
      };

      RTransactionStack.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransactionStack.getIdStatic()) {
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
      //RTransactionStack.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransactionStack.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      