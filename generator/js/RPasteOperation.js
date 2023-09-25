
      // auto generated
      //var self;

      // class constructor:
      function RPasteOperation() {
        

        // should be RPasteOperation_BaseJs.call(this, engine):
        //RPasteOperation.prototype = new RPasteOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPasteOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPasteOperation);
            //}
          }
          else {
            qWarning("RPasteOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPasteOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPasteOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPasteOperation);
  }

  
  else {
    
        print("RPasteOperation(): wrong number / type of arguments");
      
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

      //RPasteOperation.prototype = new RPasteOperation_BaseJs(engine);
      //RPasteOperation.prototype = new RPasteOperation_Wrapper(engine);
      RPasteOperation.prototype = new Object();

      RPasteOperation.prototype.toString = function() {
          //return "RPasteOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPasteOperation [JS]";
        };
      RPasteOperation.getObjectType = function() {
        return RJSType_RPasteOperation.getIdStatic();
      };

      RPasteOperation.prototype.getObjectType = function() {
        return RJSType_RPasteOperation.getIdStatic();
      };

      RPasteOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPasteOperation.getIdStatic()) {
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
      //RPasteOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPasteOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    