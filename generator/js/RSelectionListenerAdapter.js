
      // auto generated
      //var self;

      // class constructor:
      function RSelectionListenerAdapter() {
        

        // should be RSelectionListenerAdapter_BaseJs.call(this, engine):
        //RSelectionListenerAdapter.prototype = new RSelectionListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSelectionListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSelectionListenerAdapter);
            //}
          }
          else {
            qWarning("RSelectionListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RSelectionListenerAdapter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSelectionListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSelectionListenerAdapter);
  }

  
  else {
    
        print("RSelectionListenerAdapter(): wrong number / type of arguments");
      
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
            
    this["selectionChanged(RDocumentInterface*)"] = Object.getPrototypeOf(this).selectionChanged;
  
          }
        }
      }

      //RSelectionListenerAdapter.prototype = new RSelectionListenerAdapter_BaseJs(engine);
      //RSelectionListenerAdapter.prototype = new RSelectionListenerAdapter_Wrapper(engine);
      RSelectionListenerAdapter.prototype = new Object();

      RSelectionListenerAdapter.prototype.toString = function() {
          //return "RSelectionListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSelectionListenerAdapter [JS]";
        };
      RSelectionListenerAdapter.getObjectType = function() {
        return RJSType_RSelectionListenerAdapter.getIdStatic();
      };

      RSelectionListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RSelectionListenerAdapter.getIdStatic();
      };

      RSelectionListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSelectionListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSelectionListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RSelectionListenerAdapter.tr = function() 
          
        {
          //print("JS: RSelectionListenerAdapter.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RSelectionListenerAdapter_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSelectionListenerAdapter);
  }

  
  else {
    
        print("RSelectionListenerAdapter.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSelectionListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSelectionListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    