
      // auto generated
      //var self;

      // class constructor:
      function RAddObjectsOperation() {
        

        // should be RAddObjectsOperation_BaseJs.call(this, engine):
        //RAddObjectsOperation.prototype = new RAddObjectsOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAddObjectsOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RAddObjectsOperation);
            //}
          }
          else {
            qWarning("RAddObjectsOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RAddObjectsOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAddObjectsOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectsOperation);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RAddObjectsOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAddObjectsOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectsOperation);
  }

  
  else {
    
        print("RAddObjectsOperation(): wrong number / type of arguments");
      
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

      //RAddObjectsOperation.prototype = new RAddObjectsOperation_BaseJs(engine);
      //RAddObjectsOperation.prototype = new RAddObjectsOperation_Wrapper(engine);
      RAddObjectsOperation.prototype = new Object();

      RAddObjectsOperation.prototype.toString = function() {
          //return "RAddObjectsOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAddObjectsOperation [JS]";
        };
      RAddObjectsOperation.getObjectType = function() {
        return RJSType_RAddObjectsOperation.getIdStatic();
      };

      RAddObjectsOperation.prototype.getObjectType = function() {
        return RJSType_RAddObjectsOperation.getIdStatic();
      };

      RAddObjectsOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAddObjectsOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Flag
RAddObjectsOperation.NoFlags = RAddObjectsOperation_Wrapper.NoFlags;
RAddObjectsOperation.UseAttributes = RAddObjectsOperation_Wrapper.UseAttributes;
RAddObjectsOperation.ForceNew = RAddObjectsOperation_Wrapper.ForceNew;
RAddObjectsOperation.GeometryOnly = RAddObjectsOperation_Wrapper.GeometryOnly;
RAddObjectsOperation.Delete = RAddObjectsOperation_Wrapper.Delete;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAddObjectsOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAddObjectsOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    