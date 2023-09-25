
      // auto generated
      //var self;

      // class constructor:
      function RPatternListImperial() {
        

        // should be RPatternListImperial_BaseJs.call(this, engine):
        //RPatternListImperial.prototype = new RPatternListImperial_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPatternListImperial.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPatternListImperial);
            //}
          }
          else {
            qWarning("RPatternListImperial.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPatternListImperial.js: No constructor found for class RPatternListImperial");
            
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

      //RPatternListImperial.prototype = new RPatternListImperial_BaseJs(engine);
      //RPatternListImperial.prototype = new RPatternListImperial_Wrapper(engine);
      RPatternListImperial.prototype = new Object();

      RPatternListImperial.prototype.toString = function() {
          //return "RPatternListImperial [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPatternListImperial [JS]";
        };
      RPatternListImperial.getObjectType = function() {
        return RJSType_RPatternListImperial.getIdStatic();
      };

      RPatternListImperial.prototype.getObjectType = function() {
        return RJSType_RPatternListImperial.getIdStatic();
      };

      RPatternListImperial.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPatternListImperial.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RPatternList.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RPatternListImperial.init = function() 
          
        {
          //print("JS: RPatternListImperial.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPatternListImperial_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPatternListImperial);
  }

  
  else {
    
        print("RPatternListImperial.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPatternListImperial.uninit = function() 
          
        {
          //print("JS: RPatternListImperial.uninit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPatternListImperial_WrapperSingletonInstance.uninit(
                  
                );
              

        //copyProperties(this, wrapper, RPatternListImperial);
  }

  
  else {
    
        print("RPatternListImperial.uninit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPatternListImperial.getNames = function() 
          
        {
          //print("JS: RPatternListImperial.getNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPatternListImperial_WrapperSingletonInstance.getNames(
                  
                );
              

        //copyProperties(this, wrapper, RPatternListImperial);
  }

  
  else {
    
        print("RPatternListImperial.getNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPatternListImperial.get = function() 
          
        {
          //print("JS: RPatternListImperial.get");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPatternListImperial_WrapperSingletonInstance.get(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPatternListImperial);
  }

  
  else {
    
        print("RPatternListImperial.get(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPatternListImperial.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPatternListImperial.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    