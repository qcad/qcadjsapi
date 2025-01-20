
      // auto generated
      //var self;

      // class constructor:
      function RPatternLine() {
        

        // should be RPatternLine_BaseJs.call(this, engine):
        //RPatternLine.prototype = new RPatternLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPatternLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPatternLine);
                
            //}
          }
          else {
            qWarning("RPatternLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPatternLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPatternLine);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPatternLine);
  }

  
  else {
    
        print("RPatternLine(): wrong number / type of arguments");
      
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

      //RPatternLine.prototype = new RPatternLine_BaseJs(engine);
      //RPatternLine.prototype = new RPatternLine_Wrapper(engine);
      RPatternLine.prototype = new Object();

      RPatternLine.prototype.toString = function() {
          //return "RPatternLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPatternLine [JS]";
        };
      RPatternLine.getObjectType = function() {
        return RJSType_RPatternLine.getIdStatic();
      };

      RPatternLine.prototype.getObjectType = function() {
        return RJSType_RPatternLine.getIdStatic();
      };

      RPatternLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPatternLine.getIdStatic()) {
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
      //RPatternLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPatternLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      