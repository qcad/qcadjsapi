
      // auto generated
      //var self;

      // class constructor:
      function RPropertyChange() {
        

        // should be RPropertyChange_BaseJs.call(this, engine):
        //RPropertyChange.prototype = new RPropertyChange_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPropertyChange.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPropertyChange);
                
            //}
          }
          else {
            qWarning("RPropertyChange.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RPropertyChange_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPropertyChange);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyChange);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPropertyChange_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPropertyChange);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPropertyChange);
  }

  
  else {
    
        print("RPropertyChange(): wrong number / type of arguments");
      
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

      //RPropertyChange.prototype = new RPropertyChange_BaseJs(engine);
      //RPropertyChange.prototype = new RPropertyChange_Wrapper(engine);
      RPropertyChange.prototype = new Object();

      RPropertyChange.prototype.toString = function() {
          //return "RPropertyChange [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPropertyChange [JS]";
        };
      RPropertyChange.getObjectType = function() {
        return RJSType_RPropertyChange.getIdStatic();
      };

      RPropertyChange.prototype.getObjectType = function() {
        return RJSType_RPropertyChange.getIdStatic();
      };

      RPropertyChange.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPropertyChange.getIdStatic()) {
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
      //RPropertyChange.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPropertyChange.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      