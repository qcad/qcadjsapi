
      // auto generated
      //var self;

      // class constructor:
      function RSpatialIndex() {
        

        // should be RSpatialIndex_BaseJs.call(this, engine):
        //RSpatialIndex.prototype = new RSpatialIndex_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpatialIndex.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSpatialIndex);
            //}
          }
          else {
            qWarning("RSpatialIndex.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSpatialIndex.js: No constructor found for class RSpatialIndex");
            
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

      //RSpatialIndex.prototype = new RSpatialIndex_BaseJs(engine);
      //RSpatialIndex.prototype = new RSpatialIndex_Wrapper(engine);
      RSpatialIndex.prototype = new Object();

      RSpatialIndex.prototype.toString = function() {
          //return "RSpatialIndex [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpatialIndex [JS]";
        };
      RSpatialIndex.getObjectType = function() {
        return RJSType_RSpatialIndex.getIdStatic();
      };

      RSpatialIndex.prototype.getObjectType = function() {
        return RJSType_RSpatialIndex.getIdStatic();
      };

      RSpatialIndex.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpatialIndex.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RSpatialIndex.getSIId = function() 
          
        {
          //print("JS: RSpatialIndex.getSIId");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RSpatialIndex_WrapperSingletonInstance.getSIId(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RSpatialIndex);
  }

  
  else {
    
        print("RSpatialIndex.getSIId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpatialIndex.getId = function() 
          
        {
          //print("JS: RSpatialIndex.getId");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpatialIndex_WrapperSingletonInstance.getId(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpatialIndex);
  }

  
  else {
    
        print("RSpatialIndex.getId(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpatialIndex.getPos = function() 
          
        {
          //print("JS: RSpatialIndex.getPos");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpatialIndex_WrapperSingletonInstance.getPos(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpatialIndex);
  }

  
  else {
    
        print("RSpatialIndex.getPos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSpatialIndex.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpatialIndex.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    