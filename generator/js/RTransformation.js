
      // auto generated
      //var self;

      // class constructor:
      function RTransformation() {
        

        // should be RTransformation_BaseJs.call(this, engine):
        //RTransformation.prototype = new RTransformation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransformation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RTransformation);
                
            //}
          }
          else {
            qWarning("RTransformation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTransformation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RTransformation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTransformation);
  }

  
  else {
    
        print("RTransformation(): wrong number / type of arguments");
      
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

      //RTransformation.prototype = new RTransformation_BaseJs(engine);
      //RTransformation.prototype = new RTransformation_Wrapper(engine);
      RTransformation.prototype = new Object();

      RTransformation.prototype.toString = function() {
          //return "RTransformation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransformation [JS]";
        };
      RTransformation.getObjectType = function() {
        return RJSType_RTransformation.getIdStatic();
      };

      RTransformation.prototype.getObjectType = function() {
        return RJSType_RTransformation.getIdStatic();
      };

      RTransformation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransformation.getIdStatic()) {
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
      //RTransformation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransformation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      