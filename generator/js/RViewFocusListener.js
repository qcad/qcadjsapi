
      // auto generated
      //var self;

      // class constructor:
      function RViewFocusListener() {
        

        // should be RViewFocusListener_BaseJs.call(this, engine):
        //RViewFocusListener.prototype = new RViewFocusListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewFocusListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RViewFocusListener);
            //}
          }
          else {
            qWarning("RViewFocusListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RViewFocusListener.js: No constructor found for class RViewFocusListener");
            
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

      //RViewFocusListener.prototype = new RViewFocusListener_BaseJs(engine);
      //RViewFocusListener.prototype = new RViewFocusListener_Wrapper(engine);
      RViewFocusListener.prototype = new Object();

      RViewFocusListener.prototype.toString = function() {
          //return "RViewFocusListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewFocusListener [JS]";
        };
      RViewFocusListener.getObjectType = function() {
        return RJSType_RViewFocusListener.getIdStatic();
      };

      RViewFocusListener.prototype.getObjectType = function() {
        return RJSType_RViewFocusListener.getIdStatic();
      };

      RViewFocusListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewFocusListener.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RViewFocusListener.prototype.updateFocus = function() 
          
        {
          //print("JS: RViewFocusListener.prototype.updateFocus");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFocus(
                // call highest level JS implementation:
                //return this.updateFocusBase(
                return this.updateFocusSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RViewFocusListener);
  }

  
  else {
    
        print("RViewFocusListener.updateFocus(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RViewFocusListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewFocusListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    