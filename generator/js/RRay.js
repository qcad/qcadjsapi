
      // auto generated
      //var self;

      // class constructor:
      function RRay() {
        

        // should be RRay_BaseJs.call(this, engine):
        //RRay.prototype = new RRay_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRay.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRay);
            //}
          }
          else {
            qWarning("RRay.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRay);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay(): wrong number / type of arguments");
      
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

      //RRay.prototype = new RRay_BaseJs(engine);
      //RRay.prototype = new RRay_Wrapper(engine);
      RRay.prototype = new Object();

      RRay.prototype.toString = function() {
          //return "RRay [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRay [JS]";
        };
      RRay.getObjectType = function() {
        return RJSType_RRay.getIdStatic();
      };

      RRay.prototype.getObjectType = function() {
        return RJSType_RRay.getIdStatic();
      };

      RRay.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRay.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RXLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RRay.Unknown = RRay_Wrapper.Unknown;
RRay.Point = RRay_Wrapper.Point;
RRay.Line = RRay_Wrapper.Line;
RRay.Arc = RRay_Wrapper.Arc;
RRay.Circle = RRay_Wrapper.Circle;
RRay.Ellipse = RRay_Wrapper.Ellipse;
RRay.Polyline = RRay_Wrapper.Polyline;
RRay.Spline = RRay_Wrapper.Spline;
RRay.Triangle = RRay_Wrapper.Triangle;
RRay.XLine = RRay_Wrapper.XLine;
RRay.Ray = RRay_Wrapper.Ray;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRay.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRay.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    