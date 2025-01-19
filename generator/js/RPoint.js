
      // auto generated
      //var self;

      // class constructor:
      function RPoint() {
        

        // should be RPoint_BaseJs.call(this, engine):
        //RPoint.prototype = new RPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPoint.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPoint);
            //}
          }
          else {
            qWarning("RPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint(): wrong number / type of arguments");
      
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

      //RPoint.prototype = new RPoint_BaseJs(engine);
      //RPoint.prototype = new RPoint_Wrapper(engine);
      RPoint.prototype = new Object();

      RPoint.prototype.toString = function() {
          //return "RPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPoint [JS]";
        };
      RPoint.getObjectType = function() {
        return RJSType_RPoint.getIdStatic();
      };

      RPoint.prototype.getObjectType = function() {
        return RJSType_RPoint.getIdStatic();
      };

      RPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPoint.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RPoint.Unknown = RPoint_Wrapper.Unknown;
RPoint.Point = RPoint_Wrapper.Point;
RPoint.Line = RPoint_Wrapper.Line;
RPoint.Arc = RPoint_Wrapper.Arc;
RPoint.Circle = RPoint_Wrapper.Circle;
RPoint.Ellipse = RPoint_Wrapper.Ellipse;
RPoint.Polyline = RPoint_Wrapper.Polyline;
RPoint.Spline = RPoint_Wrapper.Spline;
RPoint.Triangle = RPoint_Wrapper.Triangle;
RPoint.XLine = RPoint_Wrapper.XLine;
RPoint.Ray = RPoint_Wrapper.Ray;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    