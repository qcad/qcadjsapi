
      // auto generated
      //var self;

      // class constructor:
      function RBlockListenerAdapter() {
        

        // should be RBlockListenerAdapter_BaseJs.call(this, engine):
        //RBlockListenerAdapter.prototype = new RBlockListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RBlockListenerAdapter);
            //}
          }
          else {
            qWarning("RBlockListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RBlockListenerAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlockListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockListenerAdapter);
  }

  
  else {
    
        print("RBlockListenerAdapter(): wrong number / type of arguments");
      
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
            
    this["blocksUpdated(RDocumentInterface*)"] = Object.getPrototypeOf(this).blocksUpdated;
  
    this["currentBlockSet(RDocumentInterface*)"] = Object.getPrototypeOf(this).currentBlockSet;
  
          }
        }
      }

      //RBlockListenerAdapter.prototype = new RBlockListenerAdapter_BaseJs(engine);
      //RBlockListenerAdapter.prototype = new RBlockListenerAdapter_Wrapper(engine);
      RBlockListenerAdapter.prototype = new Object();

      RBlockListenerAdapter.prototype.toString = function() {
          //return "RBlockListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockListenerAdapter [JS]";
        };
      RBlockListenerAdapter.getObjectType = function() {
        return RJSType_RBlockListenerAdapter.getIdStatic();
      };

      RBlockListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RBlockListenerAdapter.getIdStatic();
      };

      RBlockListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RBlockListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RBlockListenerAdapter.tr = function() 
          
        {
          //print("JS: RBlockListenerAdapter.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RBlockListenerAdapter_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RBlockListenerAdapter);
  }

  
  else {
    
        print("RBlockListenerAdapter.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RBlockListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    