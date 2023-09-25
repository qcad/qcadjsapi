
      // auto generated
      //var self;

      // class constructor:
      function RRestrictAngleLength() {
        

        // should be RRestrictAngleLength_BaseJs.call(this, engine):
        //RRestrictAngleLength.prototype = new RRestrictAngleLength_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRestrictAngleLength.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRestrictAngleLength);
            //}
          }
          else {
            qWarning("RRestrictAngleLength.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new RRestrictAngleLength_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRestrictAngleLength);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRestrictAngleLength);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RRestrictAngleLength_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRestrictAngleLength);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRestrictAngleLength);
  }

  
  else {
    
        print("RRestrictAngleLength(): wrong number / type of arguments");
      
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

      //RRestrictAngleLength.prototype = new RRestrictAngleLength_BaseJs(engine);
      //RRestrictAngleLength.prototype = new RRestrictAngleLength_Wrapper(engine);
      RRestrictAngleLength.prototype = new Object();

      RRestrictAngleLength.prototype.toString = function() {
          //return "RRestrictAngleLength [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRestrictAngleLength [JS]";
        };
      RRestrictAngleLength.getObjectType = function() {
        return RJSType_RRestrictAngleLength.getIdStatic();
      };

      RRestrictAngleLength.prototype.getObjectType = function() {
        return RJSType_RRestrictAngleLength.getIdStatic();
      };

      RRestrictAngleLength.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRestrictAngleLength.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSnapRestriction.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: AngleLengthMode
RRestrictAngleLength.None = RRestrictAngleLength_Wrapper.None;
RRestrictAngleLength.Angle = RRestrictAngleLength_Wrapper.Angle;
RRestrictAngleLength.Length = RRestrictAngleLength_Wrapper.Length;
RRestrictAngleLength.AngleLength = RRestrictAngleLength_Wrapper.AngleLength;


      // functions:
      
        // function 
        RRestrictAngleLength.prototype.showUiOptions = function() 
          
        {
          //print("JS: RRestrictAngleLength.prototype.showUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.showUiOptions(
                // call highest level JS implementation:
                //return this.showUiOptionsBase(
                return this.showUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictAngleLength);
  }

  
  else {
    
        print("RRestrictAngleLength.showUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
        // function 
        RRestrictAngleLength.prototype.hideUiOptions = function() 
          
        {
          //print("JS: RRestrictAngleLength.prototype.hideUiOptions");
          
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.hideUiOptions(
                // call highest level JS implementation:
                //return this.hideUiOptionsBase(
                return this.hideUiOptionsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RRestrictAngleLength);
  }

  
  else {
    
        print("RRestrictAngleLength.hideUiOptions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRestrictAngleLength.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRestrictAngleLength.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    