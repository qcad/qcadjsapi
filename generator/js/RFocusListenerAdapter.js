
      // auto generated
      //var self;

      // class constructor:
      function RFocusListenerAdapter() {
        

        // should be RFocusListenerAdapter_BaseJs.call(this, engine):
        //RFocusListenerAdapter.prototype = new RFocusListenerAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFocusListenerAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFocusListenerAdapter);
            //}
          }
          else {
            qWarning("RFocusListenerAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFocusListenerAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFocusListenerAdapter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFocusListenerAdapter);
  }

  
  else {
    
        print("RFocusListenerAdapter(): wrong number / type of arguments");
      
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
            
    this["focusUpdated(RDocumentInterface*)"] = Object.getPrototypeOf(this).focusUpdated;
  
          }
        }
      }

      //RFocusListenerAdapter.prototype = new RFocusListenerAdapter_BaseJs(engine);
      //RFocusListenerAdapter.prototype = new RFocusListenerAdapter_Wrapper(engine);
      RFocusListenerAdapter.prototype = new Object();

      RFocusListenerAdapter.prototype.toString = function() {
          //return "RFocusListenerAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFocusListenerAdapter [JS]";
        };
      RFocusListenerAdapter.getObjectType = function() {
        return RJSType_RFocusListenerAdapter.getIdStatic();
      };

      RFocusListenerAdapter.prototype.getObjectType = function() {
        return RJSType_RFocusListenerAdapter.getIdStatic();
      };

      RFocusListenerAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFocusListenerAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RFocusListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RFocusListenerAdapter.prototype.updateFocus = function() 
          
        {
          //print("JS: RFocusListenerAdapter.prototype.updateFocus");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.updateFocus(
                // call highest level JS implementation:
                //return this.updateFocusBase(
                return this.updateFocusSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFocusListenerAdapter);
  }

  
  else {
    
        print("RFocusListenerAdapter.updateFocus(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFocusListenerAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFocusListenerAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    