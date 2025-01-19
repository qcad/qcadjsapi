
      // auto generated
      //var self;

      // class constructor:
      function RLine() {
        

        // should be RLine_BaseJs.call(this, engine):
        //RLine.prototype = new RLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLine);
            //}
          }
          else {
            qWarning("RLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;

            this.RLine_Wrapper_constructor(arguments[0], arguments[1], arguments[2], arguments[3]);

            // wrapper = new RLine_Wrapper(
            //   // RJSApi:
            //   handler
            //   , arguments[0], arguments[1], arguments[2], arguments[3]
            //   ////this.setWrapper(this.wrapper);
            //   //Object.setPrototypeOf(this, wrapper);
            // );
            //wrapper.__WRAPPER__ = true;
            //Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        //copyProperties2(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine(): wrong number / type of arguments");
      
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

      //RLine.prototype = new RLine_BaseJs(engine);
      //RLine.prototype = new RLine_Wrapper(engine);
      //RLine.prototype = new Object();

      // ###
      RLine.prototype = new RLine_Wrapper(handler);

      RLine.prototype.toString = function() {
          //return "RLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLine [JS]";
        };
      RLine.getObjectType = function() {
        return RJSType_RLine.getIdStatic();
      };

      RLine.prototype.getObjectType = function() {
        return RJSType_RLine.getIdStatic();
      };

      RLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RLine.Unknown = RLine_Wrapper.Unknown;
RLine.Point = RLine_Wrapper.Point;
RLine.Line = RLine_Wrapper.Line;
RLine.Arc = RLine_Wrapper.Arc;
RLine.Circle = RLine_Wrapper.Circle;
RLine.Ellipse = RLine_Wrapper.Ellipse;
RLine.Polyline = RLine_Wrapper.Polyline;
RLine.Spline = RLine_Wrapper.Spline;
RLine.Triangle = RLine_Wrapper.Triangle;
RLine.XLine = RLine_Wrapper.XLine;
RLine.Ray = RLine_Wrapper.Ray;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    
