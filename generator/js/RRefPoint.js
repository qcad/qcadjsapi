
      // auto generated
      //var self;

      // class constructor:
      function RRefPoint() {
        

        // should be RRefPoint_BaseJs.call(this, engine):
        //RRefPoint.prototype = new RRefPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRefPoint.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRefPoint);
            //}
          }
          else {
            qWarning("RRefPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRefPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRefPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint(): wrong number / type of arguments");
      
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

      //RRefPoint.prototype = new RRefPoint_BaseJs(engine);
      //RRefPoint.prototype = new RRefPoint_Wrapper(engine);
      RRefPoint.prototype = new Object();

      RRefPoint.prototype.toString = function() {
          //return "RRefPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRefPoint [JS]";
        };
      RRefPoint.getObjectType = function() {
        return RJSType_RRefPoint.getIdStatic();
      };

      RRefPoint.prototype.getObjectType = function() {
        return RJSType_RRefPoint.getIdStatic();
      };

      RRefPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRefPoint.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RVector.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RRefPoint.toVectorList = function() 
          
        {
          //print("JS: RRefPoint.toVectorList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.toVectorList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.toVectorList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRefPoint.toRefPointList = function() 
          
        {
          //print("JS: RRefPoint.toRefPointList");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RRefPoint_WrapperSingletonInstance.toRefPointList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRefPoint);
  }

  
  else {
    
        print("RRefPoint.toRefPointList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RRefPoint.invalid = 
  RRefPoint_WrapperSingletonInstance.invalid;
RRefPoint.nullVector = 
  RRefPoint_WrapperSingletonInstance.nullVector;
RRefPoint.nanVector = 
  RRefPoint_WrapperSingletonInstance.nanVector;


      // copy function:
      //RRefPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRefPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    