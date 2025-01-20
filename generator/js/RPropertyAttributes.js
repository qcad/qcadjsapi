
      // auto generated
      //var self;

      // class constructor:
      function RPropertyAttributes() {
        

        // should be RPropertyAttributes_BaseJs.call(this, engine):
        //RPropertyAttributes.prototype = new RPropertyAttributes_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyAttributes.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPropertyAttributes);
                
            //}
          }
          else {
            qWarning("RPropertyAttributes.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPropertyAttributes_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPropertyAttributes);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyAttributes);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPropertyAttributes_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPropertyAttributes);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyAttributes);
  }

  
  else {
    
        print("RPropertyAttributes(): wrong number / type of arguments");
      
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

      //RPropertyAttributes.prototype = new RPropertyAttributes_BaseJs(engine);
      //RPropertyAttributes.prototype = new RPropertyAttributes_Wrapper(engine);
      RPropertyAttributes.prototype = new Object();

      RPropertyAttributes.prototype.toString = function() {
          //return "RPropertyAttributes [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyAttributes [JS]";
        };
      RPropertyAttributes.getObjectType = function() {
        return RJSType_RPropertyAttributes.getIdStatic();
      };

      RPropertyAttributes.prototype.getObjectType = function() {
        return RJSType_RPropertyAttributes.getIdStatic();
      };

      RPropertyAttributes.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyAttributes.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPropertyAttributes.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyAttributes.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      