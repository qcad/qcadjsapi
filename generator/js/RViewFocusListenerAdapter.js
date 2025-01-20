
      // auto generated
      //var self;

      // class constructor:
      function RViewFocusListenerAdapter() {
        

        // should be RViewFocusListenerAdapter_BaseJs.call(this, engine):
        //RViewFocusListenerAdapter.prototype = new RViewFocusListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewFocusListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RViewFocusListenerAdapter);
                
            //}
          }
          else {
            qWarning("RViewFocusListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RViewFocusListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RViewFocusListenerAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RViewFocusListenerAdapter);
  }

  
  else {
    
        print("RViewFocusListenerAdapter(): wrong number / type of arguments");
      
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

      //RViewFocusListenerAdapter.prototype = new RViewFocusListenerAdapter_BaseJs(engine);
      //RViewFocusListenerAdapter.prototype = new RViewFocusListenerAdapter_Wrapper(engine);
      RViewFocusListenerAdapter.prototype = new Object();

      RViewFocusListenerAdapter.prototype.toString = function() {
          //return "RViewFocusListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewFocusListenerAdapter [JS]";
        };
      RViewFocusListenerAdapter.getObjectType = function() {
        return RJSType_RViewFocusListenerAdapter.getIdStatic();
      };

      RViewFocusListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RViewFocusListenerAdapter.getIdStatic();
      };

      RViewFocusListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewFocusListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RViewFocusListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RViewFocusListenerAdapter.prototype.updateFocus = function() 
        
      {
        //print("JS: RViewFocusListenerAdapter.prototype.updateFocus");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFocus(
                // call highest level JS implementation:
                //return this.updateFocusBase(
                
                    return this.updateFocusSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RViewFocusListenerAdapter);
  }

  
  else {
    
        print("RViewFocusListenerAdapter.updateFocus(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RViewFocusListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewFocusListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      