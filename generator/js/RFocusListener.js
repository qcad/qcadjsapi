
      // auto generated
      //var self;

      // class constructor:
      function RFocusListener() {
        

        // should be RFocusListener_BaseJs.call(this, engine):
        //RFocusListener.prototype = new RFocusListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFocusListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RFocusListener);
                
            //}
          }
          else {
            qWarning("RFocusListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RFocusListener.js: No constructor found for class RFocusListener");
            
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

      //RFocusListener.prototype = new RFocusListener_BaseJs(engine);
      //RFocusListener.prototype = new RFocusListener_Wrapper(engine);
      RFocusListener.prototype = new Object();

      RFocusListener.prototype.toString = function() {
          //return "RFocusListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFocusListener [JS]";
        };
      RFocusListener.getObjectType = function() {
        return RJSType_RFocusListener.getIdStatic();
      };

      RFocusListener.prototype.getObjectType = function() {
        return RJSType_RFocusListener.getIdStatic();
      };

      RFocusListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFocusListener.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RFocusListener.prototype.updateFocus = function() 
        
      {
        //print("JS: RFocusListener.prototype.updateFocus");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFocus(
                // call highest level JS implementation:
                //return this.updateFocusBase(
                
                    return this.updateFocusSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFocusListener);
  }

  
  else {
    
        print("RFocusListener.updateFocus(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFocusListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFocusListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      