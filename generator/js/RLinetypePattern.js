
      // auto generated
      //var self;

      // class constructor:
      function RLinetypePattern() {
        

        // should be RLinetypePattern_BaseJs.call(this, engine):
        //RLinetypePattern.prototype = new RLinetypePattern_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinetypePattern.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLinetypePattern);
            //}
          }
          else {
            qWarning("RLinetypePattern.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RLinetypePattern_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetypePattern);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RLinetypePattern_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetypePattern);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLinetypePattern_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetypePattern);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else {
    
        print("RLinetypePattern(): wrong number / type of arguments");
      
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

      //RLinetypePattern.prototype = new RLinetypePattern_BaseJs(engine);
      //RLinetypePattern.prototype = new RLinetypePattern_Wrapper(engine);
      RLinetypePattern.prototype = new Object();

      RLinetypePattern.prototype.toString = function() {
          //return "RLinetypePattern [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinetypePattern [JS]";
        };
      RLinetypePattern.getObjectType = function() {
        return RJSType_RLinetypePattern.getIdStatic();
      };

      RLinetypePattern.prototype.getObjectType = function() {
        return RJSType_RLinetypePattern.getIdStatic();
      };

      RLinetypePattern.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinetypePattern.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RLinetypePattern.initNameMap = function() 
          
        {
          //print("JS: RLinetypePattern.initNameMap");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetypePattern_WrapperSingletonInstance.initNameMap(
                  
                );
              

        //copyProperties(this, wrapper, RLinetypePattern);
  }

  
  else {
    
        print("RLinetypePattern.initNameMap(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLinetypePattern.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinetypePattern.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    