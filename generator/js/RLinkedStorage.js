
      // auto generated
      //var self;

      // class constructor:
      function RLinkedStorage() {
        

        // should be RLinkedStorage_BaseJs.call(this, engine):
        //RLinkedStorage.prototype = new RLinkedStorage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinkedStorage.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RLinkedStorage);
                
            //}
          }
          else {
            qWarning("RLinkedStorage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLinkedStorage_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RLinkedStorage);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinkedStorage);
  }

  
  else {
    
        print("RLinkedStorage(): wrong number / type of arguments");
      
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

      //RLinkedStorage.prototype = new RLinkedStorage_BaseJs(engine);
      //RLinkedStorage.prototype = new RLinkedStorage_Wrapper(engine);
      RLinkedStorage.prototype = new Object();

      RLinkedStorage.prototype.toString = function() {
          //return "RLinkedStorage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinkedStorage [JS]";
        };
      RLinkedStorage.getObjectType = function() {
        return RJSType_RLinkedStorage.getIdStatic();
      };

      RLinkedStorage.prototype.getObjectType = function() {
        return RJSType_RLinkedStorage.getIdStatic();
      };

      RLinkedStorage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinkedStorage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RStorage.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RMemoryStorage.getIdStatic()) {
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
      //RLinkedStorage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinkedStorage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      