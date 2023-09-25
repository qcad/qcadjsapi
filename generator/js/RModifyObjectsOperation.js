
      // auto generated
      //var self;

      // class constructor:
      function RModifyObjectsOperation() {
        

        // should be RModifyObjectsOperation_BaseJs.call(this, engine):
        //RModifyObjectsOperation.prototype = new RModifyObjectsOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RModifyObjectsOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RModifyObjectsOperation);
            //}
          }
          else {
            qWarning("RModifyObjectsOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RModifyObjectsOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RModifyObjectsOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RModifyObjectsOperation);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RModifyObjectsOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RModifyObjectsOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RModifyObjectsOperation);
  }

  
  else {
    
        print("RModifyObjectsOperation(): wrong number / type of arguments");
      
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

      //RModifyObjectsOperation.prototype = new RModifyObjectsOperation_BaseJs(engine);
      //RModifyObjectsOperation.prototype = new RModifyObjectsOperation_Wrapper(engine);
      RModifyObjectsOperation.prototype = new Object();

      RModifyObjectsOperation.prototype.toString = function() {
          //return "RModifyObjectsOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RModifyObjectsOperation [JS]";
        };
      RModifyObjectsOperation.getObjectType = function() {
        return RJSType_RModifyObjectsOperation.getIdStatic();
      };

      RModifyObjectsOperation.prototype.getObjectType = function() {
        return RJSType_RModifyObjectsOperation.getIdStatic();
      };

      RModifyObjectsOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RModifyObjectsOperation.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_ROperation.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RAddObjectsOperation.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Flag
RModifyObjectsOperation.NoFlags = RModifyObjectsOperation_Wrapper.NoFlags;
RModifyObjectsOperation.UseAttributes = RModifyObjectsOperation_Wrapper.UseAttributes;
RModifyObjectsOperation.ForceNew = RModifyObjectsOperation_Wrapper.ForceNew;
RModifyObjectsOperation.GeometryOnly = RModifyObjectsOperation_Wrapper.GeometryOnly;
RModifyObjectsOperation.Delete = RModifyObjectsOperation_Wrapper.Delete;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RModifyObjectsOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RModifyObjectsOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    