
      // auto generated
      //var self;

      // class constructor:
      function RTriangle() {
        

        // should be RTriangle_BaseJs.call(this, engine):
        //RTriangle.prototype = new RTriangle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTriangle.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTriangle);
            //}
          }
          else {
            qWarning("RTriangle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RTriangle_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTriangle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTriangle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTriangle);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle(): wrong number / type of arguments");
      
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

      //RTriangle.prototype = new RTriangle_BaseJs(engine);
      //RTriangle.prototype = new RTriangle_Wrapper(engine);
      RTriangle.prototype = new Object();

      RTriangle.prototype.toString = function() {
          //return "RTriangle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTriangle [JS]";
        };
      RTriangle.getObjectType = function() {
        return RJSType_RTriangle.getIdStatic();
      };

      RTriangle.prototype.getObjectType = function() {
        return RJSType_RTriangle.getIdStatic();
      };

      RTriangle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTriangle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExplodable.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTriangle.Unknown = RTriangle_Wrapper.Unknown;
RTriangle.Point = RTriangle_Wrapper.Point;
RTriangle.Line = RTriangle_Wrapper.Line;
RTriangle.Arc = RTriangle_Wrapper.Arc;
RTriangle.Circle = RTriangle_Wrapper.Circle;
RTriangle.Ellipse = RTriangle_Wrapper.Ellipse;
RTriangle.Polyline = RTriangle_Wrapper.Polyline;
RTriangle.Spline = RTriangle_Wrapper.Spline;
RTriangle.Triangle = RTriangle_Wrapper.Triangle;
RTriangle.XLine = RTriangle_Wrapper.XLine;
RTriangle.Ray = RTriangle_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RTriangle.createArrow = function() 
          
        {
          //print("JS: RTriangle.createArrow");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.createArrow(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.createArrow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTriangle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTriangle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    