
      // auto generated
      //var self;

      // class constructor:
      function RAddObjectOperation() {
        

        // should be RAddObjectOperation_BaseJs.call(this, engine):
        //RAddObjectOperation.prototype = new RAddObjectOperation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAddObjectOperation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RAddObjectOperation);
            //}
          }
          else {
            qWarning("RAddObjectOperation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RAddObjectOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAddObjectOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectOperation);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RAddObjectOperation_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAddObjectOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectOperation);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAddObjectOperation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RAddObjectOperation);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAddObjectOperation);
  }

  
  else {
    
        print("RAddObjectOperation(): wrong number / type of arguments");
      
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

      //RAddObjectOperation.prototype = new RAddObjectOperation_BaseJs(engine);
      //RAddObjectOperation.prototype = new RAddObjectOperation_Wrapper(engine);
      RAddObjectOperation.prototype = new Object();

      RAddObjectOperation.prototype.toString = function() {
          //return "RAddObjectOperation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAddObjectOperation [JS]";
        };
      RAddObjectOperation.getObjectType = function() {
        return RJSType_RAddObjectOperation.getIdStatic();
      };

      RAddObjectOperation.prototype.getObjectType = function() {
        return RJSType_RAddObjectOperation.getIdStatic();
      };

      RAddObjectOperation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAddObjectOperation.getIdStatic()) {
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
RAddObjectOperation.NoFlags = RAddObjectOperation_Wrapper.NoFlags;
RAddObjectOperation.UseAttributes = RAddObjectOperation_Wrapper.UseAttributes;
RAddObjectOperation.ForceNew = RAddObjectOperation_Wrapper.ForceNew;
RAddObjectOperation.GeometryOnly = RAddObjectOperation_Wrapper.GeometryOnly;
RAddObjectOperation.Delete = RAddObjectOperation_Wrapper.Delete;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAddObjectOperation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAddObjectOperation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    