
      // auto generated
      //var self;

      // class constructor:
      function RRestrictVertical() {
        

        // should be RRestrictVertical_BaseJs.call(this, engine):
        //RRestrictVertical.prototype = new RRestrictVertical_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRestrictVertical.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RRestrictVertical);
                
            //}
          }
          else {
            qWarning("RRestrictVertical.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRestrictVertical_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RRestrictVertical);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRestrictVertical);
  }

  
  else {
    
        print("RRestrictVertical(): wrong number / type of arguments");
      
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

      //RRestrictVertical.prototype = new RRestrictVertical_BaseJs(engine);
      //RRestrictVertical.prototype = new RRestrictVertical_Wrapper(engine);
      RRestrictVertical.prototype = new Object();

      RRestrictVertical.prototype.toString = function() {
          //return "RRestrictVertical [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRestrictVertical [JS]";
        };
      RRestrictVertical.getObjectType = function() {
        return RJSType_RRestrictVertical.getIdStatic();
      };

      RRestrictVertical.prototype.getObjectType = function() {
        return RJSType_RRestrictVertical.getIdStatic();
      };

      RRestrictVertical.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRestrictVertical.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnapRestriction.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RRestrictOrthogonal.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RRestrictVertical.prototype.showUiOptions = function() 
        
      {
        //print("JS: RRestrictVertical.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictVertical);
  }

  
  else {
    
        print("RRestrictVertical.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RRestrictVertical.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RRestrictVertical.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictVertical);
  }

  
  else {
    
        print("RRestrictVertical.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRestrictVertical.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRestrictVertical.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      