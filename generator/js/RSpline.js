
      // auto generated
      //var self;

      // class constructor:
      function RSpline() {
        

        // should be RSpline_BaseJs.call(this, engine):
        //RSpline.prototype = new RSpline_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpline.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSpline);
            //}
          }
          else {
            qWarning("RSpline.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSpline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSpline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSpline);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline(): wrong number / type of arguments");
      
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

      //RSpline.prototype = new RSpline_BaseJs(engine);
      //RSpline.prototype = new RSpline_Wrapper(engine);
      RSpline.prototype = new Object();

      RSpline.prototype.toString = function() {
          //return "RSpline [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpline [JS]";
        };
      RSpline.getObjectType = function() {
        return RJSType_RSpline.getIdStatic();
      };

      RSpline.prototype.getObjectType = function() {
        return RJSType_RSpline.getIdStatic();
      };

      RSpline.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpline.getIdStatic()) {
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
RSpline.Unknown = RSpline_Wrapper.Unknown;
RSpline.Point = RSpline_Wrapper.Point;
RSpline.Line = RSpline_Wrapper.Line;
RSpline.Arc = RSpline_Wrapper.Arc;
RSpline.Circle = RSpline_Wrapper.Circle;
RSpline.Ellipse = RSpline_Wrapper.Ellipse;
RSpline.Polyline = RSpline_Wrapper.Polyline;
RSpline.Spline = RSpline_Wrapper.Spline;
RSpline.Triangle = RSpline_Wrapper.Triangle;
RSpline.XLine = RSpline_Wrapper.XLine;
RSpline.Ray = RSpline_Wrapper.Ray;


      // functions:
      

      // static functions:
      

        // static function 
        RSpline.createSplinesFromArc = function() 
          
        {
          //print("JS: RSpline.createSplinesFromArc");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.createSplinesFromArc(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.createSplinesFromArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.createBezierFromSmallArc = function() 
          
        {
          //print("JS: RSpline.createBezierFromSmallArc");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.createBezierFromSmallArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.createBezierFromSmallArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.hasProxy = function() 
          
        {
          //print("JS: RSpline.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSpline.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpline.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    