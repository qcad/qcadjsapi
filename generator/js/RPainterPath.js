
      // auto generated
      //var self;

      // class constructor:
      function RPainterPath() {
        

        // should be RPainterPath_BaseJs.call(this, engine):
        //RPainterPath.prototype = new RPainterPath_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPainterPath.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPainterPath);
                
            //}
          }
          else {
            qWarning("RPainterPath.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPainterPath_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPainterPath);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPainterPath_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPainterPath);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPainterPath_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RPainterPath);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath(): wrong number / type of arguments");
      
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

      //RPainterPath.prototype = new RPainterPath_BaseJs(engine);
      //RPainterPath.prototype = new RPainterPath_Wrapper(engine);
      RPainterPath.prototype = new Object();

      RPainterPath.prototype.toString = function() {
          //return "RPainterPath [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPainterPath [JS]";
        };
      RPainterPath.getObjectType = function() {
        return RJSType_RPainterPath.getIdStatic();
      };

      RPainterPath.prototype.getObjectType = function() {
        return RJSType_RPainterPath.getIdStatic();
      };

      RPainterPath.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPainterPath.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPainterPath.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ElementType
RPainterPath.MoveToElement = RPainterPath_Wrapper.MoveToElement;
RPainterPath.LineToElement = RPainterPath_Wrapper.LineToElement;
RPainterPath.CurveToElement = RPainterPath_Wrapper.CurveToElement;
RPainterPath.CurveToDataElement = RPainterPath_Wrapper.CurveToDataElement;


      // functions:
      

      // static functions:
      

        // static function 
        RPainterPath.rotateList = function() 
          
        {
          //print("JS: RPainterPath.rotateList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.rotateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.rotateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.translateList = function() 
          
        {
          //print("JS: RPainterPath.translateList");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.translateList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.translateList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.scaleList = function() 
          
        {
          //print("JS: RPainterPath.scaleList");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.scaleList(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.scaleList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.getMinList = function() 
          
        {
          //print("JS: RPainterPath.getMinList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.getMinList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.getMinList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPainterPath.getMaxList = function() 
          
        {
          //print("JS: RPainterPath.getMaxList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPainterPath_WrapperSingletonInstance.getMaxList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPainterPath);
  }

  
  else {
    
        print("RPainterPath.getMaxList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPainterPath.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPainterPath.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      