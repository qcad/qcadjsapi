
      // auto generated
      //var self;

      // class constructor:
      function RRestrictOrthogonal() {
        

        // should be RRestrictOrthogonal_BaseJs.call(this, engine):
        //RRestrictOrthogonal.prototype = new RRestrictOrthogonal_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRestrictOrthogonal.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RRestrictOrthogonal);
                
            //}
          }
          else {
            qWarning("RRestrictOrthogonal.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRestrictOrthogonal_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RRestrictOrthogonal);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRestrictOrthogonal);
  }

  
  else {
    
        print("RRestrictOrthogonal(): wrong number / type of arguments");
      
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

      //RRestrictOrthogonal.prototype = new RRestrictOrthogonal_BaseJs(engine);
      //RRestrictOrthogonal.prototype = new RRestrictOrthogonal_Wrapper(engine);
      RRestrictOrthogonal.prototype = new Object();

      RRestrictOrthogonal.prototype.toString = function() {
          //return "RRestrictOrthogonal [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRestrictOrthogonal [JS]";
        };
      RRestrictOrthogonal.getObjectType = function() {
        return RJSType_RRestrictOrthogonal.getIdStatic();
      };

      RRestrictOrthogonal.prototype.getObjectType = function() {
        return RJSType_RRestrictOrthogonal.getIdStatic();
      };

      RRestrictOrthogonal.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRestrictOrthogonal.getIdStatic()) {
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
      RRestrictOrthogonal.prototype.showUiOptions = function() 
        
      {
        //print("JS: RRestrictOrthogonal.prototype.showUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                
                    return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictOrthogonal);
  }

  
  else {
    
        print("RRestrictOrthogonal.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RRestrictOrthogonal.prototype.hideUiOptions = function() 
        
      {
        //print("JS: RRestrictOrthogonal.prototype.hideUiOptions");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                
                    return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictOrthogonal);
  }

  
  else {
    
        print("RRestrictOrthogonal.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRestrictOrthogonal.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRestrictOrthogonal.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      