
      // auto generated
      //var self;

      // class constructor:
      function RRestrictOff() {
        

        // should be RRestrictOff_BaseJs.call(this, engine):
        //RRestrictOff.prototype = new RRestrictOff_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRestrictOff.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RRestrictOff);
                
            //}
          }
          else {
            qWarning("RRestrictOff.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RRestrictOff_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RRestrictOff);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRestrictOff);
  }

  
  else {
    
        print("RRestrictOff(): wrong number / type of arguments");
      
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

      //RRestrictOff.prototype = new RRestrictOff_BaseJs(engine);
      //RRestrictOff.prototype = new RRestrictOff_Wrapper(engine);
      RRestrictOff.prototype = new Object();

      RRestrictOff.prototype.toString = function() {
          //return "RRestrictOff [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRestrictOff [JS]";
        };
      RRestrictOff.getObjectType = function() {
        return RJSType_RRestrictOff.getIdStatic();
      };

      RRestrictOff.prototype.getObjectType = function() {
        return RJSType_RRestrictOff.getIdStatic();
      };

      RRestrictOff.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRestrictOff.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnapRestriction.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RRestrictOff.prototype.showUiOptions = function() 
        
      {
        //print("JS: RRestrictOff.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictOff);
  }

  
  else {
    
        print("RRestrictOff.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RRestrictOff.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RRestrictOff.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictOff);
  }

  
  else {
    
        print("RRestrictOff.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRestrictOff.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRestrictOff.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      