
      // auto generated
      //var self;

      // class constructor:
      function RSnapRestriction() {
        

        // should be RSnapRestriction_BaseJs.call(this, engine):
        //RSnapRestriction.prototype = new RSnapRestriction_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapRestriction.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSnapRestriction);
            //}
          }
          else {
            qWarning("RSnapRestriction.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSnapRestriction.js: No constructor found for class RSnapRestriction");
            
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

      //RSnapRestriction.prototype = new RSnapRestriction_BaseJs(engine);
      //RSnapRestriction.prototype = new RSnapRestriction_Wrapper(engine);
      RSnapRestriction.prototype = new Object();

      RSnapRestriction.prototype.toString = function() {
          //return "RSnapRestriction [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapRestriction [JS]";
        };
      RSnapRestriction.getObjectType = function() {
        return RJSType_RSnapRestriction.getIdStatic();
      };

      RSnapRestriction.prototype.getObjectType = function() {
        return RJSType_RSnapRestriction.getIdStatic();
      };

      RSnapRestriction.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapRestriction.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RSnapRestriction.prototype.showUiOptions = function() 
          
        {
          //print("JS: RSnapRestriction.prototype.showUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapRestriction);
  }

  
  else {
    
        print("RSnapRestriction.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RSnapRestriction.prototype.hideUiOptions = function() 
          
        {
          //print("JS: RSnapRestriction.prototype.hideUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RSnapRestriction);
  }

  
  else {
    
        print("RSnapRestriction.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapRestriction.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapRestriction.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    