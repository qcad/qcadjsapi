
      // auto generated
      //var self;

      // class constructor:
      function RPreferencesListenerAdapter() {
        

        // should be RPreferencesListenerAdapter_BaseJs.call(this, engine):
        //RPreferencesListenerAdapter.prototype = new RPreferencesListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPreferencesListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPreferencesListenerAdapter);
            //}
          }
          else {
            qWarning("RPreferencesListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPreferencesListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPreferencesListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPreferencesListenerAdapter);
  }

  
  else {
    
        print("RPreferencesListenerAdapter(): wrong number / type of arguments");
      
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
            
    this["preferencesUpdated(RDocumentInterface*)"] = Object.getPrototypeOf(this).preferencesUpdated;
  
          }
        }
      }

      //RPreferencesListenerAdapter.prototype = new RPreferencesListenerAdapter_BaseJs(engine);
      //RPreferencesListenerAdapter.prototype = new RPreferencesListenerAdapter_Wrapper(engine);
      RPreferencesListenerAdapter.prototype = new Object();

      RPreferencesListenerAdapter.prototype.toString = function() {
          //return "RPreferencesListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPreferencesListenerAdapter [JS]";
        };
      RPreferencesListenerAdapter.getObjectType = function() {
        return RJSType_RPreferencesListenerAdapter.getIdStatic();
      };

      RPreferencesListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RPreferencesListenerAdapter.getIdStatic();
      };

      RPreferencesListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPreferencesListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPreferencesListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RPreferencesListenerAdapter.tr = function() 
          
        {
          //print("JS: RPreferencesListenerAdapter.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RPreferencesListenerAdapter_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPreferencesListenerAdapter);
  }

  
  else {
    
        print("RPreferencesListenerAdapter.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPreferencesListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPreferencesListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    