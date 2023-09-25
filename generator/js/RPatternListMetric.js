
      // auto generated
      //var self;

      // class constructor:
      function RPatternListMetric() {
        

        // should be RPatternListMetric_BaseJs.call(this, engine):
        //RPatternListMetric.prototype = new RPatternListMetric_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPatternListMetric.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPatternListMetric);
            //}
          }
          else {
            qWarning("RPatternListMetric.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPatternListMetric.js: No constructor found for class RPatternListMetric");
            
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

      //RPatternListMetric.prototype = new RPatternListMetric_BaseJs(engine);
      //RPatternListMetric.prototype = new RPatternListMetric_Wrapper(engine);
      RPatternListMetric.prototype = new Object();

      RPatternListMetric.prototype.toString = function() {
          //return "RPatternListMetric [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPatternListMetric [JS]";
        };
      RPatternListMetric.getObjectType = function() {
        return RJSType_RPatternListMetric.getIdStatic();
      };

      RPatternListMetric.prototype.getObjectType = function() {
        return RJSType_RPatternListMetric.getIdStatic();
      };

      RPatternListMetric.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPatternListMetric.getIdStatic()) {
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
        RPatternListMetric.init = function() 
          
        {
          //print("JS: RPatternListMetric.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPatternListMetric_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPatternListMetric);
  }

  
  else {
    
        print("RPatternListMetric.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPatternListMetric.uninit = function() 
          
        {
          //print("JS: RPatternListMetric.uninit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPatternListMetric_WrapperSingletonInstance.uninit(
                  
                );
              

        //copyProperties(this, wrapper, RPatternListMetric);
  }

  
  else {
    
        print("RPatternListMetric.uninit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPatternListMetric.getNames = function() 
          
        {
          //print("JS: RPatternListMetric.getNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPatternListMetric_WrapperSingletonInstance.getNames(
                  
                );
              

        //copyProperties(this, wrapper, RPatternListMetric);
  }

  
  else {
    
        print("RPatternListMetric.getNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPatternListMetric.get = function() 
          
        {
          //print("JS: RPatternListMetric.get");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPatternListMetric_WrapperSingletonInstance.get(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPatternListMetric);
  }

  
  else {
    
        print("RPatternListMetric.get(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPatternListMetric.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPatternListMetric.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    