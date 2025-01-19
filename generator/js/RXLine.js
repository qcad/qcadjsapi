
      // auto generated
      //var self;

      // class constructor:
      function RXLine() {
        

        // should be RXLine_BaseJs.call(this, engine):
        //RXLine.prototype = new RXLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RXLine);
            //}
          }
          else {
            qWarning("RXLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine(): wrong number / type of arguments");
      
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

      //RXLine.prototype = new RXLine_BaseJs(engine);
      //RXLine.prototype = new RXLine_Wrapper(engine);
      RXLine.prototype = new Object();

      RXLine.prototype.toString = function() {
          //return "RXLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLine [JS]";
        };
      RXLine.getObjectType = function() {
        return RJSType_RXLine.getIdStatic();
      };

      RXLine.prototype.getObjectType = function() {
        return RJSType_RXLine.getIdStatic();
      };

      RXLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RXLine.Unknown = RXLine_Wrapper.Unknown;
RXLine.Point = RXLine_Wrapper.Point;
RXLine.Line = RXLine_Wrapper.Line;
RXLine.Arc = RXLine_Wrapper.Arc;
RXLine.Circle = RXLine_Wrapper.Circle;
RXLine.Ellipse = RXLine_Wrapper.Ellipse;
RXLine.Polyline = RXLine_Wrapper.Polyline;
RXLine.Spline = RXLine_Wrapper.Spline;
RXLine.Triangle = RXLine_Wrapper.Triangle;
RXLine.XLine = RXLine_Wrapper.XLine;
RXLine.Ray = RXLine_Wrapper.Ray;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RXLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    