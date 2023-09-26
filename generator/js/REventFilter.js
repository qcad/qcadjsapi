
      // auto generated
      //var self;

      // class constructor:
      function REventFilter() {
        

        // should be REventFilter_BaseJs.call(this, engine):
        //REventFilter.prototype = new REventFilter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REventFilter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REventFilter);
            //}
          }
          else {
            qWarning("REventFilter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new REventFilter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REventFilter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REventFilter);
  }

  
  else {
    
        print("REventFilter(): wrong number / type of arguments");
      
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

      //REventFilter.prototype = new REventFilter_BaseJs(engine);
      //REventFilter.prototype = new REventFilter_Wrapper(engine);
      REventFilter.prototype = new Object();

      REventFilter.prototype.toString = function() {
          //return "REventFilter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REventFilter [JS]";
        };
      REventFilter.getObjectType = function() {
        return RJSType_REventFilter.getIdStatic();
      };

      REventFilter.prototype.getObjectType = function() {
        return RJSType_REventFilter.getIdStatic();
      };

      REventFilter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REventFilter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        REventFilter.tr = function() 
          
        {
          //print("JS: REventFilter.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REventFilter_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REventFilter);
  }

  
  else {
    
        print("REventFilter.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REventFilter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REventFilter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    