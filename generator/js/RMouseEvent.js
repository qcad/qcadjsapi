
      // auto generated
      //var self;

      // class constructor:
      function RMouseEvent() {
        

        // should be RMouseEvent_BaseJs.call(this, engine):
        //RMouseEvent.prototype = new RMouseEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMouseEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMouseEvent);
            //}
          }
          else {
            qWarning("RMouseEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new RMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMouseEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else 
  
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RMouseEvent_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMouseEvent);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //RMouseEvent.prototype = new RMouseEvent_BaseJs(engine);
      //RMouseEvent.prototype = new RMouseEvent_Wrapper(engine);
      RMouseEvent.prototype = new Object();

      RMouseEvent.prototype.toString = function() {
          //return "RMouseEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMouseEvent [JS]";
        };
      RMouseEvent.getObjectType = function() {
        return RJSType_RMouseEvent.getIdStatic();
      };

      RMouseEvent.prototype.getObjectType = function() {
        return RJSType_RMouseEvent.getIdStatic();
      };

      RMouseEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMouseEvent.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QInputEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPointerEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QSinglePointEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMouseEvent.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RInputEvent.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RMouseEvent.hasMouseMoved = function() 
          
        {
          //print("JS: RMouseEvent.hasMouseMoved");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMouseEvent_WrapperSingletonInstance.hasMouseMoved(
                  
                );
              

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent.hasMouseMoved(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMouseEvent.resetOriginalMousePos = function() 
          
        {
          //print("JS: RMouseEvent.resetOriginalMousePos");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMouseEvent_WrapperSingletonInstance.resetOriginalMousePos(
                  
                );
              

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent.resetOriginalMousePos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMouseEvent.setOriginalMousePos = function() 
          
        {
          //print("JS: RMouseEvent.setOriginalMousePos");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMouseEvent_WrapperSingletonInstance.setOriginalMousePos(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMouseEvent);
  }

  
  else {
    
        print("RMouseEvent.setOriginalMousePos(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMouseEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMouseEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    