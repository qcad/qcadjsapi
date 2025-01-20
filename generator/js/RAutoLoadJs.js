
      // auto generated
      //var self;

      // class constructor:
      function RAutoLoadJs() {
        

        // should be RAutoLoadJs_BaseJs.call(this, engine):
        //RAutoLoadJs.prototype = new RAutoLoadJs_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAutoLoadJs.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RAutoLoadJs);
                
            //}
          }
          else {
            qWarning("RAutoLoadJs.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAutoLoadJs_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RAutoLoadJs);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAutoLoadJs);
  }

  
  else {
    
        print("RAutoLoadJs(): wrong number / type of arguments");
      
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

      //RAutoLoadJs.prototype = new RAutoLoadJs_BaseJs(engine);
      //RAutoLoadJs.prototype = new RAutoLoadJs_Wrapper(engine);
      RAutoLoadJs.prototype = new Object();

      RAutoLoadJs.prototype.toString = function() {
          //return "RAutoLoadJs [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAutoLoadJs [JS]";
        };
      RAutoLoadJs.getObjectType = function() {
        return RJSType_RAutoLoadJs.getIdStatic();
      };

      RAutoLoadJs.prototype.getObjectType = function() {
        return RJSType_RAutoLoadJs.getIdStatic();
      };

      RAutoLoadJs.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAutoLoadJs.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RAutoLoadJs.addAutoLoadFile = function() 
          
        {
          //print("JS: RAutoLoadJs.addAutoLoadFile");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RAutoLoadJs_WrapperSingletonInstance.addAutoLoadFile(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RAutoLoadJs);
  }

  
  else {
    
        print("RAutoLoadJs.addAutoLoadFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAutoLoadJs.getAutoLoadFiles = function() 
          
        {
          //print("JS: RAutoLoadJs.getAutoLoadFiles");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAutoLoadJs_WrapperSingletonInstance.getAutoLoadFiles(
                  
                );
              

        //copyProperties(this, wrapper, RAutoLoadJs);
  }

  
  else {
    
        print("RAutoLoadJs.getAutoLoadFiles(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAutoLoadJs.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAutoLoadJs.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      