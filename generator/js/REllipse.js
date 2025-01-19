
      // auto generated
      //var self;

      // class constructor:
      function REllipse() {
        

        // should be REllipse_BaseJs.call(this, engine):
        //REllipse.prototype = new REllipse_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipse.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REllipse);
            //}
          }
          else {
            qWarning("REllipse.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new REllipse_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipse);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new REllipse_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REllipse);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse(): wrong number / type of arguments");
      
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

      //REllipse.prototype = new REllipse_BaseJs(engine);
      //REllipse.prototype = new REllipse_Wrapper(engine);
      REllipse.prototype = new Object();

      REllipse.prototype.toString = function() {
          //return "REllipse [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipse [JS]";
        };
      REllipse.getObjectType = function() {
        return RJSType_REllipse.getIdStatic();
      };

      REllipse.prototype.getObjectType = function() {
        return RJSType_REllipse.getIdStatic();
      };

      REllipse.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipse.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
REllipse.Unknown = REllipse_Wrapper.Unknown;
REllipse.Point = REllipse_Wrapper.Point;
REllipse.Line = REllipse_Wrapper.Line;
REllipse.Arc = REllipse_Wrapper.Arc;
REllipse.Circle = REllipse_Wrapper.Circle;
REllipse.Ellipse = REllipse_Wrapper.Ellipse;
REllipse.Polyline = REllipse_Wrapper.Polyline;
REllipse.Spline = REllipse_Wrapper.Spline;
REllipse.Triangle = REllipse_Wrapper.Triangle;
REllipse.XLine = REllipse_Wrapper.XLine;
REllipse.Ray = REllipse_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        REllipse.createInscribed = function() 
          
        {
          //print("JS: REllipse.createInscribed");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.createInscribed(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.createInscribed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.createFrom4Points = function() 
          
        {
          //print("JS: REllipse.createFrom4Points");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.createFrom4Points(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.createFrom4Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.hasProxy = function() 
          
        {
          //print("JS: REllipse.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REllipse.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipse.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    